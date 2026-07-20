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

      {/* Founder's Message & Mission */}
      <section
        className="py-32 bg-white border-t border-platinum-slate/20"
        id="founders-message"
        style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.9s cubic-bezier(0.25, 1, 0.5, 1), transform 0.9s cubic-bezier(0.25, 1, 0.5, 1)' }}
        ref={(el) => {
          if (!el) return;
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
                observer.disconnect();
              }
            },
            { threshold: 0.1 }
          );
          observer.observe(el);
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left Column: Founder's Message */}
            <div>

              <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mt-3 mb-6 leading-snug">
                Founder's Message
              </h2>
              <div className="h-[1px] w-16 bg-champagne-gold mb-10" />

              <div className="space-y-6 text-obsidian-charcoal/70 font-sans font-light text-base leading-relaxed">
                <p>
                  At ANC, healing has always been more than treating illness—it is about restoring health, hope, and harmony. Inspired by the vision and values of my father, Dr. Unnikrishnan, whose lifelong dedication to Ayurveda touched countless lives. I am honoured to continue his legacy while embracing the advancements of modern medicine.
                </p>
                <p>
                  Our dream is to create a healthcare destination where the timeless wisdom of Ayurveda complements evidence-based allopathy, supported by rehabilitation, medical aesthetics, wellness therapies, and the rich tradition of CVN Kalari. We believe every individual deserves care that is ethical, compassionate, and tailored to their unique needs.
                </p>
                <p>
                  At ANC, our commitment is to help every patient live healthier, stronger, and more confident lives through an integrated approach to healing and wellness.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-10 pt-8 border-t border-platinum-slate/30">
                <p className="font-serif italic text-obsidian-charcoal text-xl mb-1">— Dr. Aparna</p>
                <p className="text-xs uppercase tracking-widest text-champagne-gold font-sans font-semibold">Cosmetologist &amp; Medical Director</p>
              </div>
            </div>

            {/* Right Column: Our Mission */}
            <div
              style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.9s 0.2s cubic-bezier(0.25, 1, 0.5, 1), transform 0.9s 0.2s cubic-bezier(0.25, 1, 0.5, 1)' }}
              ref={(el) => {
                if (!el) return;
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      (el as HTMLElement).style.opacity = '1';
                      (el as HTMLElement).style.transform = 'translateY(0)';
                      observer.disconnect();
                    }
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }}
            >

              <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mt-3 mb-6 leading-snug">
                Our Mission
              </h2>
              <div className="h-[1px] w-16 bg-sage-green mb-10" />

              <div className="space-y-5">
                {[
                  { icon: 'heart', text: 'Deliver personalised, ethical, and compassionate healthcare for every patient.' },
                  { icon: 'leaf', text: 'Integrate ayurveda, allopathy, rehabilitation, medical aesthetics, wellness therapies, and the discipline of CVN Kalari under one roof.' },
                  { icon: 'microscope', text: 'Provide evidence-based treatments focused on prevention, recovery, and long-term wellness.' },
                  { icon: 'shield', text: 'Foster a patient-first culture built on trust, respect, and clinical excellence.' },
                  { icon: 'sprout', text: 'Inspire healthier communities by making quality, integrated healthcare accessible and sustainable.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 bg-clinical-white rounded-[16px] p-6 border border-platinum-slate/25 hover:shadow-md hover:border-sage-green/30 transition-all duration-300"
                  >
                    <span className="flex-shrink-0 mt-0.5 w-6 h-6 text-sage-green">
                      {item.icon === 'heart' && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      )}
                      {item.icon === 'leaf' && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                      )}
                      {item.icon === 'microscope' && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"/><path d="M3 21h18"/><path d="M14 21v-4"/><path d="M9 6l1-4 3 1-1 4"/><path d="M12 7l-4 10"/><circle cx="8" cy="8" r="2"/></svg>
                      )}
                      {item.icon === 'shield' && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      )}
                      {item.icon === 'sprout' && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 1 1.4 4.5c1.7-1.5 2.7-3 2.5-5.3-1.5-.2-3 .2-3.9.8z"/></svg>
                      )}
                    </span>
                    <p className="text-obsidian-charcoal/70 font-sans font-light text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

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
                <div className="flex items-center gap-3 mb-8 font-light text-champagne-gold text-3xl">
                  01 /
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-1a6 6 0 0 1 12 0v1"/><path d="M9 12.5c-.5 1-.5 2.5 0 3.5"/><path d="M15 12.5c.5 1 .5 2.5 0 3.5"/></svg>
                </div>
                <h3 className="text-3xl font-serif text-obsidian-charcoal mb-4 group-hover:text-champagne-gold transition-colors duration-300">
                  Skin & Cosmetology
                </h3>
                <p className="text-obsidian-charcoal/60 font-sans font-light text-sm leading-relaxed mb-6">
                  Experience world-class reconstructive, clinical dermatology, and facial rejuvenation treatments where precise medical care meets aesthetic mastery.
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
                <div className="flex items-center gap-3 mb-4 font-light text-sage-green text-3xl">
                  02 /
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                </div>
                <h3 className="text-3xl font-serif text-obsidian-charcoal mb-4 group-hover:text-sage-green transition-colors duration-300 break-words leading-tight">
                  Dr. Unnikrishnan's Samsara Ayurveda
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

              {/* CVN Kalari Logo — same pattern as card 2 */}
              <div className="w-full flex justify-center mb-8 bg-white py-4 px-6 rounded-[16px] border border-platinum-slate/20">
                <img
                  src="/Cvn Kalari Logo.jpg"
                  alt="CVN Kalari Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-8 font-light text-royal-navy text-3xl">
                  03 /
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L3 7l9 5 9-5-9-5z"/><path d="M3 17l9 5 9-5"/><path d="M3 12l9 5 9-5"/></svg>
                </div>
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
              { icon: 'gem', title: 'World-Class Faculty', desc: 'Elite practitioners with global standards and decades of hands-on expertise.' },
              { icon: 'zone', title: 'Contextual Zoning', desc: 'Distinct care zones configured specifically to their respective scientific systems.' },
              { icon: 'leaf2', title: 'Integrative Protocols', desc: 'Merging cutting-edge medical technologies with ancient wisdom.' },
              { icon: 'lock', title: 'Private Consultations', desc: 'Absolute confidentiality with one-on-one tailored restorative programs.' },
            ].map((f) => (
              <div key={f.title} className="bg-white p-8 rounded-[20px] border border-platinum-slate/20 hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 mb-6 text-champagne-gold">
                  {f.icon === 'gem' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
                  {f.icon === 'zone' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>)}
                  {f.icon === 'leaf2' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>)}
                  {f.icon === 'lock' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>)}
                </div>
                <h3 className="font-serif text-obsidian-charcoal text-lg mb-3">{f.title}</h3>
                <p className="text-obsidian-charcoal/60 text-xs font-sans leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Facilities */}
      <section className="py-32 bg-[#FAFAFA] border-t border-platinum-slate/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold">Our Environment</span>
            <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mt-2 mb-4">Patient Facilities</h2>
            <div className="h-[1px] w-24 bg-champagne-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: 'sofa', text: 'Comfortable Waiting Area' },
              { icon: 'stethoscope', text: 'Spacious Consultation Rooms' },
              { icon: 'pill', text: 'Pharmacy' },
              { icon: 'calendar', text: 'Digital Appointment Booking' },
              { icon: 'wheelchair', text: 'Wheelchair Accessibility' },
              { icon: 'sparkle', text: 'Clean Treatment Rooms' },
              { icon: 'doctor', text: 'Experienced Medical Team' },
              { icon: 'integrate', text: 'Integrated Healthcare' },
              { icon: 'parking', text: 'Parking Facility' },
              { icon: 'leaf3', text: 'Hygienic Environment' },
            ].map((facility, i) => (
              <div key={i} className="bg-white p-6 rounded-[16px] border border-platinum-slate/25 hover:shadow-md hover:border-champagne-gold/30 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-7 h-7 mb-4 text-champagne-gold group-hover:scale-110 transition-transform duration-300">
                  {facility.icon === 'sofa' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5H2z"/><path d="M4 18v2"/><path d="M20 18v2"/></svg>)}
                  {facility.icon === 'stethoscope' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>)}
                  {facility.icon === 'pill' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3"/><circle cx="17" cy="17" r="5"/><path d="m14.5 19.5 5-5"/></svg>)}
                  {facility.icon === 'calendar' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>)}
                  {facility.icon === 'wheelchair' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="17" cy="21" r="2"/><circle cx="7" cy="21" r="2"/><path d="M5 21v-4l4-4 4 4v4"/><circle cx="9" cy="8" r="2"/><path d="M9 10v4l4 3"/></svg>)}
                  {facility.icon === 'sparkle' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1"/><path d="M12 20v1"/><path d="M3 12h1"/><path d="M20 12h1"/><path d="m18.364 5.636-.707.707"/><path d="m6.343 17.657-.707.707"/><path d="m5.636 5.636.707.707"/><path d="m17.657 17.657.707.707"/><circle cx="12" cy="12" r="4"/></svg>)}
                  {facility.icon === 'doctor' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/><path d="M14 14h2a2 2 0 0 1 2 2v2h-4"/><path d="M16 16h2"/></svg>)}
                  {facility.icon === 'integrate' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" x2="6" y1="9" y2="21"/></svg>)}
                  {facility.icon === 'parking' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>)}
                  {facility.icon === 'leaf3' && (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>)}
                </div>
                <p className="text-obsidian-charcoal/80 font-sans text-xs font-semibold leading-relaxed">{facility.text}</p>
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
