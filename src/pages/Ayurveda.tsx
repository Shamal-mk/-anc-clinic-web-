import DoctorProfile from '../components/DoctorProfile';

const Ayurveda = () => {
  const doctors = [
    {
      name: 'Dr. Sreelatha',
      specialty: 'Senior Ayurveda Consultant – Women\'s Health, Bone & Joint',
      imageSrc: '/doctors/Dr. Sreetatha.jpeg',
    },
    {
      name: 'Dr. Heera Ratnam',
      specialty: 'Senior Ayurveda Consultant – Eye Care & General',
      imageSrc: '/doctors/Dr. Heera Ratnam.jpeg',
    },
    {
      name: 'Dr. Krishna Sreejith',
      specialty: 'Consulting Physician – General Medicine & Ano-Rectal',
      imageSrc: '/doctors/Dr Krishna Sreejith.jpeg',
    },
    {
      name: 'Dr. Rohini R.',
      specialty: 'Ayurvedic Physician – Lifestyle Diseases, Skin & Hair',
      imageSrc: '/doctors/Dr. Rohini.jpeg',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-clinical-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-sage-green/20 via-white to-champagne-gold/10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-4 inline-block">
              <img
                src="/logos/Dr. Unnikrishnans samsara ayurveda unit  Logo.jpeg"
                alt="Dr. Unnikrishnan's Samsara Ayurveda Unit Logo"
                className="h-28 w-auto object-contain"
              />
            </div>
          </div>
          <h1 className="text-5xl font-serif text-slate-gray mb-6">
            Dr. Unnikrishnan's <span className="text-sage-green">Samsara</span> Ayurveda Unit
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-sans font-light leading-relaxed">
            Rooted in the 5,000-year-old science of Ayurveda, our unit offers authentic Panchakarma therapies, 
            herbal treatments, and holistic wellness programmes tailored to restore your natural balance.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-slate-gray mb-12">Our Ayurvedic Specialties</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: '🌿', label: 'Panchakarma' },
              { icon: '👁️', label: 'Eye Care (Netra Chikitsa)' },
              { icon: '🦴', label: 'Bone & Joint Therapy' },
              { icon: '🌸', label: "Women's Wellness" },
              { icon: '💆', label: 'Stress & Lifestyle' },
              { icon: '🧴', label: 'Skin & Hair Care' },
              { icon: '🫁', label: 'Ano-Rectal Care' },
              { icon: '⚕️', label: 'General Medicine' },
            ].map((s) => (
              <div key={s.label} className="bg-clinical-white rounded-2xl p-5 text-center border border-sage-green/20 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="text-sm font-sans text-slate-gray font-medium">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Doctors */}
          <h2 className="text-3xl font-serif text-center text-slate-gray mb-12">Our Ayurveda Doctors</h2>
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
