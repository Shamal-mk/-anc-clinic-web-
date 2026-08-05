import { motion } from 'framer-motion';
import TreatmentCategoryCard from './TreatmentCategoryCard';
import SectionHeading from './SectionHeading';

const categories = [
  {
    title: 'Skin Treatments',
    description: 'Comprehensive medical and aesthetic skin solutions focused on restoring cellular health, correcting pigmentation, and achieving a radiant, even complexion.',
    image: '/treatments/skin-treatments.jpg',
    treatments: ['Acne', 'Acne Scars', 'Pigmentation', 'Melasma', 'Rosacea', 'Dark Circles', 'Skin Brightening', 'Open Pores', 'Anti-ageing', 'Hydration Treatments', 'Medical Facials']
  },
  {
    title: 'Laser Treatments',
    description: 'Advanced, precision-targeted laser therapies utilizing world-class technology for hair reduction, scar remodeling, and deep skin resurfacing.',
    image: '/treatments/laser-treatments.jpg',
    treatments: ['Laser Hair Reduction', 'Carbon Laser Peel', 'Laser Toning', 'Tattoo Removal', 'Pigmentation Laser', 'Scar Reduction']
  },
  {
    title: 'Injectables',
    description: 'Masterfully administered neurotoxins and dermal fillers designed to refine facial contours, restore lost volume, and provide profound anti-ageing benefits.',
    image: '/treatments/injectables.jpg',
    treatments: ['Botox', 'Dermal Fillers', 'Lip Fillers', 'Skin Boosters', 'Profhilo', 'PDRN', 'PRP', 'GFC']
  },
  {
    title: 'Hair Treatments',
    description: 'Evidence-based clinical protocols to evaluate, treat, and reverse hair loss, utilizing cutting-edge regenerative medicine for optimal scalp health.',
    image: '/treatments/hair-treatments.jpg',
    treatments: ['PRP Hair Therapy', 'GFC Hair', 'Mesotherapy', 'Hair Loss Evaluation', 'Female Hair Loss', 'Male Pattern Baldness', 'Scalp Analysis']
  },
  {
    title: 'Chemical Peels',
    description: 'Medical-grade exfoliation treatments customized to your skin’s unique pH and tolerance, effectively treating acne, melasma, and textural irregularities.',
    image: '/treatments/chemical-peels.jpg',
    treatments: ['Glycolic Peel', 'Salicylic Peel', 'Melanostop Peel', 'Yellow Peel', 'Cosmelan', 'Customised Peels']
  },
  {
    title: 'Permanent Makeup',
    description: 'Artisanal micropigmentation services delivering subtle, long-lasting enhancements to your natural features with unparalleled precision.',
    image: '/treatments/permanent-makeup.jpg',
    treatments: ['Microblading', 'Lip Blush', 'Scalp Micropigmentation', 'Eyeliner Tattoo']
  },
  {
    title: 'Body Treatments',
    description: 'Targeted aesthetic interventions for contouring, skin tightening, and the reduction of cellulite and stretch marks, ensuring full-body confidence.',
    image: '/treatments/body-treatments.jpg',
    treatments: ['Stretch Marks', 'Cellulite', 'Skin Tightening', 'Body Contouring', 'Fat Reduction']
  }
];

const TreatmentGrid = () => {
  return (
    <section id="treatments" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeading title="Treatments"  />
        
        {/* Desktop: 3 columns | Tablet: 2 columns | Mobile: 1 column */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
            >
              <TreatmentCategoryCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentGrid;
