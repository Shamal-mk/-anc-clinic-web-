import DoctorProfile from '../components/DoctorProfile';
import { Link } from 'react-router-dom';

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
      focuses: ['Lifestyle Disease Management', 'Skin & Hair Restorations', 'Panchakarma']
    },
  ];

  const panchakarma = [
    { title: 'Abhyangam', icon: 'oil', desc: 'Rhythmic warm herbal oil massage to release deep-seated toxins and improve circulation.' },
    { title: 'Shirodhara', icon: 'pour', desc: 'Continuous pouring of warm medicated oil on the forehead for profound neurological relaxation.' },
    { title: 'Pizhichil', icon: 'warmth', desc: 'Luxurious therapy involving the continuous pouring of warm herbal oils over the entire body.' },
    { title: 'Njavarakizhi', icon: 'bundle', desc: 'Fomentation with special rice puddings to strengthen muscles and rejuvenate the nervous system.' },
    { title: 'Elakizhi', icon: 'herb', desc: 'Massage with herbal leaf bundles to relieve joint pain, arthritis, and muscle stiffness.' },
    { title: 'Udwarthanam', icon: 'powder', desc: 'Vigorously applied dry herbal powder massage, excellent for weight management and toning.' },
    { title: 'Nasya', icon: 'nasal', desc: 'Instillation of herbal oils through the nasal passages to cleanse the head and neck regions.' },
    { title: 'Vasti', icon: 'vessel', desc: 'Medicated enema therapy, considered the mother of all treatments for complete detoxification.' },
    { title: 'Thalapothichil', icon: 'headpack', desc: 'Cooling herbal head pack to calm the mind, relieve stress, and treat scalp conditions.' },
  ];

  const specialties = [
    { label: 'Joint & Spine Care', icon: '🦴' },
    { label: 'Neurological Disorders', icon: '🧠' },
    { label: "Women's Health (Sthree Roga)", icon: '🌸' },
    { label: 'Lifestyle Disease Management', icon: '⚖️' },
    { label: 'Arthritis Care', icon: '🤝' },
    { label: 'Digestive Health', icon: '🍃' },
    { label: 'Stress Management', icon: '🧘' },
    { label: 'Skin Disorders', icon: '🧴' },
    { label: 'Sports Rehabilitation', icon: '🏃' },
    { label: 'Pediatric Ayurveda', icon: '👶' },
  ];

  const features = [
    'Traditional Kerala Ayurveda',
    'Experienced Ayurvedic Physicians',
    'Personalized Treatment Plans',
    'Authentic Herbal Medicines',
    'Holistic Healing Approach',
    'Integrated Healthcare',
    'Evidence-Informed Care',
    'Compassionate Patient Care'
  ];

  return (
    <div className="pt-24 min-h-screen bg-clinical-white selection:bg-sage-green/20">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-green/10 via-clinical-white to-clinical-white py-28 px-6">
        <div className="max-w-4xl mx-auto text-center z-10 relative animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-[20px] shadow-md p-8 border border-platinum-slate/20 inline-block">
              <img
                src="/logos/Dr. Unnikrishnans samsara ayurveda unit  Logo.jpeg"
                alt="Dr. Unnikrishnan's Samsara Ayurveda Unit Logo"
                className="h-28 md:h-36 lg:h-40 w-auto object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-obsidian-charcoal mb-6 leading-tight break-words px-4">
            Dr. Unnikrishnan's Samsara Ayurveda
          </h1>
          <div className="h-[1px] w-20 bg-sage-green mx-auto mb-8" />
          <p className="text-lg md:text-xl text-obsidian-charcoal/80 font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Authentic Kerala Ayurveda rooted in tradition and guided by modern clinical excellence. Experience root-cause healing pathways designed to restore profound equilibrium to your mind, body, and soul.
          </p>
        </div>
      </section>

      {/* 2. Heritage Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl border border-platinum-slate/20">
                <img 
                  src="/ayurveda_heritage.jpeg" 
                  alt="Traditional Ayurvedic Herbs" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sage-green/5 rounded-full blur-3xl -z-10" />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-sage-green uppercase tracking-widest text-xs font-semibold mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mb-8 leading-tight">The Heritage of Healing</h2>
              <p className="text-obsidian-charcoal/70 font-sans font-light leading-relaxed mb-6 text-lg">
                Ayurveda is not merely a system of medicine; it is the timeless science of life. At ANC, we preserve the pristine traditions of Kerala Ayurveda, offering a sanctuary where ancient wisdom meets ethical, evidence-informed practice.
              </p>
              <p className="text-obsidian-charcoal/70 font-sans font-light leading-relaxed mb-8 text-lg">
                We focus on holistic healing and preventive healthcare, formulating personalized therapies that address the root cause of illness rather than merely suppressing symptoms.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-platinum-slate/40">
                <div>
                  <h4 className="font-serif text-2xl text-obsidian-charcoal mb-2">Root-Cause</h4>
                  <p className="font-sans text-sm text-obsidian-charcoal/60">Targeting the origin of illness</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-obsidian-charcoal mb-2">Personalized</h4>
                  <p className="font-sans text-sm text-obsidian-charcoal/60">Tailored to your unique constitution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Panchakarma Showcase */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <span className="text-sage-green uppercase tracking-widest text-xs font-semibold block mb-4">Deep Detoxification</span>
            <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mb-6">Panchakarma Therapies</h2>
            <div className="h-[1px] w-24 bg-sage-green mx-auto" />
            <p className="text-obsidian-charcoal/70 font-sans font-light mt-6 max-w-2xl mx-auto">
              The ultimate mind-body healing experience for detoxifying the body, strengthening the immune system, and restoring balance and well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {panchakarma.map((therapy, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 border border-platinum-slate/20 hover:shadow-xl hover:border-sage-green/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sage-green/5 rounded-bl-[100px] -z-0 transition-transform duration-500 group-hover:scale-110" />
                <div className="relative z-10">
                  <div className="w-10 h-10 mb-6 text-sage-green transform group-hover:-translate-y-2 transition-transform duration-500">
                    {therapy.icon === 'oil' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c0 0-6 5.686-6 10a6 6 0 0 0 12 0c0-4.314-6-10-6-10z"/><path d="M12 12v4"/><path d="M10 14h4"/></svg>
                    )}
                    {therapy.icon === 'pour' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h10"/><path d="M12 3v4"/><path d="M8 7c0 0-2 2-2 6s2 6 2 6"/><path d="M16 7c0 0 2 2 2 6s-2 6-2 6"/><path d="M8 19h8"/><path d="M12 7v12"/><path d="M10 12l2 2 2-2"/></svg>
                    )}
                    {therapy.icon === 'warmth' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 1 5 5c0 4-5 11-5 11S7 11 7 7a5 5 0 0 1 5-5z"/><path d="M3 20c3-2 6-3 9-3s6 1 9 3"/><circle cx="12" cy="7" r="2"/></svg>
                    )}
                    {therapy.icon === 'bundle' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="10" rx="6" ry="3"/><path d="M6 10c0 4 2.686 7 6 7s6-3 6-7"/><path d="M9 7c0-2 1.343-4 3-4s3 2 3 4"/><path d="M12 17v4"/><path d="M9 20h6"/></svg>
                    )}
                    {therapy.icon === 'herb' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                    )}
                    {therapy.icon === 'powder' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M7 6V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2"/><path d="M8 6l1 12h6l1-12"/><path d="M10 10h4"/><path d="M10 14h4"/></svg>
                    )}
                    {therapy.icon === 'nasal' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-2 0-4 2-4 5v7c0 2 1 3 2 4l2 2 2-2c1-1 2-2 2-4V7c0-3-2-5-4-5z"/><path d="M8 14c-2 1-3 3-3 4"/><path d="M16 14c2 1 3 3 3 4"/><circle cx="12" cy="8" r="1.5"/></svg>
                    )}
                    {therapy.icon === 'vessel' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h16l-2 10H6L4 8z"/><path d="M2 8h20"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/><path d="M10 13h4"/><path d="M12 11v4"/></svg>
                    )}
                    {therapy.icon === 'headpack' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="6"/><path d="M6 10C6 7 8 4 12 4s6 3 6 6"/><path d="M6 10c0 0-2 1-2 3s2 3 2 3"/><path d="M18 10c0 0 2 1 2 3s-2 3-2 3"/><path d="M10 16v4"/><path d="M14 16v4"/><path d="M8 20h8"/></svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-serif text-obsidian-charcoal mb-3">{therapy.title}</h3>
                  <p className="text-obsidian-charcoal/70 font-sans font-light leading-relaxed text-sm">{therapy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ayurvedic Specialities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-obsidian-charcoal mb-4">Clinical Specialties</h2>
            <p className="text-obsidian-charcoal/60 font-sans font-light">Comprehensive care for chronic and acute conditions.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {specialties.map((spec, i) => (
              <div key={i} className="bg-clinical-white border border-platinum-slate/30 rounded-2xl p-6 hover:shadow-md hover:border-sage-green/40 transition-all duration-300 flex flex-col items-center text-center group">
                <span className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{spec.icon}</span>
                <h3 className="font-sans text-sm font-semibold text-obsidian-charcoal/90">{spec.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Treatment Journey Timeline */}
      <section className="py-32 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <span className="text-sage-green uppercase tracking-widest text-xs font-semibold block mb-4">Your Pathway to Wellness</span>
            <h2 className="text-3xl md:text-4xl font-serif text-obsidian-charcoal">The Healing Journey</h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-2 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[5%] right-[5%] h-[1px] bg-platinum-slate/60 z-0" />
            
            {[
              { num: '01', title: 'Initial Consultation' },
              { num: '02', title: 'Ayurvedic Diagnosis' },
              { num: '03', title: 'Personalized Plan' },
              { num: '04', title: 'Therapy Sessions' },
              { num: '05', title: 'Lifestyle & Diet' },
              { num: '06', title: 'Follow-up Care' },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group w-full md:w-1/6 px-2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-platinum-slate flex items-center justify-center mb-6 group-hover:border-sage-green group-hover:shadow-lg transition-all duration-500">
                  <span className="font-serif text-xl md:text-2xl text-sage-green">{step.num}</span>
                </div>
                <h3 className="font-sans text-xs md:text-sm font-semibold text-obsidian-charcoal uppercase tracking-widest leading-relaxed">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Herbal Medicine & Patient Experience */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Herbal Medicine */}
            <div className="group relative overflow-hidden rounded-[24px] shadow-lg aspect-square md:aspect-auto md:min-h-[520px]">
              <img 
                src="/Traditional Formulations.jpeg" 
                alt="Ayurvedic Oils" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-charcoal/90 via-obsidian-charcoal/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <span className="text-sage-green uppercase tracking-widest text-xs font-semibold mb-3 block">Pure Ingredients</span>
                <h3 className="text-3xl font-serif text-white mb-4">Traditional Formulations</h3>
                <p className="text-white/80 font-sans font-light text-sm leading-relaxed max-w-md">
                  We utilize classical preparations, fresh Ayurvedic oils, and personalized herbal medicines derived directly from nature to ensure the highest therapeutic efficacy.
                </p>
              </div>
            </div>

            {/* Patient Experience */}
            <div className="group relative overflow-hidden rounded-[24px] shadow-lg aspect-square md:aspect-auto md:min-h-[520px]">
              <img 
                src="/A Sanctuary of Peace.jpeg" 
                alt="Calm healing environment" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-charcoal/90 via-obsidian-charcoal/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <span className="text-sage-green uppercase tracking-widest text-xs font-semibold mb-3 block">Healing Environment</span>
                <h3 className="text-3xl font-serif text-white mb-4">A Sanctuary of Peace</h3>
                <p className="text-white/80 font-sans font-light text-sm leading-relaxed max-w-md">
                  Experience individual consultations in calm treatment rooms. We maintain impeccable hygiene standards and provide personalized attention in a comfortable healing space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose ANC */}
      <section className="py-24 bg-[#FAFAFA] border-y border-platinum-slate/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mb-6 leading-tight">Why Choose ANC Ayurveda?</h2>
              <p className="text-obsidian-charcoal/70 font-sans font-light leading-relaxed mb-8">
                Trust in a legacy of authentic care, where tradition is preserved and patient wellness is paramount.
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

      {/* Experience Authentic Ayurveda */}
      <section className="py-24 bg-obsidian-charcoal text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl font-serif mb-6">Experience Authentic Ayurveda at ANC</h2>
          <p className="text-white/60 font-sans font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            Discover our thoughtfully designed treatment spaces where traditional Kerala Ayurveda is practiced with comfort, precision, and compassionate care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Image + Caption */}
            <div className="flex flex-col text-left">
              <div className="aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden group mb-6 shadow-xl">
                <img
                  src="/Ayurveda/therapy_room.png"
                  alt="Premium Therapy Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Premium Therapy Room</h3>
              <p className="text-white/60 font-sans font-light text-sm leading-relaxed">
                A serene and hygienic treatment room designed for authentic Kerala Ayurvedic therapies in a peaceful healing environment.
              </p>
            </div>

            {/* Right Image + Caption */}
            <div className="flex flex-col text-left">
              <div className="aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden group mb-6 shadow-xl">
                <img
                  src="/Ayurveda/therapy_session.png"
                  alt="Authentic Healing in Practice"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Authentic Healing in Practice</h3>
              <p className="text-white/60 font-sans font-light text-sm leading-relaxed">
                Traditional Ayurvedic therapies performed with expert care, combining ancient wisdom with a patient-centered approach to holistic wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Consulting Specialists */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <span className="text-sage-green uppercase tracking-widest text-xs font-semibold block mb-4">Our Healers</span>
            <h2 className="text-4xl font-serif text-obsidian-charcoal">Ayurvedic Physicians</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc) => (
              <DoctorProfile key={doc.name} {...doc} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-32 bg-obsidian-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Begin Your Healing Journey</h2>
          <p className="text-lg text-white/70 font-sans font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the profound benefits of authentic Kerala Ayurveda. Schedule your consultation with our expert physicians today.
          </p>
          <Link 
            to="/booking"
            className="inline-block bg-sage-green text-white font-sans text-sm font-semibold tracking-widest uppercase px-10 py-5 rounded-full hover:bg-white hover:text-obsidian-charcoal transition-colors duration-300"
          >
            Book an Ayurvedic Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Ayurveda;
