import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Lucaville Global",
  description:
    "Get in touch with Lucaville Global. Based in the Lower East Side of New York City, we welcome inquiries about strategic advisory, partnerships, and media opportunities.",
  openGraph: {
    title: "Contact | Lucaville Global",
    description:
      "Get in touch with Lucaville Global for strategic advisory, partnerships, and media inquiries.",
    url: "https://lucavilleglobal.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
