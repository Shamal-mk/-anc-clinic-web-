import DoctorProfile from '../components/DoctorProfile';

const Cosmetology = () => {
  const doctors = [
    { name: 'Dr. Aparna Krishna', specialty: 'Aesthetic Physician', imageSrc: '/doctors/Dr. Aparna Krishna.jpeg' },
    { name: 'Dr. Aromal Chekavar', specialty: 'Endocrine Surgeon', imageSrc: '/doctors/Dr. Aromal Chekavar.jpeg' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-clinical-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-serif text-slate-gray mb-6">Skin & Cosmetology Unit</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-sans">
            Advanced medical aesthetics, dermatology, and reconstructive care tailored to enhance your natural beauty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map(doc => (
            <DoctorProfile key={doc.name} {...doc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cosmetology;
