# INDAI Clean — Media Placement Plan v1.0

> Основан на: MEDIA_ASSET_REGISTRY v2.0
> Дата: 2026-02-15

---

## Принципы размещения

1. **Hero** — максимально эффектный кадр (человек + действие)
2. **Gallery** — 8 карточек кейсов (poster-кадр + видео по клику)
3. **Trust** — командное фото Kärcher (социальное доказательство)
4. **Results** — до/после кадры для усиления метрик (Phase 2)

---

## 1. HERO SECTION

| Слот              | Ассет                                          | Обоснование                                     |
|-------------------|------------------------------------------------|-------------------------------------------------|
| poster (webp)     | PHO-009 `photos/karcher_training_02_hydro_wall.jpg` | ★★ Инженер + ВД, красная куртка, оранж контраст |
| background video  | `videos/hero-bg.mp4` (текущий)                 | Остаётся без изменений                           |

**Действие:** Конвертировать PHO-009 в WebP → `public/images/hero/hero-poster.webp`

---

## 2. GALLERY SECTION (полная переработка)

Текущее состояние: 4 gradient-заглушки → **Новое: 8 карточек кейсов**

| # | Кейс                          | Poster (frame/photo)                                    | Видео (★ ОСНОВНОЕ)                                    | Метод              |
|---|-------------------------------|--------------------------------------------------------|-------------------------------------------------------|--------------------|
| 1 | Криобластинг резервуара       | `frames/case_reservoir_cryoblasting_01_poster.png`      | `videos/case_reservoir_cryoblasting_03_karcher.mp4`    | Криобластинг       |
| 2 | Гидродинамика насоса          | `frames/case_pump_hydroblasting_01_action.png`          | `videos/case_pump_hydroblasting_01.mp4`                | Гидродинамика      |
| 3 | Подвес покрасочной линии      | `frames/case_paint_jig_hydroblasting_02_before_after.png`| `videos/case_paint_jig_hydroblasting_02_outdoor.mp4`  | Гидродинамика      |
| 4 | Гидроабразивная резка ёмкости | `frames/case_tank_cutting_01_overview.png`              | `videos/case_tank_cutting_01_overview.mov`             | Гидроабразивная    |
| 5 | Пол от мазута                 | `frames/case_floor_mazut_cleaning_01_process.png`       | `videos/case_floor_mazut_cleaning_01.mp4`              | Горячая ВД + FRV   |
| 6 | Криобластинг линии            | `frames/case_prodline_cryoblast_operator.png`           | `videos/case_prodline_cryoblast_02_operator.mp4`       | Криобластинг       |
| 7 | Вакуумная уборка цеха         | `photos/case_vacuum_dust_01_wide.jpg`                   | `videos/case_vacuum_dust_01.mp4`                       | Промвакуум         |
| 8 | Очистка полов производства    | `photos/case_floor_heavy_03_before_after.jpg`           | —                                                     | Горячая ВД + FRV   |

**UI-паттерн:** Карточка с poster-изображением → hover/клик → видео в lightbox или inline `<video>`.
Тег метода (Badge) на каждой карточке.

---

## 3. TRUST SECTION

| Слот          | Ассет                                           | Обоснование                                    |
|---------------|------------------------------------------------|------------------------------------------------|
| Командное фото | PHO-010 `photos/karcher_training_03_team.jpg`  | ★★★ KILLER — 13 чел. у стенда KÄRCHER          |
| Оборудование  | PHO-011 `photos/karcher_training_04_equipment.jpg` | Руководитель + оборудование                  |

**Действие:** Добавить блок «Сертифицированные инженеры Kärcher» с командным фото под карточками trust signals.

---

## 4. RESULTS SECTION (Phase 2 — опционально)

Кандидаты для до/после:
- `frames/case_reservoir_cryoblasting_04_before_after.png`
- `frames/case_paint_jig_hydroblasting_02_before_after.png`
- `frames/case_prodline_cryoblast_before_after.png`
- `photos/case_floor_heavy_03_before_after.jpg`

---

## 5. DIRECTORY STRUCTURE

```
public/
├── videos/
│   ├── hero-bg.mp4                                    (существует)
│   ├── case_reservoir_cryoblasting_01.mp4
│   ├── case_reservoir_cryoblasting_02_closeup.mp4
│   ├── case_reservoir_cryoblasting_03_karcher.mp4
│   ├── case_reservoir_cryoblasting_04_overview.mp4
│   ├── case_pump_hydroblasting_01.mp4
│   ├── case_pump_hydroblasting_02.mp4
│   ├── case_pump_hydroblasting_03_body.mp4
│   ├── case_paint_jig_hydroblasting_01.mp4
│   ├── case_paint_jig_hydroblasting_02_outdoor.mp4
│   ├── case_tank_cutting_01_overview.mov
│   ├── case_tank_cutting_02_head_closeup.mov
│   ├── case_tank_cutting_03_tooling.mov
│   ├── case_tank_cutting_04_process.mov
│   ├── case_floor_mazut_cleaning_01.mp4
│   ├── case_prodline_cryoblast_01_overview.mp4
│   ├── case_prodline_cryoblast_02_operator.mp4
│   ├── case_prodline_cryoblast_03_detail.mp4
│   ├── case_prodline_cryoblast_04_side.mp4
│   ├── case_prodline_cryoblast_05_full.mp4
│   ├── case_vacuum_dust_01.mp4
│   └── case_vacuum_dust_02_trimmed.mp4
├── photos/
│   ├── case_vacuum_dust_01_wide.jpg
│   ├── case_vacuum_dust_02_process.jpg
│   ├── case_floor_heavy_01_closeup.jpg
│   ├── case_floor_heavy_02_woma_station.jpg
│   ├── case_floor_heavy_03_before_after.jpg
│   ├── case_floor_heavy_04_team.jpg
│   ├── case_floor_heavy_05_perspective.jpg
│   ├── karcher_training_01_demo_cryoblast.jpg
│   ├── karcher_training_02_hydro_wall.jpg
│   ├── karcher_training_03_team.jpg
│   └── karcher_training_04_equipment.jpg
├── frames/
│   ├── case_reservoir_cryoblasting_01_poster.png
│   ├── case_reservoir_cryoblasting_03_karcher_equipment.png
│   ├── case_reservoir_cryoblasting_04_before_after.png
│   ├── case_pump_hydroblasting_01_action.png
│   ├── case_paint_jig_hydroblasting_02_before_after.png
│   ├── case_tank_cutting_01_overview.png
│   ├── case_tank_cutting_02_head_closeup.png
│   ├── case_floor_mazut_cleaning_01_process.png
│   ├── case_prodline_cryoblast_operator.png
│   └── case_prodline_cryoblast_before_after.png
└── images/
    ├── hero/
    │   └── hero-poster.webp    (← конвертировано из PHO-009)
    └── .gitkeep
```

---

## Следующие шаги

1. **Ручная загрузка файлов** — пользователь копирует 62 ассета в `public/videos/`, `public/photos/`, `public/frames/`
2. **Cursor Prompt Step 1** — обновление types + constants (GalleryCard вместо GalleryImage)
3. **Cursor Prompt Step 2** — переработка GallerySection (карточки + видео lightbox)
4. **Cursor Prompt Step 3** — TrustSection + командное фото
5. **Cursor Prompt Step 4** — HeroSection poster (PHO-009 → WebP)
