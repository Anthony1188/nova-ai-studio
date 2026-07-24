import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Cog,
  Layers,
  Target,
  Radar,
  Trophy,
  Activity,
  Wrench,
  Factory,
  Users,
  Lock,
  BarChart3,
  Cpu,
  GitBranch,
  Compass,
  BookOpen,
  Building2,
  Combine,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroDesktop from "@/assets/images/gov/hero-desktop.png.asset.json";
import heroMobile from "@/assets/images/gov/hero-mobile.jpg.asset.json";
import operationsImg from "@/assets/images/gov/operations.jpg.asset.json";
import ctaImg from "@/assets/images/gov/cta.jpg.asset.json";
import indGov from "@/assets/images/gov/ind-gov.jpg.asset.json";
import indMfg from "@/assets/images/gov/ind-mfg.jpg.asset.json";
import indAero from "@/assets/images/gov/ind-aero.jpg.asset.json";
import indEng from "@/assets/images/gov/ind-eng.jpg.asset.json";
import indTech from "@/assets/images/gov/ind-tech.jpg.asset.json";

const HERO_OG = heroDesktop.url;

export const Route = createFileRoute("/government-aerospace")({
  head: () => ({
    meta: [
      { title: "Government & Aerospace — NOVAGENTEC | Contract & Technical Infrastructure" },
      {
        name: "description",
        content:
          "NOVAGENTEC builds contract, compliance, engineering, manufacturing, supplier, quality, and execution infrastructure for government contractors, aerospace suppliers, and engineering organizations.",
      },
      {
        property: "og:title",
        content: "Government & Aerospace — NOVAGENTEC",
      },
      {
        property: "og:description",
        content:
          "Contract readiness. Mission performance. Mission-ready infrastructure engineered as one system.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_OG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_OG },
    ],
  }),
  component: GovernmentAerospacePage,
});

const capabilities = [
  {
    num: "01",
    title: "Prepare",
    icon: Compass,
    body: "Build strategic positioning, compliance alignment, capability structure, and readiness foundations.",
  },
  {
    num: "02",
    title: "Pursue",
    icon: Radar,
    body: "Identify qualified opportunities, evaluate fit, strengthen market intelligence, and organize pursuit planning.",
  },
  {
    num: "03",
    title: "Win",
    icon: Trophy,
    body: "Develop capture strategy, teaming alignment, compliant proposals, and credible differentiation.",
  },
  {
    num: "04",
    title: "Perform",
    icon: Activity,
    body: "Strengthen program execution, quality systems, supplier coordination, operational control, and mission outcomes.",
  },
] as const;

const systemNodes = [
  { label: "Engineering", icon: Wrench },
  { label: "Manufacturing", icon: Factory },
  { label: "Suppliers", icon: Users },
  { label: "Secure Workflows", icon: Lock },
  { label: "Quality & Process", icon: ShieldCheck },
  { label: "Program Execution", icon: GitBranch },
  { label: "Mission Analytics", icon: BarChart3 },
] as const;

const industries = [
  {
    label: "Government Contract",
    title: "Government Contractors",
    body: "Prime and subcontract organizations pursuing federal, defense, and civilian programs.",
    image: indGov.url,
  },
  {
    label: "Industrial",
    title: "Industrial Manufacturers",
    body: "Precision producers scaling controlled, audit-ready manufacturing operations.",
    image: indMfg.url,
  },
  {
    label: "Aerospace \u0026 Defense",
    title: "Aerospace & Defense Suppliers",
    body: "Tier suppliers delivering flight-critical hardware into demanding programs.",
    image: indAero.url,
  },
  {
    label: "Engineering",
    title: "Engineering Companies",
    body: "Design, analysis, and systems-engineering firms serving regulated industries.",
    image: indEng.url,
  },
  {
    label: "Technical Services",
    title: "Technical-Service Businesses",
    body: "Calibration, inspection, integration, and specialized field-service providers.",
    image: indTech.url,
  },
] as const;

const synergyPrinciples = [
  { title: "Clarity Before Complexity", icon: BookOpen },
  { title: "Education Before Implementation", icon: Cpu },
  { title: "Infrastructure Before Expansion", icon: Building2 },
  { title: "Synergy Over Fragmentation", icon: Combine },
] as const;

function GovernmentAerospacePage() {
  return (
    <div className="min-h-screen w-full bg-[#0B0B0B] text-pure-white flex flex-col">
      <Header variant="dark" active="government-aerospace" />

      <main id="main" className="flex-1 pt-[80px]">
        {/* HERO */}
        <section
          aria-labelledby="hero-heading"
          className="relative w-full overflow-hidden border-b border-charcoal"
        >
          {/* Mobile background */}
          <div className="absolute inset-0 lg:hidden">
            <img
              src={heroMobile.url}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/85 via-[#0B0B0B]/70 to-[#0B0B0B]"></div>
          </div>

          <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14 py-16 lg:py-0 lg:min-h-[780px] grid grid-cols-1 lg:grid-cols-[43fr_57fr] gap-10 lg:gap-14 items-center">
            <div className="relative z-10">
              <p className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] text-technical-bronze uppercase mb-6">
                Novagentec Government &amp; Aerospace
              </p>
              <h1
                id="hero-heading"
                className="font-heading font-medium uppercase leading-[1.02] tracking-tight text-pure-white text-[2.4rem] sm:text-5xl lg:text-[3.75rem]"
              >
                Contract Readiness.
                <br />
                Mission Performance.
              </h1>
              <div className="mt-6 h-px w-16 bg-technical-bronze" aria-hidden="true"></div>
              <p className="mt-6 max-w-xl text-sm md:text-base text-stone-gray font-light leading-relaxed">
                We build the contract, technical, and operational infrastructure that helps
                government contractors, aerospace suppliers, and engineering organizations
                prepare, pursue, win, and perform.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-technical-bronze text-carbon-black px-8 py-4 border border-technical-bronze hover:bg-transparent hover:text-technical-bronze transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-technical-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
                >
                  <span className="font-mono text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
                    Start the Conversation
                  </span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#capabilities"
                  className="group inline-flex items-center justify-center gap-3 bg-transparent text-pure-white px-8 py-4 border border-pure-white/40 hover:border-pure-white hover:bg-pure-white/5 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pure-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
                >
                  <span className="font-mono text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
                    Explore Capabilities
                  </span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <ul className="mt-14 grid grid-cols-3 gap-4 max-w-md">
                {[
                  { label: "Comply", icon: ShieldCheck },
                  { label: "Execute", icon: Cog },
                  { label: "Sustain", icon: Layers },
                ].map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex flex-col items-start border-t border-technical-bronze/40 pt-3"
                  >
                    <Icon
                      className="w-4 h-4 text-technical-bronze mb-2"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-stone-gray uppercase">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop hero image */}
            <div className="relative hidden lg:block lg:h-[780px] -mx-14">
              <img
                src={heroDesktop.url}
                alt="Aerospace turbine engine staged in a mission hangar with a NOVAGENTEC-marked equipment case."
                className="absolute inset-0 w-full h-full object-cover object-center"
                fetchPriority="high"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent"
              ></div>
            </div>
          </div>
        </section>

        {/* CAPABILITY ARCHITECTURE */}
        <section
          id="capabilities"
          aria-labelledby="capabilities-heading"
          className="w-full py-24 md:py-32 px-6 md:px-12 border-b border-charcoal"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-baseline gap-6 mb-14">
              <p className="font-mono text-[10px] tracking-[0.3em] text-technical-bronze uppercase">
                Capability Architecture
              </p>
              <span className="hidden md:block flex-1 h-px bg-charcoal" aria-hidden="true"></span>
            </div>
            <h2
              id="capabilities-heading"
              className="font-heading uppercase text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight max-w-3xl leading-tight text-pure-white mb-16"
            >
              A four-stage framework for mission-ready contractors.
            </h2>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal border border-charcoal">
              {capabilities.map(({ num, title, icon: Icon, body }) => (
                <li
                  key={num}
                  className="group bg-[#0F0F0F] p-8 md:p-10 flex flex-col min-h-[300px] transition-all duration-300 hover:bg-[#141414] hover:border-technical-bronze/40 border border-transparent"
                >
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono text-xs tracking-[0.25em] text-technical-bronze">
                      {num}
                    </span>
                    <Icon
                      className="w-5 h-5 text-brushed-silver group-hover:text-technical-bronze transition-colors"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-medium uppercase tracking-tight text-pure-white mb-5">
                    {title}
                  </h3>
                  <p className="text-sm text-stone-gray font-light leading-relaxed">{body}</p>
                  <span
                    aria-hidden="true"
                    className="mt-auto pt-8 h-px w-10 bg-technical-bronze/60 group-hover:w-16 transition-all duration-300"
                  ></span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TECHNICAL OPERATIONS SYSTEM */}
        <section
          aria-labelledby="ops-heading"
          className="w-full py-24 md:py-32 px-6 md:px-12 border-b border-charcoal bg-[#0A0A0A]"
        >
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-technical-bronze uppercase mb-6">
                Technical Operations System
              </p>
              <h2
                id="ops-heading"
                className="font-heading uppercase text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-pure-white leading-tight mb-6"
              >
                Mission-ready operations.
                <br />
                Engineered as one system.
              </h2>
              <div className="h-px w-16 bg-technical-bronze mb-6" aria-hidden="true"></div>
              <p className="text-sm md:text-base text-stone-gray font-light leading-relaxed max-w-xl">
                Reliable contract performance depends on more than isolated capabilities.
                NOVAGENTEC connects the technical and operational infrastructure required to
                control risk, improve execution, and sustain measurable performance.
              </p>

              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
                {systemNodes.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 border-b border-charcoal py-3"
                  >
                    <Icon
                      className="w-4 h-4 text-technical-bronze shrink-0"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] md:text-[11px] tracking-[0.15em] text-stone-gray uppercase truncate">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative border border-charcoal bg-[#050505] overflow-hidden">
              <img
                src={operationsImg.url}
                alt="Architectural schematic diagram of interconnected engineering, manufacturing, supplier, quality, and execution systems."
                loading="lazy"
                width={1600}
                height={1100}
                className="w-full h-auto opacity-80"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none border-t border-technical-bronze/20"
              ></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between font-mono text-[9px] tracking-[0.25em] text-brushed-silver uppercase bg-gradient-to-t from-[#050505] to-transparent">
                <span>NGX / System Map</span>
                <span className="text-technical-bronze">Rev. 04</span>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section
          aria-labelledby="industries-heading"
          className="w-full py-24 md:py-32 px-6 md:px-12 border-b border-charcoal"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-baseline gap-6 mb-6">
              <p className="font-mono text-[10px] tracking-[0.3em] text-technical-bronze uppercase">
                Industries We Empower
              </p>
              <span className="hidden md:block flex-1 h-px bg-charcoal" aria-hidden="true"></span>
            </div>
            <h2
              id="industries-heading"
              className="font-heading uppercase text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-pure-white leading-tight mb-16 max-w-3xl"
            >
              Infrastructure tuned to demanding programs.
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <li key={ind.title}>
                  <a
                    href="/contact"
                    className="group relative block overflow-hidden border border-charcoal bg-[#0F0F0F] transition-all duration-300 hover:-translate-y-1 hover:border-technical-bronze/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-technical-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={ind.image}
                        alt={`${ind.title} — reference imagery`}
                        loading="lazy"
                        width={1000}
                        height={800}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent"
                      ></div>
                    </div>
                    <div className="p-6 md:p-7">
                      <p className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-technical-bronze uppercase mb-3">
                        {ind.label}
                      </p>
                      <h3 className="font-heading text-lg md:text-xl font-medium uppercase tracking-tight text-pure-white mb-3 leading-tight">
                        {ind.title}
                      </h3>
                      <p className="text-xs md:text-sm text-stone-gray font-light leading-relaxed mb-6">
                        {ind.body}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-brushed-silver group-hover:text-technical-bronze transition-colors">
                          Engage
                        </span>
                        <ArrowUpRight
                          className="w-4 h-4 text-brushed-silver group-hover:text-technical-bronze group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SYNERGY STANDARD STRIP */}
        <section
          aria-labelledby="synergy-heading"
          className="w-full bg-[#080808] border-b border-charcoal px-6 md:px-12 py-16 md:py-20"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
              <div>
                <p className="font-mono text-[10px] tracking-[0.3em] text-technical-bronze uppercase mb-3">
                  Synergy Standard
                </p>
                <h2
                  id="synergy-heading"
                  className="font-heading text-xl md:text-2xl font-medium uppercase tracking-tight text-pure-white"
                >
                  Four shared principles. One operating standard.
                </h2>
              </div>
              <span className="hidden md:block flex-1 h-px bg-charcoal mx-6" aria-hidden="true"></span>
              <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] text-technical-bronze uppercase">
                <span>NGX</span>
                <span className="text-brushed-silver">·</span>
                <span>Standard 01</span>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal border border-charcoal">
              {synergyPrinciples.map(({ title, icon: Icon }) => (
                <li
                  key={title}
                  className="bg-[#0B0B0B] p-6 md:p-8 flex items-start gap-4 min-h-[130px]"
                >
                  <Icon
                    className="w-5 h-5 text-brushed-silver shrink-0 mt-0.5"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.25em] text-technical-bronze uppercase mb-2">
                      Principle
                    </p>
                    <h3 className="font-heading text-sm md:text-base font-medium uppercase tracking-tight text-pure-white leading-tight">
                      {title}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          aria-labelledby="cta-heading"
          className="relative w-full overflow-hidden border-b border-charcoal"
        >
          <img
            src={ctaImg.url}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1800}
            height={900}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/40"
          ></div>

          <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-technical-bronze uppercase mb-6">
                Engage Novagentec
              </p>
              <h2
                id="cta-heading"
                className="font-heading uppercase text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-pure-white leading-tight"
              >
                Build readiness into every program.
              </h2>
              <div className="mt-6 h-px w-16 bg-technical-bronze" aria-hidden="true"></div>
              <p className="mt-6 max-w-xl text-sm md:text-base text-stone-gray font-light leading-relaxed">
                Start with a focused review of your contract, compliance, technical, supplier,
                quality, and execution infrastructure.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-technical-bronze text-carbon-black px-10 py-4 border border-technical-bronze hover:bg-transparent hover:text-technical-bronze transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-technical-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
              >
                <span className="font-mono text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
                  Start the Conversation
                </span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="/"
                className="group inline-flex items-center gap-3 text-brushed-silver hover:text-technical-bronze transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-technical-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B] px-2 py-1"
              >
                <span className="font-mono text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase">
                  Return to Divisions
                </span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
