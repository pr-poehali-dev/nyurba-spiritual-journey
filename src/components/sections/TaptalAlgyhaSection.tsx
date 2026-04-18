import Icon from "@/components/ui/icon";
import { AnimSection } from "@/lib/nyurba-data";

interface TaptalAlgyhaSectionProps {
  setRequestTour: (v: string) => void;
  setRequestOpen: (v: boolean) => void;
}

const STEPS = [
  {
    num: "1",
    title: "Подготовка места и встреча гостей",
    time: "15 минут",
    icon: "Flame",
    items: [
      "Украшение места лентами салама, цветами, элементами якутской символики",
      "Разжигание ритуального костра",
      "Встреча молодожёнов и гостей под звуки хомуса",
      "Краткий рассказ об обряде «Алгыс», его значении и правилах поведения",
    ],
  },
  {
    num: "2",
    title: "Очищение и подготовка к благословению",
    time: "10 минут",
    icon: "Wind",
    items: [
      "Окуривание молодожёнов и гостей благовониями (травы, можжевельник)",
      "Предложение испить традиционный напиток (кумыс или травяной чай)",
    ],
  },
  {
    num: "3",
    title: "Обряд благословения «Алгыс»",
    time: "20–30 минут",
    icon: "Star",
    items: [
      "Алгысчыт обращается к духам огня, местности и предков",
      "Произнесение благословений на якутском языке с переводом на русский",
      "Окропление пары кумысом",
      "Нанесение символической отметины золой на лоб молодожёнов — знак защиты",
    ],
  },
  {
    num: "4",
    title: "Круговой танец осуохай",
    time: "10–15 минут",
    icon: "Music",
    items: [
      "Вовлечение молодожёнов и гостей в традиционный танец осуохай",
      "Символизирует единение с природой, общиной и космосом",
      "Музыкальное сопровождение: хомус, барабаны, пение",
    ],
  },
  {
    num: "5",
    title: "Ритуал «Дерево любви»",
    time: "10 минут",
    icon: "Heart",
    items: [
      "Молодожёны привязывают ленты «Салама» на выбранное дерево в аллее любви",
      "Розовая лента — любовь, синяя — верность, жёлтая — счастье",
      "Фотосессия с гостями",
    ],
  },
  {
    num: "6",
    title: "Завершение и памятные подарки",
    time: "5–10 минут",
    icon: "Gift",
    items: [
      "Вручение молодожёнам сертификата о проведении обряда «Таптал Алгыһа»",
      "Подарок: миниатюрный хомус или оберег с якутской символикой",
      "Благодарность гостям, общее фото",
    ],
  },
];

const PACKAGES = [
  {
    name: "Базовый",
    price: "15 000 ₽",
    icon: "Package",
    items: [
      "Проведение обряда «Алгыс»",
      "Участие алгысчыта",
      "Музыкальное сопровождение (хомус)",
      "Ритуальные атрибуты (ленты салама, благовония)",
      "Сертификат",
    ],
    highlight: false,
  },
  {
    name: "Расширенный",
    price: "25 000 ₽",
    icon: "PackagePlus",
    items: [
      "Всё из базового пакета",
      "Круговой танец осуохай с танцорами",
      "Ритуал «Дерево любви»",
      "Памятные подарки молодожёнам",
      "Фотосессия (15–20 фото в обработке)",
    ],
    highlight: true,
  },
  {
    name: "Премиум",
    price: "40 000 ₽",
    icon: "Crown",
    items: [
      "Всё из расширенного пакета",
      "Видеосъёмка (ролик 3–5 минут)",
      "Полное музыкальное сопровождение (ансамбль)",
      "Украшение места проведения",
      "Угощение гостей кумысом / травяным чаем",
    ],
    highlight: false,
  },
];

const EXTRA_OPTIONS = [
  { label: "Индивидуальный текст благословения", price: "3 000 ₽" },
  { label: "Профессиональная фотосессия (1 час)", price: "5 000 ₽" },
  { label: "Видеосъёмка полного мероприятия", price: "10 000 ₽" },
  { label: "Организация фуршета после обряда", price: "по запросу" },
];

const BOOKING_CONDITIONS = [
  "Предоплата 50% при заключении договора",
  "Оставшаяся сумма в день проведения",
  "Бронирование даты за 1–2 месяца",
  "Выбор времени: утро, день или вечер",
  "При неблагоприятной погоде — перенос или альтернативное помещение",
];

