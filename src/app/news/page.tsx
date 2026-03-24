"use client";

import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const articles = [
  {
    date: "May 2026",
    category: "Press",
    title:
      "Ex-Anonymous Exec David Davoli Sets Up Int'l Content Outfit Lucaville Global",
    excerpt:
      "David Davoli, former president of international at Anonymous Content, has launched Lucaville Global, a New York-based international content company working with creators and independents to develop projects using innovative financing and distribution models.",
    url: "https://www.c21media.net/news/ex-anonymous-exec-david-davoli-sets-up-intl-content-outfit-lucaville-global/",
    source: "C21Media",
  },
  {
    date: "December 2024",
    category: "Press",
    title: "Peak TV Is Over, Welcome to Local TV",
    excerpt:
      "The Hollywood Reporter covers a Red Sea International Film Festival panel exploring the shift from Peak TV to locally-driven content, featuring industry leaders discussing the future of international storytelling.",
    url: "https://www.hollywoodreporter.com/business/business-news/peak-tv-local-tv-rsiff-panel-1236080418/",
    source: "The Hollywood Reporter",
  },
  {
    date: "April 2022",
    category: "Press",
    title: "Can 'Ten Percent' Eliminate the Language Barrier in Streaming?",
    excerpt:
      "The New York Times examines how Ten Percent, the English-language remake of the hit French series Call My Agent, is testing whether international format adaptations can break through in the streaming era.",
    url: "https://www.nytimes.com/2022/04/28/business/media/ten-percent-call-my-agent-streaming.html",
    source: "The New York Times",
  },
  {
    date: "February 2022",
    category: "Podcast",
    title: "C21 Podcast: Kelly Edwards, David Davoli, Kristen V Carter & Claire Finn",
    excerpt:
      "David Davoli joins the C21 podcast to discuss BRON Studios' expanding television operations alongside industry leaders covering topics in content creation and the evolving media landscape.",
    url: "https://www.c21media.net/c21podcasts/kelly-edwards-david-davoli-kristen-v-carter-claire-finn/",
    source: "C21Media",
  },
  {
    date: "February 2022",
    category: "Press",
    title: "'Call My Agent' U.K. Producers Talk Storylines, Celebrity Cameos",
    excerpt:
      "Variety explores the U.K. adaptation of Call My Agent, with producers discussing the show's narrative direction and plans for celebrity guest appearances in the British version of the hit French format.",
    url: "https://variety.com/2022/tv/global/call-my-agent-u-k-remake-1235158345/",
    source: "Variety",
  },
  {
    date: "December 2021",
    category: "Press",
    title: "Keeping It in the Family",
    excerpt:
      "Drama Quarterly explores the creation of KIN, the Irish crime drama about the Kinsella family's gangland conflicts, with showrunner Peter McKenna discussing how the series prioritizes emotional consequences over crime procedurals.",
    url: "https://dramaquarterly.com/keeping-it-in-the-family-2/",
    source: "Drama Quarterly",
  },
  {
    date: "November 2021",
    category: "Press",
    title:
      "AMC+ Acquires Worldwide Premiere of That Dirty Black Bag with Dominic Cooper, Douglas Booth",
    excerpt:
      "AMC+ secures exclusive streaming rights to the eight-part spaghetti western series That Dirty Black Bag, featuring an ensemble cast including Dominic Cooper and Douglas Booth, set to premiere in spring 2022.",
    url: "https://www.amcnetworks.com/press-releases/amc-acquires-worldwide-premiere-of-that-dirty-black-bag-wdominic-cooper-douglas-booth/",
    source: "AMC Networks",
  },
  {
    date: "June 2021",
    category: "Press",
    title: "Sundance Now Nabs U.S. Premiere Rights to 'Call My Agent!'",
    excerpt:
      "Sundance Now acquires exclusive U.S. premiere rights to the French series Call My Agent!, bringing the acclaimed international television program to American audiences.",
    url: "https://variety.com/2021/tv/news/sundance-now-call-my-agent-british-remake-1235023272/",
    source: "Variety",
  },
];

export default function News() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <p className="text-gold/80 uppercase tracking-[0.3em] text-sm mb-6">
              Perspectives
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">
              News
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              The latest from Lucaville Global.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 bg-charcoal-dark/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {articles.map((article, i) => (
              <AnimatedSection key={article.title} delay={i * 0.1}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <article className="group p-8 lg:p-10 bg-charcoal/50 border border-gold/10 hover:border-gold/30 transition-all duration-500 cursor-pointer">
                    <div>
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-gold/70 text-xs uppercase tracking-wider">
                            {article.category}
                          </span>
                          <span className="text-muted/30">|</span>
                          <span className="text-muted/60 text-xs flex items-center gap-1">
                            <Calendar size={12} />
                            {article.date}
                          </span>
                          {article.source && (
                            <>
                              <span className="text-muted/30">|</span>
                              <span className="text-muted/60 text-xs flex items-center gap-1">
                                <ExternalLink size={12} />
                                {article.source}
                              </span>
                            </>
                          )}
                        </div>
                        <h3 className="font-serif text-xl lg:text-2xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                          {article.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </article>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
