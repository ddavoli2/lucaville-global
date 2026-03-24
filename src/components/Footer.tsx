import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Navigate",
    links: [
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/team", label: "Team" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/strategic-advisory", label: "Strategic Advisory" },
      { href: "/projects", label: "Project Development" },
      { href: "/contact", label: "Partnerships" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/news", label: "News & Insights" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/lucaville-logo-trimmed.png"
              alt="Lucaville Global"
              width={240}
              height={160}
              className="h-16 w-auto object-contain brightness-125 mb-4"
              unoptimized
            />
            <p className="text-muted text-sm leading-relaxed">
              Building companies and content on a global scale — illuminating
              stories that deserve the spotlight.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold/80 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-muted text-sm hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Lucaville Global, Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-muted text-xs hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-muted text-xs hover:text-gold transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
