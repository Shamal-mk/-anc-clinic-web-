import DoctorProfile from '../components/DoctorProfile';

const Ayurveda = () => {
  const doctors = [
    {
      name: 'Dr. Sreelatha',
      specialty: 'SENIOR AYURVEDA CONSULTANT',
      imageSrc: '/doctors/Dr. Sreetatha.jpeg',
      focuses: ["Women's Health", 'Bone & Joint Disorders', 'Panchakarma']
    },
    {
      name: 'Dr. Heera Ratnam',
      specialty: 'SENIOR AYURVEDA CONSULTANT',
      imageSrc: '/doctors/Dr. Heera Ratnam.jpeg',
      focuses: ['Ophthalmic Care', 'General Medicine', 'Shalakya Tantra']
    },
    {
      name: 'Dr. Krishna Sreejith',
      specialty: 'CONSULTING PHYSICIAN',
      imageSrc: '/doctors/Dr Krishna Sreejith.jpeg',
      focuses: ['Ano-Rectal Care', 'Internal Medicine', 'Ksharasutra']
    },
    {
      name: 'Dr. Rohini R.',
      specialty: 'AYURVEDIC PHYSICIAN',
      imageSrc: '/doctors/Dr. Rohini.jpeg',
      focuses: ['Lifestyle Disease Mgmt', 'Skin & Hair Restorations', 'Panchakarma']
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-clinical-white">
      {/* High-Fidelity Organic Header Banner */}
      <div className="bg-gradient-to-b from-sage-green/10 via-transparent to-transparent py-24 px-6">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-platinum-slate/20 inline-block">
              <img
                src="/logos/Dr. Unnikrishnans samsara ayurveda unit  Logo.jpeg"
                alt="Dr. Unnikrishnan's Samsara Ayurveda Unit Logo"
                className="h-24 w-auto object-contain"
              />
            </div>
          </div>

          <h1 className="text-5xl font-serif text-obsidian-charcoal mt-2 mb-6">
            Dr. Unnikrishnan's Samsara Ayurveda
          </h1>
          <div className="h-[1px] w-20 bg-sage-green mx-auto mb-6" />
          <p className="text-base md:text-lg text-obsidian-charcoal/70 max-w-3xl mx-auto font-sans font-light leading-relaxed">
            Authentic, root-cause healing pathways grounded in Vedic sciences. Prescribed therapies and herbal configurations 
            designed to restore equilibrium to your system.
          </p>
        </div>
      </div>

      {/* Services and Doctor Roster Portfolio */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <h2 className="text-3xl font-serif text-obsidian-charcoal mb-12 text-center">Ayurvedic Clinical Specialties</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28">
            {[
              { icon: '🌿', label: 'Panchakarma Detox' },
              { icon: '👁️', label: 'Netra Chikitsa (Eye Care)' },
              { icon: '🦴', label: 'Spine & Joint Wellness' },
              { icon: '🌸', label: "Stri Roga (Women's Health)" },
              { icon: '💆', label: 'Manasika (Mental Wellness)' },
              { icon: '🧴', label: 'Twach (Skin Care)' },
              { icon: '🫁', label: 'General Medicine' },
              { icon: '⚕️', label: 'Ano-Rectal (Ksharasutra)' },
            ].map((s) => (
              <div 
                key={s.label} 
                className="bg-clinical-white rounded-[20px] p-6 text-center border border-sage-green/10 hover:border-sage-green/30 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="text-xs font-sans text-obsidian-charcoal font-semibold tracking-wider uppercase">{s.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-serif text-obsidian-charcoal mb-12 text-center">Ayurvedic Physicians</h2>
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

export default Ayurveda;
