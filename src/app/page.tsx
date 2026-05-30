"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const featuredProjects = [
  {
    title: "KIN",
    category: "Crime Drama",
    region: "Ireland",
    network: "AMC+",
    image: "/images/kin-poster.jpg",
  },
  {
    title: "That Dirty Black Bag",
    category: "Spaghetti Western",
    region: "Italy",
    network: "AMC+",
    image: "/images/tdbb-poster.jpg",
  },
  {
    title: "Ten Percent",
    category: "Comedy",
    region: "UK",
    network: "Amazon Prime",
    image: "/images/ten-percent-poster.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── Dark editorial title card, no video */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,107,61,0.07),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(88,40,180,0.06),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-40">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-teal text-[13px] tracking-[0.35em] uppercase mb-6"
          >
            Global Content &bull; Premium Storytelling
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{ transformOrigin: "left" }}
            className="w-full max-w-3xl h-px bg-gradient-to-r from-gold/50 to-transparent mb-14"
          />

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-serif text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.92] tracking-tight mb-12"
          >
            <span className="text-gold-gradient">Illuminating</span>
            <br />
            Stories the
            <br />
            World Needs
            <br />
            to See
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-foreground/50 text-lg max-w-md leading-relaxed mb-12"
          >
            Partnering with filmmakers, creators, and independent companies
            worldwide to build ambitious projects and scale the ventures that
            support them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-gold text-sm tracking-[0.2em] uppercase hover:text-gold-light transition-colors group"
            >
              Explore Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* Logo watermark bottom-right — like deck slide 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-16 right-10 hidden lg:block"
          >
            <Image
              src="/images/lucaville-logo-trimmed.png"
              alt=""
              width={300}
              height={150}
              className="w-48 h-auto object-contain"
              unoptimized
              aria-hidden
            />
          </motion.div>
        </div>
      </section>

      {/* ─── NEWS TICKER ─── */}
      <div className="border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <Link
            href="https://deadline.com/2026/03/lucaville-titanus-jv-italy-lawrence-bender-dario-argento-1236762802/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <span className="text-gold text-[11px] uppercase tracking-[0.25em] font-semibold shrink-0">
              Latest
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-muted text-sm group-hover:text-foreground/80 transition-colors truncate">
              Lucaville Global Launches JV With Italy&apos;s Titanus — First
              Projects Include Lawrence Bender
            </span>
            <ArrowRight
              size={13}
              className="text-gold/40 group-hover:text-gold transition-colors shrink-0 ml-auto"
            />
          </Link>
        </div>
      </div>

      {/* ─── AT A GLANCE ─── Warm stat cards like deck slide 3 */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-16">
              At a Glance
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "10+", label: "Seasons Produced" },
              { value: "3+", label: "Films Produced" },
              { value: "8+", label: "Countries" },
              { value: "30+", label: "Years Experience" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="bg-warm border border-gold/10 p-10 md:p-12 text-center">
                  <p className="font-serif text-4xl md:text-5xl font-bold text-teal mb-3">
                    {stat.value}
                  </p>
                  <p className="text-gold/70 text-[11px] uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── Two columns with accent bars (deck slide 2) */}
      <section className="py-28 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <div className="border-l-[3px] border-gold pl-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-6">
                  Our Mission
                </h2>
                <p className="text-foreground/60 leading-relaxed">
                  We develop deeply human stories that blend genre convention
                  with fresh perspective. Every project is shaped by bold
                  creative vision and a commitment to bringing underrepresented
                  voices to screen.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="border-l-[3px] border-gold pl-8">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-6">
                  Our Vision
                </h2>
                <p className="text-foreground/60 leading-relaxed">
                  To create a slate of work that resonates globally while
                  remaining rooted in authenticity. We partner with visionary
                  storytellers to produce content that entertains, provokes, and
                  endures.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section className="py-28 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-20">
              How We Work
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-20">
            {[
              {
                num: "01",
                title: "Content Development",
                text: "We develop premium scripted series with visionary creators worldwide — from concept through production to global distribution.",
              },
              {
                num: "02",
                title: "International Co-Production",
                text: "We structure complex multi-territory co-productions, forging partnerships with leading broadcasters and platforms across continents.",
              },
              {
                num: "03",
                title: "Venture Building",
                text: "We build and scale independent production companies, transforming early-stage ventures into thriving global content businesses.",
              },
              {
                num: "04",
                title: "Strategic Advisory",
                text: "We advise creators, companies, and investors on innovative financing, distribution, and growth strategies for the evolving media landscape.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.num} delay={i * 0.1}>
                <div>
                  <span className="text-teal font-serif text-5xl font-bold">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold mt-4 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-28 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold">
                Featured Projects
              </h2>
              <Link
                href="/projects"
                className="hidden md:inline-flex items-center gap-2 text-foreground/40 hover:text-gold text-sm tracking-wide transition-colors group"
              >
                View All
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.15}>
                <Link href="/projects" className="block group">
                  <div className="relative aspect-[2/3] overflow-hidden mb-5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  <p className="text-muted/50 text-[11px] uppercase tracking-[0.15em] mb-1">
                    {project.category} &mdash; {project.region} &mdash;{" "}
                    {project.network}
                  </p>
                  <h3 className="font-serif text-2xl font-bold group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gold text-sm tracking-wide"
            >
              View All Projects
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Follow us as we begin the work of{" "}
              <span className="text-gold-gradient">illumination</span>.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
