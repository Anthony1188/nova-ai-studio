import { LogoWordmark } from "./Logo";
import { cn } from "@/lib/utils";

type NavKey = "commercial" | "government-aerospace" | "synergy" | "contact";

interface HeaderProps {
  variant?: "light" | "dark";
  active?: NavKey;
}

const NAV: { key: NavKey; href: string; label: string }[] = [
  { key: "commercial", href: "/commercial", label: "Commercial" },
  { key: "government-aerospace", href: "/government-aerospace", label: "Government \u0026 Aerospace" },
  { key: "synergy", href: "/#synergy", label: "Synergy Standard" },
  { key: "contact", href: "/contact", label: "Contact" },
];

export function Header({ variant = "light", active }: HeaderProps) {
  const dark = variant === "dark";

  const shell = dark
    ? "bg-[#0B0B0B]/95 border-b border-charcoal text-pure-white"
    : "bg-[#F3F2EE]/90 border-b border-stone-gray/20 text-carbon-black";

  const focusRing = dark
    ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-technical-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
    : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3F2EE]";

  const baseLink = dark ? "hover:text-technical-bronze" : "hover:text-graphite";

  return (
    <header
      className={cn(
        "h-[80px] w-full flex items-center justify-between px-6 md:px-12 fixed top-0 z-50 backdrop-blur-md transition-colors",
        shell,
      )}
    >
      <a
        href="/"
        className={cn("flex items-center hover:opacity-80 transition-opacity", focusRing)}
        aria-label="NOVAGENTEC — home"
      >
        <LogoWordmark className={cn("h-5 md:h-6 w-auto", dark && "invert")} decorative />
      </a>

      <nav
        aria-label="Primary"
        className="hidden md:flex items-center gap-8 lg:gap-10 font-mono text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase"
      >
        {NAV.slice(0, 3).map((item) => {
          const isActive = active === item.key;
          return (
            <a
              key={item.key}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "transition-colors relative",
                baseLink,
                focusRing,
                isActive && "text-technical-bronze",
              )}
            >
              {item.label}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-technical-bronze"
                />
              )}
            </a>
          );
        })}
        <a
          href={NAV[3].href}
          aria-current={active === "contact" ? "page" : undefined}
          className={cn(
            "px-8 py-3 border transition-colors duration-300",
            dark
              ? "border-technical-bronze text-technical-bronze hover:bg-technical-bronze hover:text-carbon-black"
              : "border-carbon-black hover:bg-carbon-black hover:text-pure-white",
            focusRing,
          )}
        >
          {NAV[3].label}
        </a>
      </nav>

      <button
        type="button"
        className={cn("md:hidden p-2", dark ? "text-pure-white" : "text-carbon-black", focusRing)}
        aria-label="Open navigation menu"
        aria-expanded="false"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
