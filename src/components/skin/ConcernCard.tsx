import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ConcernCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  alt?: string;
}

const ConcernCard = ({ title, description, image, link, alt }: ConcernCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-white border border-platinum-slate/30 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-obsidian-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={image} 
          alt={alt || title} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif text-obsidian-charcoal mb-4">{title}</h3>
        <p className="text-obsidian-charcoal/70 font-sans font-light leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        <a 
          href={link}
          className="inline-flex items-center gap-2 text-champagne-gold font-sans text-sm font-semibold tracking-widest uppercase group/btn"
        >
          Explore Concern
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
        </a>
      </div>
    </motion.div>
  );
};

export default ConcernCard;
