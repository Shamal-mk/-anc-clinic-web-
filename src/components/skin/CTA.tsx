import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-32 bg-obsidian-charcoal text-white text-center relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-champagne-gold/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-12">
            Begin Your Journey
          </h2>
          
          <a 
            href="/booking" 
            className="inline-block px-12 py-5 bg-champagne-gold text-obsidian-charcoal rounded-full hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-sm tracking-widest uppercase font-semibold"
          >
            Book an Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
