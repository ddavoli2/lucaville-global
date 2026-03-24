import type { Metadata } from "next";
import Script from "next/script";
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
  verification: {
    google: "sA-fBiVchYGGIsOwMMEJBZg5GlBRkWBfhDc1aUcBVJ4",
  },
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
    images: [
      {
        url: "https://lucavilleglobal.com/images/lucaville-logo.jpg",
        width: 1536,
        height: 1024,
        alt: "Lucaville Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucaville Global | Global Content • Premium Storytelling",
    description:
      "Lucaville Global partners with filmmakers, creators, and independent companies worldwide to build ambitious projects and scale the ventures that support them.",
    images: ["https://lucavilleglobal.com/images/lucaville-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lucaville Global",
    legalName: "Lucaville Global, Inc.",
    url: "https://lucavilleglobal.com",
    logo: "https://lucavilleglobal.com/images/lucaville-logo.jpg",
    description:
      "Lucaville Global partners with filmmakers, creators, and independent companies worldwide to build ambitious projects and scale the ventures that support them.",
    founder: {
      "@type": "Person",
      name: "David Davoli",
      jobTitle: "Founder & CEO",
      sameAs: "https://www.linkedin.com/in/daviddavoli/",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/company/lucaville-global/",
      "https://www.instagram.com/lucavilleglobal",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@lucavilleglobal.com",
      contactType: "General Inquiry",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HDMR6EPDXK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'granted'
            });
            gtag('config', 'G-HDMR6EPDXK');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
