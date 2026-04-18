export const IMG_BAAY_TIIT_OLD = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/67eb7925-0d4c-442d-8712-65dd4c60258a.jpg";
export const IMG_BAAY_TIIT_NEW = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/deb20d90-bdee-491e-aff2-cb229532041e.jpg";
export const IMG_MEADOW = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/4d99dc53-6dee-4359-be09-8778702d847d.jpg";
export const IMG_URAHA = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/0f7edd3b-0851-493b-8feb-d80cbdaf5e23.jpg";

export const SEND_URL = "https://functions.poehali.dev/556db68f-faa3-4871-9852-301c304c5fde";

export const AAR_SCHEDULE = [
  {
    time: "10:00–10:30",
    title: "Открытие",
    items: [
      "Приветствие и знакомство участников",
      "Рассказ о Баай Тиит и его значении",
      "Ритуал благодарности месту (зажжение благовоний, обращение к духам)",
      "Формулировка личного запроса каждым участником",
    ],
  },
  {
    time: "10:30–11:00",
    title: "Подготовка к игре",
    items: ["Создание персональных артефактов"],
  },
  {
    time: "11:00–12:30",
    title: "Игра «Аар Куйаар»",
    items: [
      "Бросок кубика и движение по полю",
      "Карточки «Испытание», «Откровение», «Помощь духов», «Препятствие»",
    ],
  },
  {
    time: "12:30–13:00",
    title: "Завершение",
    items: [
      "Достижение «Места откровения» — финальное послание от духов",
      "Обсуждение инсайтов и изменений в восприятии",
      "Ритуал закрепления у священного дерева",
    ],
  },
];

export const WEALTH_SCHEDULE = [
  {
    time: "14:00–14:15",
    title: "Введение",
    items: [
      "Понятие богатства в якутской традиции (здоровье, семья, связь с землёй)",
      "Постановка личного запроса",
    ],
  },
  {
    time: "14:15–14:30",
    title: "Старт",
    items: ["Распределение 5 стартовых баллов между: Финансами, Здоровьем, Отношениями, Знаниями"],
  },
  {
    time: "14:30–16:00",
    title: "Игра «Вершина богатства»",
    items: [
      "Подножие — старт с базовыми ресурсами",
      "Тропа возможностей — карточки «Возможности»",
      "Ущелье сомнений — карточки «Блоки»",
      "Плато изобилия — карточки «Ресурсы»",
      "Вершина богатства — финальное задание",
    ],
  },
  {
    time: "16:00–16:45",
    title: "Финал",
    items: [
      "Составление плана действий на ближайший месяц",
      "Групповое обсуждение: блоки и новые стратегии",
      "Ритуал благодарности: слова благодарности месту и друг другу",
    ],
  },
];

export const CARDS = [
  { icon: "Sparkles", title: "Испытание", color: "from-amber-900/40 to-amber-800/20 border-amber-700/30", desc: "Проверка силы духа и готовности к переменам" },
  { icon: "Eye", title: "Откровение", color: "from-indigo-900/40 to-indigo-800/20 border-indigo-700/30", desc: "Послание из глубин внутреннего «Я»" },
  { icon: "Wind", title: "Помощь духов", color: "from-teal-900/40 to-teal-800/20 border-teal-700/30", desc: "Благодать предков и сил природы" },
  { icon: "Layers", title: "Препятствие", color: "from-rose-900/40 to-rose-800/20 border-rose-700/30", desc: "Урок, скрытый в каждом вызове" },
];

export const WEALTH_CARDS = [
  { icon: "TrendingUp", title: "Возможности", color: "from-emerald-900/40 to-emerald-800/20 border-emerald-700/30", desc: "Новые пути к процветанию" },
  { icon: "Lock", title: "Блоки", color: "from-red-900/40 to-red-800/20 border-red-700/30", desc: "Страхи и убеждения, сдерживающие рост" },
  { icon: "Gift", title: "Ресурсы", color: "from-amber-900/40 to-amber-800/20 border-amber-700/30", desc: "Скрытые таланты и возможности" },
];

export const INDICATORS = [
  { icon: "Coins", label: "Финансы", color: "text-amber-400" },
  { icon: "Heart", label: "Здоровье", color: "text-rose-400" },
  { icon: "Users", label: "Отношения", color: "text-sky-400" },
  { icon: "BookOpen", label: "Знания", color: "text-emerald-400" },
];
