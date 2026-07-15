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
      imageSrc: '/doctors/Dr. Aromal Chekavar.jpeg', // Using available portrait as placeholder
      focuses: ['Clinical Dermatology', 'Scar Treatments', 'Psoriasis & Acne']
    },
  ];

  const services = [
    { icon: '💉', title: 'Botox & Fillers', desc: 'Precise administration of facial injectables to smooth fine lines and restore youthful volumes.' },
    { icon: '⚡', title: 'Laser Resurfacing', desc: 'Advanced phototherapy targeting uneven texture, fine wrinkles, and solar hyperpigmentation.' },
    { icon: '🔬', title: 'Clinical Dermatology', desc: 'Rigorous diagnostic and therapeutic treatments for all acute and chronic skin conditions.' },
    { icon: '🔧', title: 'Reconstructive Surgery', desc: 'Restoring physiological form and symmetry following trauma or clinical excision.' },
    { icon: '✨', title: 'Aesthetic Peels', desc: 'Medical-grade chemical exfoliation designed to accelerate cellular turnover and brightness.' },
    { icon: '🌿', title: 'Acne Corrective Therapy', desc: 'Multi-modal therapies targeting root inflammatory processes and resulting scars.' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-clinical-white">
      {/* Editorial Header */}
      <div className="bg-gradient-to-b from-royal-navy/5 via-transparent to-transparent py-24 px-6">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold">ANC Premium Units</span>
          <h1 className="text-5xl md:text-6xl font-serif text-obsidian-charcoal mt-2 mb-6">
            Skin & Cosmetology
          </h1>
          <div className="h-[1px] w-20 bg-champagne-gold mx-auto mb-6" />
          <p className="text-base md:text-lg text-obsidian-charcoal/70 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Modern dermatology and aesthetic architecture executed with absolute clinical safety and meticulous refinement.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Services Grid */}
          <h2 className="text-3xl font-serif text-obsidian-charcoal mb-12 text-center">Clinical Treatment Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
            {services.map((s) => (
              <div key={s.title} className="bg-clinical-white rounded-[20px] p-8 border border-platinum-slate/30 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-serif text-obsidian-charcoal mb-2">{s.title}</h3>
                <p className="text-obsidian-charcoal/60 text-xs font-sans leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Roster portfolio grid */}
          <h2 className="text-3xl font-serif text-obsidian-charcoal mb-12 text-center">Consulting Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc) => (
              <DoctorProfile key={doc.name} {...doc} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cosmetology;
