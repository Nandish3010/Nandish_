import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, Gamepad2 } from "lucide-react";
import { CHARACTER, SEASONS } from "@/data/gameData";
import { useGame } from "@/context/GameContext";

const Landing = () => {
  const { progressPct, completed } = useGame();
  const started = completed.length > 0;

  return (
    <main className="relative overflow-hidden">
      <div className="nj-path absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e7e2d8] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#4f46e5] font-mono2">
            <Gamepad2 className="h-3.5 w-3.5" /> An interactive resume, as a game
          </span>
          <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Nandish: <br />
            <span className="text-[#4f46e5]">The Journey</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#6b6a63] sm:text-lg">
            Play through my real life, from college to today. Every obstacle is a level.
            You choose what you would do, then I reveal what I actually did and why. Built for
            the Wispr team, by speaking it into existence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/journey"
              data-testid="landing-start-button"
              className="group inline-flex items-center gap-2 rounded-full bg-[#16150f] px-6 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <Play className="h-5 w-5 fill-white" />
              {started ? "Continue the journey" : "Begin the journey"}
            </Link>
            <Link
              to="/wishlist"
              data-testid="landing-secondary-link"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d9d4c9] px-5 py-3.5 text-base font-medium text-[#16150f] transition-colors hover:bg-white"
            >
              See the $3K wishlist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {started && (
            <div className="mt-8 max-w-sm">
              <div className="mb-1.5 flex justify-between text-xs font-semibold text-[#6b6a63] font-mono2">
                <span>JOURNEY PROGRESS</span>
                <span>{progressPct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#e7e2d8]">
                <div
                  className="h-full rounded-full bg-[#4f46e5] transition-all"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-2">
            {SEASONS.map((s) => (
              <span
                key={s.id}
                className="rounded-full border border-[#e7e2d8] bg-white/70 px-3 py-1 text-xs font-medium text-[#6b6a63]"
              >
                S{s.id}: {s.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 m-auto h-64 w-64 rounded-full bg-[#4f46e5]/10 blur-3xl sm:h-80 sm:w-80" />
          <img
            src={CHARACTER.hero}
            alt="Nandish, your guide through the journey"
            className="relative z-10 w-64 drop-shadow-2xl sm:w-80 md:w-96"
            data-testid="landing-character-image"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Landing;
