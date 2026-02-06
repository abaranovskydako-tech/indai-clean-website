# INDAI_LEAD_SYSTEM_INTEGRATION_CANON.md

**Проект:** INDAI Clean  
**Тип документа:** Технический канон интеграции лид-системы  
**Уровень:** Технический (подчинённый)  
**Статус:** CANONICAL / TECH  
**Применимость:** Frontend · Backend · CRM · AI · n8n · QA  
**Дата фиксации:** 2026-02-06  
**Версия:** 2.1  

---

## 0. Роль документа в системе

Данный документ фиксирует **техническую реализацию** канонической системы лидогенерации INDAI.

Он описывает:
- поток данных от первого контакта до контракта,
- data model (обязательные поля на каждом этапе),
- CRM-статусы, маппированные на Value Ladder,
- технические триггеры и автоматизации,
- ограничения AI-ассистента на техническом уровне.

Документ **НЕ определяет** логику пресейла, оси ценности или принцип ценообразования.  
Он **реализует** логику, определённую в вышестоящих канонах.

---

## 1. Иерархия документов (обязательная)

```
INDAI_MASTER_SPEC.md                          ← источник истины
  ↓
INDAI_PRE_SALE_ENGINEERING_CANON.md            ← логика пресейла, Value Ladder, оси, тест
  ↓
INDAI_LEAD_SYSTEM_INTEGRATION_CANON.md         ← данный документ
  ↓
CRM-конфигурация / n8n-сценарии / API-код     ← реализация
```

**Правило приоритета:**

- Данный документ **подчинён** Pre-Sale Engineering Canon. При конфликте — Pre-Sale Canon побеждает.
- Данный документ **подчинён** Master Spec. При конфликте — Master Spec побеждает.
- Реализация (код, CRM, n8n) **подчинена** данному документу. При конфликте — данный документ побеждает.
- При обнаружении конфликта — остановить работу, зафиксировать, запросить addendum.

**Параллельные документы (связанные):**

| Документ | Связь |
|---|---|
| `INDAI_HOME_PAGE_IMPLEMENTATION_RULES_CANON.md` | Определяет CTA и AI-виджет → точки входа в поток данных |
| `INDAI_SERVICES_PAGES_CANON_v2.md` | Блок 8 «Следующий шаг» → точка входа в поток данных |
| `INDAI_AI_WIDGET_PLACEMENT_CANON.md` | Размещение и поведение виджета → UI-слой входа |

---

## 2. Канонический поток данных

### 2.1 Общая схема

```
┌─────────────────────────────────────────────────────────────┐
│                        САЙТ INDAI                           │
│                                                             │
│  ┌──────────┐   ┌──────────────┐   ┌───────────────────┐   │
│  │   CTA    │   │ AI-ассистент │   │ Форма описания    │   │
│  │  кнопка  │   │   виджет     │   │ объекта           │   │
│  └────┬─────┘   └──────┬───────┘   └────────┬──────────┘   │
│       │                │                     │              │
│       └────────────────┴─────────────────────┘              │
│                        │                                    │
└────────────────────────┼────────────────────────────────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │    API: /api/leads   │
              │  (валидация + запись)│
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │   PostgreSQL (Prisma)│
              │   Таблица: Object   │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │   n8n webhook       │
              │  (автоматизации)    │
              └──────────┬──────────┘
                         │
                    ┌────┴────┐
                    ▼         ▼
          ┌──────────┐  ┌──────────┐
          │Уведомление│  │   CRM    │
          │ инженеру  │  │(внешняя) │
          └──────────┘  └──────────┘
```

### 2.2 Точки входа

| Точка входа | Источник | Данные |
|---|---|---|
| CTA «Описать объект» | HomePage / Service Page | Перенаправление к AI-ассистенту или форме |
| AI-ассистент | HomePage / Service Page | Структурированный диалог → API |
| Форма описания объекта | Отдельная страница (если реализована) | Поля формы → API |
| Прямой контакт (телефон/email) | Вне сайта | Ручной ввод инженером в систему |

