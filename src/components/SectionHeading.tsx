import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  label,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-16">
      <div className="border-l-[3px] border-gold pl-6">
        {label && (
          <p className="text-gold/60 text-xs uppercase tracking-[0.2em] mb-2">
            {label}
          </p>
        )}
        <h2 className="font-serif text-3xl md:text-4xl font-bold">{title}</h2>
        {subtitle && (
          <p className="text-muted text-sm mt-3 max-w-lg">{subtitle}</p>
        )}
      </div>
    </AnimatedSection>
  );
}
