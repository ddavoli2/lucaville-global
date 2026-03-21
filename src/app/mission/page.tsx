"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function Mission() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-6">
              Our Purpose
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">
              Mission & <span className="text-gold-gradient">Vision</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* The Name */}
      <section className="py-24 bg-charcoal-dark/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-8">
              The Origin
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground/90 mb-8">
              &ldquo;Luca&rdquo; means the bringer of light.
            </blockquote>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Lucaville Global was founded with the mission of honoring that
              ideal in storytelling.
            </p>
            <div className="section-divider mt-10" />
          </AnimatedSection>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-8">
              Our Mission
            </p>
            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-8">
              The most beautiful and compelling stories from around the world
              often linger in the shadows, waiting too long — or perpetually —
              for the spotlight their creative masterpieces merit. Lucaville
              Global was launched to remedy this cultural oversight.
            </p>
            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-8">
              As we build companies and content on a global scale, we&apos;re
              excited to weave a riveting tapestry from the threads of courage
              and grace found across continents. Profound narratives, and the
              companies that house them, are being reimagined for 2026, an age
              of AI, media consolidation, and audiences hungry for quality, not
              quantity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Illumination CTA */}
      <section className="py-24 md:py-32 bg-charcoal-dark/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed text-foreground/90 mb-10">
              Follow us as we begin the work of{" "}
              <span className="text-gold-gradient">illumination</span>.
            </p>
            <div className="section-divider mb-12" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal-dark font-semibold px-10 py-4 transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
