import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucaville Global | Global Content • Premium Storytelling",
  description:
    "Lucaville Global partners with filmmakers, creators, and independent companies worldwide to build ambitious projects and scale the ventures that support them.",
  openGraph: {
    title: "Lucaville Global | Global Content • Premium Storytelling",
    description:
      "Lucaville Global partners with filmmakers, creators, and independent companies worldwide to build ambitious projects and scale the ventures that support them.",
    url: "https://lucavilleglobal.com",
    siteName: "Lucaville Global",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucaville Global | Global Content • Premium Storytelling",
    description:
      "Lucaville Global partners with filmmakers, creators, and independent companies worldwide to build ambitious projects and scale the ventures that support them.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
