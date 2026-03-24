"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Film, Globe, Briefcase, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const pillars = [
  {
    icon: Film,
    title: "Content Development",
    description:
      "We develop premium scripted series with visionary creators worldwide — from concept through production to global distribution.",
  },
  {
    icon: Globe,
    title: "International Co-Production",
    description:
      "We structure complex multi-territory co-productions, forging partnerships with leading broadcasters and platforms across continents.",
  },
  {
    icon: Briefcase,
    title: "Venture Building",
    description:
      "We build and scale independent production companies, transforming early-stage ventures into thriving global content businesses.",
  },
  {
    icon: Sparkles,
    title: "Strategic Advisory",
    description:
      "We advise creators, companies, and investors on innovative financing, distribution, and growth strategies for the evolving media landscape.",
  },
];

const featuredProjects = [
  {
    title: "KIN",
    category: "Crime Drama • Ireland",
    image: "/images/kin-poster.jpg",
  },
  {
    title: "That Dirty Black Bag",
    category: "Spaghetti Western • Italy",
    image: "/images/tdbb-poster.jpg",
  },
  {
    title: "Ten Percent",
    category: "Comedy • UK",
    image: "/images/ten-percent-poster.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero-video-new.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-gold font-bold uppercase tracking-[0.4em] text-lg md:text-xl lg:text-2xl mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%),_0_0_20px_rgb(0_0_0_/_60%)]">
              Global Content &bull; Premium Storytelling
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
          >
            Illuminating Stories the World{" "}
            <span className="text-gold-gradient">Needs to See</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%),_0_0_20px_rgb(0_0_0_/_60%)]"
          >
            Lucaville Global partners with filmmakers, creators, and independent
            companies worldwide to build ambitious projects and scale the
            ventures that support them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal-dark font-semibold px-8 py-4 transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Our Projects
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gold/10 bg-charcoal-dark/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { value: "10+", label: "Seasons Produced" },
              { value: "3+", label: "Films Produced" },
              { value: "8+", label: "Countries" },
              { value: "30", label: "Years Experience" },
              { value: "12+", label: "Platform Partners" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-gold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-4">
              What We Do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              How We Work
            </h2>
            <div className="section-divider" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.15}>
                <div className="group p-8 bg-charcoal/50 border border-gold/10 hover:border-gold/30 transition-all duration-500 text-center">
                  <pillar.icon
                    className="text-gold mb-6 mx-auto group-hover:scale-110 transition-transform duration-500"
                    size={36}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-serif text-2xl font-semibold mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-charcoal-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-4">
              Our Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted text-base max-w-2xl mx-auto mt-4">
              Projects executive produced by David Davoli, Founder &amp; CEO of Lucaville Global.
            </p>
            <div className="section-divider mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.15}>
                <Link href="/projects" className="block">
                  <div className="group h-full bg-charcoal border border-gold/10 hover:border-gold/30 transition-all duration-500 overflow-hidden">
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="p-6 text-center">
                      <p className="text-gold/70 text-xs uppercase tracking-wider mb-2">
                        {project.category}
                      </p>
                      <h3 className="font-serif text-xl font-semibold group-hover:text-gold transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors uppercase tracking-wider text-sm"
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Follow us as we begin the work of{" "}
              <span className="text-gold-gradient">illumination</span>.
            </p>
            <div className="section-divider mb-10" />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
