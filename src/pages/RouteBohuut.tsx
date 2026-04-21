import Icon from "@/components/ui/icon";

const IMG_PORTRAIT = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/fe9ad707-4f2b-49fe-a2a0-95ff6961129c.jpg";
const IMG_CHURCH = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/2a9b00af-32cc-4b8f-9c41-f0005410b268.jpg";
const IMG_HOUSE = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/dd73ff94-8b31-46c6-8e96-efb6f2f38b34.jpg";
const IMG_CHAPPANDA = "https://cdn.poehali.dev/projects/43add130-f0a3-4685-b545-30941f096855/bucket/21e66b4b-ea57-4849-b1d9-916ff0793f0c.jpg";

export default function RouteBohuut() {
  return (
    <div className="min-h-screen" style={{ background: "#080e14", color: "#e8dcc8" }}>

      {/* HEADER */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={IMG_CHURCH} alt="Чаппанда" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,14,20,0.3) 0%, rgba(8,14,20,0.95) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-5xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-[#d4a843] text-sm mb-6 hover:opacity-80 transition-opacity">
            <Icon name="ArrowLeft" size={16} />
            Вернуться на главную
          </a>
          <div className="mb-3">
            <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Культурный маршрут · 60 км · 1 день</span>
          </div>
          <h1 className="font-serif mb-2" style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", lineHeight: 1.1 }}>
            Маршрут Боһуут
          </h1>
          <p className="text-[#9b8060] italic font-serif text-lg">Боһуут айана</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* INTRO BADGES */}
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { icon: "Clock", text: "1 день" },
            { icon: "MapPin", text: "60 км" },
            { icon: "Users", text: "Группа / индивидуально" },
            { icon: "Star", text: "Лёгкий уровень" },
          ].map((b) => (
            <span key={b.text} className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-[#2a1e0e] text-[#b09870]">
              <Icon name={b.icon as "Clock"} size={14} className="text-[#d4a843]" />
              {b.text}
            </span>
          ))}
        </div>

        {/* PERSONAL SECTION */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-start">
          <div>
            <span className="text-xs tracking-[0.3em] text-[#d4a843] uppercase">Герой маршрута</span>
            <h2 className="font-serif text-3xl mt-2 mb-4 text-[#e8dcc8]">Степан Алексеев-Боһуут</h2>
            <p className="text-[#9b8060] text-sm leading-relaxed mb-4">
              1865–1916 · Купец, политический деятель и меценат
            </p>
            <p className="text-[#b09870] leading-relaxed mb-4">
              Степан Прокопьевич Алексеев-Боһуут сыграл значительную роль в социально-экономическом и культурном развитии Якутии конца XIX — начала XX века. Уроженец Бестяхского наслега Мархинского (ныне Нюрбинского) улуса, он прошёл путь от писаря до головы улуса и почётного мирового судьи.
            </p>
            <p className="text-[#b09870] leading-relaxed">
              Этот маршрут проходит по местам его жизни и деятельности: родному наслегу, построенной им церкви и усадьбе, сохранившейся до наших дней.
            </p>
          </div>
          <div className="relative">
            <img
              src={IMG_PORTRAIT}
              alt="Степан Алексеев-Боһуут"
              className="w-full max-w-xs mx-auto rounded object-cover"
              style={{ filter: "sepia(20%) contrast(1.05)", aspectRatio: "3/4" }}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs px-4">
              <div className="text-center text-[10px] text-[#7a6040] tracking-widest py-2">
                Степан Прокопьевич Алексеев-Боһуут
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-[#1e160a]" />
          <span className="text-[#d4a843] text-xl">✦</span>
          <div className="flex-1 h-px bg-[#1e160a]" />
        </div>

        {/* BIOGRAPHY */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] text-[#d4a843] uppercase">Биография</span>
          <h2 className="font-serif text-2xl mt-2 mb-8 text-[#e8dcc8]">Жизненный путь</h2>

          <div className="space-y-0">
            {[
              { year: "1865–1866", text: "Рождение в Бестяхском наслеге Мархинского улуса Вилюйского округа. Сын Прокопия Алексеева (Бууска Борокуоппай), старосты наслега." },
              { year: "1877–1881", text: "Обучение в Мархинской народной школе." },
              { year: "После 1881", text: "Учёба в Якутской мужской прогимназии." },
              { year: "1881", text: "Избран писарем Бестяхского и Таркаинского родовых управлений." },
              { year: "1888", text: "Инициировал строительство Чаппангдинской Вознесенской церкви." },
              { year: "1892–1901", text: "Кандидат в выборные и выборный Мархинской инородной управы — три срока подряд." },
              { year: "1903–1909", text: "Почётный мировой судья Вилюйского округа (должность утверждалась Министерством юстиции Российской империи)." },
              { year: "1906", text: "Восстановление Чаппангдинской Вознесенской церкви после пожара." },
              { year: "1910–1913", text: "Голова Мархинского улуса. В 1913 году подал рапорт об освобождении от должности по состоянию здоровья." },
              { year: "1912", text: "Построил церковно-приходскую школу в Бестяхском наслеге и стал её попечителем." },
              { year: "1913", text: "Организовал открытие почтово-телеграфного отделения в улусе." },
              { year: "1915", text: "Представлен к 7-й награде за заслуги по духовному ведомству епископом Якутским и Вилюйским Мелетием." },
              { year: "1916", text: "Скончался в возрасте 50 лет. Похоронен на территории построенной им Чаппангдинской Вознесенской церкви." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-[#d4a843] mt-1.5 flex-shrink-0" />
                  {i < 12 && <div className="w-px flex-1 bg-[#1e160a] mt-1" />}
                </div>
                <div className="pb-6">
                  <span className="text-xs text-[#d4a843] tracking-widest font-mono">{item.year}</span>
                  <p className="text-[#9b8878] text-sm leading-relaxed mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PHOTOS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div className="overflow-hidden rounded">
            <img src={IMG_HOUSE} alt="Усадьба Боһуута" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
            <p className="text-[10px] text-[#7a6040] tracking-widest mt-2 text-center">Усадьба Степана Алексеева-Боһуута</p>
          </div>
          <div className="overflow-hidden rounded">
            <img src={IMG_CHAPPANDA} alt="Чаппанда" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
            <p className="text-[10px] text-[#7a6040] tracking-widest mt-2 text-center">Чаппанда — наслег, связанный с именем Боһуута</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-[#1e160a]" />
          <span className="text-[#d4a843] text-xl">✦</span>
          <div className="flex-1 h-px bg-[#1e160a]" />
        </div>

        {/* CONTRIBUTIONS */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] text-[#d4a843] uppercase">Вклад в развитие региона</span>
          <h2 className="font-serif text-2xl mt-2 mb-8 text-[#e8dcc8]">Наследие Боһуута</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "Building2",
                title: "Инфраструктура",
                items: [
                  "Здания Мархинской инородной управы и Нюрбинской лечебницы",
                  "Телеграфные линии внутри улуса и до границ соседних улусов",
                  "Почтово-телеграфное отделение (1913)",
                  "Дороги и мосты",
                  "Чаппангдинская Вознесенская церковь (1888)",
                ],
              },
              {
                icon: "GraduationCap",
                title: "Образование",
                items: [
                  "Церковно-приходская школа в Бестяхском наслеге (1912)",
                  "Пристрой к школе (1914)",
                  "Участие в Якутском областном совете попечительства над бедными учениками",
                ],
              },
              {
                icon: "Wheat",
                title: "Сельское хозяйство",
                items: [
                  "Расчистил лес под пашни — до 100 га",
                  "Распахал 40 га полей",
                  "Мелиоративные работы (спуск воды из озёр)",
                  "Плуги, культиваторы, сеялки, жатки, молотилка",
                  "До 300 человек ежегодно для уборки урожая",
                ],
              },
              {
                icon: "Heart",
                title: "Благотворительность",
                items: [
                  "300 руб. на строительство Чаппангдинской церкви",
                  "Помощь Иркутскому обществу борьбы с заразными болезнями",
                  "Поддержка Якутского приюта арестантских детей",
                  "Вклад в строительство Соборного храма в Варшаве",
                  "Помощь больным и раненым участникам войны",
                ],
              },
            ].map((block) => (
              <div key={block.title} className="p-6 rounded border border-[#1e160a]" style={{ background: "rgba(212,168,67,0.03)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(212,168,67,0.1)" }}>
                    <Icon name={block.icon as "Heart"} size={16} className="text-[#d4a843]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#e8dcc8]">{block.title}</h3>
                </div>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#9b8878]">
                      <span className="text-[#d4a843] mt-0.5 flex-shrink-0">◈</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* COMMERCE */}
        <div className="mb-16 p-8 rounded border border-[#2a1e0e]" style={{ background: "linear-gradient(135deg, rgba(212,168,67,0.04), rgba(212,168,67,0.01))" }}>
          <span className="text-xs tracking-[0.3em] text-[#d4a843] uppercase">Коммерческая деятельность</span>
          <h2 className="font-serif text-2xl mt-2 mb-6 text-[#e8dcc8]">Купец и предприниматель</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            {[
              { num: "80 000", label: "руб.", sub: "Годовой торговый оборот" },
              { num: "40 000", label: "руб.", sub: "Оборот с домом «Коковин и Басов»" },
              { num: "300", label: "чел.", sub: "Ежегодно привлекал к сельхозработам" },
            ].map((s) => (
              <div key={s.sub} className="text-center">
                <div className="font-serif text-3xl font-bold text-[#d4a843]">{s.num}</div>
                <div className="text-[#e8dcc8] text-xs tracking-widest">{s.label}</div>
                <div className="text-[#7a6040] text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
          <ul className="space-y-2">
            {[
              "Постоянные связи с Московским торговым домом «Коковин и Басов»",
              "Сотрудничество с крупными купцами Якутии: Никифоровым, Кушнаревым, Расторгуевым",
              "Финансово-экономические связи с торговым домом золотопромышленников Громовых",
              "Подрядчик по заготовке и доставке леса на Бодайбинские прииски",
              "Закупка мяса и масла у населения, поставки в Бодайбо",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#9b8878]">
                <span className="text-[#d4a843] mt-0.5 flex-shrink-0">◈</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* MEMORY */}
        <div className="mb-16 text-center">
          <span className="text-xs tracking-[0.3em] text-[#d4a843] uppercase">Память</span>
          <h2 className="font-serif text-2xl mt-2 mb-4 text-[#e8dcc8]">Памятник</h2>
          <p className="text-[#9b8878] max-w-xl mx-auto leading-relaxed">
            24 августа 2015 года в Вилюйском улусе был открыт и освящён памятник Степану Прокопьевичу Алексееву-Боһууту — в знак признания его выдающегося вклада в развитие Якутии.
          </p>
        </div>

        {/* SOURCES */}
        <div className="border-t border-[#1e160a] pt-10">
          <span className="text-xs tracking-[0.3em] text-[#7a6040] uppercase">Источники</span>
          <ul className="mt-4 space-y-2">
            {[
              "Петров И. И. С. П. Алексеев-Боьуут — меценат // Молодой учёный. — 2014. — № 20.2 (79.2). — С. 38–39.",
              "Боьуут-кулуба / сост. Н. Н. Алексеев. — Якутск: Бичик, 2006.",
              "Меценат и попечитель С. П. Алексеев — Боьуут: Сборник документов / ред. В. Н. Иванов; сост. Э. Н. Кононова, А. А. Калашников. — Якутск, 2007. — 364 с.",
            ].map((s) => (
              <li key={s} className="text-xs text-[#5a4030] leading-relaxed flex items-start gap-2">
                <span className="text-[#3a2a10] mt-0.5">—</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-12 text-center">
          <a
            href="/#routes"
            className="inline-flex items-center gap-3 px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #c4881e, #d4a843)", color: "#0a0804", fontWeight: 600, borderRadius: "2px", letterSpacing: "0.15em" }}
          >
            <Icon name="ArrowLeft" size={16} />
            К маршрутам
          </a>
        </div>
      </div>
    </div>
  );
}
