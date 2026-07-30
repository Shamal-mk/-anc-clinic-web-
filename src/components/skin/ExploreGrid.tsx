import { motion } from 'framer-motion';
import SkinConcernCard from './SkinConcernCard';
import SectionHeading from './SectionHeading';

const concerns = [
  {
    title: 'Acne',
    description: 'Active breakouts, blackheads, congested pores or recurring acne that keeps returning despite treatment.',
    image: '/skin/acne.jpg',
  },
  {
    title: 'Acne Scars',
    description: 'Post-inflammatory hyperpigmentation, atrophic scarring, or pitted skin remaining after acne breakouts.',
    image: '/skin/acne-scars.jpg',
  },
  {
    title: 'Pigmentation',
    description: 'Dark spots, uneven skin tone or sun-induced damage that hasn\'t responded to regular skincare.',
    image: '/skin/pigmentation.jpg',
  },
  {
    title: 'Melasma',
    description: 'Stubborn, symmetrical grey-brown patches typically on the cheeks, bridge of nose, forehead, or chin.',
    image: '/skin/melasma.jpg',
  },
  {
    title: 'Rosacea',
    description: 'Chronic redness, visible blood vessels, and sensitive, easily irritated skin that requires clinical calming.',
    image: '/skin/rosacea.jpg',
  },
  {
    title: 'Dark Circles',
    description: 'Under-eye hollowing, hyperpigmentation, or vascular pooling making the eyes look continually tired.',
    image: '/skin/dark-circles.jpg',
  },
  {
    title: 'Skin Brightening',
    description: 'Revitalize a dull complexion, restoring a natural, healthy, and radiant glow to your skin.',
    image: '/skin/skin-brightening.jpg',
  },
  {
    title: 'Open Pores',
    description: 'Visibly enlarged pores causing an uneven skin texture and increased sebum production.',
    image: '/skin/open-pores.jpg',
  },
  {
    title: 'Anti-ageing',
    description: 'Fine lines, wrinkles, skin laxity, or a loss of facial definition developing gradually over time.',
    image: '/skin/anti-ageing.jpg',
  },
  {
    title: 'Hydration',
    description: 'Chronically dry, flaky, or dehydrated skin lacking in essential moisture barrier protection.',
    image: '/skin/hydration.jpg',
  },
  {
    title: 'Medical Facials',
    description: 'Clinical-grade facials tailored for deep cleansing, extractions, and intense targeted nourishment.',
    image: '/skin/medical-facials.jpg',
  }
];

const ExploreGrid = () => {
  return (
    <section id="concerns" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeading title="Explore by Concern" subtitle="Identify" />
        
        {/* Desktop: 4 columns | Tablet: 2 columns | Mobile: 2 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-fr">
          {concerns.map((concern, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: "easeOut" }}
              className="flex h-full w-full"
            >
              <SkinConcernCard {...concern} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreGrid;
