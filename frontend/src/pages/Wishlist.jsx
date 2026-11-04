import { motion } from "framer-motion";
import { Plus, Check, Target } from "lucide-react";
import { WISHLIST_ITEMS, WISHLIST_GOAL } from "@/data/gameData";
import { useGame } from "@/context/GameContext";

const Wishlist = () => {
  const { inCart, toggleItem, cartTotal, goalPct, cartCount } = useGame();
  const remaining = WISHLIST_GOAL - cartTotal;

  return (
    <main className="mx-auto max-w-5xl px-4 pb-32 pt-10 sm:px-6 sm:pt-14">
      <div className="mb-8 text-center">
        <span className="font-mono2 text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
          The Wispr grant
        </span>
        <h1 className="mt-1 font-display text-3xl font-black tracking-tight sm:text-4xl">
          My $3,000 Work Setup Wishlist
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-[#6b6a63]">
          If Wispr backs the setup, here is exactly where the $3,000 goes. Add items to build the
          cart and watch the total climb.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WISHLIST_ITEMS.map((item, idx) => {
          const added = inCart(item.id);
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className={`flex flex-col overflow-hidden rounded-3xl border bg-white transition-all ${
                added ? "border-[#4f46e5] shadow-[0_10px_40px_rgba(79,70,229,0.12)]" : "border-[#e7e2d8]"
              }`}
            >
              <div className="relative h-44 overflow-hidden bg-[#f1efe9]">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#4f46e5] font-mono2">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold leading-tight">{item.name}</h3>
                  <span className="shrink-0 font-mono2 text-lg font-bold text-[#4f46e5]">
                    ${item.price}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm text-[#6b6a63]">{item.reason}</p>
                <button
                  onClick={() => toggleItem(item.id)}
                  data-testid={`wishlist-toggle-${item.id}`}
                  className={`mt-4 flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    added
                      ? "bg-[#4f46e5] text-white"
                      : "border border-[#d9d4c9] text-[#16150f] hover:bg-[#f7f5f1]"
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="h-4 w-4" /> Added to grant
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" /> Add to grant
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* sticky total */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e7e2d8] bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 py-3.5 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-[#6b6a63]">
              <Target className="h-4 w-4 text-[#4f46e5]" />
              <span data-testid="wishlist-count">{cartCount} {cartCount === 1 ? "item" : "items"}</span>
            </div>
            <div className="text-right">
              <span className="font-mono2 text-xl font-bold text-[#16150f]" data-testid="wishlist-total">
                ${cartTotal}
              </span>
              <span className="text-sm text-[#6b6a63]"> / ${WISHLIST_GOAL}</span>
            </div>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#e7e2d8]">
            <div
              className="h-full rounded-full bg-[#4f46e5] transition-all"
              style={{ width: `${goalPct}%` }}
            />
          </div>
          <p className="mt-1.5 text-center text-xs text-[#6b6a63]">
            {remaining > 0
              ? `$${remaining} of headroom left under the $3,000 grant.`
              : remaining === 0
                ? "Perfectly at the $3,000 grant. Nicely balanced."
                : `$${Math.abs(remaining)} over the $3,000 grant. Time to prioritise.`}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
