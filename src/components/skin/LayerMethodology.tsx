import { motion } from 'framer-motion';

const layers = [
  {
    num: '01',
    title: 'Surface Layer',
    subtitle: 'Aesthetics',
    description: 'External factors are clinically addressed through personalized protocols designed to optimize barrier health, scalp function, and treatment outcomes.',
    points: ['Topical protocols', 'Scalp therapies', 'Aesthetic procedures', 'Cosmeceuticals']
  },
  {
    num: '02',
    title: 'Epigenetics',
    subtitle: 'Nutrition & lifestyle',
    description: 'Diagnostic-led protocols are designed to optimize metabolic balance, hormonal function, and systemic wellness to support long-term skin resilience, hair vitality and overall well-being.',
    points: ['Nutrition optimization', 'Supplementation', 'Hormonal support', 'Lifestyle protocols']
  },
  {
    num: '03',
    title: 'Genetics',
    subtitle: 'Baseline biology',
    description: 'Regenerative strategies are designed to strengthen cellular function, support biological repair, and optimize long-term skin, hair, and wellness outcomes.',
    points: ['Regenerative therapies', 'Hydrogen therapy', 'Red light therapy', 'Cellular support']
  }
];

const LayerMethodology = () => {
  return (
    <section className="py-24 md:py-32 bg-obsidian-charcoal text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight max-w-4xl mx-auto"
          >
            We treat the cause,<br />not just the surface.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {layers.map((layer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="mb-6 flex flex-col">
                <span className="text-champagne-gold font-serif text-2xl mb-2">Layer {layer.num}</span>
                <h3 className="text-3xl font-serif">{layer.title}</h3>
                <span className="text-white/50 text-sm tracking-widest uppercase mt-2">{layer.subtitle}</span>
              </div>
              <p className="text-white/70 font-sans font-light leading-relaxed mb-8">
                {layer.description}
              </p>
              <ul className="space-y-4 border-t border-white/10 pt-8">
                {layer.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-4 text-sm uppercase tracking-wider text-white/80 font-sans group-hover:text-champagne-gold transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold/50 group-hover:bg-champagne-gold transition-colors" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayerMethodology;
