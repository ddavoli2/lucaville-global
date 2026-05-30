"use client";

import { Calendar, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const articles = [
  {
    date: "March 2026",
    category: "Press",
    title:
      "David Davoli's Lucaville Global Launches JV With Italy's Titanus; First Projects Include 'The Treasure Of San Gennaro' Heist Comedy Remake With Lawrence Bender",
    excerpt:
      "Deadline reports on Lucaville Global's joint venture with Italy's historic Titanus studio, with first projects including a remake of the classic heist comedy The Treasure of San Gennaro, produced with Lawrence Bender.",
    url: "https://deadline.com/2026/03/lucaville-titanus-jv-italy-lawrence-bender-dario-argento-1236762802/",
    source: "Deadline",
  },
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
    date: "November 2025",
    category: "Press",
    title: "Red Sea Unveils Industry Program for 2025",
    excerpt:
      "Variety covers the Red Sea Film Festival's expanded industry program, highlighting new professional development and support initiatives for filmmakers in the global entertainment sector.",
    url: "https://variety.com/2025/film/global/red-sea-souk-industry-program-2026-1236591543/",
    source: "Variety",
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
    date: "September 2024",
    category: "Press",
    title:
      "San Sebastian: CAA Media Finance Unveils Creative Investors' Conference",
    excerpt:
      "Variety covers the launch of the Creative Investors' Conference at San Sebastian Film Festival, an event connecting entertainment industry investors with creative financing opportunities in the global film sector.",
    url: "https://variety.com/2024/film/global/caa-media-finance-creative-investors-conference-2-1236145771/",
    source: "Variety",
  },
  {
    date: "June 2024",
    category: "Press",
    title:
      "Rio2C 2024: Globo Discussed Opportunities for Entertainment Globalization",
    excerpt:
      "Señal News covers a Rio2C panel exploring how local entertainment companies can expand globally, with industry leaders discussing co-productions, format sales, and new partnership strategies in the international market.",
    url: "https://senalnews.com/en/events/rio2c-2024-globo-discussed-opportunities-for-entertainment-globalization-",
    source: "Señal News",
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
    title:
      "C21 Podcast: Kelly Edwards, David Davoli, Kristen V Carter & Claire Finn",
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
    date: "July 2021",
    category: "Press",
    title: "'Call My Agent!' UK Remake Lands at Sundance Now",
    excerpt:
      "Deadline reports that the British adaptation of the hit French series Call My Agent! has been acquired by Sundance Now, expanding the show into the English-language market.",
    url: "https://deadline.com/2021/07/call-my-agent-uk-sundance-now-u-s-1234796087/",
    source: "Deadline",
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
  {
    date: "February 2021",
    category: "Press",
    title:
      "AMC+ Scores Trio of Acclaimed Crime Dramas Kin, Too Close, and Cold Courage",
    excerpt:
      "AMC+ announces the acquisition of three acclaimed crime dramas including the Irish-set series Kin with Charlie Cox, launching on the streaming service in 2021.",
    url: "https://www.amc.com/blogs/amc-scores-trio-of-acclaimed-crime-dramas-kin-too-close-and-cold-courage--1010176",
    source: "AMC",
  },
  {
    date: "October 2020",
    category: "Press",
    title: "Out of the Shadows",
    excerpt:
      "Drama Quarterly goes behind the scenes in Prague with the cast and crew of Shadowplay (The Defeated), a crime drama set in post-war Berlin featuring characters with competing interests battling for control in a lawless city.",
    url: "https://dramaquarterly.com/out-of-the-shadows/",
    source: "Drama Quarterly",
  },
  {
    date: "April 2020",
    category: "Press",
    title:
      "What's in a Name? How U.S. Talent Buoys Sales of European Drama",
    excerpt:
      "Variety examines how casting American actors in European television dramas, including Shadowplay (The Defeated), enhances their commercial appeal and sales potential in international markets.",
    url: "https://variety.com/2020/biz/actors/miptv-us-talent-buoys-european-drama-sales-helen-hunt-world-on-fire-shadowplay-1203549970/",
    source: "Variety",
  },
  {
    date: "July 2019",
    category: "Press",
    title: "Tandem's Berlin-Set 'Shadowplay' Goes for Edge",
    excerpt:
      "A look at the production of Shadowplay (The Defeated), starring Taylor Kitsch, a Berlin-set historical drama that explores survival and moral complexity in a devastated post-WWII city divided between Allied powers.",
    url: "https://www.yahoo.com/entertainment/tandem-berlin-set-shadowplay-goes-150039571.html",
    source: "Yahoo Entertainment",
  },
];

export default function News() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-4">
              Perspectives
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              News
            </h1>
            <p className="text-muted text-lg max-w-xl">
              The latest from Lucaville Global.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="space-y-6">
            {articles.map((article, i) => (
              <AnimatedSection key={article.title} delay={Math.min(i * 0.05, 0.4)}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <article className="p-8 lg:p-10 border border-white/[0.04] hover:border-white/[0.08] bg-charcoal/20 hover:bg-charcoal/40 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4 text-xs text-muted/60">
                      <span className="text-gold/60 uppercase tracking-[0.15em]">
                        {article.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-muted/30" />
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {article.date}
                      </span>
                      {article.source && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-muted/30" />
                          <span className="flex items-center gap-1">
                            <ExternalLink size={11} />
                            {article.source}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="font-serif text-lg lg:text-xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
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
