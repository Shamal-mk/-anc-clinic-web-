import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface TreatmentCardProps {
  title: string;
  description: string;
  details: {
    frequency: string;
    duration: string;
  };
  link: string;
}

const TreatmentCard = ({ title, description, details, link }: TreatmentCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-platinum-slate/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 md:py-10 flex items-start md:items-center justify-between group text-left gap-6"
      >
        <h3 className="text-3xl md:text-5xl font-serif text-obsidian-charcoal group-hover:text-champagne-gold transition-colors duration-300 flex-1">
          {title}
        </h3>
        <span className="text-obsidian-charcoal flex-shrink-0 mt-2 md:mt-0">
          {isOpen ? <Minus className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} /> : <Plus className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-obsidian-charcoal/50 mb-4">The Treatment</p>
                <p className="text-obsidian-charcoal/80 font-sans font-light leading-relaxed text-lg">
                  {description}
                </p>
              </div>
              <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-platinum-slate/20">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-obsidian-charcoal/50 mb-6">Practical Details</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-obsidian-charcoal/60 mb-1">Frequency</p>
                    <p className="font-serif text-xl text-obsidian-charcoal">{details.frequency}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-obsidian-charcoal/60 mb-1">Duration</p>
                    <p className="font-serif text-xl text-obsidian-charcoal">{details.duration}</p>
                  </div>
                </div>
                <a 
                  href={link}
                  className="mt-8 inline-flex items-center gap-2 text-champagne-gold font-sans text-sm font-semibold tracking-widest uppercase group/btn hover:text-obsidian-charcoal transition-colors"
                >
                  Explore Treatment
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TreatmentCard;
