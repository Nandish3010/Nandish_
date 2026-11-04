import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toPng } from "html-to-image";
import { toast } from "sonner";
import { Download, Rocket, Map } from "lucide-react";
import { LEVELS, CHARACTER } from "@/data/gameData";
import { useGame, isMatch } from "@/context/GameContext";

const tierFor = (pct) => {
  if (pct >= 80) return { title: "Basically Nandish", line: "Same instincts, same calls. Spooky." };
  if (pct >= 50) return { title: "Same Wavelength", line: "You and Nandish would ship well together." };
  if (pct >= 25) return { title: "Different Playbook", line: "You took your own route. Respect." };
  return { title: "Plot Twist Player", line: "Nandish zigged, you zagged. Every time." };
};

const ResultCard = ({ cardRef, matched, total, answers }) => {
  const pct = total ? Math.round((matched / total) * 100) : 0;
  const tier = tierFor(pct);
  return (
    <div
      ref={cardRef}
      data-testid="results-card"
      className="mx-auto w-full max-w-md overflow-hidden rounded-[28px] bg-[#16150f] p-7 text-white"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f59e0b]">
          Nandish: The Journey
        </span>
        <img src={CHARACTER.avatar} alt="Nandish" crossOrigin="anonymous" className="h-12 w-12 rounded-full border-2 border-white/20" />
      </div>
      <p className="mt-6 text-sm text-white/60">I matched Nandish's real moves</p>
      <p data-testid="results-score" className="font-display text-6xl font-black leading-none">
        {matched}
        <span className="text-3xl text-white/40"> / {total}</span>
      </p>
      <p data-testid="results-tier" className="mt-4 font-display text-2xl font-bold text-[#a5b4fc]">{tier.title}</p>
      <p className="mt-1 text-sm text-white/70">{tier.line}</p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {LEVELS.map((l) => {
          const ok = answers[l.id] !== undefined && isMatch(l, answers[l.id]);
          return (
            <span
              key={l.id}
              title={l.title}
              className={`flex h-7 w-9 items-center justify-center rounded-md font-mono2 text-[10px] font-bold ${
                ok ? "bg-[#4f46e5] text-white" : "bg-white/10 text-white/40"
              }`}
            >
              {l.id}
            </span>
          );
        })}
      </div>
      <p className="mt-6 text-xs text-white/40">Play it yourself and see if you think like Nandish.</p>
    </div>
  );
};

export default function Results() {
  const { answers, matchedCount } = useGame();
  const cardRef = useRef(null);
  const [busy, setBusy] = useState(false);

  const download = async () => {
    setBusy(true);
    try {
      const url = await toPng(cardRef.current, { pixelRatio: 2, cacheBust: true });
      const a = document.createElement("a");
      a.href = url;
      a.download = "nandish-journey-results.png";
      a.click();
      toast.success("Card saved. Go share it.");
    } catch {
      toast.error("Could not create the image. Try again.");
    }
    setBusy(false);
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-center font-display text-3xl font-black tracking-tight sm:text-4xl">Your results</h1>
      <p className="mt-2 text-center text-[#6b6a63]">How many times did you make the same call as Nandish?</p>
      <div className="mt-8">
        <ResultCard cardRef={cardRef} matched={matchedCount} total={LEVELS.length} answers={answers} />
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={download}
          disabled={busy}
          data-testid="download-results-card-button"
          className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          <Download className="h-4 w-4" /> {busy ? "Creating..." : "Download card"}
        </button>
        <Link to="/pitch" data-testid="results-season3-link" className="inline-flex items-center gap-2 rounded-full bg-[#16150f] px-6 py-3 font-semibold text-white">
          <Rocket className="h-4 w-4" /> Open Season 3
        </Link>
        <Link to="/journey" data-testid="results-journey-link" className="inline-flex items-center gap-2 rounded-full border border-[#d9d4c9] bg-white px-6 py-3 font-semibold text-[#16150f]">
          <Map className="h-4 w-4" /> Journey map
        </Link>
      </div>
    </main>
  );
}
