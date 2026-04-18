import Icon from "@/components/ui/icon";
import { AnimSection } from "@/lib/nyurba-data";

export default function CultureSection() {
  return (
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
  );
}
