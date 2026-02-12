/**
 * Content constants for homepage sections
 *
 * Per MASTER_SPEC §6: content data in lib/constants.ts
 * Per ADDENDUM P0.3: forbidden CTA formulations replaced
 *
 * Content text is in Russian per MASTER_SPEC §4 (user-facing = Russian).
 */

// ============================================
// UI LABELS (navigation, buttons, common UI)
// ============================================
export const UI_LABELS = {
  nav: {
    home: 'Главная',
    services: 'Услуги',
    ariaLabel: 'Основная навигация',
    mobileMenuOpen: 'Открыть меню',
    mobileMenuClose: 'Закрыть меню',
    phone: '+7 (495) 123-45-67',
  },
  buttons: {
    services: 'Услуги',
    backToHome: 'Вернуться на главную',
    headerCta: 'Обсудить задачу',
    headerCtaSecondary: 'Отправить ТЗ',
    learnMore: 'Подробнее',
  },
  badges: {
    free: 'Бесплатно',
  },
  results: {
    viewDetails: 'Подробнее',
  },
  gallery: {
    photoPlaceholder: 'Фото скоро',
  },
  skipLink: 'Перейти к основному содержимому',
} as const;

// ============================================
// SECTION HEADINGS
// ============================================
export const SECTION_HEADINGS = {
  process: 'Процесс работы',
  services: 'Услуги',
  results: 'Результаты работ',
  resultsSubtitle: 'Реальные проекты с измеримыми результатами',
  quiz: {
    title: 'Инженерный расчёт',
    description: 'Опишите вашу задачу — получите предварительный расчёт сроков и подход к очистке.',
    buttonPlaceholder: 'Форма скоро будет доступна',
  },
  trust: 'Гарантии и доверие',
  gallery: 'Галерея работ',
  faq: 'Часто задаваемые вопросы',
} as const;

// ============================================
// SYSTEM MESSAGES (errors, 404, loading)
// ============================================
export const SYSTEM_MESSAGES = {
  notFound: {
    title: 'Страница не найдена',
    backToHome: 'Вернуться на главную',
  },
  error: {
    title: 'Произошла ошибка',
    description: 'Попробуйте обновить страницу.',
    retry: 'Попробовать снова',
  },
} as const;

// ============================================
// PAGE METADATA (SEO titles/descriptions)
// ============================================
export const PAGE_METADATA = {
  servicesPage: {
    title: 'Услуги | INDAI Clean',
    description: 'Промышленная очистка оборудования',
  },
} as const;

// ============================================
// HERO SECTION CONTENT
// ============================================
export const HERO_CONTENT = {
  badge: 'Партнёр Kärcher',
  heading: {
    line1: 'Промышленная очистка',
    highlight: '',
    line2: 'с гарантией результата',
  },
  description: 'Очистка котлов, теплообменников, трубопроводов и резервуаров. Консультация, тест-очистка и расчёт — бесплатно. Оплата только после достижения заявленных параметров.',
  cta: {
    primary: 'Забронировать тест-очистку',
    secondary: 'Наши услуги',
  },
  stats: [
    { value: '3', label: 'шага бесплатно' },
    { value: '35%', label: 'рост теплоотдачи' },
    { value: '1-3', label: 'дня на очистку' },
  ],
} as const;

// ============================================
// SECTION CONTENT
// ============================================
import type {
  ProcessStep,
  ResultItem,
  TrustSignal,
  FAQItem,
  GalleryImage,
  CTAContent,
  ServiceCard,
  QuizContent,
} from '@/types';

export const SERVICE_CARDS: ServiceCard[] = [
  {
    slug: 'heat-exchanger-cleaning',
    title: 'Промывка теплообменников',
    description: 'Восстановление теплоотдачи пластинчатых, кожухотрубных и спиральных теплообменников.',
    icon: 'Thermometer',
  },
  {
    slug: 'boiler-cleaning',
    title: 'Промывка котлов',
    description: 'Удаление накипи и отложений из водогрейных, паровых и жаротрубных котлов.',
    icon: 'Flame',
  },
  {
    slug: 'pipe-cleaning',
    title: 'Чистка труб и трубопроводов',
    description: 'Восстановление пропускной способности и снижение гидравлического сопротивления.',
    icon: 'PipetteIcon',
  },
  {
    slug: 'tank-cleaning',
    title: 'Очистка резервуаров и ёмкостей',
    description: 'Восстановление рабочего объёма нефтяных, водяных и технологических ёмкостей.',
    icon: 'Container',
  },
  {
    slug: 'hydro-cutting',
    title: 'Гидрорезка',
    description: 'Резка металла, бетона и других материалов водой под сверхвысоким давлением без нагрева и деформации.',
    icon: 'Scissors',
  },
  {
    slug: 'hydrodynamic-cleaning',
    title: 'Гидродинамическая очистка',
    description: 'Удаление отложений водой под высоким давлением без повреждения поверхностей.',
    icon: 'Droplets',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Консультация и оценка',
    description: 'Бесплатная консультация с инженером. Оценка состояния оборудования и определение необходимых работ.',
    isFree: true,
  },
  {
    number: 2,
    title: 'Тест-очистка',
    description: 'Бесплатная тест-очистка на небольшом участке для демонстрации эффективности метода.',
    isFree: true,
  },
  {
    number: 3,
    title: 'Инженерный расчёт',
    description: 'Бесплатный расчёт сроков и подхода на основе результатов тест-очистки.',
    isFree: true,
  },
  {
    number: 4,
    title: 'Выполнение работ',
    description: 'Промышленная очистка оборудования с гарантией результата. Оплата только после достижения заявленных параметров.',
    isFree: false,
  },
];

