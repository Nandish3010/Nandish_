import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, Map, ShoppingBag, Mic, Sparkles, Trophy } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useGame } from "@/context/GameContext";

const NAV = [
  { to: "/journey", label: "The Journey", icon: Map },
  { to: "/wishlist", label: "$3K Wishlist", icon: ShoppingBag },
  { to: "/pitch", label: "Why hire me", icon: Trophy },
  { to: "/design-prompt", label: "How I Build This with Voice", icon: Mic },
];

const Header = () => {
  const { cartCount, cartTotal } = useGame();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#e7e2d8] bg-[#f7f5f1]/85 backdrop-blur-md"
      data-testid="app-header"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2" data-testid="brand-home-link">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4f46e5] text-white font-display text-lg font-black">
            N
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Nandish<span className="text-[#4f46e5]">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.to.slice(1)}`}
              className={({ isActive }) =>
                `flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#eef0ff] text-[#4f46e5]"
                    : "text-[#6b6a63] hover:bg-[#efece5] hover:text-[#16150f]"
                }`
              }
            >
              <n.icon className="h-4 w-4" />
              {n.label}
              {n.to === "/wishlist" && cartCount > 0 && (
                <span className="ml-0.5 rounded-full bg-[#4f46e5] px-1.5 text-[11px] font-bold text-white font-mono2">
                  ${cartTotal}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/pitch")}
            data-testid="hire-nandish-cta-button"
            className="hidden rounded-full bg-[#16150f] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:block"
          >
            Hire Nandish
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e2d8] bg-white md:hidden"
                data-testid="mobile-menu-button"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#f7f5f1] w-72">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription className="sr-only">Site navigation menu</SheetDescription>
              <div className="mt-8 flex flex-col gap-2">
                {NAV.map((n) => (
                  <SheetClose asChild key={n.to}>
                    <NavLink
                      to={n.to}
                      data-testid={`mobile-nav-${n.to.slice(1)}`}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium hover:bg-[#efece5]"
                    >
                      <n.icon className="h-5 w-5 text-[#4f46e5]" />
                      {n.label}
                      {n.to === "/wishlist" && cartCount > 0 && (
                        <span className="ml-auto rounded-full bg-[#4f46e5] px-2 text-xs font-bold text-white font-mono2">
                          ${cartTotal}
                        </span>
                      )}
                    </NavLink>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <button
                    onClick={() => navigate("/pitch")}
                    data-testid="mobile-hire-cta-button"
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#16150f] px-4 py-3 font-semibold text-white"
                  >
                    <Sparkles className="h-4 w-4" /> Hire Nandish
                  </button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
