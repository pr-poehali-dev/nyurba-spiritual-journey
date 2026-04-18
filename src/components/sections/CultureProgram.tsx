import CultureSection from "./CultureSection";
import TourProgramSection from "./TourProgramSection";
import YtykDoyduSection from "./YtykDoyduSection";
import TaptalAlgyhaSection from "./TaptalAlgyhaSection";

interface CultureProgramProps {
  setRequestTour: (v: string) => void;
  setRequestOpen: (v: boolean) => void;
}

export default function CultureProgram({ setRequestTour, setRequestOpen }: CultureProgramProps) {
  return (
    <>
      <CultureSection />
      <TourProgramSection setRequestTour={setRequestTour} setRequestOpen={setRequestOpen} />
      <section id="program-2" className="px-6" style={{ background: "linear-gradient(180deg, #080e14, #06100a, #080e14)" }}>
        <div className="max-w-5xl mx-auto pb-24">
          <YtykDoyduSection setRequestTour={setRequestTour} setRequestOpen={setRequestOpen} />
        </div>
      </section>
      <TaptalAlgyhaSection setRequestTour={setRequestTour} setRequestOpen={setRequestOpen} />
    </>
  );
}
