import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-clinical-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 to-clinical-white mix-blend-multiply" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-gray mb-6 tracking-tight">
          Redefining <span className="text-champagne-gold">Healthcare</span> <br className="hidden md:block"/> with Elegance
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-sans font-light leading-relaxed mb-10">
          Experience world-class medical aesthetics, authentic Ayurveda, and traditional Kalari Chikilsa in a premium, healing environment.
        </p>
        <div className="flex justify-center gap-6">
          <a href="/booking" className="px-8 py-4 bg-champagne-gold hover:bg-yellow-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Book an Appointment
          </a>
          <a href="#departments" className="px-8 py-4 bg-white border border-gray-200 hover:border-sage-green text-slate-gray rounded-full font-medium transition-all shadow-sm hover:shadow-md">
            Explore Departments
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
