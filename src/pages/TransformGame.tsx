import TransformGameHero from "@/components/transform-game/TransformGameHero";
import TransformGameProgram from "@/components/transform-game/TransformGameProgram";
import TransformGameSignup from "@/components/transform-game/TransformGameSignup";

export default function TransformGame() {
  return (
    <div className="min-h-screen bg-[#080e14] text-[#e8dcc8] font-sans overflow-x-hidden">
      <TransformGameHero />
      <TransformGameProgram />
      <TransformGameSignup />
    </div>
  );
}
