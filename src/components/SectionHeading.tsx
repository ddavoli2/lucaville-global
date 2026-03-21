import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={`mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      <div className="section-divider mb-6" />
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </AnimatedSection>
  );
}