export default function TaptalAlgyhaSection({ setRequestTour, setRequestOpen }: TaptalAlgyhaSectionProps) {
  return (
    <section id="taptal" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #080e14, #0a0608, #080e14)" }}>
      <div className="max-w-5xl mx-auto">
        <AnimSection className="text-center mb-16">
          <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Платная услуга</span>
          <h2 className="font-serif mt-2 mb-2" style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", color: "#e8dcc8" }}>
            Таптал Алгыһа
          </h2>
          <p className="font-serif text-xl text-[#d4a843] mb-2">Благословение молодожёнов</p>
          <div className="sacred-divider max-w-xs mx-auto mb-6">
            <span className="ornament">✦</span>
          </div>
          <p className="text-[#9b8060] text-sm max-w-2xl mx-auto leading-relaxed">
            Традиционный якутский обряд «Алгыс» для молодожёнов в Аллее любви в местности Кочай — живописное место с особой энергетикой.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-[#9b8060]">
            <span className="flex items-center gap-2"><Icon name="Clock" size={14} />60–90 минут</span>
            <span className="flex items-center gap-2"><Icon name="MapPin" size={14} />Местность Кочай</span>
            <span className="flex items-center gap-2"><Icon name="Heart" size={14} />Для молодожёнов</span>
          </div>
        </AnimSection>

        {/* Цель и участники */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimSection>
            <div className="glass-card rounded-xl p-8 h-full">
              <div className="text-[#d4a843] mb-4"><Icon name="Star" size={28} /></div>
              <h3 className="font-serif text-xl text-[#e8dcc8] mb-4">Цель обряда</h3>
              <ul className="space-y-3 text-[#9b8878] text-sm leading-relaxed">
                {[
                  "Символически соединить пару с силами природы и духами местности",
                  "Привлечь благополучие, гармонию и счастье в семейную жизнь",
                  "Создать незабываемое культурное событие в день свадьбы",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d4a843] mt-1 flex-shrink-0">·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimSection>
          <AnimSection>
            <div className="glass-card rounded-xl p-8 h-full">
              <div className="text-[#d4a843] mb-4"><Icon name="Users" size={28} /></div>
              <h3 className="font-serif text-xl text-[#e8dcc8] mb-4">Участники</h3>
              <ul className="space-y-3 text-[#9b8878] text-sm leading-relaxed">
                {[
                  "Алгысчыт — опытный носитель традиций, ведущий обряда",
                  "Музыканты — исполнители на хомусе и национальных инструментах",
                  "Танцоры — для кругового танца осуохай",
                  "Молодожёны и гости",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d4a843] mt-1 flex-shrink-0">·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimSection>
        </div>

        {/* Программа мероприятия */}
        <AnimSection className="mb-4">
          <h3 className="font-serif text-2xl text-[#e8dcc8] text-center mb-8">Программа мероприятия</h3>
        </AnimSection>
        <div className="space-y-4 mb-14">
          {STEPS.map((step, i) => (
            <AnimSection key={i}>
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="flex items-center gap-4 px-6 py-4 border-b border-[#1e0a14]" style={{ background: "linear-gradient(90deg, rgba(212,100,120,0.10), transparent)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-serif font-bold text-[#d4a843]" style={{ background: "rgba(212,168,67,0.12)", border: "1px solid rgba(212,168,67,0.3)" }}>
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-[#e8dcc8]">{step.title}</h3>
                  </div>
                  <span className="text-xs text-[#7a6040] tracking-wider flex-shrink-0">{step.time}</span>
                </div>
                <div className="divide-y divide-[#1a0a10]">
                  {step.items.map((item, j) => (
                    <div key={j} className="flex gap-3 px-6 py-3">
                      <span className="text-[#d4a843] mt-1 flex-shrink-0">·</span>
                      <span className="text-[#9b8878] text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

        {/* Пакеты */}
        <AnimSection className="mb-8">
          <h3 className="font-serif text-2xl text-[#e8dcc8] text-center mb-10">Стоимость услуги</h3>
        </AnimSection>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PACKAGES.map((pkg, i) => (
            <AnimSection key={i}>
              <div
                className={`rounded-xl p-7 h-full flex flex-col ${pkg.highlight ? "" : "glass-card"}`}
                style={pkg.highlight ? { background: "linear-gradient(160deg, rgba(212,168,67,0.18), rgba(168,120,48,0.10))", border: "1px solid rgba(212,168,67,0.45)" } : {}}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon name={pkg.icon as "Package"} size={22} className="text-[#d4a843]" />
                  <h4 className="font-serif text-[#e8dcc8] text-xl">{pkg.name}</h4>
                </div>
                <div className="font-serif text-3xl text-[#d4a843] mb-5">{pkg.price}</div>
                <ul className="space-y-2 text-[#9b8878] text-sm flex-1">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[#d4a843] mt-1 flex-shrink-0">·</span>{item}
                    </li>
                  ))}
                </ul>
                {pkg.highlight && (
                  <div className="mt-5 text-center">
                    <span className="text-xs tracking-widest text-[#d4a843] uppercase">Популярный выбор</span>
                  </div>
                )}
              </div>
            </AnimSection>
          ))}
        </div>

        {/* Доп опции */}
        <AnimSection>
          <div className="glass-card rounded-xl p-7 mb-10">
            <div className="flex items-center gap-3 mb-5">
              <Icon name="PlusCircle" size={20} className="text-[#d4a843]" />
              <h4 className="font-serif text-[#e8dcc8] text-lg">Дополнительные опции</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-[#9b8878]">
              {EXTRA_OPTIONS.map((opt, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-[#1e0a14]">
                  <span>{opt.label}</span>
                  <span className="text-[#d4a843] font-mono text-xs ml-4 flex-shrink-0">{opt.price}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimSection>

        {/* Условия */}
        <AnimSection>
          <div className="glass-card rounded-xl p-7 mb-12">
            <div className="flex items-center gap-3 mb-5">
              <Icon name="Info" size={20} className="text-[#d4a843]" />
              <h4 className="font-serif text-[#e8dcc8] text-lg">Условия бронирования</h4>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[#9b8878]">
              {BOOKING_CONDITIONS.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#d4a843] mt-1 flex-shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </AnimSection>

        <AnimSection className="text-center">
          <button
            onClick={() => { setRequestTour("«Таптал Алгыһа» — Благословение молодожёнов"); setRequestOpen(true); }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-serif text-base transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #d4a843, #a87830)", color: "#080e14" }}
          >
            <Icon name="Heart" size={16} />
            Забронировать обряд
          </button>
        </AnimSection>
      </div>
    </section>
  );
}
