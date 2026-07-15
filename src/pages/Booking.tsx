import { useState } from 'react';

const departments = [
  {
    id: 'cosmetology',
    name: 'Skin & Cosmetology',
    icon: '✨',
    desc: 'Medical aesthetics, clinical dermatology, and reconstructive care.',
    colorClass: 'border-champagne-gold/20 hover:border-champagne-gold bg-champagne-gold/5',
    doctors: [
      { id: 'aparna', name: 'Dr. Aparna Krishna', specialty: 'Aesthetic Physician', avatar: '/doctors/Dr. Aparna Krishna.jpeg' },
      { id: 'aromal', name: 'Dr. Aromal Chekavar', specialty: 'Endocrine Surgeon', avatar: '/doctors/Dr. Aromal Chekavar.jpeg' },
      { id: 'akhila', name: 'Dr. Akhila', specialty: 'Plastic & Reconstructive Surgeon', avatar: '/doctors/Dr. Aparna Krishna.jpeg' },
      { id: 'binu', name: 'Dr. Binu Sethu', specialty: 'Consultant Dermatologist', avatar: '/doctors/Dr. Aromal Chekavar.jpeg' },
    ],
  },
  {
    id: 'ayurveda',
    name: 'Samsara Ayurveda',
    icon: '🌿',
    desc: 'Authentic Panchakarma, Vedic diagnostics, and therapeutic remedies.',
    colorClass: 'border-sage-green/20 hover:border-sage-green bg-sage-green/5',
    doctors: [
      { id: 'sreelatha', name: 'Dr. Sreelatha', specialty: 'Senior Ayurveda Consultant', avatar: '/doctors/Dr. Sreetatha.jpeg' },
      { id: 'heera', name: 'Dr. Heera Ratnam', specialty: 'Senior Ayurveda Consultant', avatar: '/doctors/Dr. Heera Ratnam.jpeg' },
      { id: 'krishna', name: 'Dr. Krishna Sreejith', specialty: 'Consulting Physician', avatar: '/doctors/Dr Krishna Sreejith.jpeg' },
      { id: 'rohini', name: 'Dr. Rohini R.', specialty: 'Ayurvedic Physician', avatar: '/doctors/Dr. Rohini.jpeg' },
    ],
  },
  {
    id: 'kalari',
    name: 'CVN Kalari',
    icon: '⚔️',
    desc: 'Traditional Marma point therapy, joint mobilization, and postural care.',
    colorClass: 'border-royal-navy/20 hover:border-royal-navy bg-royal-navy/5',
    doctors: [
      { id: 'sivakumar', name: 'Sivakumar Gurukkal', specialty: 'Head Gurukkal & Marma Specialist', avatar: '/doctors/Sivakumar Gurukkal.jpeg' },
    ],
  },
];

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

type Step = 1 | 2 | 3 | 4;

