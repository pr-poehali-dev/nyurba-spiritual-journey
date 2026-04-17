import Icon from "@/components/ui/icon";
import { NAV_ITEMS, AnimSection } from "@/lib/nyurba-data";

interface ContactFooterProps {
  scrollTo: (id: string) => void;
  requestOpen: boolean;
  setRequestOpen: (v: boolean) => void;
  requestTour: string;
  requestForm: { name: string; phone: string; comment: string };
  setRequestForm: (v: { name: string; phone: string; comment: string }) => void;
  requestSent: boolean;
  handleRequestSubmit: (e: React.FormEvent) => void;
}

export default function ContactFooter({
  scrollTo,
  requestOpen, setRequestOpen,
  requestTour,
  requestForm, setRequestForm,
  requestSent,
  handleRequestSubmit,
}: ContactFooterProps) {
  return (
    <>
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
              { icon: "Phone", title: "Телефон", lines: ["+7 968 150-38-98", "Кутаахаан Сэргэн Лэкээрин"] },
              { icon: "Mail", title: "Email", lines: ["sivail@yandex.ru", "Ответим в течение дня"] },
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
          <p className="text-xs text-[#3a2c1a]">✦ Нюрбинский район · Саха Республиката ✦</p>
        </div>
      </footer>

      {/* MODAL REQUEST */}
      {requestOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(8,14,20,0.85)", backdropFilter: "blur(6px)" }}>
          <div className="glass-card rounded-2xl p-8 w-full max-w-md relative" style={{ border: "1px solid rgba(212,168,67,0.25)" }}>
            <button onClick={() => setRequestOpen(false)} className="absolute top-4 right-4 text-[#7a6040] hover:text-[#d4a843] transition-colors">
              <Icon name="X" size={20} />
            </button>
            {requestSent ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={48} className="text-[#d4a843] mx-auto mb-4" />
                <p className="font-serif text-xl text-[#e8dcc8] mb-2">Заявка отправлена!</p>
                <p className="text-[#9b8060] text-sm">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-xs tracking-widest text-[#d4a843] uppercase">Заявка на тур</span>
                  <h3 className="font-serif text-xl text-[#e8dcc8] mt-1">{requestTour}</h3>
                </div>
                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-[#7a6040] uppercase tracking-wider block mb-1">Ваше имя</label>
                    <input
                      required
                      value={requestForm.name}
                      onChange={e => setRequestForm({ ...requestForm, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-[#e8dcc8] outline-none focus:border-[#d4a843] transition-colors"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,67,0.2)" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#7a6040] uppercase tracking-wider block mb-1">Телефон или email</label>
                    <input
                      required
                      value={requestForm.phone}
                      onChange={e => setRequestForm({ ...requestForm, phone: e.target.value })}
                      placeholder="+7 900 000-00-00"
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-[#e8dcc8] outline-none focus:border-[#d4a843] transition-colors"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,67,0.2)" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#7a6040] uppercase tracking-wider block mb-1">Комментарий (необязательно)</label>
                    <textarea
                      rows={3}
                      value={requestForm.comment}
                      onChange={e => setRequestForm({ ...requestForm, comment: e.target.value })}
                      placeholder="Количество человек, даты, пожелания..."
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-[#e8dcc8] outline-none focus:border-[#d4a843] transition-colors resize-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,67,0.2)" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full font-serif text-base transition-all duration-300 hover:scale-[1.02]"
                    style={{ background: "linear-gradient(135deg, #d4a843, #a87830)", color: "#080e14" }}
                  >
                    Отправить заявку
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
