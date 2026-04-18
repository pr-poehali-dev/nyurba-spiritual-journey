import Icon from "@/components/ui/icon";
import { AnimSection } from "@/lib/nyurba-data";

interface TourProgramSectionProps {
  setRequestTour: (v: string) => void;
  setRequestOpen: (v: boolean) => void;
}

const DAYS = [
  {
    day: "День 1",
    title: "Начало пути: Аар Хатыҥ и Баай Тиит",
    icon: "Sunrise",
    items: [
      { time: "09:00", text: "Встреча группы в г. Нюрба, брифинг, знакомство с гидом" },
      { time: "10:00–12:00", text: "Трансфер к священному месту Аар Хатыҥ (1,5–2 часа езды)" },
      { time: "12:30–14:30", text: "Посещение Аар Хатыҥ: обряд благословения (алгыс) с участием местного старейшины; рассказ о сакральном значении места; фотосессия на фоне священных объектов" },
      { time: "15:00–16:30", text: "Переезд к месту Баай Тиит" },
      { time: "17:00–19:00", text: "Осмотр Баай Тиит: знакомство с легендами места; медитативная прогулка; угощение травяным чаем с якутскими лепёшками" },
      { time: "20:00", text: "Заселение в гостевой дом. Ужин" },
      { time: "21:00–22:00", text: "Вечер у костра: рассказы о якутской мифологии, игра на хомусе" },
    ],
  },
  {
    day: "День 2",
    title: "Долина Куочай и Джикимдя",
    icon: "Mountain",
    items: [
      { time: "09:00–09:30", text: "Завтрак" },
      { time: "10:00–11:30", text: "Трансфер в долину Куочай" },
      { time: "11:30–14:00", text: "Экскурсия по долине Куочай: пешая прогулка, осмотр природных достопримечательностей, пикник с якутскими угощениями" },
      { time: "14:30–15:30", text: "Переезд в село Джикимдя" },
      { time: "15:30–17:30", text: "Осмотр достопримечательностей Джикимди: посещение «Моста любви», прогулка по селу, знакомство с бытом местных жителей" },
      { time: "18:00", text: "Заселение в гостевой дом. Ужин" },
      { time: "19:30–21:00", text: "Мастер-класс по изготовлению якутских оберегов" },
    ],
  },
  {
    day: "День 3",
    title: "Чукар: священные холмы и музей",
    icon: "Landmark",
    items: [
      { time: "09:00–09:30", text: "Завтрак" },
      { time: "10:00–14:00", text: "Трансфер и экскурсия к «Семи священным холмам» в с. Чукар: медитативная прогулка, обряд загадывания желания" },
      { time: "21:00–22:00", text: "Краеведческий музей «Олох оҥостуута»: осмотр экспозиций, знакомство с этнографическими коллекциями" },
      { time: "22:30", text: "Заселение в гостевой дом в Чукаре. Ужин" },
      { time: "23:00–23:30", text: "Вечер знакомств, общение с местными жителями" },
    ],
  },
  {
    day: "День 4",
    title: "Малджагар и Хаты: история и этнография",
    icon: "BookOpen",
    items: [
      { time: "09:00–09:30", text: "Завтрак" },
      { time: "10:00–13:00", text: "Трансфер в село Малджагар" },
      { time: "14:00–16:00", text: "Погребение национального героя Манчаары: рассказ о жизни и подвигах, возложение цветов. Обед" },
      { time: "15:00–17:00", text: "Село Хаты: этнографический музей, мастер-класс по традиционным ремёслам (резьба по дереву, бисероплетение)" },
      { time: "20:30", text: "Выезд в г. Нюрба" },
      { time: "23:00", text: "Прибытие в Нюрбу, завершение программы" },
    ],
  },
];

export default function TourProgramSection({ setRequestTour, setRequestOpen }: TourProgramSectionProps) {
  return (
    <section id="program" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #080e14, #06100a, #080e14)" }}>
      <div className="max-w-5xl mx-auto">
        <AnimSection className="text-center mb-16">
          <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Тур программата</span>
          <h2 className="font-serif mt-2 mb-3" style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", color: "#e8dcc8" }}>
            Туристическая программа
          </h2>
          <p className="font-serif text-xl text-[#d4a843] mb-2">«Священные места Нюрбинского района»</p>
          <div className="sacred-divider max-w-xs mx-auto mb-6">
            <span className="ornament">✦</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#9b8060]">
            <span className="flex items-center gap-2"><Icon name="Clock" size={14} />4 дня / 3 ночи</span>
            <span className="flex items-center gap-2"><Icon name="Sun" size={14} />Май–сентябрь</span>
            <span className="flex items-center gap-2"><Icon name="Leaf" size={14} />Этнокультурный + экотуризм</span>
          </div>
          <p className="text-[#7a6040] text-xs mt-4 max-w-2xl mx-auto leading-relaxed">
            Маршрут: Нюрба → Аар Хатыҥ → Баай Тиит → долина Куочай → с. Джикимдя → с. Чукар → с. Малджагар → с. Хаты
          </p>
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

        <div className="grid md:grid-cols-3 gap-6">
          <AnimSection>
            <div className="glass-card rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="CheckCircle" size={20} className="text-[#d4a843]" />
                <h4 className="font-serif text-[#e8dcc8] text-lg">В стоимость входит</h4>
              </div>
              <ul className="space-y-2 text-[#9b8878] text-sm">
                {["Проживание в гостевых домах (3 ночи)", "Питание (3 завтрака, 3 обеда, 3 ужина)", "Услуги гида-экскурсовода и участие старейшины в обрядах", "Входные билеты в музеи", "Все мастер-классы по программе", "Трансферы между населёнными пунктами", "Снаряжение для пикника и костра", "Страховка"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d4a843] mt-1 flex-shrink-0">·</span>{item}
                  </li>
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
                {["Профессиональная фотосессия в национальных костюмах", "Расширенная программа по местам силы", "Рыбалка или охота (в сезон)", "Индивидуальный трансфер из/в аэропорт", "Сувенирная продукция ручной работы"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d4a843] mt-1 flex-shrink-0">·</span>{item}
                  </li>
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
                {["Рекомендуется тёплая одежда даже летом — климат Якутии суров", "Для участия в обрядах требуется уважительное отношение к традициям народа Саха", "Программа может корректироваться в зависимости от погоды", "В зимний период часть активностей заменяется на внутренние экскурсии и мастер-классы"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d4a843] mt-1 flex-shrink-0">·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimSection>
        </div>

        <AnimSection className="text-center mt-10">
          <button
            onClick={() => { setRequestTour("«Священные места Нюрбинского района»"); setRequestOpen(true); }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-serif text-base transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #d4a843, #a87830)", color: "#080e14" }}
          >
            <Icon name="Send" size={16} />
            Оставить заявку на этот тур
          </button>
        </AnimSection>

        {/* PROGRAM 2: ЫТЫК ДОЙДУ header stays in parent for section continuity */}
      </div>
    </section>
  );
}
