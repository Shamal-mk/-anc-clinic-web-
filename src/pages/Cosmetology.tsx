import SkinHero from '../components/skin/SkinHero';
import SkinIntro from '../components/skin/SkinIntro';
import ExploreGrid from '../components/skin/ExploreGrid';
import TreatmentGrid from '../components/skin/TreatmentGrid';
import LayerMethodology from '../components/skin/LayerMethodology';
import Consultation from '../components/skin/Consultation';
import FAQ from '../components/skin/FAQ';
import CTA from '../components/skin/CTA';
import DoctorProfile from '../components/DoctorProfile';

const Cosmetology = () => {
  const doctors = [
    { 
      name: 'Dr. Aparna Krishna', 
      specialty: 'AESTHETIC PHYSICIAN', 
      imageSrc: '/doctors/Dr. Aparna Krishna.jpeg',
      focuses: ['Facial Rejuvenation', 'Botulinum Toxin', 'Laser Resurfacing']
    },
    { 
      name: 'Dr. Aromal Chekavar', 
      specialty: 'ENDOCRINE SURGEON', 
      imageSrc: '/doctors/Dr. Aromal Chekavar.jpeg',
      focuses: ['Endocrine Surgery', 'Reconstructive Care', 'Thyroid Disorders']
    },
    { 
      name: 'Dr. Akhila', 
      specialty: 'PLASTIC AND RECONSTRUCTIVE SURGEON', 
      imageSrc: '/doctors/Dr. Akhila.jpeg',
      focuses: ['Microvascular Surgery', 'Reconstructive Aesthetics', 'Burn Care']
    },
    { 
      name: 'Dr. Binu Sethu', 
      specialty: 'CONSULTANT DERMATOLOGIST', 
      imageSrc: '/doctors/Dr. Binu Sethu.jpeg',
      focuses: ['Clinical Dermatology', 'Scar Treatments', 'Psoriasis & Acne']
    },
  ];

  return (
    <div className="min-h-screen bg-clinical-white selection:bg-sage-green selection:text-white">
      
      {/* 1. Hero Section */}
      <SkinHero />

      {/* 2. Introduction */}
      <SkinIntro />

      {/* 3. Skin Concerns (Identify) */}
      <ExploreGrid />

      {/* 4. Treatments (Resolve) */}
      <TreatmentGrid />

      {/* 5. Layered Methodology (Treating the Cause) */}
      <LayerMethodology />

      {/* 6. Consultation */}
      <Consultation />

      {/* 7. Retained: Consulting Specialists */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <span className="text-champagne-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-4">The Experts</span>
            <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal">Medical Specialists</h2>
            <div className="h-[1px] w-16 bg-champagne-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc) => (
              <DoctorProfile key={doc.name} {...doc} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Retained: Testimonials */}
      <section className="py-24 bg-[#FAFAFA] border-y border-platinum-slate/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-champagne-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-4">Experiences</span>
            <h2 className="text-4xl font-serif text-obsidian-charcoal">Patient Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The approach to my melasma was incredibly scientific. I felt heard, and the results have restored my confidence completely.",
                name: "Sarah M.",
                treatment: "Laser Aesthetics"
              },
              {
                text: "A truly premium experience. The clinic feels like a luxury wellness retreat, but with the reassurance of highly qualified doctors.",
                name: "Priya R.",
                treatment: "Anti-Ageing Care"
              },
              {
                text: "My acne scarring has improved dramatically after the micro-needling sessions. The follow-up care is exceptional.",
                name: "Anjali T.",
                treatment: "Scar Revision"
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl relative overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-platinum-slate/20">
                <span className="text-8xl font-serif text-champagne-gold/10 absolute -top-4 -left-2 select-none">"</span>
                <p className="font-sans font-light text-obsidian-charcoal/80 leading-relaxed mb-8 relative z-10 mt-4">
                  {review.text}
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-obsidian-charcoal/5 flex items-center justify-center border border-platinum-slate">
                    <span className="font-sans font-semibold text-obsidian-charcoal text-sm">{review.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-obsidian-charcoal text-sm">{review.name}</h4>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-obsidian-charcoal/50 flex items-center gap-1 mt-1">
                      <svg className="w-3 h-3 text-sage-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Patient
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <FAQ />

      {/* 10. Final CTA */}
      <CTA />

    </div>
  );
};

export default Cosmetology;
