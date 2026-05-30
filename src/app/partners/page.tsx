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
  {
    name: "Secuoya Studios",
    logo: "/images/secuoya-logo.jpg",
    url: "https://www.secuoyastudios.com",
    description:
      "Lucaville Global provides strategic advisory and international sales consulting to Secuoya Studios, a leading Spanish production studio with growing international reach. Known for its diverse slate of premium scripted series across thriller, crime, and drama, Secuoya has built a strong reputation for bold, high-quality Spanish-language storytelling, alongside films, entertainment formats, and documentaries. Lucaville Global is supporting the studio in positioning its content with English-language buyers and global platforms.",
  },
];

export default function Partners() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-4">
              Global Reach
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Partners
            </h1>
            <p className="text-muted text-lg max-w-xl">
              Lucaville Global collaborates with world-class partners to
              develop, produce, and distribute premium content worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-12">
          {partners.map((partner, i) => (
            <AnimatedSection key={partner.name} delay={i * 0.15}>
              <div className="border border-white/[0.04] hover:border-white/[0.08] transition-all duration-500 p-10 lg:p-14">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
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
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <div className="section-divider mb-6 md:!mx-0" />
                    <p className="text-foreground/75 leading-relaxed text-sm">
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
