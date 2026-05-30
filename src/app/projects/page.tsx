"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const projects = [
  {
    title: "Tiny Desk Brasil",
    category: "Concert Series",
    format: "30 x 20\"",
    region: "Brazil",
    network: "YouTube",
    year: "2025",
    image: "/images/tiny-desk-brazil-poster.png",
    trailer: "https://www.youtube.com/watch?v=XUd4nYZxOi0",
    description:
      "Tiny Desk Brasil is the official Brazilian edition of the iconic NPR music series, featuring intimate, stripped-down live performances showcasing the rich diversity and creativity of Brazilian music.",
  },
  {
    title: "No Beast So Fierce",
    category: "Crime / Drama",
    format: "Feature Film",
    region: "Germany",
    network: "Goodfellas",
    year: "2025",
    image: "/images/no-beast-so-fierce-poster.jpg",
    trailer: "https://www.youtube.com/watch?v=pKU_QpLl2aM",
    description:
      "In this modern retelling of Shakespeare's Richard III, an ambitious Arab woman named Rashida plots a bloody path to power, eliminating her family's male leadership to become the undisputed boss of the Berlin criminal underworld.",
  },
  {
    title: "The Snow Sister",
    category: "Family Drama",
    format: "Feature Film",
    region: "Norway",
    network: "Netflix",
    year: "2024",
    image: "/images/snow-sister-poster.jpg",
    trailer: "https://www.youtube.com/watch?v=ekgJs0D0RYQ",
    description:
      "A grieving young boy who thinks Christmas is cancelled finds hope and friendship through a mysterious, joyful girl who helps him heal after the loss of his sister.",
  },
  {
    title: "The Idol",
    category: "Drama",
    format: "8 x 60\"",
    region: "US",
    network: "HBO",
    year: "2023",
    image: "/images/the-idol-poster.jpg",
    trailer: "https://www.youtube.com/watch?v=QrnJMmWhlYE",
    description:
      "A pop star trying to stage a comeback after a mental breakdown enters a complicated and high-stakes relationship with a self-help guru and secret cult leader.",
  },
  {
    title: "Ten Percent",
    category: "Comedy",
    format: "8 x 60\"",
    region: "UK",
    network: "Amazon Prime",
    year: "2022",
    image: "/images/ten-percent-poster.jpg",
    trailer: "https://www.youtube.com/watch?v=-gQ_I-tVk9E",
    description:
      "A London talent agency deals with personal and professional crises while catering to celebrity clients and scrambling to stay afloat after the sudden death of their founder.",
  },
  {
    title: "That Dirty Black Bag",
    category: "Spaghetti Western",
    format: "8 x 60\"",
    region: "Italy",
    network: "AMC+",
    year: "2022",
    image: "/images/tdbb-poster.jpg",
    trailer: "https://www.youtube.com/watch?v=_da1DpqQIso",
    description:
      "Red Bill is a ruthless bounty hunter who decapitates his victims and stuffs their heads into a dirty black bag rather than transporting their entire corpses.",
  },
  {
    title: "KIN",
    category: "Crime Drama",
    format: "16 x 60\"",
    region: "Ireland",
    network: "AMC+",
    year: "2021",
    image: "/images/kin-poster.jpg",
    trailer: "https://www.youtube.com/watch?v=_byGxUym7HQ",
    description:
      "A boy is killed and his family embarks on a gangland war with an international cartel; but the Kinsellas have something the cartel does not: the unbreakable bonds of blood and family.",
  },
  {
    title: "The Defeated",
    category: "Crime Thriller",
    format: "8 x 60\"",
    region: "Germany",
    network: "Netflix",
    year: "2021",
    image: "/images/the-defeated-poster.jpg",
    trailer: "https://www.youtube.com/watch?v=4dXKQXRs7zo",
    description:
      "In 1946 Berlin, an American cop searches for his missing brother while helping a novice German policewoman fight the violent crimes engulfing the city.",
  },
  {
    title: "The Front Runner",
    category: "Political Drama",
    format: "Feature Film",
    region: "US",
    network: "Columbia Pictures / Sony Pictures Releasing",
    year: "2018",
    image: "/images/front-runner-poster.jpg",
    trailer: "https://www.youtube.com/watch?v=BAOYDcnVx6E",
    description:
      "Gary Hart was going to be President. Instead he changed American politics forever.",
  },
  {
    title: "Stephen King's Bag of Bones",
    category: "Mini Series",
    format: "2 x 120\"",
    region: "US",
    network: "A&E",
    year: "2011",
    image: "/images/bag-of-bones-poster.jpg",
    trailer: "https://www.youtube.com/watch?v=Y57K6IoAj7Y",
    description:
      "Following his wife's sudden death, a bestselling author (Pierce Brosnan) retreats to his Maine lake house, where he is plagued by nightmares, ghostly visitations, and a dark, century-old town secret.",
  },
];

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-4">
              Our Work
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Projects
            </h1>
            <p className="text-muted text-lg max-w-xl">
              Executive produced by David Davoli, Founder &amp; CEO of Lucaville
              Global.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <a
                  href={project.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[2/3] overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-background ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2 text-xs text-muted/60">
                    <span>{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-muted/30" />
                    <span>{project.format}</span>
                    <span className="w-1 h-1 rounded-full bg-muted/30" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold group-hover:text-gold transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gold/60 text-xs uppercase tracking-[0.1em] mb-3">
                    {project.network}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
