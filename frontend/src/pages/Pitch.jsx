import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Mic,
  Lock,
  Sparkles,
  FileText,
  ShoppingBag,
  Rocket,
  Heart,
  Mail,
  Linkedin,
  RotateCcw,
} from "lucide-react";
import { PITCH, INTERESTS, SEASON3, CHARACTER } from "@/data/gameData";
import { useGame } from "@/context/GameContext";

const Waveform = () => (
  <div className="flex items-end justify-center gap-1" aria-hidden>
    {Array.from({ length: 28 }).map((_, i) => (
      <motion.span
        key={i}
        className="w-1 rounded-full bg-[#f59e0b]"
        animate={{ height: [6, 10 + ((i * 7) % 34), 6] }}
        transition={{ duration: 1 + (i % 5) * 0.2, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const Pitch = () => {
  const { isSeasonUnlocked, resetProgress } = useGame();
  const s3 = isSeasonUnlocked(3);

  return (
    <main className="pb-20">
      {/* Season 3 hero */}
      <section className="relative overflow-hidden bg-[#121212] text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <span className="font-mono2 text-xs font-bold uppercase tracking-[0.2em] text-[#f59e0b]">
            Season 3 · The Wispr Level
          </span>
          {s3 ? (
            <>
              <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-black leading-tight sm:text-5xl">
                {SEASON3.previewTitle}
              </h1>
              <div className="mx-auto my-8 max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
                <Waveform />
                <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
                  <Mic className="h-4 w-4 text-[#f59e0b]" /> Speaking out the prompts, live.
                </p>
              </div>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-white/70">
                {SEASON3.previewBody}
              </p>

              <div className="mx-auto mt-10 max-w-lg rounded-3xl border border-[#f59e0b]/30 bg-[#f59e0b]/10 p-6">
                <Lock className="mx-auto h-7 w-7 text-[#f59e0b]" />
                <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">{SEASON3.gateTitle}</h2>
                <p className="mt-2 text-sm text-white/70">{SEASON3.gateBody}</p>
                <button
                  data-testid="hire-to-unlock-button"
                  onClick={() =>
                    toast.success("Challenge accepted.", {
                      description: "Hire Nandish and the full Season 3 unlocks.",
                    })
                  }
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f59e0b] px-6 py-3 font-bold text-[#121212] transition-transform hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4" /> {SEASON3.gateCta}
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-black leading-tight sm:text-4xl">
                This level is still locked
              </h1>
              <div className="mx-auto my-8 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60">
                <Lock className="h-5 w-5" />
                <p className="text-sm">{SEASON3.lockedBlurb}</p>
              </div>
              <Link
                to="/journey"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#121212]"
                data-testid="go-play-button"
              >
                <Rocket className="h-4 w-4" /> Go finish the journey
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Portfolio / pitch */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <img
            src={CHARACTER.avatar}
            alt="Nandish"
            className="h-24 w-24 rounded-2xl border-4 border-white shadow-lg"
          />
          <div className="text-center sm:text-left">
            <h2 className="font-display text-3xl font-black tracking-tight">{PITCH.title}</h2>
            <p className="mt-3 max-w-xl text-[#6b6a63]">{PITCH.intro}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#e7e2d8] bg-white p-6">
            <h3 className="font-display text-lg font-semibold">Core skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {PITCH.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-[#eef0ff] px-3 py-1.5 text-sm font-medium text-[#4f46e5]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[#e7e2d8] bg-white p-6">
            <h3 className="font-display text-lg font-semibold">Key projects</h3>
            <ul className="mt-4 space-y-2">
              {PITCH.projects.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-[#2a2924]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f46e5]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-[#e7e2d8] bg-white p-6">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
            <Heart className="h-4 w-4 text-[#4f46e5]" /> Things I am into
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {INTERESTS.map((i) => (
              <span
                key={i}
                className="rounded-full border border-[#e7e2d8] bg-[#f7f5f1] px-3 py-1.5 text-sm font-medium text-[#2a2924]"
              >
                {i}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-[#16150f] p-7 text-white">
          <p className="text-lg leading-relaxed">{PITCH.closing}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/wishlist"
              className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-5 py-2.5 text-sm font-semibold"
              data-testid="pitch-wishlist-link"
            >
              <ShoppingBag className="h-4 w-4" /> See the $3K wishlist
            </Link>
            <Link
              to="/design-prompt"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold"
              data-testid="pitch-design-prompt-link"
            >
              <FileText className="h-4 w-4" /> Read the design prompt
            </Link>
          </div>
        </div>

        {/* deliverables + contact */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#e7e2d8] bg-white p-6">
            <h3 className="font-display text-lg font-semibold">Challenge deliverables</h3>
            <ul className="mt-4 space-y-3">
              {PITCH.deliverables.map((d) => (
                <li key={d.label} className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-[#16150f]">{d.label}</span>
                  <span className="font-mono2 text-xs text-[#6b6a63]">{d.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[#e7e2d8] bg-white p-6">
            <h3 className="font-display text-lg font-semibold">Get in touch</h3>
            <ul className="mt-4 space-y-3">
              {PITCH.contacts.map((c) => (
                <li key={c.label} className="flex items-center gap-3 text-sm">
                  {c.label === "LinkedIn" ? (
                    <Linkedin className="h-4 w-4 text-[#4f46e5]" />
                  ) : (
                    <Mail className="h-4 w-4 text-[#4f46e5]" />
                  )}
                  <span className="font-medium text-[#16150f]">{c.label}</span>
                  <span className="font-mono2 text-xs text-[#6b6a63]">{c.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => {
            resetProgress();
            toast("Progress reset. Start the journey fresh.");
          }}
          data-testid="reset-progress-button"
          className="mx-auto mt-10 flex items-center gap-1.5 text-xs font-medium text-[#9a968c] hover:text-[#6b6a63]"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Reset my play session
        </button>
      </section>
    </main>
  );
};

export default Pitch;
