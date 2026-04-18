import { useState } from "react";
import Icon from "@/components/ui/icon";
import FadeSection from "./FadeSection";
import { AAR_SCHEDULE, WEALTH_SCHEDULE, CARDS, WEALTH_CARDS, INDICATORS } from "./transform-game-data";

export default function TransformGameProgram() {
  const [activeTab, setActiveTab] = useState<"aar" | "wealth">("aar");

  return (
    <>
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
    </>
  );
}
