"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-4">
              Our People
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold">
              Leadership
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* David Davoli */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-start">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/david-davoli.jpg"
                  alt="David Davoli"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div>
                <div className="border-l-[3px] border-gold pl-6 mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold">
                      David Davoli
                    </h2>
                    <a
                      href="https://www.linkedin.com/in/daviddavoli/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-gold transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gold text-xs uppercase tracking-[0.2em]">
                    Founder &amp; CEO
                  </p>
                </div>

                <div className="space-y-5 text-foreground/75 leading-relaxed">
                  <p>
                    David Davoli is a strategic media executive and the Founder
                    and CEO of Lucaville Global, a company partnering with
                    filmmakers, creators, and independent companies worldwide to
                    build ambitious projects and scale the ventures that support
                    them. Positioned at the intersection of creativity, capital,
                    and global reach, Lucaville brings innovative approaches to
                    how content is financed, structured, and
                    distributed&mdash;championing quality storytelling that
                    transcends borders.
                  </p>
                  <p>
                    With three decades of experience, Davoli is a recognized
                    leader in bridging Hollywood with international markets and
                    building scalable global platforms. As President,
                    International at Anonymous Content, he led a portfolio of
                    eight joint ventures spanning Europe, Latin America, and
                    Australia. He championed premium storytelling that delivered
                    hit scripted and unscripted series in Brazil, major limited
                    series in the UK for BBC, ITV, and Channel 4, and a Nordic
                    series portfolio with releases for leading platforms
                    including Neon, Netflix Nordics, TV2, NRK, and Warner Bros.
                    Discovery. He successfully executed major operational
                    turnarounds, transforming distressed ventures into thriving
                    production companies.
                  </p>
                  <p>
                    At BRON Studios, Davoli built the television division from
                    the ground up and executive produced prestige hits including{" "}
                    <em>The Idol</em> (HBO), <em>Kin</em> (RT&Eacute;/AMC+),{" "}
                    <em>The Defeated</em> (Netflix),{" "}
                    <em>That Dirty Black Bag</em> (AMC+), and{" "}
                    <em>Call My Agent UK</em> (Amazon/SundanceNow). A former
                    entertainment attorney with 15 years in private practice, he
                    has structured complex multi-territory co-productions,
                    forging enduring partnerships with HBO, Netflix, Amazon,
                    AMC+, BBC, ITV, Disney, ZDF, Canal+, RTE, Viaplay, and
                    Warner Bros. Discovery.
                  </p>
                  <p>
                    Davoli is a frequent speaker and juror at major international
                    markets&mdash;most recently serving on the jury for the Red
                    Sea Film Festival&apos;s Series Lab, the selection committee
                    for the 2026 Red Sea Film Festival Features Lab, and the ACTV
                    Creative Committee. He has also spoken at Content London,
                    MIPCOM, MIA Market, and Rio2C.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Concetta Froio */}
      <section className="py-24 border-t border-white/[0.04] bg-charcoal/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-start">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/concetta-froio.jpg"
                  alt="Concetta Froio"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div>
                <div className="border-l-[3px] border-gold pl-6 mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold">
                      Concetta Froio
                    </h2>
                    <a
                      href="https://www.linkedin.com/in/concetta-froio-9b9615182/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-gold transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gold text-xs uppercase tracking-[0.2em]">
                    Coordinator, Global Film &amp; TV
                  </p>
                </div>

                <div className="space-y-5 text-foreground/75 leading-relaxed">
                  <p>Bio coming soon.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
