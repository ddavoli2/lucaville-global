"use client";

import { ArrowRight, Compass, Globe, Handshake, Lightbulb } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

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
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-6">
              Who We Are
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">
              About <span className="text-gold-gradient">Lucaville Global</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Mission — at top as thesis */}
      <section className="py-24 bg-charcoal-dark/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-4">
              Our Mission
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground/90 mb-8">
              &ldquo;Luca&rdquo; means the bringer of light.
            </blockquote>
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
              Lucaville Global was founded with the mission of honoring that
              ideal in storytelling.
            </p>
            <div className="section-divider mb-8" />
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
              The most beautiful and compelling stories from around the world
              often linger in the shadows, waiting too long — or perpetually —
              for the spotlight their creative masterpieces merit. Lucaville
              Global was launched to remedy this cultural oversight.
            </p>
            <p className="text-foreground/80 text-lg md:text-xl leading-relaxed">
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

      {/* Who We Are */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-4">
              Who We Are
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Creativity, Capital &amp; Global Reach
            </h2>
            <div className="section-divider mb-8" />
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                Lucaville Global stands at the intersection of creativity, capital,
                and global reach. We&apos;re moving beyond traditional production
                models, bringing fresh takes to how content is financed, structured,
                and amplified, to reflect today&apos;s market. Positioned ahead of
                the curve, we&apos;re crafting the frameworks that will define the
                next era of global storytelling.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 bg-charcoal-dark/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-4">
              Why Now
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Built for This Moment
            </h2>
            <div className="section-divider mb-8" />
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                The international media space has entered a new phase —
                borderless, decentralized, and moving faster than legacy
                structures can support. Lucaville Global was launched now,
                because it&apos;s the ideal time to leverage three decades of
                experience across international partnerships, content, and
                enterprise-building. With that experience, we&apos;re poised to
                unlock value in a rapidly shifting ecosystem.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-4">
              Our Founder
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Three Decades of Building Global Platforms
            </h2>
            <div className="section-divider mb-8" />
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                Lucaville Global&apos;s founder and CEO, David Davoli, has focused
                his career on building scalable global platforms to tell
                compelling stories with world-class filmmakers from all over the
                world. At Anonymous Content, he led their international
                expansion, re-imagining and growing it into a cohesive, dynamic
                and robust portfolio of joint ventures and creative partnerships
                across five continents. At BRON Studios, he built an
                international studio from the ground up — producing and financing
                a diverse slate of projects including the multi-award-winning
                series <em>Kin</em>, as well as <em>The Defeated</em>,{" "}
                <em>That Dirty Black Bag</em>, <em>The Front Runner</em>,{" "}
                <em>Ten Percent</em>, and <em>The Idol</em>.
              </p>
              <p>
                At Lucaville Global we will continue such work, but now, with
                more agility and through a contemporary lens. Lucaville Global is
                partnering with filmmakers, creators, and independent companies
                to build ambitious projects worldwide — and to grow the ventures
                that support them.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-charcoal-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="How We Think"
            subtitle="The principles that guide everything we do."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-gold/20 mb-6">
                    <value.icon className="text-gold" size={28} strokeWidth={1.5} />
                  </div>
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

      {/* Illumination CTA */}
      <section className="py-24 md:py-32">
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
