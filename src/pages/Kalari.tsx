import DoctorProfile from '../components/DoctorProfile';

const Kalari = () => {
  const doctors = [
    {
      name: 'Sivakumar Gurukkal',
      specialty: 'Head Gurukkal & Marma Specialist',
      imageSrc: '/doctors/Sivakumar Gurukkal.jpeg',
    },
  ];

  const therapies = [
    { icon: '🤜', title: 'Marma Therapy', desc: 'Stimulation of vital energy points to heal injuries and restore flow.' },
    { icon: '🌿', title: 'Herbal Oil Massage', desc: 'Traditional Uzhichil using medicated oils for deep tissue healing.' },
    { icon: '🔥', title: 'Pizhichil', desc: 'Warm medicated oil poured rhythmically to treat paralysis and arthritis.' },
    { icon: '🧘', title: 'Kalari Training', desc: 'Structured martial arts training for discipline, fitness and self-defence.' },
    { icon: '⚡', title: 'Kizhi (Bolus Therapy)', desc: 'Herbal poultice therapy for joint pain, inflammation and stiffness.' },
    { icon: '🌊', title: 'Dhara', desc: 'Continuous flow of medicated liquids over specific body parts for healing.' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-clinical-white">
      {/* Hero */}
      <div className="relative bg-slate-gray text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-champagne-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-sage-green rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-champagne-gold font-sans text-sm uppercase tracking-widest mb-4">Traditional Healing Arts</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            CVN <span className="text-champagne-gold">Kalari</span> Unit
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans font-light leading-relaxed">
            Preserving the ancient wisdom of Kalaripayattu — the mother of all martial arts — 
            our unit blends traditional Kalari Chikilsa (martial healing) with modern therapeutic care.
          </p>
        </div>
      </div>

      {/* About Kalari */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-serif text-slate-gray mb-6">What is Kalari Chikilsa?</h2>
              <p className="text-gray-500 font-sans leading-relaxed mb-4">
                Kalari Chikilsa is the therapeutic branch of Kalaripayattu, Kerala's ancient martial art. It uses 
                specialised Marma point manipulation, medicated oil massages, and herbal treatments to heal sports 
                injuries, musculoskeletal disorders, and neurological conditions.
              </p>
              <p className="text-gray-500 font-sans leading-relaxed mb-6">
                At CVN Kalari, our Gurukkal (master) has decades of expertise in both the martial and healing 
                dimensions of this tradition, ensuring authentic, effective treatment.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-3xl font-serif text-champagne-gold font-bold">30+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-serif text-champagne-gold font-bold">108</p>
                  <p className="text-sm text-gray-500">Marma Points</p>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-serif text-champagne-gold font-bold">100%</p>
                  <p className="text-sm text-gray-500">Natural Therapy</p>
                </div>
              </div>
            </div>
            <div className="bg-clinical-white rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-serif text-slate-gray mb-4">Conditions We Treat</h3>
              <ul className="space-y-3">
                {['Sports Injuries & Sprains', 'Back & Neck Pain', 'Joint Disorders & Arthritis', 'Paralysis & Hemiplegia', 'Spondylitis & Disc Problems', 'Stroke Rehabilitation', 'Neurological Disorders'].map((c) => (
                  <li key={c} className="flex items-center gap-3 text-gray-600 font-sans">
                    <span className="w-2 h-2 rounded-full bg-champagne-gold flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Therapies */}
          <h2 className="text-3xl font-serif text-center text-slate-gray mb-12">Our Therapies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {therapies.map((t) => (
              <div key={t.title} className="bg-clinical-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="text-xl font-serif text-slate-gray mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm font-sans leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Doctor */}
          <h2 className="text-3xl font-serif text-center text-slate-gray mb-12">Meet Our Gurukkal</h2>
          <div className="flex justify-center">
            <div className="max-w-xs w-full">
              {doctors.map((doc) => (
                <DoctorProfile key={doc.name} {...doc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kalari;
