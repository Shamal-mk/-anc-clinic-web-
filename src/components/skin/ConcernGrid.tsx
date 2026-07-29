import { motion } from 'framer-motion';
import ConcernCard from './ConcernCard';

const concerns = [
  {
    title: 'Uneven Skin Texture',
    description: 'Rough, bumpy or pitted skin that feels inconsistent and does not respond to regular skincare alone.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop',
    link: '#uneven-skin-texture'
  },
  {
    title: 'Loss of Skin Elasticity',
    description: 'Skin that has lost its firmness and structure, particularly around the face, neck, jaw or arms.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop',
    link: '#loss-of-elasticity'
  },
  {
    title: 'Dullness',
    description: 'Rough texture, dullness, enlarged pores or skin that looks tired despite a consistent skincare routine.',
    image: '/skin/dullness.png',
    link: '#dullness',
    alt: 'Dullness Skin Concern'
  },
  {
    title: 'Ageing',
    description: 'Fine lines, wrinkles, skin laxity or a loss of facial definition that has developed gradually over time.',
    image: 'https://images.unsplash.com/photo-1498842812179-c81beecf902c?q=80&w=1000&auto=format&fit=crop',
    link: '#ageing'
  },
  {
    title: 'Acne and Acne Scars',
    description: 'Active breakouts, blackheads, congested pores or recurring acne that keeps returning despite treatment.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop',
    link: '#acne'
  },
  {
    title: 'Pigmentation',
    description: 'Dark spots, melasma, uneven skin tone or post-acne marks that haven\'t responded to regular skincare.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop',
    link: '#pigmentation'
  }
];

const ConcernGrid = () => {
  return (
    <section id="concerns" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-champagne-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-4">Identify</span>
          <h2 className="text-4xl md:text-6xl font-serif text-obsidian-charcoal mb-8">Concerns</h2>
          <div className="h-[1px] w-16 bg-champagne-gold mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerns.map((concern, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <ConcernCard {...concern} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcernGrid;
