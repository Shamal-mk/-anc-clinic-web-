import { motion } from 'framer-motion';

const Consultation = () => {
  return (
    <section className="py-24 md:py-32 bg-clinical-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-champagne-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-6">Expert Guidance</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-obsidian-charcoal mb-8">
            A consultation is just a conversation
          </h2>
          <p className="text-obsidian-charcoal/70 font-sans font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            You come in with your concerns, we take the time to understand them, and you leave with a clearer picture than you walked in with.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/booking" 
              className="px-8 py-4 bg-obsidian-charcoal text-white rounded-full hover:bg-champagne-gold transition-colors duration-300 text-sm tracking-widest uppercase font-semibold text-center"
            >
              In-clinic visit
            </a>
            <a 
              href="/booking" 
              className="px-8 py-4 border border-platinum-slate/50 text-obsidian-charcoal rounded-full hover:bg-obsidian-charcoal hover:text-white transition-all duration-300 text-sm tracking-widest uppercase font-semibold text-center"
            >
              Video Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Consultation;
