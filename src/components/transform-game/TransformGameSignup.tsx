import { useState, FormEvent } from "react";
import Icon from "@/components/ui/icon";
import FadeSection from "./FadeSection";
import { IMG_MEADOW, SEND_URL } from "./transform-game-data";

export default function TransformGameSignup() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await fetch(SEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tour: "Аар Куйаар / Вершина богатства" }),
      });
      setSent(true);
      setForm({ name: "", phone: "", comment: "" });
    } catch {
      setError("Ошибка отправки. Попробуйте ещё раз.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Участникам */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG_MEADOW} alt="Природа Нюрбы" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080e14] via-transparent to-[#080e14]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <FadeSection className="text-center mb-10">
            <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase mb-3">Для участников</p>
            <h2 className="font-serif text-4xl text-[#e8dcc8]">Подготовка</h2>
          </FadeSection>
          <FadeSection>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { icon: "Shirt", title: "Одежда", desc: "Оденьтесь по погоде, удобная одежда и обувь для прогулок по природе" },
                { icon: "Droplets", title: "Вода и перекус", desc: "Возьмите воду и лёгкий перекус с собой" },
                { icon: "Heart", title: "Открытость", desc: "Будьте открыты к новому опыту — игры работают через метафоры и интуицию" },
                { icon: "Users", title: "Группа", desc: "10–14 участников. Очный формат с полным погружением в природную среду" },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-lg p-5 flex gap-4">
                  <Icon name={item.icon} size={24} className="text-[#d4a843] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg text-[#e8dcc8] mb-1">{item.title}</h4>
                    <p className="text-[#b8a898] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Форма записи */}
      <section id="signup" className="py-20 px-4 max-w-2xl mx-auto">
        <FadeSection className="text-center mb-10">
          <p className="text-[#d4a843] text-xs tracking-[0.3em] uppercase mb-3">Участие</p>
          <h2 className="font-serif text-4xl text-[#e8dcc8] mb-2">Записаться</h2>
          <p className="text-[#b8a898] text-sm">Оставьте имя и контакт — ведущий свяжется с вами для подтверждения</p>
        </FadeSection>
        <FadeSection>
          {sent ? (
            <div className="glass-card rounded-xl p-10 text-center border border-[#d4a843]/20">
              <Icon name="CheckCircle" size={48} className="text-[#d4a843] mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-[#e8dcc8] mb-2">Заявка отправлена!</h3>
              <p className="text-[#b8a898] text-sm">Ведущий свяжется с вами в ближайшее время</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-[#d4a843] text-sm underline underline-offset-4 hover:text-[#e0b855] transition-colors"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 border border-[#d4a843]/10 space-y-5">
              <div>
                <label className="block text-xs text-[#b8a898] mb-2 tracking-wide uppercase">Имя *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="w-full bg-white/5 border border-[#d4a843]/20 rounded px-4 py-3 text-[#e8dcc8] text-sm placeholder-[#b8a898]/50 focus:outline-none focus:border-[#d4a843]/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#b8a898] mb-2 tracking-wide uppercase">Телефон / WhatsApp *</label>
                <input
                  type="text"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-white/5 border border-[#d4a843]/20 rounded px-4 py-3 text-[#e8dcc8] text-sm placeholder-[#b8a898]/50 focus:outline-none focus:border-[#d4a843]/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#b8a898] mb-2 tracking-wide uppercase">Комментарий</label>
                <textarea
                  rows={3}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder="Вопросы, пожелания..."
                  className="w-full bg-white/5 border border-[#d4a843]/20 rounded px-4 py-3 text-[#e8dcc8] text-sm placeholder-[#b8a898]/50 focus:outline-none focus:border-[#d4a843]/60 transition-colors resize-none"
                />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-[#d4a843] text-[#080e14] font-sans font-semibold rounded tracking-wide hover:bg-[#e0b855] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {sending ? (
                  <>
                    <Icon name="Loader" size={16} className="animate-spin" />
                    Отправляю...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={16} />
                    Записаться на программу
                  </>
                )}
              </button>
              <p className="text-center text-[#b8a898] text-xs opacity-60">
                Место проведения: Баай Тиит, Нюрбинский район · 10–14 участников
              </p>
            </form>
          )}
        </FadeSection>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-[#d4a843]/10">
        <p className="font-serif text-2xl text-[#d4a843] mb-2">Баай Тиит</p>
        <p className="text-[#b8a898] text-sm">Нюрбинский район · Республика Саха (Якутия)</p>
        <div className="sacred-divider max-w-xs mx-auto my-5"><span className="ornament text-xl">✦</span></div>
        <p className="text-[#b8a898] text-xs opacity-60">Программа трансформационных игр «Аар Куйаар» и «Вершина богатства»</p>
      </footer>
    </>
  );
}
