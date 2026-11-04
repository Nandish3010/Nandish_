import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toPng } from "html-to-image";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Download, Lock, Sparkles, Map, Copy } from "lucide-react";
import { LEVELS, CHARACTER } from "@/data/gameData";
import { useGame, isMatch } from "@/context/GameContext";
import { EASTER_EGGS } from "@/components/EasterEgg";

const HiddenFinds = ({ eggs }) => (
  <div className="mt-6 border-t border-white/10 pt-5" data-testid="results-hidden-finds">
    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
      Hidden finds: {eggs.length} of {EASTER_EGGS.length}
    </p>
    <div className="mt-3 flex flex-wrap gap-2">
      {EASTER_EGGS.filter((e) => eggs.includes(e.id))
        .sort((a, b) => a.level.localeCompare(b.level))
        .map(({ id, badge, Icon, color }) => (
        <span
          key={id}
          data-testid={`results-badge-${id}`}
          className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white"
        >
          <Icon className={`h-4 w-5 ${color.replace(/animate-\S+/, "")}`} /> {badge}
        </span>
      ))}
      {eggs.length === 0 && <span className="text-xs text-white/40">None yet. Something is hiding in the levels...</span>}
    </div>
  </div>
);

const tierFor = (pct) => {
  if (pct >= 80) return { title: "Basically Nandish", line: "Same instincts, same calls. Spooky." };
  if (pct >= 50) return { title: "Same Wavelength", line: "You and Nandish would ship well together." };
  if (pct >= 25) return { title: "Different Playbook", line: "You took your own route. Respect." };
  return { title: "Plot Twist Player", line: "Nandish zigged, you zagged. Every time." };
};

const ResultCard = ({ cardRef, matched, total, answers, eggs }) => {
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
      <HiddenFinds eggs={eggs} />
      <p className="mt-6 text-xs text-white/40">Play it yourself and see if you think like Nandish.</p>
    </div>
  );
};

export default function Results() {
  const { answers, matchedCount, eggs } = useGame();
  const cardRef = useRef(null);
  const [busy, setBusy] = useState(false);

  const share = async () => {
    const text = `I matched ${matchedCount}/${LEVELS.length} of Nandish's moves in Nandish: The Journey. Can you beat me? ${window.location.origin}`;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Share message copied.", { description: text });
    } catch {
      toast.error("Could not copy. Try again.");
    }
  };

  const download = async () => {
    setBusy(true);
    try {
      const url = await toPng(cardRef.current, { pixelRatio: 2, cacheBust: true, style: { margin: "0" } });
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
        <ResultCard cardRef={cardRef} matched={matchedCount} total={LEVELS.length} answers={answers} eggs={eggs} />
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
        <button
          onClick={share}
          data-testid="copy-share-message-button"
          className="inline-flex items-center gap-2 rounded-full border border-[#4f46e5] bg-white px-6 py-3 font-semibold text-[#4f46e5] transition-transform hover:-translate-y-0.5"
        >
          <Copy className="h-4 w-4" /> Copy share message
        </button>
        <Link to="/journey" data-testid="results-journey-link" className="inline-flex items-center gap-2 rounded-full border border-[#d9d4c9] bg-white px-6 py-3 font-semibold text-[#16150f]">
          <Map className="h-4 w-4" /> Journey map
        </Link>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-testid="results-season3-teaser"
        className="mt-10 w-full rounded-[28px] border-2 border-[#f59e0b]/40 bg-[#121212] p-7 text-white shadow-[0_0_60px_-15px_rgba(245,158,11,0.5)] sm:p-10"
      >
        <div className="flex items-center gap-2 font-mono2 text-xs uppercase tracking-[0.2em] text-[#f59e0b]">
          <Lock className="h-4 w-4" /> Season 3 · The Wispr Level
        </div>
        <h2 className="mt-4 font-display text-3xl font-black sm:text-4xl">The next season is locked.</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Seasons 1 and 2 got Nandish here. Season 3 is where he takes Wispr Flow to India, and it only unlocks one way.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="font-mono2 text-sm text-[#f59e0b]">3.1</div>
            <div className="mt-1 font-semibold">Taking Wispr Flow to India</div>
          </div>
          {[
            ["3.2", "Growing the voice-first habit"],
            ["3.3", "The next chapter"],
          ].map(([id, title]) => (
            <div key={id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between font-mono2 text-sm text-[#f59e0b]">
                {id} <Lock className="h-3.5 w-3.5 text-white/50" />
              </div>
              <div className="mt-1 select-none font-semibold blur-sm">{title}</div>
            </div>
          ))}
        </div>
        <Link
          to="/pitch"
          data-testid="results-season3-cta"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f59e0b] px-7 py-4 text-base font-bold text-[#121212] transition-transform hover:-translate-y-0.5"
        >
          <Sparkles className="h-5 w-5" /> Hire me to unlock Season 3
        </Link>
      </motion.section>
    </main>
  );
}
