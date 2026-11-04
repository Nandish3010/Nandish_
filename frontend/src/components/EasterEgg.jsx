import { toast } from "sonner";
import { Coins, Zap, Scissors, PawPrint } from "lucide-react";
import { useGame } from "@/context/GameContext";

const StrawHatIcon = ({ className }) => (
  <svg viewBox="0 0 28 18" className={className} aria-hidden>
    <ellipse cx="14" cy="14" rx="13" ry="3.5" fill="#e9c46a" />
    <path d="M7 14 C7 4, 21 4, 21 14 Z" fill="#f4d58d" />
    <rect x="7.3" y="10.5" width="13.4" height="2.4" fill="#d62828" />
  </svg>
);

export const EASTER_EGGS = [
  {
    id: "straw-hat",
    level: "1.3",
    badge: "Straw Hat",
    Icon: StrawHatIcon,
    color: "",
    title: "You found the straw hat!",
    description:
      "Nandish's COVID-season anime was One Piece. He set sail with the Straw Hats instead of opening his textbooks.",
  },
  {
    id: "lightning",
    level: "1.1",
    badge: "EV Spark",
    Icon: Zap,
    color: "text-[#f59e0b] fill-[#f59e0b]",
    title: "Zap! You found the spark.",
    description: "This bolt is for the EV dream that made Nandish pick Electrical and electronics engineering.",
  },
  {
    id: "coin",
    level: "2.4",
    badge: "Coin Collector",
    Icon: Coins,
    color: "text-[#d4a017] animate-[spin_3s_linear_infinite]",
    title: "Cha-ching! A hidden coin.",
    description: "Every transaction earns coins. Every curious click earns this badge.",
  },
  {
    id: "scissors",
    level: "2.5",
    badge: "Step Snipper",
    Icon: Scissors,
    color: "text-[#4f46e5]",
    title: "Snip! You found the scissors.",
    description: "The tool that cut 10 steps down to 3. Approval, verify, done.",
  },
  {
    id: "paw",
    level: "1.5",
    badge: "Paw Print",
    Icon: PawPrint,
    color: "text-[#8b5cf6] fill-[#8b5cf6]/30",
    title: "A paw print! You found it.",
    description: "Supertails is a pet company, and this is where Nandish's career first left its mark.",
  },
];

export const EasterEgg = ({ levelId }) => {
  const { findEgg } = useGame();
  const egg = EASTER_EGGS.find((e) => e.level === levelId);
  if (!egg) return null;
  const { Icon } = egg;
  return (
    <button
      data-testid={`easter-egg-${egg.id}`}
      aria-label="Something hidden"
      onClick={() => {
        findEgg(egg.id);
        toast(egg.title, { id: egg.id, description: `${egg.description} Badge unlocked: ${egg.badge}.` })
      }}
      className="absolute right-4 top-4 opacity-40 transition-transform hover:rotate-12 hover:scale-125 hover:opacity-100"
    >
      <Icon className={`h-5 w-7 ${egg.color}`} />
    </button>
  );
};
