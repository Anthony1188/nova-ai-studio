import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DivisionCards } from "@/components/DivisionCards";
import { SynergyCTA } from "@/components/SynergyCTA";
import heroBg from "@/assets/images/hero_bg_minimal_1784711546485.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOVAGENTEC | Business Infrastructure Architecture" },
      {
        name: "description",
        content:
          "NOVAGENTEC builds business infrastructure for commercial small businesses and government & aerospace suppliers. One company. Two paths. One synergy standard.",
      },
      { property: "og:title", content: "NOVAGENTEC | Business Infrastructure Architecture" },
      {
        property: "og:description",
        content:
          "Choose the infrastructure path designed for your organization — Commercial Small Business or Government & Aerospace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

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
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-wide text-carbon-black mb-6 uppercase leading-tight">
              Build what your next level requires.
            </h1>
            <div className="w-16 h-[3px] bg-technical-bronze mx-auto mb-8"></div>
            <p className="text-base md:text-xl text-graphite font-light max-w-2xl mx-auto">
              Choose the infrastructure path designed for your organization.
            </p>
          </div>

          <DivisionCards />
        </section>

        <SynergyCTA />
      </main>

      <Footer />
    </div>
  );
}
