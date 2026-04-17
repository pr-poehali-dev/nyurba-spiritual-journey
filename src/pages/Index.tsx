import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import NyurbaMap from "@/components/NyurbaMap";

const IMG_HERO = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/93aa2806-e343-42c6-ad73-12dcdbf91d5a.jpg";
const IMG_SACRED = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/files/0e14db09-2da4-40f4-8089-167df51ef0b0.jpg";
const IMG_TRAIL = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/files/3f65f7c6-ced0-418c-b524-44ead2ccbaf0.jpg";
const IMG_LAKE = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/files/7b4f8f24-c78f-418a-b82a-db0cf4e442ca.jpg";

const NAV_ITEMS = [
  { id: "home", ru: "Главная", sah: "Дьиэ" },
  { id: "map", ru: "Карта", sah: "Карта" },
  { id: "routes", ru: "Маршруты", sah: "Айан суоллар" },
  { id: "sacred", ru: "Священные места", sah: "Ытык сирдэр" },
  { id: "gallery", ru: "Галерея", sah: "Галерея" },
  { id: "culture", ru: "О культуре", sah: "Култуура" },
  { id: "contact", ru: "Контакты", sah: "Сибэтиэй" },
];

const ROUTES = [
  {
    id: 1,
    name: "Ньурба — Мастаах",
    nameSah: "Ньурба — Мастаах айана",
    difficulty: "easy",
    difficultyLabel: "Лёгкий",
    duration: "1 день",
    type: "culture",
    typeLabel: "Культурный",
    distance: "45 км",
    desc: "Маршрут по берегу реки Вилюй через старинные наслеги с посещением ытык-священных мест.",
    img: IMG_TRAIL,
  },
  {
    id: 2,
    name: "Плато Вилюй",
    nameSah: "Биллүүр хайалара",
    difficulty: "medium",
    difficultyLabel: "Средний",
    duration: "3 дня",
    type: "trek",
    typeLabel: "Треккинг",
    distance: "120 км",
    desc: "Путешествие по священным плато с древними тюркскими петроглифами и видами на тайгу.",
    img: IMG_HERO,
  },
  {
    id: 3,
    name: "Ытык Күөл",
    nameSah: "Ытык Күөлгэ айан",
    difficulty: "easy",
    difficultyLabel: "Лёгкий",
    duration: "2 дня",
    type: "spirit",
    typeLabel: "Духовный",
    distance: "80 км",
    desc: "К священному озеру, где по преданиям саха обитают духи-иччи. Место силы и очищения.",
    img: IMG_LAKE,
  },
  {
    id: 4,
    name: "Таёжный перевал",
    nameSah: "Тыа хайатын туоруур",
    difficulty: "hard",
    difficultyLabel: "Сложный",
    duration: "5 дней",
    type: "trek",
    typeLabel: "Треккинг",
    distance: "230 км",
    desc: "Экспедиционный маршрут через нетронутую тайгу Нюрбинского района для опытных путешественников.",
    img: IMG_TRAIL,
  },
  {
    id: 5,
    name: "Серьге-сиэргэ",
    nameSah: "Сэргэ сирдэринэн",
    difficulty: "easy",
    difficultyLabel: "Лёгкий",
    duration: "1 день",
    type: "culture",
    typeLabel: "Культурный",
    distance: "30 км",
    desc: "Обход священных коновязей (сэргэ) Нюрбинского района — живая история народа саха.",
    img: IMG_SACRED,
  },
  {
    id: 6,
    name: "Зимний Вилюй",
    nameSah: "Кыһыҥҥы Биллүүр",
    difficulty: "medium",
    difficultyLabel: "Средний",
    duration: "2 дня",
    type: "winter",
    typeLabel: "Зимний",
    distance: "95 км",
    desc: "Путешествие по льду реки Вилюй с посещением ледяных гротов и зимних священных мест.",
    img: IMG_HERO,
  },
];

