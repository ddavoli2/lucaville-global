"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "Titanus",
    logo: "/images/titanus-logo.jpg",
    url: "https://www.titanus.it",
    description:
      "Lucaville Global has formed a joint venture with Titanus, one of Italy's most storied film and television studios. Founded in 1904, Titanus has been a cornerstone of Italian cinema for over a century, producing some of the most celebrated films in the country's history. Together, Lucaville and Titanus are developing an ambitious slate of premium content that bridges Italian storytelling traditions with global audiences — beginning with a remake of the classic heist comedy The Treasure of San Gennaro, produced alongside Lawrence Bender.",
  },
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
              Lucaville Global collaborates with world-class partners to develop, produce, and distribute premium content worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-charcoal-dark/50">
        <div className="max-w-5xl mx-auto px-6">
          {partners.map((partner, i) => (
            <AnimatedSection key={partner.name} delay={i * 0.15}>
              <div className="bg-charcoal/50 border border-gold/10 hover:border-gold/30 transition-all duration-500 p-10 lg:p-14">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                  {/* Logo */}
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <div className="relative w-60 h-40 overflow-hidden">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </a>

                  {/* Description */}
                  <div className="text-center md:text-left">
                    <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                      <h2 className="font-serif text-3xl md:text-4xl font-bold">
                        {partner.name}
                      </h2>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-gold transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <div className="section-divider mb-6 !mx-0 md:!mx-0" />
                    <p className="text-foreground/80 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
