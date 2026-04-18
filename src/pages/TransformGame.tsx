import { useRef, useState } from "react";
import Icon from "@/components/ui/icon";
import { useInView } from "@/lib/nyurba-data";

const IMG_BAAY_TIIT_OLD = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/67eb7925-0d4c-442d-8712-65dd4c60258a.jpg";
const IMG_BAAY_TIIT_NEW = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/deb20d90-bdee-491e-aff2-cb229532041e.jpg";
const IMG_MEADOW = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/4d99dc53-6dee-4359-be09-8778702d847d.jpg";
const IMG_URAHA = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/0f7edd3b-0851-493b-8feb-d80cbdaf5e23.jpg";

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

const AAR_SCHEDULE = [
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

const WEALTH_SCHEDULE = [
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

const CARDS = [
  { icon: "Sparkles", title: "Испытание", color: "from-amber-900/40 to-amber-800/20 border-amber-700/30", desc: "Проверка силы духа и готовности к переменам" },
  { icon: "Eye", title: "Откровение", color: "from-indigo-900/40 to-indigo-800/20 border-indigo-700/30", desc: "Послание из глубин внутреннего «Я»" },
  { icon: "Wind", title: "Помощь духов", color: "from-teal-900/40 to-teal-800/20 border-teal-700/30", desc: "Благодать предков и сил природы" },
  { icon: "Layers", title: "Препятствие", color: "from-rose-900/40 to-rose-800/20 border-rose-700/30", desc: "Урок, скрытый в каждом вызове" },
];

const WEALTH_CARDS = [
  { icon: "TrendingUp", title: "Возможности", color: "from-emerald-900/40 to-emerald-800/20 border-emerald-700/30", desc: "Новые пути к процветанию" },
  { icon: "Lock", title: "Блоки", color: "from-red-900/40 to-red-800/20 border-red-700/30", desc: "Страхи и убеждения, сдерживающие рост" },
  { icon: "Gift", title: "Ресурсы", color: "from-amber-900/40 to-amber-800/20 border-amber-700/30", desc: "Скрытые таланты и возможности" },
];

const INDICATORS = [
  { icon: "Coins", label: "Финансы", color: "text-amber-400" },
  { icon: "Heart", label: "Здоровье", color: "text-rose-400" },
  { icon: "Users", label: "Отношения", color: "text-sky-400" },
  { icon: "BookOpen", label: "Знания", color: "text-emerald-400" },
];

export default function TransformGame() {
  const [activeTab, setActiveTab] = useState<"aar" | "wealth">("aar");

  return (
    <div className="min-h-screen bg-[#080e14] text-[#e8dcc8] font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG_BAAY_TIIT_NEW} alt="Баай Тиит" className="w-full h-full object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080e14]/60 via-[#080e14]/40 to-[#080e14]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#d4a843] text-sm tracking-[0.3em] uppercase mb-4 font-sans">Нюрбинский район · Баай Тиит</p>
          <h1 className="font-serif text-5xl md:text-7xl text-[#e8dcc8] mb-4 leading-tight hero-text-shadow">
            Аар Куйаар
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-[#d4a843] mb-2">«Великий зов»</p>
          <div className="sacred-divider my-6 max-w-xs mx-auto">
            <span className="ornament text-2xl">✦</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#e8dcc8] mb-2">Вершина богатства</h2>
          <p className="text-[#b8a898] text-lg mb-8">Программа трансформационных игр</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#b8a898]">
            <span className="flex items-center gap-2">
              <Icon name="MapPin" size={16} className="text-[#d4a843]" />
              Баай Тиит, Нюрбинский район
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Clock" size={16} className="text-[#d4a843]" />
              1 день · 10:00–18:00
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Users" size={16} className="text-[#d4a843]" />
              10–14 участников
            </span>
          </div>
          <a
            href="#program"
            className="mt-10 inline-block px-8 py-3 bg-[#d4a843] text-[#080e14] font-sans font-semibold rounded tracking-wide hover:bg-[#e0b855] transition-colors"
          >
            Подробнее о программе
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-60">
          <Icon name="ChevronDown" size={24} className="text-[#d4a843]" />
        </div>
      </section>

      {/* О месте */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <FadeSection className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase mb-3">Место силы</p>
            <h2 className="font-serif text-4xl text-[#e8dcc8] mb-5">Баай Тиит</h2>
            <p className="text-[#b8a898] leading-relaxed mb-4">
              <span className="text-[#d4a843]">Эллэй хоһуйбут баай тиитэ</span> — древнее священное дерево Нюрбы, воспетое Эллэем. Символ богатства и процветания народа саха. Обнесено оградой как памятник природы и духовного наследия.
            </p>
            <p className="text-[#b8a898] leading-relaxed mb-6">
              Место проведения программы выбрано не случайно. Энергетика Баай Тиит усиливает личностные трансформации, помогает участникам обрести связь с внутренним «Я», предками и природой.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: "TreePine", text: "Место силы и символ богатства" },
                { icon: "Wind", text: "Очный формат, погружение в природную среду" },
                { icon: "Award", text: "Сертифицированный игропрактик" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-[#b8a898]">
                  <Icon name={item.icon} size={16} className="text-[#d4a843] shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={IMG_BAAY_TIIT_OLD}
              alt="Баай Тиит — историческое фото"
              className="w-full rounded opacity-80 shadow-2xl border border-[#d4a843]/10"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#080e14]/80 backdrop-blur-sm rounded p-3 border border-[#d4a843]/20">
              <p className="text-xs text-[#d4a843] tracking-wider">Ньурба · Эллэй хоһуйбут баай тиитэ</p>
              <p className="text-xs text-[#b8a898] mt-1">Историческое фото</p>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* Цель программы */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-[#0d1420]/60 to-transparent">
        <div className="max-w-5xl mx-auto">
          <FadeSection className="text-center mb-12">
            <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase mb-3">О программе</p>
            <h2 className="font-serif text-4xl text-[#e8dcc8]">Цель и формат</h2>
          </FadeSection>
          <FadeSection>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "Compass",
                  title: "Личностная трансформация",
                  desc: "Глубокая работа с внутренним «Я» через метафорические игры и связь с энергетикой священного места",
                },
                {
                  icon: "Layers",
                  title: "Два модуля",
                  desc: "«Аар Куйаар» — духовный путь и связь с предками. «Вершина богатства» — финансовые и жизненные стратегии",
                },
                {
                  icon: "Users",
                  title: "Малая группа",
                  desc: "10–14 человек для глубокого погружения. Ведущий — сертифицированный игропрактик, знакомый с якутской культурой",
                },
              ].map((card) => (
                <div key={card.title} className="glass-card rounded-lg p-6 text-center">
                  <Icon name={card.icon} size={32} className="text-[#d4a843] mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-[#e8dcc8] mb-2">{card.title}</h3>
                  <p className="text-[#b8a898] text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Урок */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG_URAHA} alt="Ураһа и куйаар" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080e14] via-[#080e14]/70 to-[#080e14]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <FadeSection>
            <p className="font-serif text-2xl md:text-3xl text-[#e8dcc8] leading-relaxed italic opacity-90">
              «Богатство — это не только деньги. Это здоровье, семья, связь с землёй предков и гармония духа»
            </p>
            <p className="text-[#d4a843] text-sm mt-5 tracking-wider">— Якутская мудрость</p>
          </FadeSection>
        </div>
      </section>

      {/* Расписание */}
      <section id="program" className="py-20 px-4 max-w-5xl mx-auto">
        <FadeSection className="text-center mb-12">
          <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase mb-3">Программа дня</p>
          <h2 className="font-serif text-4xl text-[#e8dcc8] mb-2">Расписание</h2>
          <p className="text-[#b8a898] text-sm">10:00 — 18:00 · Нюрбинский район, Баай Тиит</p>
        </FadeSection>

        {/* Tabs */}
        <FadeSection>
          <div className="flex justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveTab("aar")}
              className={`px-6 py-3 rounded font-sans text-sm font-semibold transition-all ${activeTab === "aar" ? "bg-[#d4a843] text-[#080e14]" : "glass-card text-[#b8a898] hover:text-[#e8dcc8]"}`}
            >
              Часть 1 · Аар Куйаар
            </button>
            <button
              onClick={() => setActiveTab("wealth")}
              className={`px-6 py-3 rounded font-sans text-sm font-semibold transition-all ${activeTab === "wealth" ? "bg-[#d4a843] text-[#080e14]" : "glass-card text-[#b8a898] hover:text-[#e8dcc8]"}`}
            >
              Часть 2 · Вершина богатства
            </button>
          </div>
        </FadeSection>

        {activeTab === "aar" && (
          <FadeSection>
            <div className="mb-6 glass-card rounded-lg p-5 border-l-2 border-[#d4a843]/60">
              <p className="text-[#d4a843] font-sans font-semibold text-sm mb-1">Цель модуля</p>
              <p className="text-[#b8a898] text-sm">Помочь участникам обрести связь с внутренним «Я», предками и природой, раскрыть потенциал через якутские духовные практики.</p>
            </div>
            <div className="space-y-4">
              {AAR_SCHEDULE.map((block, i) => (
                <div key={i} className="glass-card rounded-lg p-5 flex gap-5">
                  <div className="shrink-0 w-28 text-right">
                    <span className="text-[#d4a843] text-xs font-mono">{block.time}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#e8dcc8] mb-2">{block.title}</h4>
                    <ul className="space-y-1">
                      {block.items.map((item, j) => (
                        <li key={j} className="text-[#b8a898] text-sm flex items-start gap-2">
                          <span className="text-[#d4a843] mt-1 shrink-0">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="glass-card rounded-lg p-5 flex gap-5 border border-[#2d6e2d]/40">
                <div className="shrink-0 w-28 text-right">
                  <span className="text-emerald-400 text-xs font-mono">13:00–14:00</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#e8dcc8] mb-1">Обед и отдых</h4>
                  <p className="text-[#b8a898] text-sm">Лёгкий перекус на природе · медитация · прогулка по окрестностям Баай Тиит</p>
                </div>
              </div>
            </div>

            {/* Cards AAR */}
            <div className="mt-10">
              <p className="text-center text-[#b8a898] text-sm mb-5">Типы карточек в игре «Аар Куйаар»</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {CARDS.map((card) => (
                  <div key={card.title} className={`rounded-lg p-4 bg-gradient-to-br border text-center ${card.color}`}>
                    <Icon name={card.icon} size={24} className="mx-auto mb-2 text-[#e8dcc8]" />
                    <p className="font-serif text-base text-[#e8dcc8] mb-1">{card.title}</p>
                    <p className="text-xs text-[#b8a898]">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>
        )}

        {activeTab === "wealth" && (
          <FadeSection>
            <div className="mb-6 glass-card rounded-lg p-5 border-l-2 border-[#d4a843]/60">
              <p className="text-[#d4a843] font-sans font-semibold text-sm mb-1">Цель модуля</p>
              <p className="text-[#b8a898] text-sm">Проработать отношение к богатству, выявить блоки и страхи, создать стратегию финансовой и духовной стабильности через призму якутских ценностей.</p>
            </div>

            {/* Indicators */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {INDICATORS.map((ind) => (
                <div key={ind.label} className="glass-card rounded-lg p-4 text-center">
                  <Icon name={ind.icon} size={24} className={`mx-auto mb-2 ${ind.color}`} />
                  <p className="text-xs text-[#b8a898]">{ind.label}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[#b8a898] text-xs mb-8">Стартовые баллы: 5 очков распределяются между четырьмя показателями</p>

            <div className="space-y-4">
              {WEALTH_SCHEDULE.map((block, i) => (
                <div key={i} className="glass-card rounded-lg p-5 flex gap-5">
                  <div className="shrink-0 w-28 text-right">
                    <span className="text-[#d4a843] text-xs font-mono">{block.time}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#e8dcc8] mb-2">{block.title}</h4>
                    <ul className="space-y-1">
                      {block.items.map((item, j) => (
                        <li key={j} className="text-[#b8a898] text-sm flex items-start gap-2">
                          <span className="text-[#d4a843] mt-1 shrink-0">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Cards Wealth */}
            <div className="mt-10">
              <p className="text-center text-[#b8a898] text-sm mb-5">Типы карточек в игре «Вершина богатства»</p>
              <div className="grid grid-cols-3 gap-3">
                {WEALTH_CARDS.map((card) => (
                  <div key={card.title} className={`rounded-lg p-4 bg-gradient-to-br border text-center ${card.color}`}>
                    <Icon name={card.icon} size={24} className="mx-auto mb-2 text-[#e8dcc8]" />
                    <p className="font-serif text-base text-[#e8dcc8] mb-1">{card.title}</p>
                    <p className="text-xs text-[#b8a898]">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>
        )}
      </section>

      {/* Завершение дня */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <FadeSection>
          <div className="glass-card rounded-xl p-8 border border-[#d4a843]/20 text-center">
            <Icon name="Star" size={32} className="text-[#d4a843] mx-auto mb-4" />
            <h3 className="font-serif text-3xl text-[#e8dcc8] mb-4">Завершение программы</h3>
            <p className="text-[#b8a898] text-sm mb-2">17:00 — 18:00</p>
            <div className="sacred-divider my-5 max-w-xs mx-auto"><span className="ornament">✦</span></div>
            <div className="grid md:grid-cols-3 gap-4 text-left mt-6">
              {[
                { icon: "Circle", text: "Общий круг — участники делятся впечатлениями и словами благодарности" },
                { icon: "Camera", text: "Фото на память у знакового места Баай Тиит" },
                { icon: "ScrollText", text: "Вручение сертификатов об участии" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <Icon name={item.icon} size={16} className="text-[#d4a843] mt-1 shrink-0" />
                  <p className="text-[#b8a898] text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* Участникам */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG_MEADOW} alt="Природа Нюрбы" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080e14] via-transparent to-[#080e14]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <FadeSection className="text-center mb-10">
            <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase mb-3">Для участников</p>
            <h2 className="font-serif text-4xl text-[#e8dcc8]">Подготовка</h2>
          </FadeSection>
          <FadeSection>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { icon: "Shirt", title: "Одежда", desc: "Оденьтесь по погоде, удобная одежда и обувь для прогулок по природе" },
                { icon: "Droplets", title: "Вода и перекус", desc: "Возьмите воду и лёгкий перекус с собой" },
                { icon: "Heart", title: "Открытость", desc: "Будьте открыты к новому опыту — игры работают через метафоры и интуицию" },
                { icon: "Users", title: "Группа", desc: "10–14 участников. Очный формат с полным погружением в природную среду" },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-lg p-5 flex gap-4">
                  <Icon name={item.icon} size={24} className="text-[#d4a843] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg text-[#e8dcc8] mb-1">{item.title}</h4>
                    <p className="text-[#b8a898] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-[#d4a843]/10">
        <p className="font-serif text-2xl text-[#d4a843] mb-2">Баай Тиит</p>
        <p className="text-[#b8a898] text-sm">Нюрбинский район · Республика Саха (Якутия)</p>
        <div className="sacred-divider max-w-xs mx-auto my-5"><span className="ornament text-xl">✦</span></div>
        <p className="text-[#b8a898] text-xs opacity-60">Программа трансформационных игр «Аар Куйаар» и «Вершина богатства»</p>
      </footer>
    </div>
  );
}