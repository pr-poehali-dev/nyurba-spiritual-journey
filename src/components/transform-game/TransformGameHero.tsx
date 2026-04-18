import Icon from "@/components/ui/icon";
import FadeSection from "./FadeSection";
import { IMG_BAAY_TIIT_OLD, IMG_BAAY_TIIT_NEW, IMG_URAHA } from "./transform-game-data";

export default function TransformGameHero() {
  return (
    <>
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
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#program"
              className="px-8 py-3 bg-[#d4a843] text-[#080e14] font-sans font-semibold rounded tracking-wide hover:bg-[#e0b855] transition-colors"
            >
              Программа дня
            </a>
            <a
              href="#signup"
              className="px-8 py-3 border border-[#d4a843]/60 text-[#d4a843] font-sans font-semibold rounded tracking-wide hover:bg-[#d4a843]/10 transition-colors"
            >
              Записаться
            </a>
          </div>
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

      {/* Цитата */}
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
    </>
  );
}
