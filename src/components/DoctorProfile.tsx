import React from 'react';

interface DoctorProfileProps {
  name: string;
  specialty: string;
  imageSrc: string;
  focuses?: string[]; // core clinical focuses
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ name, specialty, imageSrc, focuses = [] }) => {
  return (
    <div className="group flex flex-col bg-white rounded-[24px] p-6 border border-platinum-slate/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Uniform Aspect-Ratio Image Mask */}
      <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden mb-6 relative">
        <div className="absolute inset-0 bg-obsidian-charcoal/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
        />
      </div>
      
      {/* Doctor Name in Bold Serif */}
      <h3 className="text-2xl font-serif font-bold text-obsidian-charcoal mb-1 tracking-wide group-hover:text-champagne-gold transition-colors duration-300">
        {name}
      </h3>
      
      {/* Specialization in Uppercase Muted Grey Tracking Text */}
      <p className="text-[10px] font-sans uppercase tracking-widest text-obsidian-charcoal/50 font-semibold mb-4">
        {specialty}
      </p>

      {/* Fine Divider Line separating clinical focuses */}
      {focuses.length > 0 && (
        <div className="mt-auto">
          <div className="w-full h-[1px] bg-platinum-slate/50 mb-4" />
          <div className="flex flex-wrap gap-2">
            {focuses.map((f, i) => (
              <span 
                key={i} 
                className="text-[10px] font-sans text-obsidian-charcoal/70 bg-clinical-white px-2.5 py-1 rounded-full border border-platinum-slate/20"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;
