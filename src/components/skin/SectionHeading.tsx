interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-12">
      {subtitle && <span className="text-champagne-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-4">{subtitle}</span>}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-obsidian-charcoal mb-6">{title}</h2>
      <div className="h-[1px] w-16 bg-champagne-gold mx-auto" />
    </div>
  );
};

export default SectionHeading;
