import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Advisory | Lucaville Global",
  description:
    "Lucaville Global provides strategic advisory services to creators, companies, and investors — offering expertise in content financing, international co-production, distribution strategy, and venture building.",
  openGraph: {
    title: "Strategic Advisory | Lucaville Global",
    description:
      "Strategic advisory services for creators, companies, and investors in the global media landscape.",
    url: "https://lucavilleglobal.com/strategic-advisory",
  },
};

export default function StrategicAdvisoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
