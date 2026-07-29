const TreatmentChip = ({ label }: { label: string }) => {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-platinum-slate/10 text-obsidian-charcoal/80 text-[11px] font-sans font-semibold tracking-wide hover:bg-champagne-gold/10 hover:text-champagne-gold hover:border-champagne-gold/30 transition-all duration-300 border border-platinum-slate/20">
      {label}
    </span>
  );
};

export default TreatmentChip;