### 2.3 Принципиальное ограничение

> **Точка входа создаёт запись об ОБЪЕКТЕ, а не о КОНТАКТЕ.**

Контактные данные — вторичны и опциональны на этапе 1.  
Первичны: тип объекта, описание задачи, контекст.

---

## 3. Data Model

### 3.1 Основная сущность: Object (не Lead)

> ⚠️ **Архитектурное решение:** центральная сущность системы — `Object` (объект клиента), а не `Lead` (контакт). Это прямое следствие Pre-Sale Canon §2.1: «Лид INDAI — это объект, прошедший валидацию».

```prisma
model Object {
  id              String         @id @default(cuid())
  
  // --- Объект (первичные данные) ---
  objectType      String         // тип объекта: теплообменник, котёл, трубопровод...
  objectLocation  String?        // расположение / площадка
  taskDescription String         // описание задачи клиента
  contaminationType String?      // тип загрязнения: deposits, fouling, corrosion_products, coating, biological, mixed
  material        String?        // материал оборудования (если известен)
  constraints     String?        // эксплуатационные ограничения
  
  // --- Контакт (вторичные данные) ---
  contactName     String?
  contactPhone    String?
  contactEmail    String?
  contactRole     String?        // должность / роль в принятии решений
  companyName     String?
  
  // --- Системные ---
  source          String         // ai_assistant, form, phone, email, referral
  stage           String         @default("consultation")  // Value Ladder stage
  status          String         @default("new")           // статус внутри этапа
  assignedTo      String?        // ID инженера
  
  // --- Инженерные данные (заполняются на этапах 2–3) ---
  inspectionReport  String?      // отчёт осмотра (этап 2)
  testProtocol      String?      // протокол теста (этап 3) — JSON или ссылка
  testVerdict       String?      // PASS / CONDITIONAL / FAIL
  valueAxis         String?      // speed / quality / safety / tech_uniqueness
  recommendedScope  String?      // рекомендуемый объём работ
  
  // --- Коммерческие данные (заполняются на этапах 4–5) ---
  proposalId        String?      // ссылка на КП
  contractId        String?      // ссылка на контракт
  
  // --- Отказ ---
  rejectionReason   String?      // причина отказа (если FAIL)
  rejectionReport   String?      // документ отказа
  
  // --- Медиа ---
  attachments       Attachment[]
  
  // --- Время ---
  createdAt         DateTime     @default(now())
  updatedAt         DateTime     @updatedAt
  stageChangedAt    DateTime?    // обновляется ТОЛЬКО при PATCH /api/objects/:id/stage
}

model Attachment {
  id          String   @id @default(cuid())
  objectId    String
  object      Object   @relation(fields: [objectId], references: [id])
  type        String   // photo, video, document, protocol
  url         String
  stage       String   // на каком этапе загружено
  uploadedBy  String   // ai_assistant, engineer, client
  createdAt   DateTime @default(now())
}
```

### 3.2 Обязательные поля по этапам Value Ladder

| Этап | Обязательные поля | Заполняет |
|---|---|---|
| **1 — Консультация** | `objectType`, `taskDescription`, `source` | AI / клиент / инженер |
| **2 — Осмотр** | + `objectLocation`, `inspectionReport`, `assignedTo` | Инженер |
| **3 — Тест** | + `testProtocol`, `testVerdict`, `valueAxis`, `recommendedScope` | Инженер |
| **4 — КП** | + `proposalId`, `contactName`, `contactEmail` или `contactPhone` | Коммерция |
| **5 — Контракт** | + `contractId`, `companyName` | Коммерция |
| **6 — Сопровождение** | Определяется отдельным документом | — |

> **Контактные данные (`contactName`, `contactPhone`, `contactEmail`) обязательны только с этапа 4.** До этого — опциональны. Это исключает агрессивный сбор контактов на ранних этапах.

