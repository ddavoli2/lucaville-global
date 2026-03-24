import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Lucaville Global",
  description:
    "Meet the leadership team at Lucaville Global, led by founder and CEO David Davoli — a strategic media executive with three decades of experience building scalable global platforms.",
  openGraph: {
    title: "Team | Lucaville Global",
    description:
      "Meet the leadership team at Lucaville Global, led by founder and CEO David Davoli.",
    url: "https://lucavilleglobal.com/team",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