export const RESULTS: ResultItem[] = [
  {
    id: 'result-1',
    object: 'ТЭЦ-23, Москва',
    service: 'Очистка теплообменников',
    metrics: [
      { value: '+31%', label: 'КПД' },
      { value: '3М ₽', label: 'экономия/год' },
      { value: '2 дня', label: 'срок работ' },
    ],
  },
  {
    id: 'result-2',
    object: 'Котельная №7, Казань',
    service: 'Промывка котлов',
    metrics: [
      { value: '-1.5 атм', label: 'давление' },
      { value: '28%', label: 'рост КПД' },
      { value: '1 день', label: 'без остановки' },
    ],
  },
  {
    id: 'result-3',
    object: 'НПЗ, Самара',
    service: 'Очистка трубопроводов',
    metrics: [
      { value: '+40%', label: 'пропускная способность' },
      { value: '18 мес', label: 'гарантия' },
      { value: '3 дня', label: 'срок работ' },
    ],
  },
];

export const TRUST_SIGNALS: TrustSignal[] = [
  {
    id: 'trust-1',
    icon: 'Shield',
    title: 'Гарантия результата',
    description: 'Оплата только после достижения заявленных параметров очистки.',
  },
  {
    id: 'trust-2',
    icon: 'CheckCircle',
    title: '3 шага бесплатно',
    description: 'Консультация, тест-очистка и расчёт стоимости — без оплаты.',
  },
  {
    id: 'trust-3',
    icon: 'Users',
    title: 'Опытные инженеры',
    description: 'Команда специалистов с опытом работы на промышленных объектах.',
  },
  {
    id: 'trust-4',
    icon: 'Clock',
    title: 'Быстрое выполнение',
    description: 'Минимальные простои оборудования благодаря отработанным технологиям.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Сколько стоит тест-очистка?',
    answer: 'Тест-очистка выполняется бесплатно. Это первый шаг нашего процесса, который позволяет продемонстрировать эффективность метода на вашем оборудовании.',
  },
  {
    id: 'faq-2',
    question: 'Как долго занимает очистка?',
    answer: 'Сроки зависят от объёма работ и типа оборудования. После тест-очистки мы предоставим точный расчёт сроков. Обычно процесс занимает от 1 до 3 дней.',
  },
  {
    id: 'faq-3',
    question: 'Нужно ли останавливать производство?',
    answer: 'В большинстве случаев полная остановка не требуется. Мы работаем с минимальными простоями, используя технологии, которые позволяют очищать оборудование в рабочем режиме или с короткими перерывами.',
  },
  {
    id: 'faq-4',
    question: 'Какие гарантии вы предоставляете?',
    answer: 'Мы гарантируем достижение заявленных параметров очистки. Оплата производится только после подтверждения результата. Если параметры не достигнуты — работа выполняется повторно без дополнительной оплаты.',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: '/images/gallery/work-1.jpg',
    alt: 'Процесс промывки котла',
    width: 800,
    height: 600,
  },
  {
    id: 'gallery-2',
    src: '/images/gallery/work-2.jpg',
    alt: 'Очистка теплообменника',
    width: 800,
    height: 600,
  },
  {
    id: 'gallery-3',
    src: '/images/gallery/work-3.jpg',
    alt: 'Гидродинамическая очистка трубопровода',
    width: 800,
    height: 600,
  },
  {
    id: 'gallery-4',
    src: '/images/gallery/work-4.jpg',
    alt: 'Результат очистки резервуара',
    width: 800,
    height: 600,
  },
];

export const QUIZ_CONTENT: QuizContent = {
  badge: 'Инженерный подход',
  heading: 'Опишите вашу задачу',
  headingHighlight: '— получите расчёт',
  description: 'Ответьте на 3 вопроса о вашем оборудовании — получите предварительный расчёт сроков и подход к очистке.',
  cta: 'Получить инженерный расчёт',
};

export const CTA_CONTENT: CTAContent = {
  heading: 'Готовы начать?',
  description: 'Забронируйте бесплатную тест-очистку или отправьте техническое задание — мы свяжемся в течение 2 часов.',
  buttonText: 'Забронировать тест-очистку',
  secondaryButtonText: 'Отправить ТЗ',
};