---

## 4. CRM-статусы: маппинг на Value Ladder

### 4.0 Определения: stage vs status

> **`stage`** — позиция объекта в Value Ladder (этап пресейла: consultation → inspection → test → proposal → contract → service).  
> Один объект находится ровно в одном `stage` в каждый момент времени.

> **`status`** — состояние объекта **внутри** текущего этапа (new, in_review, scheduled, pass, sent и т.д.).  
> `status` меняется чаще и отражает прогресс внутри этапа.

Пример: объект на этапе `test` (stage) может быть в статусе `scheduled` (ожидает тест) или `pass` (тест пройден).

### 4.1 Каноническая карта статусов

| Value Ladder этап | `stage` | Допустимые `status` | Значение |
|---|---|---|---|
| **1 — Консультация** | `consultation` | `new` | Объект только поступил |
| | | `in_review` | Инженер изучает описание |
| | | `applicable` | Задача в зоне INDAI → можно переходить к этапу 2 |
| | | `not_applicable` | Задача вне зоны INDAI → конец |
| **2 — Осмотр** | `inspection` | `scheduled` | Выезд запланирован |
| | | `completed` | Отчёт осмотра готов |
| **3 — Тест** | `test` | `scheduled` | Тест запланирован |
| | | `pass` | Вердикт: PASS |
| | | `conditional` | Вердикт: CONDITIONAL |
| | | `fail` | Вердикт: FAIL → отказ |
| **4 — КП** | `proposal` | `draft` | КП формируется |
| | | `sent` | КП отправлено клиенту |
| | | `negotiation` | Клиент обсуждает условия |
| | | `accepted` | Клиент принял КП |
| | | `rejected` | Клиент отклонил КП |
| **5 — Контракт** | `contract` | `signing` | Договор на подписании |
| | | `active` | Договор подписан, работы начались |
| | | `completed` | Работы выполнены |
| **6 — Сопровождение** | `service` | `active` | Регламентное обслуживание |
| | | `paused` | Приостановлено |
| **Отказ** | `rejected` | `indai_reject` | INDAI отказалась (FAIL теста) |
| | | `client_reject` | Клиент отказался |
| | | `not_applicable` | Задача вне зоны INDAI |

### 4.2 Правила переходов

```
consultation → inspection       : только если status = applicable
inspection   → test             : только если status = completed
test         → proposal         : только если status = pass ∨ conditional
test         → rejected         : если status = fail
proposal     → contract         : только если status = accepted
contract     → service          : только если status = completed
```

**Обратные переходы:**
- `proposal.rejected` → `consultation` (клиент вернулся с новой задачей)
- `test.fail` → `rejected.indai_reject` (безвозвратно для данного объекта)

**Запрещённые переходы:**
- `consultation` → `proposal` (минуя осмотр и тест)
- `consultation` → `contract` (минуя всё)
- `inspection` → `proposal` (минуя тест)
- Любой переход, нарушающий последовательность Value Ladder (Pre-Sale Canon §3.2)

---

## 5. Технические триггеры и автоматизации

### 5.1 Автоматические триггеры (n8n / webhooks)

| Триггер | Условие | Действие |
|---|---|---|
| **T1** Новый объект | `Object.created` | → Уведомление инженеру (Telegram/email) |
| **T2** Требует review | `stage=consultation`, `status=new`, age > 2 часа | → Напоминание инженеру |
| **T3** Объект применим | `status` → `applicable` | → Предложение назначить осмотр |
| **T4** Тест завершён | `testVerdict` заполнен | → Уведомление коммерции (если PASS/CONDITIONAL) |
| **T5** Тест FAIL | `testVerdict=FAIL` | → Генерация шаблона отказа → уведомление инженеру для заполнения |
| **T6** КП отправлено | `status` → `sent` | → Старт таймера follow-up (7 дней) |
| **T7** Follow-up | `stage=proposal`, `status=sent`, age > 7 дней | → Напоминание коммерции |
| **T8** Контракт подписан | `stage` → `contract`, `status=active` | → Уведомление команде |

