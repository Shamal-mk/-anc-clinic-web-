import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-clinical-white">
      <Hero />

      {/* Stats Strip */}
      <div className="bg-royal-navy py-12 border-y border-platinum-slate/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: '3', label: 'Specialised Units' },
            { value: '9', label: 'Elite Medical Consultants' },
            { value: '15+', label: 'Years of Clinical Excellence' },
            { value: '10K+', label: 'Transformations Completed' },
          ].map((s) => (
            <div key={s.label} className="group">
              <p className="text-4xl md:text-5xl font-serif font-bold text-champagne-gold tracking-tight group-hover:scale-105 transition-transform duration-300">
                {s.value}
              </p>
              <p className="text-xs uppercase tracking-widest font-sans mt-2 text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Asymmetric Three-Unit Matrix */}
      <section id="departments" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="text-center mb-24">
            <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold">
              Clinical Zoning
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mt-2 mb-4">
              Three Pillars of Integrity
            </h2>
            <div className="h-[1px] w-24 bg-champagne-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
            
            {/* Unit Card 1: Cosmetology - Alternating depth: Normal */}
            <Link
              to="/departments/cosmetology"
              className="group relative flex flex-col justify-between bg-clinical-white p-10 rounded-[24px] border border-platinum-slate/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-champagne-gold/40 overflow-hidden"
            >
              {/* Parallax Background Glow */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-champagne-gold/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <div>
                <div className="text-3xl mb-8 font-light text-champagne-gold">01 / ✨</div>
                <h3 className="text-3xl font-serif text-obsidian-charcoal mb-4 group-hover:text-champagne-gold transition-colors duration-300">
                  Skin & Cosmetology
                </h3>
                <p className="text-obsidian-charcoal/60 font-sans font-light text-sm leading-relaxed mb-6">
                  Experience world-class reconstructive, clinical dermatology, and facial rejuvenation treatments. 
                  Where precise medical care meets aesthetic mastery.
                </p>
              </div>

              <div className="mt-8 flex items-center text-xs uppercase tracking-widest text-champagne-gold font-semibold">
                Explore Aesthetics Unit <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </Link>

            {/* Unit Card 2: Samsara Ayurveda - Alternating depth: Offset Upwards */}
            <Link
              to="/departments/ayurveda"
              className="group relative flex flex-col justify-between bg-clinical-white p-10 rounded-[24px] border border-platinum-slate/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 lg:-translate-y-6 hover:border-sage-green/40 overflow-hidden"
            >
              {/* Embedded High-Fidelity Header Logo */}
              <div className="w-full flex justify-center mb-8 bg-white py-4 px-6 rounded-[16px] border border-platinum-slate/20">
                <img
                  src="/logos/Dr. Unnikrishnans samsara ayurveda unit  Logo.jpeg"
                  alt="Samsara Ayurveda Unit Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>

              <div className="absolute -right-16 -top-16 w-32 h-32 bg-sage-green/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <div>
                <div className="text-3xl mb-4 font-light text-sage-green">02 / 🌿</div>
                <h3 className="text-3xl font-serif text-obsidian-charcoal mb-4 group-hover:text-sage-green transition-colors duration-300">
                  Samsara Ayurveda
                </h3>
                <p className="text-obsidian-charcoal/60 font-sans font-light text-sm leading-relaxed mb-6">
                  Authentic holistic medicine directed by Dr. Unnikrishnan. Tailored Panchakarma therapies 
                  and ancient remedies customized to optimize system balance.
                </p>
              </div>

              <div className="mt-8 flex items-center text-xs uppercase tracking-widest text-sage-green font-semibold">
                Explore Ayurveda Unit <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </Link>

            {/* Unit Card 3: CVN Kalari - Alternating depth: Offset Downwards */}
            <Link
              to="/departments/kalari"
              className="group relative flex flex-col justify-between bg-clinical-white p-10 rounded-[24px] border border-platinum-slate/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 lg:translate-y-6 hover:border-royal-navy/40 overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-royal-navy/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <div>
                <div className="text-3xl mb-8 font-light text-royal-navy">03 / ⚔️</div>
                <h3 className="text-3xl font-serif text-obsidian-charcoal mb-4 group-hover:text-royal-navy transition-colors duration-300">
                  CVN Kalari Chikilsa
                </h3>
                <p className="text-obsidian-charcoal/60 font-sans font-light text-sm leading-relaxed mb-6">
                  Traditional Marma point therapy and orthopaedic treatments derived from Kalaripayattu systems. 
                  Designed to restore skeletal flow and muscular strength.
                </p>
              </div>

              <div className="mt-8 flex items-center text-xs uppercase tracking-widest text-royal-navy font-semibold">
                Explore Kalari Unit <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-clinical-white border-t border-platinum-slate/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold">Clinical Standards</span>
            <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mt-2 mb-4">Patient-Centric Philosophies</h2>
            <div className="h-[1px] w-24 bg-champagne-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💎', title: 'World-Class Faculty', desc: 'Elite practitioners with global standards and decades of hands-on expertise.' },
              { icon: '🧬', title: 'Contextual Zoning', desc: 'Distinct care zones configured specifically to their respective scientific systems.' },
              { icon: '🌿', title: 'Integrative Protocols', desc: 'Merging cutting-edge medical technologies with ancient wisdom.' },
              { icon: '🔒', title: 'Private Consultations', desc: 'Absolute confidentiality with one-on-one tailored restorative programs.' },
            ].map((f) => (
              <div key={f.title} className="bg-white p-8 rounded-[20px] border border-platinum-slate/20 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-6">{f.icon}</div>
                <h3 className="font-serif text-obsidian-charcoal text-lg mb-3">{f.title}</h3>
                <p className="text-obsidian-charcoal/60 text-xs font-sans leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Call to Action */}
      <section className="py-28 bg-obsidian-charcoal text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-royal-navy to-obsidian-charcoal opacity-80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">Begin Your Personal Wellness Paradigm</h2>
          <p className="text-white/60 font-sans font-light mb-10 max-w-lg mx-auto text-sm leading-relaxed">
            Schedule a confidential consultation with our specialists to customize your treatment process.
          </p>
          <Link
            to="/booking"
            className="inline-block px-10 py-4 bg-champagne-gold hover:bg-champagne-gold/90 text-white rounded-full font-sans text-xs uppercase tracking-widest shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Request Private Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
