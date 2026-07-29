import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TreatmentChip from './TreatmentChip';

interface TreatmentCategoryCardProps {
  title: string;
  description: string;
  image: string;
  treatments: string[];
}

const TreatmentCategoryCard = ({ title, description, image, treatments }: TreatmentCategoryCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group flex flex-col bg-white border border-platinum-slate/30 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full relative"
    >
      {/* Glassmorphism subtle highlight overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />
      
      <div className="aspect-[16/10] overflow-hidden relative">
        <div className="absolute inset-0 bg-obsidian-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={image} 
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
      </div>
      
      <div className="p-8 md:p-10 flex flex-col flex-grow bg-white relative z-10">
        <h3 className="text-3xl font-serif text-obsidian-charcoal mb-4">{title}</h3>
        <p className="text-obsidian-charcoal/70 font-sans font-light leading-relaxed mb-8 text-sm">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10 flex-grow content-start">
          {treatments.map((treatment) => (
            <TreatmentChip key={treatment} label={treatment} />
          ))}
        </div>
        
      </div>
    </motion.div>
  );
};

export default TreatmentCategoryCard;
