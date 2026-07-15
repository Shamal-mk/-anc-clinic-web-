import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-clinical-white pt-24 flex items-center overflow-hidden">
      {/* Editorial Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Bold Editorial Typography */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left z-10 animate-fade-in-up">
          <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold mb-4">
            Anoop Newlifecare Clinic
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-obsidian-charcoal leading-[1.1] mb-6">
            Where Science <br />
            Meets <span className="italic font-light text-sage-green">Ancient</span> Wisdom.
          </h1>
          <p className="text-base md:text-lg text-obsidian-charcoal/70 max-w-xl font-sans font-light leading-relaxed mb-8">
            An elevated clinical ecosystem fusing cutting-edge medical aesthetics, 
            authentic Samsara Ayurveda, and CVN Kalari Marma therapy to harmonize your complete being.
          </p>
          <div className="flex gap-4">
            <Link
              to="/booking"
              className="px-8 py-4 bg-champagne-gold hover:bg-champagne-gold/90 text-white rounded-full font-sans text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Request Private Consultation
            </Link>
            <a
              href="#departments"
              className="px-8 py-4 bg-white border border-platinum-slate hover:border-obsidian-charcoal text-obsidian-charcoal rounded-full font-sans text-xs uppercase tracking-widest transition-all duration-300"
            >
              Explore Units
            </a>
          </div>
        </div>

        {/* Right Side: Majestic Masonry Image Layout */}
        <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative animate-slow-fade">
          {/* Top Left Card - Cosmetology */}
          <div className="col-span-6 transform translate-y-8 hover:-translate-y-1 transition-transform duration-500">
            <div className="aspect-[4/5] rounded-[16px] overflow-hidden border border-platinum-slate/30 shadow-md bg-white p-2">
              <img
                src="/doctors/Dr. Aparna Krishna.jpeg"
                alt="Cosmetology Practice"
                className="w-full h-full object-cover rounded-[12px]"
              />
              <div className="mt-2 text-center">
                <p className="text-[10px] font-sans uppercase tracking-widest text-champagne-gold">Cosmetology</p>
              </div>
            </div>
          </div>

          {/* Top Right Card - Ayurveda */}
          <div className="col-span-6 hover:-translate-y-1 transition-transform duration-500">
            <div className="aspect-[4/5] rounded-[16px] overflow-hidden border border-platinum-slate/30 shadow-md bg-white p-2">
              <img
                src="/doctors/Dr. Heera Ratnam.jpeg"
                alt="Ayurvedic Diagnostics"
                className="w-full h-full object-cover rounded-[12px]"
              />
              <div className="mt-2 text-center">
                <p className="text-[10px] font-sans uppercase tracking-widest text-sage-green">Ayurveda</p>
              </div>
            </div>
          </div>

          {/* Bottom Centered Card - Kalari */}
          <div className="col-span-8 col-start-3 -translate-y-4 hover:-translate-y-5 transition-transform duration-500">
            <div className="aspect-[16/10] rounded-[16px] overflow-hidden border border-platinum-slate/30 shadow-md bg-white p-2">
              <img
                src="/doctors/Sivakumar Gurukkal.jpeg"
                alt="Kalari Chikilsa"
                className="w-full h-full object-cover rounded-[12px]"
              />
              <div className="mt-2 text-center">
                <p className="text-[10px] font-sans uppercase tracking-widest text-obsidian-charcoal/60">CVN Kalari Marma Therapy</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Micro-interaction: Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 animate-bounce">
        <span className="text-[9px] uppercase tracking-widest text-obsidian-charcoal/40 font-sans">Scroll to discover</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-obsidian-charcoal/40 to-transparent" />
      </div>
    </div>
  );
};

export default Hero;
