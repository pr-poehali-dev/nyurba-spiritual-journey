import { useState, useEffect, useRef } from "react";

export const IMG_HERO = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/93aa2806-e343-42c6-ad73-12dcdbf91d5a.jpg";
export const IMG_SACRED = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/files/0e14db09-2da4-40f4-8089-167df51ef0b0.jpg";
export const IMG_TRAIL = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/files/3f65f7c6-ced0-418c-b524-44ead2ccbaf0.jpg";
export const IMG_LAKE = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/files/7b4f8f24-c78f-418a-b82a-db0cf4e442ca.jpg";
export const IMG_BAAY_TIIT = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/6567bfa1-d81f-4ea4-8640-d8ff1f549636.jpg";
export const IMG_THREE_BEARS = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/369f07a6-fd7e-4755-8958-d8a92826408a.jpg";
export const IMG_LOVE_BRIDGE = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/3b5dacf2-9e80-4cca-a641-43edafc9c614.jpg";
export const IMG_AAR_KHATYN = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/4064e82b-f1b6-4f7d-ae5b-ea8af7916e90.jpg";
export const IMG_SETTE_MYRAАН = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/ee79571e-2e1c-415b-80be-1aac72e87938.jpg";
export const IMG_SATA_KHAYATA = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/7edbc879-dcbb-4043-bcd8-25999a23f3d7.jpg";
export const IMG_MOKHULU = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/e4f6042c-0b3b-4bb2-b160-35a2bf148ace.jpg";

export const NAV_ITEMS = [
  { id: "home", ru: "Главная", sah: "Дьиэ" },
  { id: "map", ru: "Карта", sah: "Карта" },
  { id: "routes", ru: "Маршруты", sah: "Айан суоллар" },
  { id: "sacred", ru: "Священные места", sah: "Ытык сирдэр" },
  { id: "gallery", ru: "Галерея", sah: "Галерея" },
  { id: "culture", ru: "О культуре", sah: "Култуура" },
  { id: "program", ru: "Программа тура", sah: "Тур программата" },
  { id: "contact", ru: "Контакты", sah: "Сибэтиэй" },
];

export const ROUTES = [
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
    nameSah: "БҮЛҮҮ хайалара",
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
    id: 6,
    name: "Зимний Вилюй",
    nameSah: "Кыһыҥҥы БҮЛҮҮ",
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

export const SACRED_PLACES = [
  {
    id: 1,
    name: "Ытык Күөл",
    sub: "Священное озеро",
    desc: "Древнее священное озеро, почитаемое народом саха с незапамятных времён. По преданиям, здесь обитает могущественный иччи — дух-хозяин воды.",
    icon: "Droplets",
    img: IMG_LAKE,
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
    name: "ТАПТАЛ ДАЛАҺАТА",
    sub: "Мост Любви — с. Дьиикимдэ",
    desc: "Белый мост с алым сердцем и фонтанами в селе Дьиикимдэ — романтическое место силы Нюрбинского района. Молодожёны приходят сюда загадать желание и скрепить союз. Красота этого места поражает всех путников.",
    icon: "Heart",
    img: IMG_LOVE_BRIDGE,
  },
  {
    id: 6,
    name: "Аар Хатыҥ",
    sub: "Символ веры народа саха",
    desc: "Аар Хатыҥ — Великая Берёза, священное дерево веры саха. Обнесена деревянной оградой как живой памятник духовной силы народа. По верованиям, береза соединяет три мира: верхний, средний и нижний. К ней приходят просить благословения, здоровья и защиты.",
    icon: "Leaf",
    img: IMG_AAR_KHATYN,
  },
  {
    id: 7,
    name: "Сэттэ Ытык Мыраан",
    sub: "Чудотворные вершины — с. Чукар",
    desc: "Семь священных холмов в селе Чукар — «Бага санааны толорор хаартыска». Место, где сбываются самые сокровенные желания. Луга у подножия холмов цветут дикими ирисами, а сами вершины считаются обителью добрых духов-иччи. Паломники приходят сюда с чистым сердцем.",
    icon: "Mountain",
    img: IMG_SETTE_MYRAАН,
  },
  {
    id: 8,
    name: "Сата Хайата",
    sub: "Место силы на реке Вилюй",
    desc: "Белые меловые скалы Сата Хайата отражаются в зеркальной глади Вилюя — одно из самых величественных мест Нюрбинского района. Осенью берега пламенеют золотом. По преданиям саха, здесь живёт могущественный иччи скалы, дающий силу и ясность духа всем, кто приходит с уважением.",
    icon: "Waves",
    img: IMG_SATA_KHAYATA,
  },
  {
    id: 9,
    name: "Мохулу",
    sub: "Священное дерево — с. Малдьаҕар",
    desc: "Мохулу — древний исполин с раскидистыми ветвями-руками в таёжной роще села Малдьаҕар. Этот могучий лиственничный патриарх почитается как живое воплощение иччи леса. Корни уходят в землю предков, крона тянется к небесным айыы. Место тишины, размышления и связи с родом.",
    icon: "TreeDeciduous",
    img: IMG_MOKHULU,
  },
];

export const GALLERY_ITEMS = [
  { img: IMG_BAAY_TIIT, caption: "Баай тиит — символ богатства", captionSah: "Эллэй хоhуйбут баай тиитэ" },
  { img: IMG_THREE_BEARS, caption: "Три медведя — место силы", captionSah: "Үс эһэ — күүс сирэ" },
  { img: IMG_LOVE_BRIDGE, caption: "Мост Любви — с. Дьиикимдэ", captionSah: "ТАПТАЛ ДАЛАҺАТА — Дьиикимдэ" },
  { img: IMG_HERO, caption: "Тропа Кочай", captionSah: "Кочай суола" },
  { img: IMG_LAKE, caption: "Священное озеро", captionSah: "Ытык Күөл" },
  { img: IMG_AAR_KHATYN, caption: "Аар Хатыҥ — символ веры", captionSah: "Итэҕэл бэлиэтэ — Аар Хатыҥ" },
  { img: IMG_SETTE_MYRAАН, caption: "Сэттэ ытык мыраан — с. Чукар", captionSah: "Бага санааны толорор хаартыска" },
  { img: IMG_SATA_KHAYATA, caption: "Сата Хайата — место силы", captionSah: "Сата Хайата — күүс сирэ" },
  { img: IMG_MOKHULU, caption: "Мохулу — с. Малдьаҕар", captionSah: "Малдьаҕар ытык мохулута" },
];

export const DIFFICULTY_COLORS: Record<string, string> = {
  easy: "bg-emerald-900/60 text-emerald-300 border-emerald-700/40",
  medium: "bg-amber-900/60 text-amber-300 border-amber-700/40",
  hard: "bg-red-900/60 text-red-300 border-red-700/40",
};

export const TYPE_OPTIONS = [
  { value: "all", label: "Все типы" },
  { value: "culture", label: "Культурный" },
  { value: "trek", label: "Треккинг" },
  { value: "spirit", label: "Духовный" },
  { value: "winter", label: "Зимний" },
];

export const DIFFICULTY_OPTIONS = [
  { value: "all", label: "Любая" },
  { value: "easy", label: "Лёгкий" },
  { value: "medium", label: "Средний" },
  { value: "hard", label: "Сложный" },
];

export const DURATION_OPTIONS = [
  { value: "all", label: "Любая" },
  { value: "1", label: "1 день" },
  { value: "2-3", label: "2–3 дня" },
  { value: "4+", label: "4+ дня" },
];

export function useInView(ref: React.RefObject<Element>) {
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

export function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