const SACRED_PLACES = [
  {
    id: 1,
    name: "Ытык Күөл",
    sub: "Священное озеро",
    desc: "Древнее священное озеро, почитаемое народом саха с незапамятных времён. По преданиям, здесь обитает могущественный иччи — дух-хозяин воды.",
    icon: "Droplets",
    img: IMG_LAKE,
  },
  {
    id: 2,
    name: "Аар Сэргэ",
    sub: "Главная коновязь",
    desc: "Центральный священный сэргэ района — символ связи между мирами саха. Место проведения ысыаха и ритуальных обрядов.",
    icon: "Flame",
    img: IMG_SACRED,
  },
  {
    id: 3,
    name: "Үс Эһэ",
    sub: "Три медведя — место силы",
    desc: "Деревянные скульптуры трёх медведей в таёжном урочище — место силы и духа. По преданиям саха, медведь (эһэ) — священное животное, хранитель леса и предок охотников. Сюда приходят за защитой и силой.",
    icon: "Shield",
    img: IMG_THREE_BEARS,
  },
  {
    id: 4,
    name: "Баай Тиит",
    sub: "Символ богатства и процветания",
    desc: "Эллэй хоhуйбут баай тиитэ — древнее священное дерево Нюрбы, воспетое Эллэем. Символ богатства и процветания народа саха. Обнесено оградой как памятник природы и духовного наследия.",
    icon: "TreePine",
    img: IMG_BAAY_TIIT,
  },
  {
    id: 5,
    name: "Таптал Кэмпириэтэ",
    sub: "Мост Любви — с. Дьиикимдэ",
    desc: "Белый мост с алым сердцем и фонтанами в селе Дьиикимдэ — романтическое место силы Нюрбинского района. Молодожёны приходят сюда загадать желание и скрепить союз. Красота этого места поражает всех путников.",
    icon: "Heart",
    img: IMG_LOVE_BRIDGE,
  },
];

const IMG_BAAY_TIIT = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/6567bfa1-d81f-4ea4-8640-d8ff1f549636.jpg";
const IMG_THREE_BEARS = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/369f07a6-fd7e-4755-8958-d8a92826408a.jpg";
const IMG_LOVE_BRIDGE = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/3b5dacf2-9e80-4cca-a641-43edafc9c614.jpg";

const GALLERY_ITEMS = [
  { img: IMG_BAAY_TIIT, caption: "Баай тиит — символ богатства", captionSah: "Эллэй хоhуйбут баай тиитэ" },
  { img: IMG_THREE_BEARS, caption: "Три медведя — место силы", captionSah: "Үс эһэ — күүс сирэ" },
  { img: IMG_LOVE_BRIDGE, caption: "Мост Любви — с. Дьиикимдэ", captionSah: "Таптал кэмпириэтэ — Дьиикимдэ" },
  { img: IMG_HERO, caption: "Тропа Кочай", captionSah: "Кочай суола" },
  { img: IMG_SACRED, caption: "Сэргэ — знак предков", captionSah: "Сэргэ — эбэ-эhэ бэлиэтэ" },
  { img: IMG_LAKE, caption: "Священное озеро", captionSah: "Ытык Күөл" },
];

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: "bg-emerald-900/60 text-emerald-300 border-emerald-700/40",
  medium: "bg-amber-900/60 text-amber-300 border-amber-700/40",
  hard: "bg-red-900/60 text-red-300 border-red-700/40",
};

const TYPE_OPTIONS = [
  { value: "all", label: "Все типы" },
  { value: "culture", label: "Культурный" },
  { value: "trek", label: "Треккинг" },
  { value: "spirit", label: "Духовный" },
  { value: "winter", label: "Зимний" },
];
const DIFFICULTY_OPTIONS = [
  { value: "all", label: "Любая" },
  { value: "easy", label: "Лёгкий" },
  { value: "medium", label: "Средний" },
  { value: "hard", label: "Сложный" },
];
const DURATION_OPTIONS = [
  { value: "all", label: "Любая" },
  { value: "1", label: "1 день" },
  { value: "2-3", label: "2–3 дня" },
  { value: "4+", label: "4+ дня" },
];