const Booking = () => {
  const [step, setStep] = useState<Step>(1);
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [transitioning, setTransitioning] = useState(false);

  const dept = departments.find((d) => d.id === selectedDept);
  const doctor = dept?.doctors.find((d) => d.id === selectedDoctor);

  const today = new Date().toISOString().split('T')[0];
  const progressSteps = ['Unit Selection', 'Consultant', 'Schedule', 'Confirm'];

  const handleStepChange = (nextStep: Step) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(nextStep);
      setTransitioning(false);
    }, 200);
  };

  return (
    <div className="pt-24 min-h-screen bg-clinical-white overscroll-y-contain">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-champagne-gold uppercase tracking-widest text-[10px] font-semibold">Concierge Service</span>
          <h1 className="text-4xl md:text-5xl font-serif text-obsidian-charcoal mt-1 mb-3">Private Booking Portal</h1>
          <div className="h-[1px] w-16 bg-champagne-gold mx-auto" />
        </div>

        {/* Progress Matrix */}
        <div className="flex items-center justify-between mb-16 relative">
          <div className="absolute top-[18px] left-0 right-0 h-[1px] bg-platinum-slate z-0" />
          <div
            className="absolute top-[18px] left-0 h-[1px] bg-champagne-gold z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />
          {progressSteps.map((label, idx) => (
            <div key={label} className="flex flex-col items-center z-10">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-sans font-medium transition-all duration-500 ${
                  step > idx + 1
                    ? 'bg-champagne-gold text-white'
                    : step === idx + 1
                    ? 'bg-champagne-gold text-white ring-4 ring-champagne-gold/15'
                    : 'bg-white border border-platinum-slate text-obsidian-charcoal/40'
                } min-w-[36px] min-h-[36px]`}
              >
                {step > idx + 1 ? '✓' : idx + 1}
              </div>
              <span className={`text-[10px] uppercase tracking-wider font-semibold mt-3 ${
                step === idx + 1 ? 'text-champagne-gold' : 'text-obsidian-charcoal/40'
              } hidden sm:block`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Wizard Container with fade micro-animation */}
        <div className={`bg-white rounded-[32px] border border-platinum-slate/30 shadow-xl p-8 md:p-12 transition-luxury will-change-transform-opacity ${
          transitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
        }`}>
          
          {/* Phase 1: Unit Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-serif text-obsidian-charcoal mb-2">Select Care Unit</h2>
              <p className="text-obsidian-charcoal/50 font-sans text-xs mb-8">Please choose the clinical department matching your therapy requirements.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {departments.map((d) => {
                  const isSelected = selectedDept === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => { setSelectedDept(d.id); setSelectedDoctor(''); }}
                      className={`flex flex-col justify-between p-6 rounded-[24px] border-2 text-left transition-luxury will-change-transform-opacity h-64 min-h-[48px] ${
                        isSelected
                          ? d.colorClass
                          : 'border-platinum-slate hover:border-obsidian-charcoal/40 bg-white'
                      }`}
                    >
                      <div>
                        <span className="text-4xl block mb-6">{d.icon}</span>
                        <h3 className="text-xl font-serif text-obsidian-charcoal mb-2">{d.name}</h3>
                        <p className="text-obsidian-charcoal/60 text-xs font-sans font-light leading-relaxed">{d.desc}</p>
                      </div>
                      {isSelected && <span className="text-champagne-gold font-sans text-xs uppercase tracking-widest font-bold self-end">Selected</span>}
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-12 flex justify-end">
                <button
                  disabled={!selectedDept}
                  onClick={() => handleStepChange(2)}
                  className="px-8 py-3.5 bg-champagne-gold text-white text-xs uppercase tracking-widest font-sans rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:bg-champagne-gold/90 transition-luxury will-change-transform-opacity shadow-md min-h-[48px] min-w-[120px] flex items-center justify-center"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Phase 2: Consultant Selection */}
          {step === 2 && dept && (
            <div>
              <h2 className="text-3xl font-serif text-obsidian-charcoal mb-2">Select Consultant</h2>
              <p className="text-obsidian-charcoal/50 font-sans text-xs mb-8">Choose your consulting specialist for the <strong>{dept.name}</strong> unit.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dept.doctors.map((d) => {
                  const isSelected = selectedDoctor === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDoctor(d.id)}
                      className={`flex items-center gap-6 p-6 rounded-[20px] border-2 text-left transition-luxury will-change-transform-opacity min-h-[48px] ${
                        isSelected
                          ? 'border-champagne-gold bg-champagne-gold/5'
                          : 'border-platinum-slate hover:border-obsidian-charcoal/40 bg-white'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-platinum-slate/30 flex-shrink-0 bg-clinical-white aspect-square">
                        <img src={d.avatar} alt={d.name} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-serif font-bold text-obsidian-charcoal text-lg">{d.name}</p>
                        <p className="text-[10px] text-obsidian-charcoal/50 uppercase tracking-widest font-semibold mt-0.5">{d.specialty}</p>
                      </div>
                      {isSelected && <span className="ml-auto text-champagne-gold text-lg">✓</span>}
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-12 flex justify-between">
                <button 
                  onClick={() => handleStepChange(1)} 
                  className="px-6 py-3 border border-platinum-slate text-obsidian-charcoal/60 rounded-full text-xs uppercase tracking-widest font-sans hover:border-obsidian-charcoal transition-luxury min-h-[48px] flex items-center justify-center"
                >
                  Back
                </button>
                <button
                  disabled={!selectedDoctor}
                  onClick={() => handleStepChange(3)}
                  className="px-8 py-3.5 bg-champagne-gold text-white text-xs uppercase tracking-widest font-sans rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:bg-champagne-gold/90 transition-luxury will-change-transform-opacity shadow-md min-h-[48px] min-w-[120px] flex items-center justify-center"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Phase 3: Schedule Calendar & Slots */}
          {step === 3 && (
            <div>
              <h2 className="text-3xl font-serif text-obsidian-charcoal mb-2">Schedule consultation</h2>
              <p className="text-obsidian-charcoal/50 font-sans text-xs mb-8">Select your preferred date and session time slot.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-obsidian-charcoal/50 font-semibold mb-3">Select Date</label>
                  <input
                    type="date"
                    min={today}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full border border-platinum-slate rounded-[16px] px-4 py-3.5 font-sans text-sm text-obsidian-charcoal focus:outline-none focus:ring-2 focus:ring-champagne-gold/20 min-h-[48px]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-obsidian-charcoal/50 font-semibold mb-3">Select Time Slot</label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`min-h-[48px] rounded-[12px] text-xs font-sans transition-luxury will-change-transform-opacity flex items-center justify-center ${
                          selectedTime === t
                            ? 'bg-champagne-gold text-white shadow-md'
                            : 'bg-clinical-white border border-platinum-slate/30 text-obsidian-charcoal/70 hover:border-champagne-gold'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal details fields */}
              <div className="border-t border-platinum-slate/40 pt-8 mb-8">
                <h3 className="text-lg font-serif mb-4 text-obsidian-charcoal">Patient Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-obsidian-charcoal/50 font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-platinum-slate rounded-[12px] px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-champagne-gold/20 min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-obsidian-charcoal/50 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-platinum-slate rounded-[12px] px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-champagne-gold/20 min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-obsidian-charcoal/50 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-platinum-slate rounded-[12px] px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-champagne-gold/20 min-h-[48px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button 
                  onClick={() => handleStepChange(2)} 
                  className="px-6 py-3 border border-platinum-slate text-obsidian-charcoal/60 rounded-full text-xs uppercase tracking-widest font-sans hover:border-obsidian-charcoal transition-luxury min-h-[48px] flex items-center justify-center"
                >
                  Back
                </button>
                <button
                  disabled={!selectedDate || !selectedTime || !formData.name || !formData.phone}
                  onClick={() => handleStepChange(4)}
                  className="px-8 py-3.5 bg-champagne-gold text-white text-xs uppercase tracking-widest font-sans rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:bg-champagne-gold/90 transition-luxury will-change-transform-opacity shadow-md min-h-[48px] min-w-[120px] flex items-center justify-center"
                >
                  Review Request →
                </button>
              </div>
            </div>
          )}

          {/* Phase 4: Confirmation screen */}
          {step === 4 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-champagne-gold/10 flex items-center justify-center mx-auto mb-4 text-3xl">📋</div>
                <h2 className="text-3xl font-serif text-obsidian-charcoal mb-2">Review Consultation</h2>
                <p className="text-obsidian-charcoal/50 font-sans text-xs">Verify your booking specifications below.</p>
              </div>
              
              <div className="bg-clinical-white rounded-[24px] p-8 border border-platinum-slate/30 space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-obsidian-charcoal/50 font-sans text-xs uppercase tracking-widest">Care Unit</span>
                  <span className="font-serif font-bold text-obsidian-charcoal text-sm">{dept?.name}</span>
                </div>
                <div className="border-t border-platinum-slate/30" />
                <div className="flex justify-between">
                  <span className="text-obsidian-charcoal/50 font-sans text-xs uppercase tracking-widest">Medical Consultant</span>
                  <span className="font-serif font-bold text-obsidian-charcoal text-sm">{doctor?.name}</span>
                </div>
                <div className="border-t border-platinum-slate/30" />
                <div className="flex justify-between">
                  <span className="text-obsidian-charcoal/50 font-sans text-xs uppercase tracking-widest">Scheduled Date</span>
                  <span className="font-serif font-bold text-obsidian-charcoal text-sm">
                    {new Date(selectedDate).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <div className="border-t border-platinum-slate/30" />
                <div className="flex justify-between">
                  <span className="text-obsidian-charcoal/50 font-sans text-xs uppercase tracking-widest">Scheduled Time</span>
                  <span className="font-serif font-bold text-obsidian-charcoal text-sm">{selectedTime}</span>
                </div>
                <div className="border-t border-platinum-slate/30" />
                <div className="flex justify-between">
                  <span className="text-obsidian-charcoal/50 font-sans text-xs uppercase tracking-widest">Patient Name</span>
                  <span className="font-serif font-bold text-obsidian-charcoal text-sm">{formData.name}</span>
                </div>
                <div className="border-t border-platinum-slate/30" />
                <div className="flex justify-between">
                  <span className="text-obsidian-charcoal/50 font-sans text-xs uppercase tracking-widest">Contact Phone</span>
                  <span className="font-serif font-bold text-obsidian-charcoal text-sm">{formData.phone}</span>
                </div>
              </div>

              <div className="flex justify-between">
                <button 
                  onClick={() => handleStepChange(3)} 
                  className="px-6 py-3 border border-platinum-slate text-obsidian-charcoal/60 rounded-full text-xs uppercase tracking-widest font-sans hover:border-obsidian-charcoal transition-luxury min-h-[48px] flex items-center justify-center"
                >
                  Edit details
                </button>
                <button
                  onClick={() => {
                    alert(`✅ Private Consultation Scheduled!\n\nThank you, ${formData.name}. Our clinic coordinator will contact you at ${formData.phone} to confirm your session details.`);
                    handleStepChange(1);
                    setSelectedDept(''); setSelectedDoctor(''); setSelectedDate(''); setSelectedTime('');
                    setFormData({ name: '', phone: '', email: '' });
                  }}
                  className="px-8 py-3.5 bg-champagne-gold text-white text-xs uppercase tracking-widest font-sans rounded-full hover:bg-champagne-gold/90 transition-luxury shadow-lg min-h-[48px] flex items-center justify-center"
                >
                  Confirm Reservation
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Booking;
