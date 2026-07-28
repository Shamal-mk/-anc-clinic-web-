import { motion } from 'framer-motion';
import TreatmentCard from './TreatmentCard';

const treatments = [
  {
    title: 'Microneedling',
    description: 'A minimally invasive procedure using fine needles to trigger collagen production, improving acne scars, uneven texture, and overall skin quality.',
    details: { frequency: '4 to 6 weeks', duration: '30 to 45 min / session' },
    link: '#microneedling'
  },
  {
    title: 'Brite Peel',
    description: 'A medical depigmenting peel designed for stubborn melasma, dark patches and sun-induced pigmentation that has not responded to regular skincare.',
    details: { frequency: '3 to 4 weeks', duration: '20 to 30 min / session' },
    link: '#brite-peel'
  },
  {
    title: 'HIFU',
    description: 'A non-invasive skin tightening treatment using focused ultrasound energy to stimulate collagen deep beneath the surface, lifting and firming without incisions.',
    details: { frequency: '6 to 12 months', duration: '45 to 60 min / session' },
    link: '#hifu'
  },
  {
    title: 'PRP for Skin',
    description: 'A skin treatment using your own blood\'s concentrated platelets to stimulate collagen, improve texture and restore a healthier, even tone.',
    details: { frequency: '4 weeks', duration: '45 to 60 min / session' },
    link: '#prp'
  },
  {
    title: 'Botox',
    description: 'An injectable treatment that temporarily relaxes facial muscles responsible for expression lines, softening wrinkles and refining the jawline.',
    details: { frequency: '4 to 6 months', duration: '15 to 30 min / session' },
    link: '#botox'
  },
  {
    title: 'Hydrafacial',
    description: 'A medical-grade facial treatment that simultaneously cleanses, exfoliates and infuses hydrating serums to address congestion, dullness and dehydrated skin.',
    details: { frequency: 'Same day', duration: '30 to 45 min / session' },
    link: '#hydrafacial'
  }
];

const TreatmentGrid = () => {
  return (
    <section id="treatments" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-champagne-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-4">Resolve</span>
          <h2 className="text-4xl md:text-6xl font-serif text-obsidian-charcoal mb-8">Treatments</h2>
          <div className="h-[1px] w-16 bg-champagne-gold mx-auto" />
        </div>
        
        <div className="mt-12">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <TreatmentCard {...treatment} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentGrid;
