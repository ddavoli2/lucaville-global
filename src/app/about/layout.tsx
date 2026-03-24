import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lucaville Global",
  description:
    "Lucaville Global stands at the intersection of creativity, capital, and global reach — building companies and content on a global scale with innovative approaches to financing, structuring, and distributing premium storytelling.",
  openGraph: {
    title: "About | Lucaville Global",
    description:
      "Lucaville Global stands at the intersection of creativity, capital, and global reach — building companies and content on a global scale.",
    url: "https://lucavilleglobal.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