### 5.2 Ручные действия (не автоматизируются)

| Действие | Кто выполняет | Почему не автоматизировано |
|---|---|---|
| Определение применимости (`applicable` / `not_applicable`) | Инженер | Требует инженерной экспертизы |
| Заполнение протокола теста | Инженер | Требует присутствия на объекте |
| Определение оси ценности | Инженер | Инженерное суждение |
| Вердикт теста (PASS/CONDITIONAL/FAIL) | Инженер | Инженерная ответственность |
| Формирование цены в КП | Коммерция + инженер | Нетривиальный расчёт |
| Решение об отказе | Инженер | Pre-Sale Canon §7 |

### 5.3 Запрет на автоматизацию

Следующие действия **запрещено** автоматизировать:

- Автоматическое определение применимости (AI не заменяет инженера)
- Автоматическая генерация КП
- Автоматическая генерация цены
- Автоматический перевод между этапами 2→3→4 без участия инженера
- Автоматическая отправка КП без ручного review

---

## 6. AI-ассистент: технические ограничения

### 6.1 Что AI может делать (технически)

| Действие | Реализация |
|---|---|
| Собирать данные об объекте через диалог | Структурированный чат → JSON → API |
| Создавать запись `Object` со stage=`consultation` | POST `/api/leads` с обязательными полями этапа 1 |
| Определять, похожа ли задача на зону INDAI | Классификация на основе ключевых слов / контекста |
| Направлять к Service Page | Ссылка в ответе |
| Объяснять логику пресейла | Текстовый ответ по скрипту |

### 6.2 Что AI НЕ может делать (жёсткие ограничения)

| Запрет | Техническая реализация запрета |
|---|---|
| Называть цену | Фильтр на выходе: если ответ содержит `₽`, `руб`, числовые паттерны цен → блок |
| Менять `stage` на значение выше `consultation` | API-валидация: AI-токен не имеет права писать stage ≠ consultation |
| Менять `testVerdict`, `valueAxis` | API-валидация: поля доступны только роли `engineer` |
| Запрашивать контактные данные до передачи инженеру | Скрипт: контактные данные предлагаются, но не требуются |
| Обещать результат | Контентный фильтр: «гарантируем», «обещаем», «100%» → блок |

### 6.3 API-роли

| Роль | Доступные `stage` для записи | Доступные поля |
|---|---|---|
| `ai_assistant` | `consultation` | `objectType`, `taskDescription`, `contaminationType`, `material`, `constraints`, `contactName`, `contactPhone`, `contactEmail`, `source`, `attachments` |
| `engineer` | `consultation`, `inspection`, `test`, `rejected` | Все поля объекта + `testProtocol`, `testVerdict`, `valueAxis`, `inspectionReport`, `rejectionReason` |
| `commerce` | `proposal`, `contract`, `service` | `proposalId`, `contractId`, `contactRole`, `companyName` + статусы этапов 4–6 |
| `admin` | Все | Все |

---

## 7. API-эндпоинты

### 7.1 Канонические маршруты

| Метод | Маршрут | Назначение | Доступ |
|---|---|---|---|
| POST | `/api/objects` | Создать объект (этап 1) | `ai_assistant`, `engineer` |
| GET | `/api/objects/:id` | Получить объект | `engineer`, `commerce`, `admin` |
| PATCH | `/api/objects/:id` | Обновить данные объекта | По ролям (§6.3) |
| PATCH | `/api/objects/:id/stage` | Перевести на следующий этап | `engineer`, `commerce` (с валидацией §4.2) |
| POST | `/api/objects/:id/attachments` | Загрузить файл | `ai_assistant`, `engineer`, `client` |
| GET | `/api/objects?stage=...&status=...` | Список объектов с фильтрами | `engineer`, `commerce`, `admin` |

