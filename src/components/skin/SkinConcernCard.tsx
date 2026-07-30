import { motion } from 'framer-motion';

interface SkinConcernCardProps {
  title: string;
  description: string;
  image: string;
}

const SkinConcernCard = ({ title, description, image }: SkinConcernCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-white border border-platinum-slate/20 rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col w-full h-full cursor-pointer"
      style={{ height: 'auto', minHeight: '100%' }}
    >
      <div className="aspect-[4/3] overflow-hidden relative shrink-0">
        <div className="absolute inset-0 bg-obsidian-charcoal/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={image} 
          alt={`${title} Skin Concern`} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
      </div>
      <div className="p-5 md:p-6 lg:p-8 flex flex-col flex-1 bg-white relative z-20 text-left">
        <h3 className="text-[22px] md:text-[26px] lg:text-[32px] font-serif text-obsidian-charcoal mb-3 md:mb-4 leading-[1.2] md:leading-[1.3]">{title}</h3>
        <p className="text-obsidian-charcoal/70 font-sans font-light text-[15px] md:text-[16px] lg:text-[17px] leading-[1.6] md:leading-[1.8] flex-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default SkinConcernCard;