function useInView(ref: React.RefObject<Element>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const [filterDuration, setFilterDuration] = useState("all");
  const [galleryOpen, setGalleryOpen] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => n.id);
    const handler = () => {
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const filteredRoutes = ROUTES.filter((r) => {
    const typeOk = filterType === "all" || r.type === filterType;
    const diffOk = filterDifficulty === "all" || r.difficulty === filterDifficulty;
    const durDays = parseInt(r.duration);
    const durOk =
      filterDuration === "all" ||
      (filterDuration === "1" && durDays === 1) ||
      (filterDuration === "2-3" && durDays >= 2 && durDays <= 3) ||
      (filterDuration === "4+" && durDays >= 4);
    return typeOk && diffOk && durOk;
  });

  return (
    <div className="min-h-screen bg-[#080e14] text-[#e8dcc8] font-sans overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ background: "linear-gradient(to bottom, rgba(8,14,20,0.96) 0%, rgba(8,14,20,0.0) 100%)", backdropFilter: "blur(2px)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold tracking-widest text-[#d4a843]" style={{ letterSpacing: "0.15em" }}>КИЭҤ НЬУРБА</span>
            <span className="text-[10px] tracking-[0.25em] text-[#9b8060] uppercase">Ытык сирдэр</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link text-sm tracking-wide transition-colors duration-300 ${
                  activeSection === item.id ? "text-[#d4a843]" : "text-[#b09870] hover:text-[#e8dcc8]"
                }`}
              >
                {item.ru}
              </button>
            ))}
          </div>

          {/* Mobile burger */}
          <button className="md:hidden text-[#d4a843]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 border-t border-[#2a1e0e] pt-4 pb-2 flex flex-col gap-3 px-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-2 px-3 rounded text-[#b09870] hover:text-[#d4a843] hover:bg-white/5 transition-colors font-sans text-sm tracking-wide"
              >
                <span className="text-[#d4a843] mr-2">◈</span>{item.ru}
                <span className="ml-2 text-[10px] text-[#7a6040]">{item.sah}</span>
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Нюрба" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,14,20,0.3) 0%, rgba(8,14,20,0.65) 50%, rgba(8,14,20,0.97) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(8,14,20,0.4) 100%)" }} />
        </div>

        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in opacity-0-init" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="inline-block text-xs tracking-[0.4em] uppercase text-[#d4a843] border border-[#d4a843]/30 px-4 py-1.5 rounded-full">
              Республика Саха (Якутия) · Нюрбинский район
            </span>
          </div>

          <h1
            className="font-serif font-bold hero-text-shadow mb-3 animate-fade-in opacity-0-init"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 1.05, animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <span className="text-[#d4a843]">КИЭҤ</span> НЬУРБА
          </h1>
          <h2
            className="font-serif font-light hero-text-shadow mb-2 animate-fade-in opacity-0-init"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", lineHeight: 1.1, color: "#e8c87a", animationDelay: "0.55s", animationFillMode: "forwards" }}
          >
            ЫТЫК НЬУРБА
          </h2>

          <p
            className="text-[#9b8060] text-sm tracking-[0.2em] mb-8 animate-fade-in opacity-0-init"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            Путешествие по священным и величественно-красивым местам
          </p>

          <div className="sacred-divider mb-8 animate-fade-in opacity-0-init" style={{ animationDelay: "0.85s", animationFillMode: "forwards" }}>
            <span className="ornament text-2xl">✦</span>
          </div>

          <p
            className="font-serif italic text-[#c8b890] max-w-xl mx-auto leading-relaxed mb-10 animate-fade-in opacity-0-init"
            style={{ fontSize: "1.1rem", animationDelay: "1s", animationFillMode: "forwards" }}
          >
            «Ньурба оройуонун ытык-кэрэ сирдэринэн айанныырга ыйынньык»
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in opacity-0-init" style={{ animationDelay: "1.15s", animationFillMode: "forwards" }}>
            <button
              onClick={() => scrollTo("routes")}
              className="px-8 py-3 font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #c4881e, #d4a843)", color: "#0a0804", fontWeight: 600, borderRadius: "2px", letterSpacing: "0.15em" }}
            >
              Маршруты
            </button>
            <button
              onClick={() => scrollTo("sacred")}
              className="px-8 py-3 font-sans text-sm tracking-widest uppercase border border-[#d4a843]/50 text-[#d4a843] hover:bg-[#d4a843]/10 transition-all duration-300 hover:border-[#d4a843]"
              style={{ borderRadius: "2px", letterSpacing: "0.15em" }}
            >
              Ытык сирдэр
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6a5030] animate-float">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 border-y border-[#1e160a]" style={{ background: "linear-gradient(90deg, rgba(212,168,67,0.03), rgba(212,168,67,0.07), rgba(212,168,67,0.03))" }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "6", label: "Маршрутов", sub: "Айан суоллар" },
            { num: "3+", label: "Священных мест", sub: "Ытык сирдэр" },
            { num: "530", label: "км² территория", sub: "Нюрбинский район" },
            { num: "∞", label: "Лет истории", sub: "Саха омук" },
          ].map((s, i) => (
            <AnimSection key={i} className="text-center">
              <div className="font-serif text-4xl font-bold text-[#d4a843] mb-1">{s.num}</div>
              <div className="text-[#e8dcc8] text-sm">{s.label}</div>
              <div className="text-[#7a6040] text-xs mt-0.5">{s.sub}</div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="py-20 px-6 max-w-7xl mx-auto">
        <AnimSection className="text-center mb-10">
          <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Карта района</span>
          <h2 className="font-serif mt-2 mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#e8dcc8" }}>
            Карта Нюрбинского района
          </h2>
          <div className="sacred-divider max-w-xs mx-auto mb-4">
            <span className="ornament">✦</span>
          </div>
          <p className="text-[#9b8060] max-w-lg mx-auto text-sm leading-relaxed">
            Священные места, маршруты и местность Кочай на интерактивной карте. Нажмите на метку, чтобы узнать подробнее.
          </p>
        </AnimSection>
        <AnimSection>
          <NyurbaMap />
        </AnimSection>
      </section>

      {/* ROUTES */}
      <section id="routes" className="py-24 px-6 max-w-7xl mx-auto">
        <AnimSection>
          <div className="text-center mb-4">
            <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Айан суоллар</span>
          </div>
          <h2 className="font-serif text-center mb-2" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#e8dcc8" }}>
            Маршруты
          </h2>
          <div className="sacred-divider my-6 max-w-xs mx-auto">
            <span className="ornament">✦</span>
          </div>
        </AnimSection>

        {/* Filters */}
        <AnimSection className="mb-10">
          <div className="glass-card rounded p-5 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#9b8060] uppercase mb-2">Тип активности</label>
                <div className="flex flex-wrap gap-2">
                  {TYPE_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => setFilterType(o.value)}
                      className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
                        filterType === o.value
                          ? "bg-[#d4a843] text-[#0a0804] border-[#d4a843] font-semibold"
                          : "border-[#2a1e0e] text-[#9b8060] hover:border-[#d4a843]/40 hover:text-[#d4a843]"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#9b8060] uppercase mb-2">Сложность</label>
                <div className="flex flex-wrap gap-2">
                  {DIFFICULTY_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => setFilterDifficulty(o.value)}
                      className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
                        filterDifficulty === o.value
                          ? "bg-[#d4a843] text-[#0a0804] border-[#d4a843] font-semibold"
                          : "border-[#2a1e0e] text-[#9b8060] hover:border-[#d4a843]/40 hover:text-[#d4a843]"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#9b8060] uppercase mb-2">Длительность</label>
                <div className="flex flex-wrap gap-2">
                  {DURATION_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => setFilterDuration(o.value)}
                      className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
                        filterDuration === o.value
                          ? "bg-[#d4a843] text-[#0a0804] border-[#d4a843] font-semibold"
                          : "border-[#2a1e0e] text-[#9b8060] hover:border-[#d4a843]/40 hover:text-[#d4a843]"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimSection>

        {filteredRoutes.length === 0 ? (
          <AnimSection className="text-center py-16 text-[#7a6040]">
            <Icon name="Search" size={40} className="mx-auto mb-4 opacity-40" />
            <p className="font-serif italic text-xl">Маршруты не найдены</p>
            <p className="text-sm mt-2">Попробуйте изменить фильтры</p>
          </AnimSection>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map((route, i) => (
              <AnimSection key={route.id} className="route-card" style={{ transitionDelay: `${i * 60}ms` } as React.CSSProperties}>
                <div className="glass-card rounded overflow-hidden h-full flex flex-col group cursor-pointer">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={route.img}
                      alt={route.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,20,0.9) 0%, transparent 60%)" }} />
                    <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${DIFFICULTY_COLORS[route.difficulty]}`}>
                        {route.difficultyLabel}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full border bg-[#1a1208]/80 text-[#d4a843] border-[#d4a843]/30">
                        {route.typeLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif text-xl text-[#e8dcc8] mb-0.5">{route.name}</h3>
                    <p className="text-[11px] text-[#7a6040] italic mb-3">{route.nameSah}</p>
                    <p className="text-sm text-[#9b8878] leading-relaxed flex-1 mb-4">{route.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-[#7a6040] pt-3 border-t border-[#1e160a]">
                      <span className="flex items-center gap-1"><Icon name="Clock" size={12} />{route.duration}</span>
                      <span className="flex items-center gap-1"><Icon name="MapPin" size={12} />{route.distance}</span>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        )}
      </section>

      {/* SACRED PLACES */}
      <section id="sacred" className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #080e14 0%, #0d120a 50%, #080e14 100%)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a843' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimSection className="text-center mb-16">
            <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Ытык сирдэр</span>
            <h2 className="font-serif mt-2 mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#e8dcc8" }}>
              Священные места
            </h2>
            <div className="sacred-divider max-w-xs mx-auto">
              <span className="ornament">✦</span>
            </div>
            <p className="text-[#9b8060] max-w-lg mx-auto mt-6 leading-relaxed">
              Места силы и памяти народа саха — священные уголки Нюрбинского района, хранящие тысячелетнюю историю.
            </p>
          </AnimSection>

          <div className="space-y-16">
            {SACRED_PLACES.map((place, i) => (
              <AnimSection key={place.id}>
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
                  <div className="lg:w-1/2 relative">
                    <div className="relative overflow-hidden rounded" style={{ aspectRatio: "16/10" }}>
                      <img src={place.img} alt={place.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(212,168,67,0.15), transparent 50%)" }} />
                    </div>
                    <div
                      className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-[#d4a843]/20 flex items-center justify-center"
                      style={{ background: "radial-gradient(circle, rgba(212,168,67,0.1), transparent)" }}
                    >
                      <Icon name={place.icon} fallback="Star" size={32} className="text-[#d4a843] opacity-70" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 px-4">
                    <p className="text-[11px] tracking-[0.3em] text-[#7a6040] uppercase mb-2">Ытык сир · {i + 1}/{SACRED_PLACES.length}</p>
                    <h3 className="font-serif text-4xl text-[#d4a843] mb-1">{place.name}</h3>
                    <p className="text-[#9b8060] italic mb-5">{place.sub}</p>
                    <div className="w-12 h-px bg-[#d4a843]/40 mb-5" />
                    <p className="text-[#c8b890] leading-loose">{place.desc}</p>
                    <button className="mt-6 text-xs tracking-[0.2em] uppercase text-[#d4a843] border-b border-[#d4a843]/30 pb-0.5 hover:border-[#d4a843] transition-colors">
                      Подробнее →
                    </button>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
        <AnimSection className="text-center mb-16">
          <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Галерея · Gallery</span>
          <h2 className="font-serif mt-2" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#e8dcc8" }}>
            Образы Нюрбы
          </h2>
          <div className="sacred-divider max-w-xs mx-auto mt-4">
            <span className="ornament">✦</span>
          </div>
        </AnimSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <AnimSection
              key={i}
              className={`cursor-pointer group relative overflow-hidden rounded ${i === 0 || i === 3 ? "md:col-span-1 row-span-1" : ""}`}
              style={{ aspectRatio: i % 5 === 0 ? "4/3" : "3/2" } as React.CSSProperties}
            >
              <div className="relative w-full h-full overflow-hidden" style={{ minHeight: "180px" }} onClick={() => setGalleryOpen(i)}>
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(8,14,20,0.9) 0%, rgba(212,168,67,0.1) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-[#e8dcc8] font-serif">{item.caption}</p>
                  <p className="text-[10px] text-[#9b8060] italic">{item.captionSah}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ZoomIn" size={18} className="text-[#d4a843]" />
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

        {/* Lightbox */}
        {galleryOpen !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(4,7,10,0.95)" }}
            onClick={() => setGalleryOpen(null)}
          >
            <button className="absolute top-6 right-6 text-[#d4a843] hover:text-white transition-colors">
              <Icon name="X" size={28} />
            </button>
            <img
              src={GALLERY_ITEMS[galleryOpen].img}
              alt={GALLERY_ITEMS[galleryOpen].caption}
              className="max-w-full max-h-[85vh] object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="font-serif text-[#e8dcc8]">{GALLERY_ITEMS[galleryOpen].caption}</p>
              <p className="text-xs text-[#9b8060] italic mt-1">{GALLERY_ITEMS[galleryOpen].captionSah}</p>
            </div>
          </div>
        )}
      </section>

      {/* CULTURE */}
      <section id="culture" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #080e14, #0a0e08, #080e14)" }}>
        <div className="max-w-5xl mx-auto">
          <AnimSection className="text-center mb-16">
            <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Саха омук</span>
            <h2 className="font-serif mt-2" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#e8dcc8" }}>
              О культуре
            </h2>
            <div className="sacred-divider max-w-xs mx-auto mt-4">
              <span className="ornament">✦</span>
            </div>
          </AnimSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimSection>
              <div className="glass-card rounded p-8 h-full">
                <div className="text-[#d4a843] mb-4"><Icon name="Star" size={28} /></div>
                <h3 className="font-serif text-2xl text-[#e8dcc8] mb-3">Ысыах — праздник солнца</h3>
                <p className="text-[#9b8878] leading-loose text-sm">
                  Ысыах — главный праздник народа саха, встреча лета. В Нюрбинском районе ысыах проводится у древних сэргэ с традиционными играми, обрядами и кумысопитием. Это живое сердце культуры Саха.
                </p>
              </div>
            </AnimSection>
            <AnimSection>
              <div className="glass-card rounded p-8 h-full">
                <div className="text-[#d4a843] mb-4"><Icon name="TreePine" size={28} /></div>
                <h3 className="font-serif text-2xl text-[#e8dcc8] mb-3">Иччи — духи природы</h3>
                <p className="text-[#9b8878] leading-loose text-sm">
                  По верованиям саха, каждое место имеет своего иччи — духа-хозяина. Реки, озёра, горы и деревья живы. Путник должен чтить иччи: просить разрешения войти, оставлять дары и хранить тишину.
                </p>
              </div>
            </AnimSection>
            <AnimSection>
              <div className="glass-card rounded p-8 h-full">
                <div className="text-[#d4a843] mb-4"><Icon name="Flame" size={28} /></div>
                <h3 className="font-serif text-2xl text-[#e8dcc8] mb-3">Сэргэ — ось мира</h3>
                <p className="text-[#9b8878] leading-loose text-sm">
                  Сэргэ (коновязь) — сакральный символ саха, ось мироздания. Ставится у домов, священных мест и на ысыахе. Каждый узор на сэргэ несёт смысл — это послание предков потомкам.
                </p>
              </div>
            </AnimSection>
            <AnimSection>
              <div className="glass-card rounded p-8 h-full">
                <div className="text-[#d4a843] mb-4"><Icon name="BookOpen" size={28} /></div>
                <h3 className="font-serif text-2xl text-[#e8dcc8] mb-3">Олонхо — эпос народа</h3>
                <p className="text-[#9b8878] leading-loose text-sm">
                  Олонхо — якутский героический эпос, включённый в список нематериального наследия ЮНЕСКО. Сказители-олонхосуты пели его ночи напролёт. Места Нюрбы хранят сюжеты древних сказаний.
                </p>
              </div>
            </AnimSection>
          </div>

          {/* Quote */}
          <AnimSection>
            <div className="relative text-center py-12 px-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#d4a843]/20 font-serif" style={{ fontSize: "8rem", lineHeight: 1, top: "-1rem" }}>"</div>
              <blockquote className="font-serif italic relative z-10" style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", color: "#c8b890", lineHeight: 1.7 }}>
                Сир-уот сахалыы тыл иһинэн кэпсэтэр —<br />
                <span className="text-[#9b8060] text-base">земля говорит на языке саха.</span>
              </blockquote>
              <div className="mt-6 text-[10px] tracking-[0.3em] text-[#7a6040] uppercase">Народная мудрость</div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6" style={{ background: "linear-gradient(135deg, #080e14 0%, #0a0c0a 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <AnimSection className="text-center mb-14">
            <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Сибэтиэй</span>
            <h2 className="font-serif mt-2" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#e8dcc8" }}>
              Контакты
            </h2>
            <div className="sacred-divider max-w-xs mx-auto mt-4">
              <span className="ornament">✦</span>
            </div>
          </AnimSection>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["Республика Саха (Якутия)", "Нюрбинский район, г. Нюрба"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (411) 600-00-00", "Пн–Пт 9:00–18:00"] },
              { icon: "Mail", title: "Email", lines: ["info@nyurba-tour.ru", "Ответим в течение дня"] },
            ].map((c, i) => (
              <AnimSection key={i}>
                <div className="glass-card rounded p-6 text-center">
                  <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(212,168,67,0.12)", border: "1px solid rgba(212,168,67,0.2)" }}>
                    <Icon name={c.icon} fallback="Info" size={18} className="text-[#d4a843]" />
                  </div>
                  <h4 className="font-serif text-[#e8dcc8] mb-2">{c.title}</h4>
                  {c.lines.map((l, j) => (
                    <p key={j} className={`text-sm ${j === 0 ? "text-[#c8b890]" : "text-[#7a6040]"}`}>{l}</p>
                  ))}
                </div>
              </AnimSection>
            ))}
          </div>

          {/* Form */}
          <AnimSection>
            <div className="glass-card rounded p-8">
              <h3 className="font-serif text-xl text-[#e8dcc8] mb-6 text-center">Задать вопрос</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded text-sm bg-white/5 border border-[#2a1e0e] text-[#e8dcc8] placeholder-[#5a4030] focus:outline-none focus:border-[#d4a843]/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded text-sm bg-white/5 border border-[#2a1e0e] text-[#e8dcc8] placeholder-[#5a4030] focus:outline-none focus:border-[#d4a843]/50 transition-colors"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Ваш вопрос о маршруте или священных местах..."
                className="w-full px-4 py-3 rounded text-sm bg-white/5 border border-[#2a1e0e] text-[#e8dcc8] placeholder-[#5a4030] focus:outline-none focus:border-[#d4a843]/50 transition-colors resize-none mb-4"
              />
              <button
                className="w-full py-3 text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #c4881e, #d4a843)", color: "#0a0804", borderRadius: "2px" }}
              >
                Отправить
              </button>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1a1208] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-serif text-lg font-bold text-[#d4a843] tracking-widest">КИЭҤ НЬУРБА · ЫТЫК НЬУРБА</div>
            <div className="text-xs text-[#5a4030] mt-1 tracking-widest">Нюрбинский район · Республика Саха (Якутия)</div>
          </div>
          <div className="flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs text-[#7a6040] hover:text-[#d4a843] transition-colors tracking-wide"
              >
                {item.ru}
              </button>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#1a1208] text-center">
          <p className="text-xs text-[#3a2c1a]">✦ Ньурбинский район · Саха Республиката ✦</p>
        </div>
      </footer>
    </div>
  );
}