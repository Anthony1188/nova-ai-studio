import { ArrowRight } from "lucide-react";

export function SynergyCTA() {
  return (
    <section id="synergy" className="w-full bg-[#0B0B0B] text-pure-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-t border-charcoal">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="synergyGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#synergyGrid)" />
        </svg>
        <div className="absolute top-1/2 left-0 w-full h-px bg-technical-bronze/10"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-technical-bronze/10"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row items-start justify-center gap-12 lg:gap-24">
        <div className="w-full max-w-2xl border-l border-technical-bronze pl-8 md:pl-12 text-left">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-technical-bronze mb-6">
            The Synergy Standard&trade;
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-8 uppercase leading-snug text-pure-white">
            One Company. Two Paths.<br />One Synergy Standard.
          </h2>
          <p className="text-stone-gray font-light leading-relaxed text-sm md:text-base mb-10 max-w-xl">
            People, processes, systems, technology, and data engineered into alignment. When
            those five layers are coordinated, a business stops improvising and starts operating
            as one intelligent system.
          </p>
          <div className="inline-block">
            <a href="/synergy" className="group flex items-center justify-center gap-4 bg-transparent border border-technical-bronze text-technical-bronze px-10 py-4 transition-colors duration-300 hover:bg-technical-bronze hover:text-carbon-black focus:outline-none focus:ring-2 focus:ring-technical-bronze focus:ring-offset-4 focus:ring-offset-carbon-black">
              <span className="font-mono text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">Build with Synergy</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <ol className="w-full max-w-md border-t border-charcoal">
          {[
            { n: "01", label: "People", note: "Roles, ownership, accountability" },
            { n: "02", label: "Processes", note: "Documented, repeatable execution" },
            { n: "03", label: "Systems", note: "Operating structure end to end" },
            { n: "04", label: "Technology", note: "Applied after alignment exists" },
            { n: "05", label: "Data", note: "Measurement that drives decisions" },
          ].map((layer) => (
            <li
              key={layer.n}
              className="flex items-baseline gap-6 border-b border-charcoal py-5"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-technical-bronze">{layer.n}</span>
              <span className="font-heading text-base md:text-lg uppercase tracking-wide text-pure-white w-32 shrink-0">
                {layer.label}
              </span>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-stone-gray/70">
                {layer.note}
              </span>
            </li>
          ))}
        </ol>
      </div>

    </section>
  );
}
