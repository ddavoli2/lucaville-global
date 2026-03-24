import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Lucaville Global",
  description:
    "Explore the portfolio of projects executive produced by David Davoli, including KIN (AMC+), The Idol (HBO), That Dirty Black Bag (AMC+), Ten Percent (Amazon Prime), The Defeated (Netflix), and more.",
  openGraph: {
    title: "Projects | Lucaville Global",
    description:
      "Explore the portfolio of projects executive produced by David Davoli, Founder & CEO of Lucaville Global.",
    url: "https://lucavilleglobal.com/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
