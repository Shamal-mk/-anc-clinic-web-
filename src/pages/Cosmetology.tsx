import DoctorProfile from '../components/DoctorProfile';

const Cosmetology = () => {
  const doctors = [
    { name: 'Dr. Aparna Krishna', specialty: 'Aesthetic Physician', imageSrc: '/doctors/Dr. Aparna Krishna.jpeg' },
    { name: 'Dr. Aromal Chekavar', specialty: 'Endocrine Surgeon', imageSrc: '/doctors/Dr. Aromal Chekavar.jpeg' },
  ];

  const services = [
    { icon: '💉', title: 'Botox & Fillers', desc: 'Non-surgical facial rejuvenation for a youthful, refreshed appearance.' },
    { icon: '⚡', title: 'Laser Treatments', desc: 'Advanced laser therapy for skin resurfacing, hair removal, and pigmentation.' },
    { icon: '🔬', title: 'Dermatology', desc: 'Diagnosis and treatment of all skin, hair, and nail conditions.' },
    { icon: '🔧', title: 'Reconstructive Surgery', desc: 'Restoring form and function through precise surgical procedures.' },
    { icon: '✨', title: 'Chemical Peels', desc: 'Exfoliating treatments to reveal brighter, smoother, healthier skin.' },
    { icon: '🌿', title: 'Acne & Scar Therapy', desc: 'Targeted treatments for active acne and lasting scar reduction.' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-clinical-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-50 via-white to-champagne-gold/10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-champagne-gold font-sans text-sm uppercase tracking-widest mb-4">ANC Clinic</p>
          <h1 className="text-5xl font-serif text-slate-gray mb-6">
            Skin & <span className="text-champagne-gold">Cosmetology</span> Unit
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Advanced medical aesthetics, dermatology, and reconstructive care — 
            tailored to enhance your natural beauty and restore your confidence.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-slate-gray mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((s) => (
              <div key={s.title} className="bg-clinical-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-serif text-slate-gray mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm font-sans leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Doctors */}
          <h2 className="text-3xl font-serif text-center text-slate-gray mb-12">Meet Our Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
