/**
 * Content constants for homepage sections
 * 
 * Per MASTER_SPEC §6: content data in lib/constants.ts
 * 
 * Note: When dedicated content MD files are created, these constants will be replaced.
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
  },
  buttons: {
    services: 'Услуги',
    backToHome: 'Вернуться на главную',
    headerCta: 'Рассчитать стоимость',
  },
  badges: {
    free: 'Бесплатно',
  },
  skipLink: 'Перейти к основному содержимому',
} as const;

// ============================================
// SECTION HEADINGS
// ============================================
export const SECTION_HEADINGS = {
  process: 'Процесс работы',
  services: 'Услуги',
  cases: 'Кейсы',
  quiz: {
    title: 'Калькулятор стоимости',
    description: 'Рассчитайте стоимость очистки вашего оборудования. Калькулятор будет доступен в ближайшее время.',
    buttonPlaceholder: 'Калькулятор скоро будет доступен',
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
// Per MASTER_SPEC §10.3 #1: УТП + CTA
// ============================================
export const HERO_CONTENT = {
  badge: 'Промышленная очистка',
  heading: {
    line1: 'Чистота промышленного',
    highlight: 'оборудования',
    line2: 'без компромиссов',
  },
  description: 'Химическая и гидродинамическая очистка котлов, теплообменников, трубопроводов и резервуаров. 3 шага бесплатно — оплата только за результат.',
  cta: {
    primary: 'Рассчитать стоимость',
    secondary: 'Наши услуги',
  },
  stats: [
    { value: '3', label: 'шага бесплатно' },
    { value: '35%', label: 'рост теплоотдачи' },
    { value: '1-3', label: 'дня на очистку' },
  ],
} as const;

// ============================================
// SECTION CONTENT (arrays from types)
// ============================================
import type {
  ProcessStep,
  CaseItem,
  TrustSignal,
  FAQItem,
  GalleryImage,
  CTAContent,
} from '@/types';

// Process Section Content
// Per MASTER_SPEC §10.3 #2: 4 steps (3 free)
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
    description: 'Бесплатный расчёт стоимости и сроков работ на основе результатов тест-очистки.',
    isFree: true,
  },
  {
    number: 4,
    title: 'Выполнение работ',
    description: 'Промышленная очистка оборудования с гарантией результата. Оплата только после достижения заявленных параметров.',
    isFree: false,
  },
];

// Cases Section Content
// Per MASTER_SPEC §10.3 #4: Before/After cases
// Placeholder data — real cases will come from content files when available
export const CASES: CaseItem[] = [
  {
    id: 'case-1',
    title: 'Промывка теплообменника',
    beforeImage: '/images/cases/case-1-before.jpg',
    beforeAlt: 'Теплообменник до очистки — заросший накипью',
    afterImage: '/images/cases/case-1-after.jpg',
    afterAlt: 'Теплообменник после очистки — полностью восстановлен',
    result: 'Восстановлена теплоотдача на 35%. Снижен расход топлива на 12%.',
  },
  {
    id: 'case-2',
    title: 'Очистка трубопровода',
    beforeImage: '/images/cases/case-2-before.jpg',
    beforeAlt: 'Трубопровод до очистки — засорён отложениями',
    afterImage: '/images/cases/case-2-after.jpg',
    afterAlt: 'Трубопровод после очистки — пропускная способность восстановлена',
    result: 'Восстановлена пропускная способность на 40%. Устранены гидравлические потери.',
  },
];

// Trust Section Content
// Per MASTER_SPEC §10.3 #6: Guarantees & trust signals
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

// FAQ Section Content
// Per MASTER_SPEC §10.3 #8: Questions & answers
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

// Gallery Section Content
// Per MASTER_SPEC §10.3 #7: Work photos
// Placeholder data — real images will be added when available
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

// CTA Section Content
// Per MASTER_SPEC §10.3 #9: Final call-to-action
export const CTA_CONTENT: CTAContent = {
  heading: 'Готовы начать?',
  description: 'Запишитесь на бесплатную консультацию и тест-очистку. Результат до оплаты.',
  buttonText: 'Записаться на консультацию',
};

