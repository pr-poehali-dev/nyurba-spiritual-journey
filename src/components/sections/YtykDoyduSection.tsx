import Icon from "@/components/ui/icon";
import { AnimSection } from "@/lib/nyurba-data";

interface YtykDoyduSectionProps {
  setRequestTour: (v: string) => void;
  setRequestOpen: (v: boolean) => void;
}

const DAYS = [
  {
    day: "День 1",
    title: "Знакомство с Нюрбой и дорога к «Ытык Дойду»",
    icon: "Sunrise",
    items: [
      { time: "09:00", text: "Встреча группы в г. Нюрба, краткий брифинг, знакомство с гидом" },
      { time: "10:00–12:00", text: "Обзорная экскурсия по Нюрбе: посещение музея и Мемориала Славы; осмотр памятника Амакинской экспедиции; прогулка по центральной площади" },
      { time: "12:30–13:30", text: "Обед в местном кафе (дегустация якутских блюд: строганина, юкола, кумыс)" },
      { time: "14:00", text: "Трансфер в село Едей (30–40 мин езды)" },
      { time: "15:00–17:30", text: "Экскурсия в музее под открытым небом «Ытык Дойду»: осмотр старинных построек (амбар XIX века, часовня, кузнечный амбар); знакомство с орудиями труда, домашней утварью, традиционной одеждой народа Саха; фотосессия у арт-объектов" },
      { time: "18:00", text: "Заселение в гостевой дом в с. Едей. Ужин с блюдами национальной кухни" },
      { time: "19:30–21:00", text: "Вечер знакомств, рассказ гида о культуре и обычаях Якутии, демонстрация игры на хомусе" },
    ],
  },
  {
    day: "День 2",
    title: "Традиции и природа Нюрбинского края",
    icon: "TreePine",
    items: [
      { time: "08:30–09:30", text: "Завтрак в гостевом доме. Выезд в с. Хангалас" },
      { time: "10:00–13:00", text: "Этнографическая программа: посещение музея «Сата уустара»; мастер-класс по изготовлению якутских сувениров (бисерные украшения, резьба по дереву, гончарное дело); участие в мини-обряде угощения духов (алгыс)" },
      { time: "13:30–14:30", text: "Обед на природе (пикник с якутскими угощениями)" },
      { time: "15:00–18:00", text: "Природная экскурсия вдоль рек Вилюй «Сата сирэ»: осмотр палеонтологических находок (окаменелости, следы древних животных); прогулка по живописной долине, фотосессия; рассказ о флоре и фауне местности Сата" },
      { time: "19:00", text: "Ужин в гостевом доме, общение, обмен впечатлениями" },
      { time: "20:30–22:00", text: "Вечер у костра с рассказами старожилов, песнями и легендами народа Саха" },
    ],
  },
  {
    day: "День 3",
    title: "Прощание с краем и возвращение в Нюрбу",
    icon: "Home",
    items: [
      { time: "09:00–09:30", text: "Завтрак. Выезд в с. Чаппанда" },
      { time: "11:00–12:30", text: "Свободное время в музее: осмотр экспонатов, покупка сувениров" },
      { time: "12:30–13:30", text: "Мастер-класс по приготовлению традиционных якутских блюд (саламата или керчеха)" },
      { time: "14:00–15:00", text: "Обед с дегустацией блюд, приготовленных на мастер-классе" },
      { time: "15:30", text: "Трансфер в г. Нюрба" },
      { time: "16:30", text: "Завершение программы, проводы группы" },
    ],
  },
];

