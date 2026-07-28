import { motion } from 'framer-motion';

const SkinHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian-charcoal text-white pt-20">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
          alt="Premium Dermatology Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-end h-full pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl"
        >
          <span className="uppercase tracking-[0.2em] text-champagne-gold text-xs font-semibold block mb-6">
            Departments
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-serif leading-none tracking-tight mb-8">
            Skin<br />Department
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <a 
              href="#concerns" 
              className="px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-obsidian-charcoal transition-all duration-300 text-sm tracking-widest uppercase font-semibold text-center"
            >
              Concerns
            </a>
            <a 
              href="#treatments" 
              className="px-8 py-4 border border-transparent bg-white/10 rounded-full hover:bg-white hover:text-obsidian-charcoal transition-all duration-300 text-sm tracking-widest uppercase font-semibold backdrop-blur-sm text-center"
            >
              Treatments
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkinHero;
