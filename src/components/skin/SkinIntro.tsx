import { motion } from 'framer-motion';

const SkinIntro = () => {
  return (
    <section className="py-24 md:py-32 bg-clinical-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal leading-tight mb-8">
              Your skin is the first thing the world sees and the last thing most people truly understand.
            </h2>
            <p className="text-obsidian-charcoal/70 font-sans font-light leading-relaxed text-lg mb-8">
              It reacts to stress, hormones, diet, environment and climate, all at once. At ANC Aesthetics, the Skin Department exists for one reason: to make sense of what is happening beneath the surface and address it properly.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-obsidian-charcoal mb-1">Not sure about your concern?</p>
                <div className="flex gap-4">
                  <a href="/booking" className="text-champagne-gold hover:text-obsidian-charcoal transition-colors underline underline-offset-4 text-sm font-semibold">Talk to an expert</a>
                  <a href="/booking" className="text-champagne-gold hover:text-obsidian-charcoal transition-colors underline underline-offset-4 text-sm font-semibold">Book a consultation</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img 
                src="/Skin and cosmetology/98DA988A-6C6A-49AE-8F0F-8C2D96072F48.PNG" 
                alt="Skin Analysis" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle decorative element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-champagne-gold/30 rounded-full hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkinIntro;
