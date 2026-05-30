"use client";

import { Mail, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    lines: ["info@lucavilleglobal.com"],
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["Lower East Side", "New York, NY"],
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Contact <span className="text-gold-gradient">Us</span>
            </h1>
            <p className="text-muted text-lg max-w-xl">
              Ready to explore how Lucaville Global can support your objectives?
              We&apos;d welcome the opportunity to connect.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection direction="left">
              <div className="bg-charcoal/40 border border-white/[0.06] p-8 lg:p-12">
                <h2 className="font-serif text-2xl font-semibold mb-8">
                  Send a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-muted mb-2 uppercase tracking-[0.15em]">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background border border-white/[0.06] focus:border-gold/40 px-4 py-3 text-foreground outline-none transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted mb-2 uppercase tracking-[0.15em]">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-background border border-white/[0.06] focus:border-gold/40 px-4 py-3 text-foreground outline-none transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-2 uppercase tracking-[0.15em]">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-background border border-white/[0.06] focus:border-gold/40 px-4 py-3 text-foreground outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-2 uppercase tracking-[0.15em]">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="w-full bg-background border border-white/[0.06] focus:border-gold/40 px-4 py-3 text-foreground outline-none transition-colors"
                      placeholder="Your organization"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-2 uppercase tracking-[0.15em]">
                      Subject
                    </label>
                    <select className="w-full bg-background border border-white/[0.06] focus:border-gold/40 px-4 py-3 text-foreground outline-none transition-colors">
                      <option value="">Select a topic</option>
                      <option value="advisory">Strategic Advisory</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="media">Media &amp; Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-2 uppercase tracking-[0.15em]">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-background border border-white/[0.06] focus:border-gold/40 px-4 py-3 text-foreground outline-none transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-background font-semibold py-4 transition-all duration-300 uppercase tracking-[0.15em] text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right">
              <div className="space-y-12">
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-4">
                    Reach Us Directly
                  </h2>
                  <p className="text-muted leading-relaxed text-sm">
                    While we are unable to accept unsolicited submissions, we
                    would love to hear from you. Whether you have a specific
                    engagement in mind or simply wish to learn more about our
                    capabilities, our team is ready to assist.
                  </p>
                </div>

                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="w-10 h-10 border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                        <info.icon
                          className="text-gold/70"
                          size={18}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.15em] text-gold/60 mb-2">
                          {info.title}
                        </h3>
                        {info.lines.map((line) => (
                          <p key={line} className="text-muted text-sm">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="aspect-[4/3] border border-white/[0.06] overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12106.44566205498!2d-73.99!3d40.7157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25981bde04efb%3A0x55aba38e89376c23!2sLower%20East%20Side%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1&maptype=roadmap"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter:
                        "invert(90%) hue-rotate(200deg) brightness(0.6) contrast(1.2)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
