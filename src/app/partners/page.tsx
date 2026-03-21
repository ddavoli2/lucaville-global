"use client";

import AnimatedSection from "@/components/AnimatedSection";

const partners = [
  "HBO",
  "Netflix",
  "Amazon Prime",
  "Disney",
  "AMC+",
  "BBC",
  "ITV",
  "ZDF",
  "Canal+",
  "RTÉ",
  "Viaplay",
  "Channel 4",
  "SundanceNow",
  "Stan",
  "Globoplay",
  "CAA",
];

export default function Partners() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-6">
              Global Reach
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">
              Partners
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We collaborate with the world&apos;s leading platforms,
              broadcasters, and agencies — building enduring partnerships that
              bring extraordinary stories to global audiences.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-charcoal-dark/50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-4">
              Our Partners
            </p>
            <div className="section-divider" />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <AnimatedSection key={partner} delay={i * 0.05}>
                <div className="group flex items-center justify-center h-28 border border-gold/10 hover:border-gold/40 bg-charcoal/30 hover:bg-charcoal/60 transition-all duration-500">
                  <span className="font-serif text-lg md:text-xl font-semibold text-muted/60 group-hover:text-gold transition-colors duration-500 tracking-wide">
                    {partner}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
