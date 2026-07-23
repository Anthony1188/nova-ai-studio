import { LogoWordmark } from "./Logo";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-carbon-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3F2EE]";

export function Header() {
  return (
    <header className="h-[80px] w-full flex items-center justify-between px-6 md:px-12 fixed top-0 z-50 bg-[#F3F2EE]/90 backdrop-blur-md border-b border-stone-gray/20">
      <a
        href="/"
        className={`flex items-center hover:opacity-80 transition-opacity ${focusRing}`}
        aria-label="NOVAGENTEC — home"
      >
        <LogoWordmark className="h-5 md:h-6 w-auto" decorative />
      </a>
      <nav
        aria-label="Primary"
        className="hidden md:flex items-center gap-10 font-mono text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-carbon-black"
      >
        <a href="/commercial" className={`hover:text-graphite transition-colors ${focusRing}`}>
          Commercial
        </a>
        <a
          href="/government-aerospace"
          className={`hover:text-graphite transition-colors ${focusRing}`}
        >
          Government &amp; Aerospace
        </a>
        <a
          href="#contact"
          className={`px-8 py-3 border border-carbon-black hover:bg-carbon-black hover:text-pure-white transition-colors duration-300 ${focusRing}`}
        >
          Contact
        </a>
      </nav>
      <button
        type="button"
        className={`md:hidden p-2 text-carbon-black ${focusRing}`}
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
