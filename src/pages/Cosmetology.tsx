import DoctorProfile from '../components/DoctorProfile';
import { Link } from 'react-router-dom';

const Cosmetology = () => {
  const doctors = [
    { 
      name: 'Dr. Aparna Krishna', 
      specialty: 'AESTHETIC PHYSICIAN', 
      imageSrc: '/doctors/Dr. Aparna Krishna.jpeg',
      focuses: ['Facial Rejuvenation', 'Botulinum Toxin', 'Laser Resurfacing']
    },
    { 
      name: 'Dr. Aromal Chekavar', 
      specialty: 'ENDOCRINE SURGEON', 
      imageSrc: '/doctors/Dr. Aromal Chekavar.jpeg',
      focuses: ['Endocrine Surgery', 'Reconstructive Care', 'Thyroid Disorders']
    },
    { 
      name: 'Dr. Akhila', 
      specialty: 'PLASTIC AND RECONSTRUCTIVE SURGEON', 
      imageSrc: '/doctors/Dr. Akhila.jpeg',
      focuses: ['Microvascular Surgery', 'Reconstructive Aesthetics', 'Burn Care']
    },
    { 
      name: 'Dr. Binu Sethu', 
      specialty: 'CONSULTANT DERMATOLOGIST', 
      imageSrc: '/doctors/Dr. Binu Sethu.jpeg',
      focuses: ['Clinical Dermatology', 'Scar Treatments', 'Psoriasis & Acne']
    },
  ];

  const concerns = [
    { label: 'Acne & Acne Scars', icon: '✨' },
    { label: 'Pigmentation & Melasma', icon: '🌑' },
    { label: 'Hair Loss & Thinning', icon: '🧬' },
    { label: 'Anti-Ageing & Wrinkles', icon: '⏳' },
    { label: 'Dull & Tired Skin', icon: '💫' },
    { label: 'Large Pores', icon: '🔍' },
    { label: 'Rosacea & Sensitive Skin', icon: '🌸' },
    { label: 'Skin Tightening', icon: '🔄' },
  ];

  const treatments = [
    {
      title: 'Advanced Chemical Peels',
      desc: 'Medical-grade exfoliation for cellular turnover, brightening, and texture refinement.',
      img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'PRP & Microneedling',
      desc: 'Harnessing your bodys own growth factors for collagen induction and hair restoration.',
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Laser Aesthetics',
      desc: 'Precision laser therapy for pigmentation, hair removal, and vascular lesions.',
      img: 'https://images.unsplash.com/photo-1533095361025-a131f6f1c4df?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Botox & Dermal Fillers',
      desc: 'Artful injectables to restore volume, contour features, and smooth expression lines.',
      img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const features = [
    'Personalised Consultation',
    'Evidence-Based Treatments',
    'Integrated Healthcare',
    'Certified Specialists',
    'Modern Technology',
    'Long-term Skin Wellness',
    'Individual Treatment Plans',
    'Ethical Medical Care'
  ];

  return (
    <div className="pt-24 min-h-screen bg-clinical-white">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-royal-navy/5 via-transparent to-transparent py-28 px-6">
        <div className="max-w-4xl mx-auto text-center z-10 relative animate-fade-in-up">
          <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold mb-6 block">ANC Premium Dermatology</span>
          <h1 className="text-5xl md:text-7xl font-serif text-obsidian-charcoal mb-8 leading-tight">
            Skin & Cosmetology
          </h1>
          <p className="text-lg md:text-xl text-obsidian-charcoal/70 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Evidence-based skin, hair and aesthetic care designed around your unique concerns.
          </p>
        </div>
      </section>

      {/* 2. Concern-Based Navigation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-obsidian-charcoal mb-4">What concerns you today?</h2>
            <div className="h-[1px] w-16 bg-champagne-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {concerns.map((concern, i) => (
              <div key={i} className="group bg-clinical-white border border-platinum-slate/30 rounded-2xl p-6 hover:shadow-lg hover:border-champagne-gold/40 transition-all duration-500 cursor-pointer flex flex-col items-center text-center">
                <span className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500">{concern.icon}</span>
                <h3 className="font-sans text-sm font-semibold text-obsidian-charcoal/90">{concern.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Advanced Diagnostics */}
      <section className="py-24 bg-obsidian-charcoal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold mb-4 block">The Science of Skin</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Modern Skin Analysis</h2>
              <p className="text-white/70 font-sans font-light leading-relaxed mb-8">
                We believe exceptional results begin with profound understanding. Our advanced diagnostic protocols go beyond the surface to identify the root cause of your aesthetic concerns.
              </p>
              <ul className="space-y-4">
                {['Comprehensive Skin Assessment', 'Scalp & Hair Follicle Analysis', 'Lifestyle & Dietary Evaluation', 'Thorough Medical History', 'Customized Follow-up Planning'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-sans text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern skin analysis" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatment Showcase */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold block mb-4">Curated Aesthetics</span>
            <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mb-6">Premium Treatments</h2>
            <div className="h-[1px] w-16 bg-champagne-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {treatments.map((treatment, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 border border-platinum-slate/20">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute inset-0 bg-obsidian-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={treatment.img} 
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-serif text-obsidian-charcoal mb-3">{treatment.title}</h3>
                  <p className="text-obsidian-charcoal/70 font-sans font-light leading-relaxed">{treatment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Patient Journey Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-obsidian-charcoal">The ANC Journey</h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-platinum-slate/50 z-0" />
            
            {[
              { num: '01', title: 'Consultation' },
              { num: '02', title: 'Skin Analysis' },
              { num: '03', title: 'Diagnosis' },
              { num: '04', title: 'Treatment Plan' },
              { num: '05', title: 'Follow-up Care' },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group w-full md:w-1/5">
                <div className="w-24 h-24 rounded-full bg-clinical-white border-2 border-platinum-slate flex items-center justify-center mb-6 group-hover:border-champagne-gold group-hover:shadow-lg transition-all duration-500 bg-white">
                  <span className="font-serif text-2xl text-champagne-gold">{step.num}</span>
                </div>
                <h3 className="font-sans text-sm font-semibold text-obsidian-charcoal uppercase tracking-widest">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose ANC */}
      <section className="py-24 bg-[#FAFAFA] border-y border-platinum-slate/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mb-6 leading-tight">Why Choose ANC Aesthetics?</h2>
              <p className="text-obsidian-charcoal/70 font-sans font-light leading-relaxed mb-8">
                We combine the ethical foundation of medical science with the refined elegance of luxury wellness.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-platinum-slate/20 flex items-center gap-4 hover:shadow-md transition-shadow duration-300">
                  <span className="w-8 h-8 rounded-full bg-sage-green/10 flex items-center justify-center text-sage-green flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-sans text-sm font-semibold text-obsidian-charcoal/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Consulting Specialists */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <span className="text-champagne-gold uppercase tracking-widest text-xs font-semibold block mb-4">The Experts</span>
            <h2 className="text-4xl font-serif text-obsidian-charcoal">Medical Specialists</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc) => (
              <DoctorProfile key={doc.name} {...doc} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Before & After Placeholders */}
      <section className="py-24 bg-obsidian-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl font-serif mb-16">Clinical Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden group">
              <img
                src="/Skin and cosmetology/98DA988A-6C6A-49AE-8F0F-8C2D96072F48.PNG"
                alt="Clinical result – Treatment 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
            <div className="aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden group">
              <img
                src="/Skin and cosmetology/CB2C1BC0-3CF5-446B-A31C-E353A45E8097.PNG"
                alt="Clinical result – Treatment 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The approach to my melasma was incredibly scientific. I felt heard, and the results have restored my confidence completely.",
                name: "Sarah M.",
                treatment: "Laser Aesthetics"
              },
              {
                text: "A truly premium experience. The clinic feels like a luxury wellness retreat, but with the reassurance of highly qualified doctors.",
                name: "Priya R.",
                treatment: "Anti-Ageing Care"
              },
              {
                text: "My acne scarring has improved dramatically after the micro-needling sessions. The follow-up care is exceptional.",
                name: "Anjali T.",
                treatment: "Scar Revision"
              }
            ].map((review, i) => (
              <div key={i} className="bg-[#FAFAFA] p-10 rounded-3xl relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <span className="text-8xl font-serif text-champagne-gold/10 absolute -top-4 -left-2 select-none">"</span>
                <p className="font-sans font-light text-obsidian-charcoal/80 leading-relaxed mb-8 relative z-10 mt-4">
                  {review.text}
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-obsidian-charcoal/5 flex items-center justify-center border border-platinum-slate">
                    <span className="font-sans font-semibold text-obsidian-charcoal text-sm">{review.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-obsidian-charcoal text-sm">{review.name}</h4>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-obsidian-charcoal/50 flex items-center gap-1 mt-1">
                      <svg className="w-3 h-3 text-sage-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Patient — {review.treatment}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-32 bg-obsidian-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Begin Your Journey</h2>
          <p className="text-lg text-white/70 font-sans font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a comprehensive skin assessment with our experts and discover your personalized pathway to optimal skin health.
          </p>
          <Link 
            to="/booking"
            className="inline-block bg-champagne-gold text-obsidian-charcoal font-sans text-sm font-semibold tracking-widest uppercase px-10 py-5 rounded-full hover:bg-white transition-colors duration-300"
          >
            Book Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Cosmetology;
