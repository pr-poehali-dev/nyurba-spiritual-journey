import Icon from "@/components/ui/icon";
import NyurbaMap from "@/components/NyurbaMap";
import {
  ROUTES, SACRED_PLACES, GALLERY_ITEMS,
  TYPE_OPTIONS, DIFFICULTY_OPTIONS, DURATION_OPTIONS,
  DIFFICULTY_COLORS, AnimSection,
} from "@/lib/nyurba-data";

interface RoutesGalleryProps {
  filterType: string;
  filterDifficulty: string;
  filterDuration: string;
  setFilterType: (v: string) => void;
  setFilterDifficulty: (v: string) => void;
  setFilterDuration: (v: string) => void;
  galleryOpen: number | null;
  setGalleryOpen: (v: number | null) => void;
}

export default function RoutesGallery({
  filterType, filterDifficulty, filterDuration,
  setFilterType, setFilterDifficulty, setFilterDuration,
  galleryOpen, setGalleryOpen,
}: RoutesGalleryProps) {
  const filteredRoutes = ROUTES.filter((r) => {
    const typeOk = filterType === "all" || r.type === filterType;
    const diffOk = filterDifficulty === "all" || r.difficulty === filterDifficulty;
    const durDays = parseInt(r.duration);
    const durOk =
      filterDuration === "all" ||
      (filterDuration === "1" && durDays === 1) ||
      (filterDuration === "2-3" && durDays >= 2 && durDays <= 3) ||
      (filterDuration === "4+" && durDays >= 4);
    return typeOk && diffOk && durOk;
  });

  return (
    <>
      {/* MAP */}
      <section id="map" className="py-20 px-6 max-w-7xl mx-auto">
        <AnimSection className="text-center mb-10">
          <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Карта района</span>
          <h2 className="font-serif mt-2 mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#e8dcc8" }}>
            Карта Нюрбинского района
          </h2>
          <div className="sacred-divider max-w-xs mx-auto mb-4">
            <span className="ornament">✦</span>
          </div>
          <p className="text-[#9b8060] max-w-lg mx-auto text-sm leading-relaxed">
            Священные места, маршруты и местность Кочай на интерактивной карте. Нажмите на метку, чтобы узнать подробнее.
          </p>
        </AnimSection>
        <AnimSection>
          <NyurbaMap />
        </AnimSection>
      </section>

      {/* ROUTES */}
      <section id="routes" className="py-24 px-6 max-w-7xl mx-auto">
        <AnimSection>
          <div className="text-center mb-4">
            <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Айан суоллар</span>
          </div>
          <h2 className="font-serif text-center mb-2" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#e8dcc8" }}>
            Маршруты
          </h2>
          <div className="sacred-divider my-6 max-w-xs mx-auto">
            <span className="ornament">✦</span>
          </div>
        </AnimSection>

        <AnimSection className="mb-10">
          <div className="glass-card rounded p-5 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#9b8060] uppercase mb-2">Тип активности</label>
                <div className="flex flex-wrap gap-2">
                  {TYPE_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => setFilterType(o.value)}
                      className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
                        filterType === o.value
                          ? "bg-[#d4a843] text-[#0a0804] border-[#d4a843] font-semibold"
                          : "border-[#2a1e0e] text-[#9b8060] hover:border-[#d4a843]/40 hover:text-[#d4a843]"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#9b8060] uppercase mb-2">Сложность</label>
                <div className="flex flex-wrap gap-2">
                  {DIFFICULTY_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => setFilterDifficulty(o.value)}
                      className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
                        filterDifficulty === o.value
                          ? "bg-[#d4a843] text-[#0a0804] border-[#d4a843] font-semibold"
                          : "border-[#2a1e0e] text-[#9b8060] hover:border-[#d4a843]/40 hover:text-[#d4a843]"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#9b8060] uppercase mb-2">Длительность</label>
                <div className="flex flex-wrap gap-2">
                  {DURATION_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => setFilterDuration(o.value)}
                      className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
                        filterDuration === o.value
                          ? "bg-[#d4a843] text-[#0a0804] border-[#d4a843] font-semibold"
                          : "border-[#2a1e0e] text-[#9b8060] hover:border-[#d4a843]/40 hover:text-[#d4a843]"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimSection>

        {filteredRoutes.length === 0 ? (
          <AnimSection className="text-center py-16 text-[#7a6040]">
            <Icon name="Search" size={40} className="mx-auto mb-4 opacity-40" />
            <p className="font-serif italic text-xl">Маршруты не найдены</p>
            <p className="text-sm mt-2">Попробуйте изменить фильтры</p>
          </AnimSection>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map((route, i) => (
              <AnimSection key={route.id} className="route-card" style={{ transitionDelay: `${i * 60}ms` } as React.CSSProperties}>
                <div className="glass-card rounded overflow-hidden h-full flex flex-col group cursor-pointer">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={route.img}
                      alt={route.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,20,0.9) 0%, transparent 60%)" }} />
                    <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${DIFFICULTY_COLORS[route.difficulty]}`}>
                        {route.difficultyLabel}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full border bg-[#1a1208]/80 text-[#d4a843] border-[#d4a843]/30">
                        {route.typeLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif text-xl text-[#e8dcc8] mb-0.5">{route.name}</h3>
                    <p className="text-[11px] text-[#7a6040] italic mb-3">{route.nameSah}</p>
                    <p className="text-sm text-[#9b8878] leading-relaxed flex-1 mb-4">{route.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-[#7a6040] pt-3 border-t border-[#1e160a]">
                      <span className="flex items-center gap-1"><Icon name="Clock" size={12} />{route.duration}</span>
                      <span className="flex items-center gap-1"><Icon name="MapPin" size={12} />{route.distance}</span>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        )}
      </section>

      {/* SACRED PLACES */}
      <section id="sacred" className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #080e14 0%, #0d120a 50%, #080e14 100%)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a843' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimSection className="text-center mb-16">
            <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Ытык сирдэр</span>
            <h2 className="font-serif mt-2 mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#e8dcc8" }}>
              Священные места
            </h2>
            <div className="sacred-divider max-w-xs mx-auto">
              <span className="ornament">✦</span>
            </div>
            <p className="text-[#9b8060] max-w-lg mx-auto mt-6 leading-relaxed">
              Места силы и памяти народа саха — священные уголки Нюрбинского района, хранящие тысячелетнюю историю.
            </p>
          </AnimSection>

          <div className="space-y-16">
            {SACRED_PLACES.map((place, i) => (
              <AnimSection key={place.id}>
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
                  <div className="lg:w-1/2 relative">
                    <div className="relative overflow-hidden rounded" style={{ aspectRatio: "16/10" }}>
                      <img src={place.img} alt={place.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(212,168,67,0.15), transparent 50%)" }} />
                    </div>
                    <div
                      className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-[#d4a843]/20 flex items-center justify-center"
                      style={{ background: "radial-gradient(circle, rgba(212,168,67,0.1), transparent)" }}
                    >
                      <Icon name={place.icon} fallback="Star" size={32} className="text-[#d4a843] opacity-70" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 px-4">
                    <p className="text-[11px] tracking-[0.3em] text-[#7a6040] uppercase mb-2">Ытык сир · {i + 1}/{SACRED_PLACES.length}</p>
                    <h3 className="font-serif text-4xl text-[#d4a843] mb-1">{place.name}</h3>
                    <p className="text-[#9b8060] italic mb-5">{place.sub}</p>
                    <div className="w-12 h-px bg-[#d4a843]/40 mb-5" />
                    <p className="text-[#c8b890] leading-loose">{place.desc}</p>
                    <button className="mt-6 text-xs tracking-[0.2em] uppercase text-[#d4a843] border-b border-[#d4a843]/30 pb-0.5 hover:border-[#d4a843] transition-colors">
                      Подробнее →
                    </button>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
        <AnimSection className="text-center mb-16">
          <span className="text-xs tracking-[0.35em] text-[#d4a843] uppercase">Галерея · Gallery</span>
          <h2 className="font-serif mt-2" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#e8dcc8" }}>
            Образы Нюрбы
          </h2>
          <div className="sacred-divider max-w-xs mx-auto mt-4">
            <span className="ornament">✦</span>
          </div>
        </AnimSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <AnimSection
              key={i}
              className={`cursor-pointer group relative overflow-hidden rounded ${i === 0 || i === 3 ? "md:col-span-1 row-span-1" : ""}`}
              style={{ aspectRatio: i % 5 === 0 ? "4/3" : "3/2" } as React.CSSProperties}
            >
              <div className="relative w-full h-full overflow-hidden" style={{ minHeight: "180px" }} onClick={() => setGalleryOpen(i)}>
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(8,14,20,0.9) 0%, rgba(212,168,67,0.1) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-[#e8dcc8] font-serif">{item.caption}</p>
                  <p className="text-[10px] text-[#9b8060] italic">{item.captionSah}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ZoomIn" size={18} className="text-[#d4a843]" />
                </div>
              </div>
            </AnimSection>
          ))}
        </div>

        {galleryOpen !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(4,7,10,0.95)" }}
            onClick={() => setGalleryOpen(null)}
          >
            <button className="absolute top-6 right-6 text-[#d4a843] hover:text-white transition-colors">
              <Icon name="X" size={28} />
            </button>
            <img
              src={GALLERY_ITEMS[galleryOpen].img}
              alt={GALLERY_ITEMS[galleryOpen].caption}
              className="max-w-full max-h-[85vh] object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="font-serif text-[#e8dcc8]">{GALLERY_ITEMS[galleryOpen].caption}</p>
              <p className="text-xs text-[#9b8060] italic mt-1">{GALLERY_ITEMS[galleryOpen].captionSah}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
