import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/nyurba-data";
import HeroNav from "@/components/sections/HeroNav";
import RoutesGallery from "@/components/sections/RoutesGallery";
import CultureProgram from "@/components/sections/CultureProgram";
import ContactFooter from "@/components/sections/ContactFooter";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const [filterDuration, setFilterDuration] = useState("all");
  const [galleryOpen, setGalleryOpen] = useState<number | null>(null);
  const [requestOpen, setRequestOpen] = useState(false);
  const [requestTour, setRequestTour] = useState("");
  const [requestForm, setRequestForm] = useState({ name: "", phone: "", comment: "" });
  const [requestSent, setRequestSent] = useState(false);

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("https://functions.poehali.dev/556db68f-faa3-4871-9852-301c304c5fde", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...requestForm, tour: requestTour }),
    });
    setRequestSent(true);
    setTimeout(() => { setRequestOpen(false); setRequestSent(false); setRequestForm({ name: "", phone: "", comment: "" }); }, 2500);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => n.id);
    const handler = () => {
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#080e14] text-[#e8dcc8] font-sans overflow-x-hidden">
      <HeroNav
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <RoutesGallery
        filterType={filterType}
        filterDifficulty={filterDifficulty}
        filterDuration={filterDuration}
        setFilterType={setFilterType}
        setFilterDifficulty={setFilterDifficulty}
        setFilterDuration={setFilterDuration}
        galleryOpen={galleryOpen}
        setGalleryOpen={setGalleryOpen}
      />
      <CultureProgram
        setRequestTour={setRequestTour}
        setRequestOpen={setRequestOpen}
      />
      <ContactFooter
        scrollTo={scrollTo}
        requestOpen={requestOpen}
        setRequestOpen={setRequestOpen}
        requestTour={requestTour}
        requestForm={requestForm}
        setRequestForm={setRequestForm}
        requestSent={requestSent}
        handleRequestSubmit={handleRequestSubmit}
      />
    </div>
  );
}
