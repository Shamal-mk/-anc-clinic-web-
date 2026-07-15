import React from 'react';

interface DoctorProfileProps {
  name: string;
  specialty: string;
  imageSrc: string;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ name, specialty, imageSrc }) => {
  return (
    <div className="group flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="w-48 h-48 rounded-[12px] overflow-hidden mb-6 border-4 border-white shadow-inner relative">
        <div className="absolute inset-0 bg-sage-green/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-serif text-slate-gray mb-2 text-center group-hover:text-champagne-gold transition-colors duration-300">{name}</h3>
      <p className="text-sm font-sans text-gray-500 text-center leading-relaxed">{specialty}</p>
    </div>
  );
};

export default DoctorProfile;