export default function YtykDoyduSection({ setRequestTour, setRequestOpen }: YtykDoyduSectionProps) {
  return (
    <>
      <AnimSection className="mt-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Тур программата</span>
          <h2 className="font-serif mt-2 mb-2" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", color: "#e8dcc8" }}>
            «КИЭҤ НЬУРБА — ЫТЫК НЬУРБА»
          </h2>
          <p className="font-serif text-xl text-[#d4a843] mb-4">«ЫТЫК ДОЙДУ»</p>
          <div className="sacred-divider max-w-xs mx-auto mb-6">
            <span className="ornament">✦</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#9b8060]">
            <span className="flex items-center gap-2"><Icon name="Clock" size={14} />3 дня / 2 ночи</span>
            <span className="flex items-center gap-2"><Icon name="CalendarDays" size={14} />Круглый год</span>
            <span className="flex items-center gap-2"><Icon name="Users" size={14} />Этнография, природа, культура</span>
          </div>
          <p className="text-[#7a6040] text-xs mt-4 max-w-2xl mx-auto leading-relaxed">
            Маршрут: г. Нюрба → с. Едей → с. Хангалас → окрестности Нюрбинского района
          </p>
        </div>
      </AnimSection>

      <div className="space-y-8 mb-16">
        {DAYS.map((d, i) => (
          <AnimSection key={i}>
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 border-b border-[#1e160a]" style={{ background: "linear-gradient(90deg, rgba(212,168,67,0.12), transparent)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)" }}>
                  <Icon name={d.icon} size={18} className="text-[#d4a843]" />
                </div>
                <div>
                  <span className="text-xs text-[#7a6040] tracking-widest uppercase">{d.day}</span>
                  <h3 className="font-serif text-lg text-[#e8dcc8]">{d.title}</h3>
                </div>
              </div>
              <div className="divide-y divide-[#1a1208]">
                {d.items.map((item, j) => (
                  <div key={j} className="flex gap-4 px-6 py-3 hover:bg-[#0d1108]/40 transition-colors">
                    <span className="text-[#d4a843] text-xs font-mono flex-shrink-0 pt-0.5 min-w-[90px]">{item.time}</span>
                    <span className="text-[#9b8878] text-sm leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <AnimSection>
          <div className="glass-card rounded-xl p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="CheckCircle" size={20} className="text-[#d4a843]" />
              <h4 className="font-serif text-[#e8dcc8] text-lg">В стоимость входит</h4>
            </div>
            <ul className="space-y-2 text-[#9b8878] text-sm">
              {["Проживание в гостевом доме (2 ночи)", "Питание (2 завтрака, 3 обеда, 2 ужина)", "Услуги гида-экскурсовода", "Входные билеты в музей", "Все мастер-классы по программе", "Трансфер между Нюрбой и с. Едей-Хангалас", "Снаряжение для пикника и костра"].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[#d4a843] mt-1 flex-shrink-0">·</span>{item}</li>
              ))}
            </ul>
          </div>
        </AnimSection>
        <AnimSection>
          <div className="glass-card rounded-xl p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="PlusCircle" size={20} className="text-[#d4a843]" />
              <h4 className="font-serif text-[#e8dcc8] text-lg">Дополнительно</h4>
            </div>
            <ul className="space-y-2 text-[#9b8878] text-sm">
              {["Фотосессия в национальных костюмах", "Рыбалка или охота (в сезон)", "Поездка к другим достопримечательностям района", "Индивидуальный трансфер из/в аэропорт"].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[#d4a843] mt-1 flex-shrink-0">·</span>{item}</li>
              ))}
            </ul>
          </div>
        </AnimSection>
        <AnimSection>
          <div className="glass-card rounded-xl p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Info" size={20} className="text-[#d4a843]" />
              <h4 className="font-serif text-[#e8dcc8] text-lg">Важные примечания</h4>
            </div>
            <ul className="space-y-2 text-[#9b8878] text-sm">
              {["Рекомендуется тёплая одежда даже летом — климат Якутии суров", "Для участия в обрядах желательно уважительное отношение к традициям народа Саха", "Программа может корректироваться в зависимости от погоды и пожеланий группы"].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[#d4a843] mt-1 flex-shrink-0">·</span>{item}</li>
              ))}
            </ul>
          </div>
        </AnimSection>
      </div>

      <AnimSection className="text-center mt-10">
        <button
          onClick={() => { setRequestTour("«КИЭҤ НЬУРБА — ЫТЫК НЬУРБА» / «ЫТЫК ДОЙДУ»"); setRequestOpen(true); }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-serif text-base transition-all duration-300 hover:scale-105"
          style={{ background: "linear-gradient(135deg, #d4a843, #a87830)", color: "#080e14" }}
        >
          <Icon name="Send" size={16} />
          Оставить заявку на этот тур
        </button>
      </AnimSection>
    </>
  );
}
