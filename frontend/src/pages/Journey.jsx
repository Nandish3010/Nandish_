import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Check, Lock, Play, Star, Mic, ArrowRight } from "lucide-react";
import { SEASONS, LEVELS, SEASON3 } from "@/data/gameData";
import { useGame } from "@/context/GameContext";

const SeasonHeader = ({ season, done, total }) => (
  <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
    <div>
      <span className="font-mono2 text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
        Season {season.id}
      </span>
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{season.name}</h2>
      <p className="mt-1 text-sm text-[#6b6a63]">{season.tagline}</p>
    </div>
    <div className="text-right">
      <span className="font-mono2 text-sm font-bold">
        {done}/{total}
      </span>
      <div className="mt-1 h-1.5 w-32 overflow-hidden rounded-full bg-[#e7e2d8]">
        <div
          className="h-full rounded-full bg-[#4f46e5] transition-all"
          style={{ width: `${total ? (done / total) * 100 : 0}%` }}
        />
      </div>
    </div>
  </div>
);

const LevelNode = ({ level, state, idx }) => {
  const locked = state === "locked";
  const completed = state === "completed";
  const current = state === "current";

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      className={`relative flex items-start gap-4 rounded-2xl border p-4 transition-all sm:p-5 ${
        locked
          ? "cursor-not-allowed border-[#e7e2d8] bg-[#f1efe9] opacity-70"
          : "border-[#e7e2d8] bg-white hover:-translate-y-0.5 hover:border-[#4f46e5]/40 hover:shadow-[0_8px_30px_rgba(79,70,229,0.08)]"
      } ${current ? "nj-pulse ring-2 ring-[#4f46e5]/40" : ""}`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono2 text-sm font-bold ${
          completed
            ? "bg-[#4f46e5] text-white"
            : current
              ? "bg-[#eef0ff] text-[#4f46e5]"
              : "bg-[#e7e2d8] text-[#9a968c]"
        }`}
      >
        {completed ? <Check className="h-5 w-5" /> : locked ? <Lock className="h-4 w-4" /> : level.id}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-display text-lg font-semibold leading-tight">{level.title}</h3>
          {completed && (
            <span className="flex items-center gap-0.5 text-[#4f46e5]">
              <Star className="h-3.5 w-3.5 fill-[#4f46e5]" />
            </span>
          )}
        </div>
        <p className="mt-0.5 text-sm text-[#6b6a63]">{level.objective}</p>
      </div>
      {!locked && (
        <div className="self-center">
          {current ? (
            <span className="flex items-center gap-1 rounded-full bg-[#4f46e5] px-3 py-1.5 text-xs font-bold text-white">
              <Play className="h-3 w-3 fill-white" /> Play
            </span>
          ) : (
            <ArrowRight className="h-5 w-5 text-[#c9c4b8]" />
          )}
        </div>
      )}
    </motion.div>
  );

  if (locked) {
    return (
      <div
        data-testid={`level-node-${level.id}`}
        onClick={() => toast("Locked", { description: "Finish the previous level to unlock this one." })}
      >
        {inner}
      </div>
    );
  }
  return (
    <Link to={`/level/${level.id}`} data-testid={`level-node-${level.id}`}>
      {inner}
    </Link>
  );
};

const Journey = () => {
  const { isCompleted, isLevelUnlocked, isSeasonUnlocked, isSeasonComplete } = useGame();

  const stateOf = (level) => {
    if (isCompleted(level.id)) return "completed";
    if (isLevelUnlocked(level.id)) return "current";
    return "locked";
  };

  const s3Unlocked = isSeasonUnlocked(3);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-10 text-center">
        <h1 className="font-display text-3xl font-black tracking-tight sm:text-4xl">The Journey Map</h1>
        <p className="mt-2 text-[#6b6a63]">Pick a level. Make a call. See what I actually did.</p>
      </div>

      {SEASONS.filter((s) => s.id !== 3).map((season) => {
        const levels = LEVELS.filter((l) => l.season === season.id);
        const done = levels.filter((l) => isCompleted(l.id)).length;
        const unlocked = isSeasonUnlocked(season.id);
        return (
          <section key={season.id} className="mb-14">
            <SeasonHeader season={season} done={done} total={levels.length} />
            {!unlocked && (
              <div className="mb-4 flex items-center gap-2 rounded-xl border border-dashed border-[#d9d4c9] bg-[#f1efe9] px-4 py-3 text-sm text-[#6b6a63]">
                <Lock className="h-4 w-4" /> Complete Season {season.id - 1} to unlock this chapter.
              </div>
            )}
            <div className="flex flex-col gap-3">
              {levels.map((level, idx) => (
                <LevelNode
                  key={level.id}
                  level={level}
                  idx={idx}
                  state={unlocked ? stateOf(level) : "locked"}
                />
              ))}
            </div>
          </section>
        );
      })}

      {/* Season 3 */}
      <section className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative overflow-hidden rounded-3xl border p-7 sm:p-9 ${
            s3Unlocked
              ? "border-[#2b2b2b] bg-[#121212] text-white"
              : "border-[#e7e2d8] bg-[#f1efe9]"
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`font-mono2 text-xs font-bold uppercase tracking-wider ${
                s3Unlocked ? "text-[#f59e0b]" : "text-[#9a968c]"
              }`}
            >
              Season 3
            </span>
            {!s3Unlocked && <Lock className="h-4 w-4 text-[#9a968c]" />}
          </div>
          <h2
            className={`mt-1 font-display text-2xl font-bold sm:text-3xl ${
              s3Unlocked ? "text-white" : "text-[#16150f]"
            }`}
          >
            {SEASON3.title}
          </h2>
          {s3Unlocked ? (
            <>
              <p className="mt-3 flex items-center gap-2 text-sm text-[#f59e0b]">
                <Mic className="h-4 w-4" /> Unlocked. A preview is ready.
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
                {SEASON3.previewBody}
              </p>
              <Link
                to="/pitch"
                data-testid="season3-open-button"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f59e0b] px-5 py-3 text-sm font-bold text-[#121212] transition-transform hover:-translate-y-0.5"
              >
                Watch the preview & the pitch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/results"
                data-testid="journey-results-link"
                className="ml-3 mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white"
              >
                See my results card
              </Link>
            </>
          ) : (
            <p className="mt-3 max-w-xl text-sm text-[#6b6a63]">{SEASON3.lockedBlurb}</p>
          )}
        </motion.div>
      </section>
    </main>
  );
};

export default Journey;
