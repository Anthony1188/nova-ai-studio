import { LogoWordmark } from "./Logo";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pure-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B] rounded-sm";

export function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B] border-t border-charcoal py-8 px-6 md:px-12 text-stone-gray text-[10px] uppercase font-mono tracking-widest">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <a
            href="/"
            className={`flex items-center hover:opacity-80 transition-opacity ${focusRing}`}
            aria-label="NOVAGENTEC — home"
          >
            <LogoWordmark className="h-4 w-auto invert" decorative />
          </a>
          <div className="hidden md:block w-px h-4 bg-charcoal" aria-hidden="true"></div>
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <a href="/commercial" className={`hover:text-pure-white transition-colors ${focusRing}`}>Commercial Small Business</a>
            <a href="/government-aerospace" className={`hover:text-pure-white transition-colors ${focusRing}`}>Government &amp; Aerospace</a>
            <a href="/about" className={`hover:text-pure-white transition-colors ${focusRing}`}>About</a>
            <a href="/contact" className={`hover:text-pure-white transition-colors ${focusRing}`}>Contact</a>
            <a href="/privacy" className={`hover:text-pure-white transition-colors ${focusRing}`}>Privacy</a>
          </nav>
        </div>

        <div className="text-stone-gray/60 text-center md:text-right mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} NOVAGENTEC. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
