"use client";

import {
  ArrowRight,
  Compass,
  FileText,
  Globe,
  Handshake,
  LineChart,
  Megaphone,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Compass,
    title: "Strategic Advisory",
    description:
      "Market positioning and slate assessment for international buyers. Guidance on packaging, format considerations, and how to position scripted and unscripted content for maximum appeal in target territories. Competitive landscape analysis.",
    features: [
      "International market positioning",
      "Slate & packaging strategy",
      "Competitive landscape analysis",
      "Format adaptation guidance",
    ],
  },
  {
    icon: FileText,
    title: "Co-Production & Deal Structure Advisory",
    description:
      "Strategic guidance on co-production structures, deal frameworks, and finance plans. We review proposed deal terms, identify structural issues, and recommend approaches based on three decades of experience closing international entertainment transactions.",
    features: [
      "Co-production structuring",
      "Deal framework review",
      "Finance plan advisory",
      "Multi-territory deal architecture",
    ],
  },
  {
    icon: Handshake,
    title: "Introductions & Business Development",
    description:
      "Direct outreach to broadcasters, streamers, distributors, financiers, and production companies across Europe, the UK, and other international territories. We submit projects to potential buyers and partners and facilitate meaningful introductions.",
    features: [
      "Broadcaster & streamer outreach",
      "Distributor & financier introductions",
      "Partner identification & vetting",
      "Project submissions to buyers",
    ],
  },
  {
    icon: LineChart,
    title: "Market Intelligence",
    description:
      "Ongoing insight into market trends, buyer appetites, and competitive dynamics across international territories. Guidance on festival and market strategy including Berlin, Cannes, MIPCOM, MIA Market, Content London, and Series Mania.",
    features: [
      "Buyer appetite tracking",
      "Market trend analysis",
      "Festival & market strategy",
      "Territory-specific intelligence",
    ],
  },
  {
    icon: Globe,
    title: "International Growth Strategy",
    description:
      "End-to-end advisory for entertainment companies seeking to expand beyond their domestic market. We help identify the right territories, partners, and deal structures to build a sustainable international business.",
    features: [
      "Territory prioritization",
      "International expansion roadmaps",
      "Revenue stream diversification",
      "Cross-border partnership development",
    ],
  },
  {
    icon: ShoppingBag,
    title: "International Sales",
    description:
      "We act as independent sales agents for production companies, identifying and approaching potential buyers, promoting audiovisual works to distributors, platforms, and broadcasters, and facilitating negotiations across international territories.",
    features: [
      "Buyer & distributor outreach",
      "Project promotion to platforms",
      "Negotiation facilitation",
      "Pipeline management & reporting",
    ],
  },
  {
    icon: Megaphone,
    title: "Executive Production",
    description:
      "Hands-on executive production for international projects, bringing creative and operational leadership to premium scripted content. We work alongside creators and production teams to deliver projects that meet the highest global standards.",
    features: [
      "Creative oversight & guidance",
      "Production company building",
      "Talent & packaging strategy",
      "Delivery to global platforms",
    ],
  },
];

const expertise = [
  "Entertainment Law",
  "Business Affairs",
  "Television Production",
  "Film & Television Financing",
  "International Co-Production",
  "Company Building",
];

export default function StrategicAdvisory() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-6">
              Our Services
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">
              Strategic{" "}
              <span className="text-gold-gradient">Advisory</span>
            </h1>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Lucaville Global provides strategic advisory, international sales,
              executive production, and partnership development to entertainment
              companies operating internationally — drawing on three decades of
              experience spanning the full value chain of the film and television
              business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-charcoal-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              How We Help
            </h2>
            <div className="section-divider" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="group p-8 lg:p-10 bg-charcoal/50 border border-gold/10 hover:border-gold/30 transition-all duration-500 text-center h-full">
                  <service.icon
                    className="text-gold mx-auto mb-4"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-serif text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <p className="text-gold/60 text-xs uppercase tracking-wider mb-4">
                    Key Capabilities
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="text-muted text-sm"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="30 Years Across the Value Chain"
            subtitle="Our advisory is grounded in direct operational experience — not theory."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {expertise.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.08}>
                <div className="group text-center p-6 border border-gold/10 hover:border-gold/30 transition-all duration-500">
                  <p className="text-sm text-muted group-hover:text-gold transition-colors font-semibold">
                    {item}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal-dark/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Every Engagement Begins with a Conversation
            </h2>
            <p className="text-muted text-lg mb-10">
              Whether you&apos;re looking to expand internationally, structure a
              co-production, or position your slate for global buyers — we&apos;d
              welcome the opportunity to discuss how Lucaville can help.
            </p>
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
