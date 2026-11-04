import { useEffect, useState } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { ChevronLeft, Lightbulb, Trophy, ArrowRight, CheckCircle2, PartyPopper, Shuffle } from "lucide-react";
import { LEVELS, CHARACTER } from "@/data/gameData";
import { useGame, isMatch } from "@/context/GameContext";

const MatchBanner = ({ level, choice }) => {
  const matched = isMatch(level, choice);
  const text = level.match === "all"
    ? "Nandish did all of these. You matched Nandish!"
    : matched
      ? "You matched Nandish! He picked the same move."
      : "Nandish went a different way.";
  return (
    <div
      data-testid="match-result"
      data-matched={matched}
      className={`mt-7 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold ${
        matched ? "bg-[#dcfce7] text-[#166534]" : "bg-[#fef3c7] text-[#92400e]"
      }`}
    >
      {matched ? <PartyPopper className="h-4 w-4" /> : <Shuffle className="h-4 w-4" />} {text}
    </div>
  );
};

const LevelPlay = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLevelUnlocked, completeLevel, nextLevelId, isCompleted, recordAnswer } = useGame();

  const level = LEVELS.find((l) => l.id === id);
  const [selected, setSelected] = useState(null);
  const revealed = selected !== null;
  const unlocked = level ? isLevelUnlocked(level.id) || isCompleted(level.id) : false;

  useEffect(() => {
    setSelected(null);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (level && !unlocked) toast("That level is still locked.", { id: "level-locked" });
  }, [level, unlocked]);

  if (!level || !unlocked) {
    return <Navigate to="/journey" replace />;
  }

  const nextId = nextLevelId(level.id);
  const replay = isCompleted(level.id);

  const handleContinue = () => {
    completeLevel(level.id);
    if (nextId) {
      navigate(`/level/${nextId}`);
    } else {
      if (!replay) {
        toast.success("Season 2 complete. Season 3 unlocked.", {
          description: "The Wispr Level is now open.",
        });
      }
      navigate("/results");
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        to="/journey"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-[#6b6a63] hover:text-[#16150f]"
        data-testid="back-to-map-link"
      >
        <ChevronLeft className="h-4 w-4" /> Journey map
      </Link>

      <div className="rounded-3xl border border-[#e7e2d8] bg-white p-6 shadow-[0_10px_40px_rgba(22,21,15,0.05)] sm:p-8">
        <span className="font-mono2 text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
          Level {level.id} · Season {level.season}
        </span>
        <h1 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {level.title}
        </h1>
        <p className="mt-1 text-sm font-medium text-[#6b6a63]">{level.objective}</p>

        <div className="mt-6 rounded-2xl bg-[#f7f5f1] p-5">
          <p className="text-[15px] leading-relaxed text-[#2a2924]">{level.situation}</p>
        </div>

        <h2 className="mt-7 font-display text-lg font-semibold">What would you do?</h2>
        <div className="mt-3 flex flex-col gap-3">
          {level.choices.map((choice, i) => {
            const isPicked = selected === i;
            return (
              <button
                key={i}
                data-testid={`choice-option-${i}`}
                disabled={revealed}
                onClick={() => {
                  setSelected(i);
                  recordAnswer(level.id, i);
                }}
                className={`flex items-start gap-3 rounded-2xl border p-4 text-left text-[15px] transition-all ${
                  isPicked
                    ? "border-[#4f46e5] bg-[#eef0ff]"
                    : revealed
                      ? "border-[#e7e2d8] bg-white opacity-60"
                      : "border-[#e7e2d8] bg-white hover:border-[#4f46e5]/50 hover:bg-[#fafafa]"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono2 text-xs font-bold ${
                    isPicked ? "bg-[#4f46e5] text-white" : "bg-[#e7e2d8] text-[#6b6a63]"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="font-medium text-[#16150f]">{choice}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden"
              data-testid="reveal-panel"
            >
              <MatchBanner level={level} choice={selected} />
              <div className="mt-3 rounded-2xl border-l-4 border-[#4f46e5] bg-[#eef0ff]/60 p-5">
                <div className="flex items-center gap-3">
                  <img
                    src={CHARACTER.avatar}
                    alt="Nandish"
                    className="h-10 w-10 rounded-full border-2 border-white shadow"
                  />
                  <div>
                    <p className="font-mono2 text-[11px] font-bold uppercase tracking-wider text-[#4f46e5]">
                      What Nandish actually did
                    </p>
                    <p className="text-xs text-[#6b6a63]">Here is the real move.</p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] font-semibold leading-relaxed text-[#16150f]">
                  {level.actualMove}
                </p>
                <div className="mt-4 flex gap-2 rounded-xl bg-white/70 p-3">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]" />
                  <p className="text-sm leading-relaxed text-[#2a2924]">{level.rationale}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {level.impact.map((im) => (
                    <span
                      key={im}
                      className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#2a2924]"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#4f46e5]" /> {im}
                    </span>
                  ))}
                </div>

                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#16150f] px-3 py-1.5 text-xs font-bold text-white">
                  <Trophy className="h-3.5 w-3.5 text-[#f59e0b]" /> Badge earned: {level.badge}
                </div>
              </div>

              <button
                onClick={handleContinue}
                data-testid="complete-continue-button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                {nextId ? "Mark complete & next level" : "Finish Season 2 & unlock Season 3"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default LevelPlay;
