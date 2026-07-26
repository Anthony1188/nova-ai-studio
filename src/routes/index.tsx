import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DivisionCards } from "@/components/DivisionCards";
import { SynergyCTA } from "@/components/SynergyCTA";
import heroBg from "@/assets/images/hero_bg_minimal_1784711546485.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOVAGENTEC | Operational Infrastructure Engineering" },
      {
        name: "description",
        content:
          "NOVAGENTEC engineers operational infrastructure — people, processes, systems, technology, and data aligned into repeatable business performance. The Synergy Standard.",
      },
      { property: "og:title", content: "NOVAGENTEC | Operational Infrastructure Engineering" },
      {
        property: "og:description",
        content:
          "Business first. Infrastructure first. Technology second. Operational infrastructure engineering for small businesses and technical organizations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PRINCIPLES = [
  {
    n: "01",
    title: "Business First",
    body: "Twenty-five years of real-world ownership and operations inform every engagement. Alignment precedes any tool.",
  },
  {
    n: "02",
    title: "Infrastructure First",
    body: "Expertise becomes documented process, repeatable workflow, and an operating structure that scales without the founder.",
  },
  {
    n: "03",
    title: "Technology Second",
    body: "Automation and software are engineering instruments — applied only once the business system is sound.",
  },
];

function Index() {
  return (
    <div
      className="w-full min-h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Header />

      <main className="flex-1 flex flex-col pt-[80px]">
        <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center pt-24 pb-12 px-4 md:px-8">
          <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20">
            <p className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-graphite mb-6">
              Operational Infrastructure Engineering
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-wide text-carbon-black mb-6 uppercase leading-tight">
              Build what your next level requires.
            </h1>
            <div className="w-16 h-[3px] bg-technical-bronze mx-auto mb-8"></div>
            <p className="text-base md:text-xl text-graphite font-light max-w-2xl mx-auto">
              We engineer business infrastructure — turning proven expertise into repeatable
              workflows, scalable foundations, and intelligent operating systems.
            </p>
          </div>

          <DivisionCards />
        </section>

        <section
          aria-labelledby="positioning-heading"
          className="w-full bg-mineral-white/90 border-y border-stone-gray/40 py-20 md:py-28 px-6 md:px-12"
        >
          <div className="max-w-[1240px] mx-auto">
            <h2
              id="positioning-heading"
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-tight text-carbon-black max-w-3xl leading-snug"
            >
              NOVAGENTEC is not a technology vendor. We engineer the operational
              infrastructure a business runs on.
            </h2>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-gray/50 border border-stone-gray/50">
              {PRINCIPLES.map((p) => (
                <article key={p.n} className="bg-mineral-white p-8 md:p-10">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-technical-bronze">
                    {p.n}
                  </span>
                  <h3 className="font-heading text-lg md:text-xl uppercase tracking-wide text-carbon-black mt-6 mb-4">
                    {p.title}
                  </h3>
                  <p className="text-graphite font-light text-sm leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SynergyCTA />

      </main>

      <Footer />
    </div>
  );
}