### 7.2 Валидация при переходе этапа

Эндпоинт `PATCH /api/objects/:id/stage` **обязан** проверять:

```typescript
// Пример серверной валидации
function validateStageTransition(object: Object, newStage: string): boolean {
  const requiredFields: Record<string, string[]> = {
    inspection: ['objectType', 'taskDescription'],
    test:       ['objectLocation', 'inspectionReport', 'assignedTo'],
    proposal:   ['testProtocol', 'testVerdict', 'valueAxis', 'recommendedScope'],
    contract:   ['proposalId', 'contactName'],
    service:    ['contractId'],
  };

  // Проверка: все обязательные поля предыдущего этапа заполнены
  const fields = requiredFields[newStage];
  if (!fields) return false;
  return fields.every(f => object[f] != null && object[f] !== '');
}

// Проверка: testVerdict для перехода в proposal
if (newStage === 'proposal') {
  if (!['pass', 'conditional'].includes(object.testVerdict)) {
    throw new Error('Cannot create proposal without positive test verdict');
  }
}
```

---

## 8. Безопасность и доступ

### 8.1 Матрица доступа

| Данные | AI | Инженер | Коммерция | Админ |
|---|---|---|---|---|
| Описание объекта/задачи | R/W | R/W | R | R/W |
| Контактные данные | W (опционально) | R/W | R/W | R/W |
| Протокол теста | — | R/W | R | R/W |
| КП | — | R | R/W | R/W |
| Контракт | — | R | R/W | R/W |
| Отказ | — | R/W | R | R/W |
| Все записи (список) | — | Свои | Свои | Все |

### 8.2 Принципы

- AI-ассистент **не имеет доступа** к протоколам теста, КП, контрактам
- Инженер видит только **назначенные ему** объекты (если не админ)
- Контактные данные клиента **не передаются** AI-ассистенту после этапа 1
- Персональные данные хранятся в соответствии с требованиями 152-ФЗ

---

## 9. Миграция с legacy-модели

### 9.1 Проблема

Текущая Prisma-схема содержит модель `Lead`:

```prisma
// LEGACY — не соответствует Pre-Sale Canon
model Lead {
  id        String   @id @default(cuid())
  name      String
  phone     String
  email     String?
  source    String   // quiz, form, chat, callback
  status    String   @default("new")
  createdAt DateTime @default(now())
}
```

Эта модель **противоречит** Pre-Sale Canon §2.1:
- Центральная сущность — контакт, а не объект
- Нет полей для описания объекта/задачи
- Нет маппинга на Value Ladder
- `source: quiz` — ссылается на калькулятор стоимости (запрещён)

### 9.2 План миграции

```
Шаг 1: Создать модель Object (§3.1) параллельно с Lead
Шаг 2: Обновить API-эндпоинты на /api/objects
Шаг 3: Обновить AI-ассистент на создание Object вместо Lead
Шаг 4: Мигрировать существующие Lead → Object (где возможно)
Шаг 5: Deprecate модель Lead
Шаг 6: Удалить модель Lead
```

> Миграция выполняется **после утверждения** данного документа и не начинается без команды.

---

## 10. Критерии приёмки (QA)

### 10.1 Автоматизируемые проверки

| # | Проверка | Метод |
|---|---|---|
| A1 | API не позволяет создать `Object` без `objectType` и `taskDescription` | Интеграционный тест |
| A2 | API не позволяет перевести stage `consultation` → `proposal` напрямую | Интеграционный тест |
| A3 | API не позволяет AI-роли записать `testVerdict` или `valueAxis` | Тест авторизации |
| A4 | API не позволяет создать КП без `testVerdict` = PASS/CONDITIONAL | Интеграционный тест |
| A5 | n8n отправляет уведомление при `Object.created` | E2E-тест |
| A6 | Все обязательные поля этапа N заполнены перед переходом на этап N+1 | Интеграционный тест |
| A7 | AI-ответы не содержат паттернов цен (`₽`, `руб`, `от N`) | Контентный тест |
| A8 | Legacy-эндпоинт `/api/leads` возвращает deprecation warning (после миграции) | API-тест |
| A9 | `stageChangedAt` обновляется при каждом PATCH `/api/objects/:id/stage` | Интеграционный тест |
| A10 | `stageChangedAt` НЕ обновляется при изменении `status` внутри этапа | Интеграционный тест |

