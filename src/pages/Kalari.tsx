import DoctorProfile from '../components/DoctorProfile';

const Kalari = () => {
  const doctors = [
    {
      name: 'Sivakumar Gurukkal',
      specialty: 'HEAD GURUKKAL & MARMA SPECIALIST',
      imageSrc: '/doctors/Sivakumar Gurukkal.jpeg',
      focuses: ['Marma Point Massage', 'Orthopaedic Chikilsa', 'Sports Rehab']
    },
  ];

  const therapies = [
    { icon: '🤜', title: 'Marma Chikilsa', desc: 'Precise stimulation and alignment of key marma (vital) points to relieve pain and neuro-muscular blocks.' },
    { icon: '🌿', title: 'Uzhichil (Oil Therapy)', desc: 'Rhythmic, deep tissue massage using medicated herbal oils to improve agility and skeletal circulation.' },
    { icon: '🔥', title: 'Pizhichil', desc: 'Continuous stream of warm medicated oils applied across the body to combat arthritis and paralysis.' },
    { icon: '🧘', title: 'Kalaripayattu Training', desc: 'Martial arts discipline for body coordination, agility, mental alertness, and posture correction.' },
    { icon: '⚡', title: 'Kizhi (Poultice Treatment)', desc: 'Warm herbal poultice massage targeting joint inflammation, spondylitis, and acute muscle pain.' },
    { icon: '🌊', title: 'Ksheeradhara', desc: 'Restorative pouring of warm medicated milk on the head to treat stress, sleep issues, and headaches.' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-clinical-white">
      {/* Editorial dark hero */}
      <div className="relative bg-obsidian-charcoal text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-eucalyptus/30 to-obsidian-charcoal opacity-90" />
        <div className="relative max-w-7xl mx-auto text-center z-10 animate-fade-in-up">
          <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold mb-4 block">
            CVN Traditional Chikilsa
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mt-2 mb-6">
            CVN Kalari Unit
          </h1>
          <div className="h-[1px] w-20 bg-champagne-gold mx-auto mb-6" />
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto font-sans font-light leading-relaxed">
            Preserving Kerala's ancient tradition of orthopaedics and neurological recovery. Marma point therapy 
            engineered to restore structural balance and physical performance.
          </p>
        </div>
      </div>

      {/* Portfolio & Details */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
            <div>
              <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold">Ancient Orthopaedics</span>
              <h2 className="text-4xl font-serif text-obsidian-charcoal mt-2 mb-6">The Power of Marma</h2>
              <p className="text-obsidian-charcoal/70 font-sans font-light leading-relaxed mb-6">
                Kalari Chikilsa treats the body as a holistic energetic system. By manipulating the 108 vital marma 
                junctions where muscles, bones, joints, and nerves intersect, our Gurukkal initiates deep healing 
                processes that restore native mobility.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-platinum-slate">
                <div>
                  <p className="text-3xl font-serif text-champagne-gold font-bold">30+</p>
                  <p className="text-xs text-obsidian-charcoal/50 font-sans">Years of Lineage</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-sage-green font-bold">108</p>
                  <p className="text-xs text-obsidian-charcoal/50 font-sans">Marma Points</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-eucalyptus font-bold">100%</p>
                  <p className="text-xs text-obsidian-charcoal/50 font-sans">Natural Elements</p>
                </div>
              </div>
            </div>

            <div className="bg-clinical-white rounded-[24px] p-8 border border-platinum-slate/30">
              <h3 className="text-xl font-serif text-obsidian-charcoal mb-4">Therapeutic Coverage</h3>
              <ul className="space-y-4">
                {[
                  'Chronic Low Back Pain & Sciatica',
                  'Sports & Training Injuries',
                  'Post-Fracture Skeletal Alignment',
                  'Rheumatic Arthritis Restorations',
                  'Neuropathy & Post-Stroke Recovery',
                  'Agility Improvement & Posture Repair'
                ].map((c) => (
                  <li key={c} className="flex items-center gap-3 text-xs font-sans text-obsidian-charcoal/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Therapies Grid */}
          <h2 className="text-3xl font-serif text-obsidian-charcoal mb-12 text-center">Kalari Therapies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
            {therapies.map((t) => (
              <div key={t.title} className="bg-clinical-white rounded-[20px] p-8 border border-platinum-slate/30 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="text-xl font-serif text-obsidian-charcoal mb-2">{t.title}</h3>
                <p className="text-obsidian-charcoal/60 text-xs font-sans leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Head Gurukkal */}
          <h2 className="text-3xl font-serif text-obsidian-charcoal mb-12 text-center">Meet Our Gurukkal</h2>
          <div className="flex justify-center">
            <div className="max-w-sm w-full">
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
