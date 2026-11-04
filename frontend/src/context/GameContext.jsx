import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LEVELS, WISHLIST_ITEMS, WISHLIST_GOAL } from "@/data/gameData";

const GameContext = createContext(null);

const PROGRESS_KEY = "nj_progress_v4";
const WISHLIST_KEY = "nj_wishlist_v1";
const ANSWERS_KEY = "nj_answers_v3";
const EGGS_KEY = "nj_eggs_v2";

export const isMatch = (level, choice) => level.match === "all" || level.match === choice;

const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const GameProvider = ({ children }) => {
  const [completed, setCompleted] = useState(() => load(PROGRESS_KEY, []));
  const [cart, setCart] = useState(() => load(WISHLIST_KEY, []));
  const [answers, setAnswers] = useState(() => load(ANSWERS_KEY, {}));
  const [eggs, setEggs] = useState(() => load(EGGS_KEY, []));

  useEffect(() => {
    localStorage.setItem(EGGS_KEY, JSON.stringify(eggs));
  }, [eggs]);

  const findEgg = (eggId) => setEggs((prev) => (prev.includes(eggId) ? prev : [...prev, eggId]));

  useEffect(() => {
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(completed));
  }, [completed]);
  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(cart));
  }, [cart]);

  const isCompleted = (id) => completed.includes(id);

  const completeLevel = (id) =>
    setCompleted((prev) => (prev.includes(id) ? prev : [...prev, id]));

  const isLevelUnlocked = (id) => {
    const idx = LEVELS.findIndex((l) => l.id === id);
    if (idx <= 0) return true;
    return completed.includes(LEVELS[idx - 1].id);
  };

  const seasonLevels = (seasonId) => LEVELS.filter((l) => l.season === seasonId);

  const isSeasonComplete = (seasonId) =>
    seasonLevels(seasonId).every((l) => completed.includes(l.id));

  const isSeasonUnlocked = (seasonId) => {
    if (seasonId === 1) return true;
    return isSeasonComplete(seasonId - 1);
  };

  const nextLevelId = (id) => {
    const idx = LEVELS.findIndex((l) => l.id === id);
    return idx >= 0 && idx < LEVELS.length - 1 ? LEVELS[idx + 1].id : null;
  };

  const progressPct = Math.round((completed.length / LEVELS.length) * 100);

  const recordAnswer = (id, choice) => setAnswers((prev) => ({ ...prev, [id]: choice }));
  const answeredLevels = LEVELS.filter((l) => answers[l.id] !== undefined);
  const matchedCount = answeredLevels.filter((l) => isMatch(l, answers[l.id])).length;

  const resetProgress = () => {
    setCompleted([]);
    setCart([]);
    setAnswers({});
    setEggs([]);
  };

  // wishlist
  const inCart = (itemId) => cart.includes(itemId);
  const toggleItem = (itemId) =>
    setCart((prev) =>
      prev.includes(itemId) ? prev.filter((i) => i !== itemId) : [...prev, itemId],
    );
  const cartItems = WISHLIST_ITEMS.filter((i) => cart.includes(i.id));
  const cartTotal = cartItems.reduce((sum, i) => sum + i.price, 0);
  const cartCount = cartItems.length;
  const goalPct = Math.min(100, Math.round((cartTotal / WISHLIST_GOAL) * 100));

  const value = useMemo(
    () => ({
      completed,
      isCompleted,
      completeLevel,
      isLevelUnlocked,
      isSeasonUnlocked,
      isSeasonComplete,
      nextLevelId,
      progressPct,
      resetProgress,
      inCart,
      toggleItem,
      cartItems,
      cartTotal,
      cartCount,
      goalPct,
      answers,
      recordAnswer,
      matchedCount,
      answeredCount: answeredLevels.length,
      eggs,
      findEgg,
    }),
    [completed, cart, answers, eggs],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
};
