import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "@/components/ui/icon";

const MAP_POINTS = [
  {
    id: 1,
    name: "Кочай",
    nameSah: "Кочай сирэ",
    type: "sacred",
    lat: 63.18,
    lng: 118.32,
    desc: "Величественная местность Кочай — сердце священных угодий Нюрбинского района. Место силы народа саха.",
    icon: "⬟",
    color: "#d4a843",
  },
  {
    id: 2,
    name: "Ытык Күөл",
    nameSah: "Священное озеро",
    type: "sacred",
    lat: 63.28,
    lng: 118.52,
    desc: "Священное озеро народа саха. По преданиям, хранит иччи — духа-хозяина воды.",
    icon: "◉",
    color: "#7ab8d4",
  },
  {
    id: 3,
    name: "Аар Сэргэ",
    nameSah: "Главная коновязь",
    type: "sacred",
    lat: 63.10,
    lng: 118.20,
    desc: "Центральный священный сэргэ района — ось мира саха. Место ысыаха и обрядов.",
    icon: "✦",
    color: "#d4a843",
  },
  {
    id: 4,
    name: "г. Нюрба",
    nameSah: "Ньурба куорат",
    type: "city",
    lat: 63.28,
    lng: 118.35,
    desc: "Административный центр Нюрбинского района. Отправная точка большинства маршрутов.",
    icon: "⬤",
    color: "#e8dcc8",
  },
  {
    id: 5,
    name: "Маршрут: Плато Вилюй",
    nameSah: "Биллүүр хайалара",
    type: "route",
    lat: 63.40,
    lng: 118.60,
    desc: "Начало маршрута по священным плато с видами на тайгу и петроглифами. 3 дня, средний.",
    icon: "▶",
    color: "#7bc47a",
  },
  {
    id: 6,
    name: "Маршрут: Ньурба — Мастаах",
    nameSah: "Ньурба — Мастаах",
    type: "route",
    lat: 63.15,
    lng: 118.65,
    desc: "Культурный маршрут по берегу Вилюя через старинные наслеги. 1 день, лёгкий.",
    icon: "▶",
    color: "#7bc47a",
  },
  {
    id: 7,
    name: "Таёжный перевал",
    nameSah: "Тыа хайатын туоруур",
    type: "route",
    lat: 63.50,
    lng: 118.10,
    desc: "Экспедиционный маршрут через нетронутую тайгу. 5 дней, сложный.",
    icon: "▶",
    color: "#e07a7a",
  },
];

const TYPE_COLORS: Record<string, string> = {
  sacred: "#d4a843",
  city: "#e8dcc8",
  route: "#7bc47a",
};

function createMarkerIcon(color: string, symbol: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44">
      <defs>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.6)"/>
        </filter>
      </defs>
      <path d="M18 0 C8.06 0 0 8.06 0 18 C0 31.5 18 44 18 44 C18 44 36 31.5 36 18 C36 8.06 27.94 0 18 0Z" fill="${color}" filter="url(#shadow)" opacity="0.92"/>
      <circle cx="18" cy="18" r="11" fill="rgba(0,0,0,0.35)"/>
      <text x="18" y="23" text-anchor="middle" font-size="13" fill="white" font-family="Georgia, serif">${symbol}</text>
    </svg>
  `;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -46],
  });
}

export default function NyurbaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [activePoint, setActivePoint] = useState<typeof MAP_POINTS[0] | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [63.28, 118.35],
      zoom: 10,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
      opacity: 0.55,
    }).addTo(map);

    // Dark overlay for map tiles via CSS filter — applied via container class
    L.control.zoom({ position: "bottomright" }).addTo(map);

    L.control.attribution({ position: "bottomleft", prefix: "© OpenStreetMap" }).addTo(map);

    MAP_POINTS.forEach((point) => {
      const icon = createMarkerIcon(point.color, point.icon);
      const marker = L.marker([point.lat, point.lng], { icon }).addTo(map);
      marker.on("click", () => setActivePoint(point));
    });

    // Draw route line for trail markers
    const routePoints = MAP_POINTS.filter((p) => p.type === "route");
    const cityPoint = MAP_POINTS.find((p) => p.type === "city");
    if (cityPoint) {
      routePoints.forEach((rp) => {
        L.polyline(
          [[cityPoint.lat, cityPoint.lng], [rp.lat, rp.lng]],
          { color: "#7bc47a", weight: 1.5, opacity: 0.4, dashArray: "6 6" }
        ).addTo(map);
      });
    }

    mapInstance.current = map;
    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div className="relative w-full rounded overflow-hidden" style={{ height: "520px" }}>
      {/* Dark filter overlay for map tiles */}
      <style>{`
        .leaflet-tile-pane { filter: invert(1) hue-rotate(180deg) saturate(0.6) brightness(0.45); }
        .leaflet-control-zoom a { background: rgba(20,14,8,0.9) !important; color: #d4a843 !important; border-color: rgba(212,168,67,0.25) !important; }
        .leaflet-control-zoom a:hover { background: rgba(212,168,67,0.15) !important; }
        .leaflet-control-attribution { background: rgba(8,14,20,0.7) !important; color: #5a4030 !important; font-size: 9px !important; }
        .leaflet-control-attribution a { color: #7a6040 !important; }
        .leaflet-container { background: #0a0e08; }
      `}</style>

      <div ref={mapRef} className="w-full h-full" />

      {/* Legend */}
      <div className="absolute top-4 left-4 z-[1000] glass-card rounded p-3 text-xs space-y-1.5" style={{ minWidth: "140px" }}>
        <p className="text-[10px] tracking-[0.2em] text-[#7a6040] uppercase mb-2">Легенда</p>
        {[
          { color: "#d4a843", label: "Ытык сирдэр", sub: "Священные места" },
          { color: "#7bc47a", label: "Айан суоллар", sub: "Маршруты" },
          { color: "#e8dcc8", label: "Куорат", sub: "Населённый пункт" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: l.color }} />
            <div>
              <div className="text-[#c8b890]" style={{ fontSize: "10px" }}>{l.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Info panel */}
      {activePoint && (
        <div className="absolute bottom-4 right-4 z-[1000] glass-card rounded p-4 max-w-xs animate-fade-in opacity-0-init" style={{ animationFillMode: "forwards" }}>
          <button
            onClick={() => setActivePoint(null)}
            className="absolute top-2 right-2 text-[#7a6040] hover:text-[#d4a843] transition-colors"
          >
            <Icon name="X" size={14} />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full" style={{ background: activePoint.color }} />
            <span className="text-[10px] tracking-[0.2em] text-[#7a6040] uppercase">
              {activePoint.type === "sacred" ? "Ытык сир" : activePoint.type === "route" ? "Маршрут" : "Куорат"}
            </span>
          </div>
          <h4 className="font-serif text-[#d4a843] text-lg leading-tight mb-0.5">{activePoint.name}</h4>
          <p className="text-[#9b8060] text-[11px] italic mb-2">{activePoint.nameSah}</p>
          <p className="text-[#c8b890] text-xs leading-relaxed">{activePoint.desc}</p>
        </div>
      )}

      {/* Click hint */}
      {!activePoint && (
        <div className="absolute bottom-4 right-4 z-[1000] text-[10px] text-[#5a4030] tracking-wide">
          Нажмите на метку для информации
        </div>
      )}
    </div>
  );
}
