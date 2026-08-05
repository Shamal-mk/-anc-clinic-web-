import DoctorProfile from '../components/DoctorProfile';
import { Image } from '../components/Image';
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
    { label: 'Joint & Spine Care', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 10c.7-.7 1.69-.7 2.4 0a1.7 1.7 0 0 1 0 2.4l-2.2 2.2a1.7 1.7 0 0 1-2.4 0 1.7 1.7 0 0 1 0-2.4l2.2-2.2Z"/><path d="M7 14c-.7.7-1.69.7-2.4 0a1.7 1.7 0 0 1 0-2.4l2.2-2.2a1.7 1.7 0 0 1 2.4 0 1.7 1.7 0 0 1 0 2.4L7 14Z"/><path d="M9 15 15 9"/></svg> },
    { label: 'Neurological Disorders', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2h5"/><path d="M16.3 3.5a1.5 1.5 0 0 1 2.1 2.2l-1.5 1.3"/><path d="M2 13.5a5 5 0 0 1 8-4"/><path d="M2 13.5v1.5a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5v-1.5"/><path d="M14 9.5a5 5 0 0 1 8 4v1.5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-1.5"/></svg> },
    { label: "Women's Health (Sthree Roga)", icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="6"/><path d="M12 16v6"/><path d="M9 19h6"/></svg> },
    { label: 'Lifestyle Disease Management', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
    { label: 'Arthritis Care', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> },
    { label: 'Digestive Health', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg> },
    { label: 'Stress Management', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M19 19h-1.5l-3-6-3.5 1-2 4.5"/><path d="M5 19h1.5l3-6 3.5-1 2-4.5"/></svg> },
    { label: 'Skin Disorders', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c-5 0-9-4-9-9 0-5 4-9 9-9s9 4 9 9-4 9-9 9Z"/><path d="M9 14.5a3 3 0 1 0 6 0"/></svg> },
    { label: 'Sports Rehabilitation', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M8 21v-4l4-4-2-6-4 2"/><path d="M16 11l4 2"/></svg> },
    { label: 'Pediatric Ayurveda', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
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
              <Image
                src="/logos/Dr. Unnikrishnans samsara ayurveda unit  Logo.jpeg"
                alt="Dr. Unnikrishnan's Saṃsāra Ayurveda Unit Logo"
                className="h-28 md:h-36 lg:h-40 w-auto object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-obsidian-charcoal mb-6 leading-tight break-words px-4">
            Dr. Unnikrishnan's Saṃsāra Ayurveda
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
                <Image 
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
              <div key={i} className="group bg-white rounded-2xl border border-platinum-slate/20 hover:shadow-xl hover:border-sage-green/30 transition-all duration-500 flex flex-col h-full overflow-hidden">
                <div className="w-full h-56 sm:h-64 overflow-hidden relative bg-platinum-slate/10">
                  <Image
                    src={`/treatments/${therapy.title}.png`}
                    alt={therapy.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white z-10">
                  <h3 className="text-2xl font-serif text-obsidian-charcoal mb-3">{therapy.title}</h3>
                  <p className="text-obsidian-charcoal/70 font-sans font-light leading-relaxed text-sm flex-grow">{therapy.desc}</p>
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
              <Image 
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
              <Image 
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
                <Image
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
                <Image
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
