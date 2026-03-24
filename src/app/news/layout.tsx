import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Lucaville Global",
  description:
    "The latest news, press coverage, and industry insights from Lucaville Global — featuring coverage in Variety, The Hollywood Reporter, The New York Times, Deadline, and more.",
  openGraph: {
    title: "News | Lucaville Global",
    description:
      "The latest news, press coverage, and industry insights from Lucaville Global.",
    url: "https://lucavilleglobal.com/news",
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
