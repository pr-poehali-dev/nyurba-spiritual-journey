import Icon from "@/components/ui/icon";
import { NAV_ITEMS, IMG_HERO, AnimSection } from "@/lib/nyurba-data";

interface HeroNavProps {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function HeroNav({ activeSection, menuOpen, setMenuOpen, scrollTo }: HeroNavProps) {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ background: "linear-gradient(to bottom, rgba(8,14,20,0.96) 0%, rgba(8,14,20,0.0) 100%)", backdropFilter: "blur(2px)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold tracking-widest text-[#d4a843]" style={{ letterSpacing: "0.15em" }}>КИЭҤ НЬУРБА</span>
            <span className="text-[10px] tracking-[0.25em] text-[#9b8060] uppercase">Ытык сирдэр</span>
          </button>

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

          <button className="md:hidden text-[#d4a843]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

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
    </>
  );
}