### 10.2 Ручные проверки

| # | Проверка | Критерий |
|---|---|---|
| M1 | Инженер может создать объект из прямого обращения (телефон/email)? | Ручной ввод работает без сайта |
| M2 | AI-ассистент создаёт `Object`, а не `Lead`? | Проверка записей в БД после диалога |
| M3 | Переход между этапами невозможен без заполнения обязательных полей? | Ручное тестирование каждого перехода |
| M4 | Уведомления приходят корректно на каждом триггере (§5.1)? | Ручная проверка T1–T8 |
| M5 | Отказ (FAIL) создаёт запись с `rejectionReason`? | Ручная проверка |

---

## 11. Процедура изменений (Addendum)

### 11.1 Что требует addendum

- Изменение data model (§3)
- Изменение CRM-статусов или правил переходов (§4)
- Изменение триггеров (§5)
- Изменение ограничений AI (§6)
- Изменение API-маршрутов (§7)
- Изменение матрицы доступа (§8)

### 11.2 Формат addendum

```
ADDENDUM #[номер]
Дата: YYYY-MM-DD
Инициатор: [имя / роль]
Затрагивает: [номера секций данного документа]
Обоснование: [почему изменение необходимо]
Изменение: [точная формулировка]
Миграция: [требуется ли миграция данных]
Статус: DRAFT → REVIEW → APPROVED → LOCKED
```

### 11.3 Запрещённые основания

- «CRM так не умеет» (CRM подчиняется канону, не наоборот)
- «Проще хранить контакт, а не объект»
- «AI должен собирать телефон сразу»
- «Нужен прайс на сайте»

---

## 12. Связь с другими документами системы

| Документ | Связь |
|---|---|
| `INDAI_MASTER_SPEC.md` | Источник истины |
| `INDAI_PRE_SALE_ENGINEERING_CANON.md` | Вышестоящий: определяет Value Ladder, тест, оси, отказ. Данный документ реализует |
| `INDAI_HOME_PAGE_IMPLEMENTATION_RULES_CANON.md` | CTA → точка входа (§2.2) |
| `INDAI_SERVICES_PAGES_CANON_v2.md` | Блок 8 → точка входа (§2.2) |
| `INDAI_AI_WIDGET_PLACEMENT_CANON.md` | UI-размещение виджета |
| `AI Assistant Behavior Spec` (будущий) | §6 данного документа — временная техническая спецификация |
| SKILL.md (`/mnt/skills/user/indai-nextjs/`) | Содержит legacy Prisma-схему → требуется обновление (§9) |

---

## СТАТУС ДОКУМЕНТА

- ✅ Встроен в иерархию, подчинён Pre-Sale Engineering Canon
- ✅ Поток данных: от точки входа до контракта
- ✅ Data model: Object (не Lead) с полями по этапам Value Ladder
- ✅ CRM-статусы: 6 этапов × допустимые статусы + правила переходов
- ✅ Триггеры: 8 автоматических + 6 ручных + 5 запретов на автоматизацию
- ✅ AI-ограничения: 5 запретов с техническими мерами + API-роли
- ✅ API-эндпоинты: 6 маршрутов с валидацией
- ✅ Безопасность: матрица доступа по ролям
- ✅ Миграция: план перехода с legacy Lead → Object
- ✅ Критерии приёмки: 10 автоматических + 5 ручных
- ✅ Процедура addendum

---

**КОНЕЦ КАНОНИЧЕСКОГО ДОКУМЕНТА**
