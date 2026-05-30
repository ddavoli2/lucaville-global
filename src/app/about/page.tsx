"use client";

import { ArrowRight, Compass, Globe, Handshake, Lightbulb } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We operate across continents, bringing a truly borderless perspective to every project and partnership we build.",
  },
  {
    icon: Handshake,
    title: "Enduring Partnerships",
    description:
      "Our relationships are built on transparency, integrity, and shared values. We believe trust is the foundation of every successful collaboration — and we earn it through honest dialogue, aligned incentives, and a commitment to outcomes that matter.",
  },
  {
    icon: Lightbulb,
    title: "Contemporary Thinking",
    description:
      "We bring fresh approaches to how content is financed, structured, and amplified — crafting frameworks for the next era of global storytelling.",
  },
  {
    icon: Compass,
    title: "Experience-Driven",
    description:
      "Three decades across entertainment law, production, financing, and international operations — our advisory is grounded in direct experience, not theory.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-4">
              Who We Are
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About <span className="text-gold-gradient">Lucaville Global</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <div className="border-l-[3px] border-gold pl-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-6">
                  Our Mission
                </h2>
                <div className="space-y-5 text-foreground/75 leading-relaxed">
                  <p className="text-xl font-serif font-semibold text-foreground/90">
                    &ldquo;Luca&rdquo; means the bringer of light.
                  </p>
                  <p>
                    Lucaville Global was founded with the mission of honoring
                    that ideal in storytelling.
                  </p>
                  <p>
                    The most beautiful and compelling stories from around the
                    world often linger in the shadows, waiting too long — or
                    perpetually — for the spotlight their creative masterpieces
                    merit. Lucaville Global was launched to remedy this cultural
                    oversight.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="border-l-[3px] border-gold pl-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-6">
                  Our Vision
                </h2>
                <div className="space-y-5 text-foreground/75 leading-relaxed">
                  <p>
                    As we build companies and content on a global scale,
                    we&apos;re excited to weave a riveting tapestry from the
                    threads of courage and grace found across continents.
                  </p>
                  <p>
                    Profound narratives, and the companies that house them, are
                    being reimagined for 2026, an age of AI, media
                    consolidation, and audiences hungry for quality, not
                    quantity.
                  </p>
                  <p>
                    Lucaville Global stands at the intersection of creativity,
                    capital, and global reach — crafting the frameworks that will
                    define the next era of global storytelling.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 border-t border-white/[0.04] bg-charcoal/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="border-l-[3px] border-gold pl-6 mb-10">
                <p className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-2">
                  Why Now
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">
                  Built for This Moment
                </h2>
              </div>
              <div className="pl-9 space-y-5 text-foreground/75 leading-relaxed">
                <p>
                  The international media space has entered a new phase —
                  borderless, decentralized, and moving faster than legacy
                  structures can support.
                </p>
                <p>
                  Lucaville Global was launched now, because it&apos;s the ideal
                  time to leverage three decades of experience across
                  international partnerships, content, and enterprise-building.
                  With that experience, we&apos;re poised to unlock value in a
                  rapidly shifting ecosystem.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="border-l-[3px] border-gold pl-6 mb-10">
                <p className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-2">
                  Our Founder
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">
                  Three Decades of Building Global Platforms
                </h2>
              </div>
              <div className="pl-9 space-y-5 text-foreground/75 leading-relaxed">
                <p>
                  Lucaville Global&apos;s founder and CEO, David Davoli, has
                  focused his career on building scalable global platforms to
                  tell compelling stories with world-class filmmakers from all
                  over the world.
                </p>
                <p>
                  At Anonymous Content, he led their international expansion,
                  re-imagining and growing it into a cohesive, dynamic and
                  robust portfolio of joint ventures and creative partnerships
                  across five continents. At BRON Studios, he built an
                  international studio from the ground up — producing and
                  financing a diverse slate of projects including the
                  multi-award-winning series <em>Kin</em>, as well as{" "}
                  <em>The Defeated</em>, <em>That Dirty Black Bag</em>,{" "}
                  <em>The Front Runner</em>, <em>Ten Percent</em>, and{" "}
                  <em>The Idol</em>.
                </p>
                <p>
                  At Lucaville Global we will continue such work, but now, with
                  more agility and through a contemporary lens — partnering with
                  filmmakers, creators, and independent companies to build
                  ambitious projects worldwide and grow the ventures that
                  support them.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-white/[0.04] bg-charcoal/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="border-l-[3px] border-gold pl-6 mb-16">
              <p className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-2">
                Our Values
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                How We Think
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-background p-10 md:p-12">
                  <value.icon
                    className="text-gold/60 mb-4"
                    size={24}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
              Follow us as we begin the work of{" "}
              <span className="text-gold-gradient">illumination</span>.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-background font-semibold px-8 py-4 transition-all duration-300 text-sm tracking-[0.15em] uppercase"
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
