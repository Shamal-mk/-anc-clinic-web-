import { motion } from 'framer-motion';
import { Image } from '../Image';

const ClinicShowcase = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-obsidian-charcoal mb-6 leading-tight"
          >
            Reveal Your Natural Beauty
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-obsidian-charcoal/70 font-sans text-base md:text-lg leading-relaxed font-light"
          >
            Healthy skin is the foundation of confidence. Experience advanced skin and cosmetology treatments designed to rejuvenate, restore, and enhance your natural beauty.
          </motion.p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow duration-500 bg-white aspect-[4/3]"
          >
            <Image
              src="/skin/showcase-1.png"
              alt="Skin and Cosmetology Clinic View 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow duration-500 bg-white aspect-[4/3]"
          >
            <Image
              src="/skin/showcase-2.png"
              alt="Skin and Cosmetology Clinic View 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ClinicShowcase;
