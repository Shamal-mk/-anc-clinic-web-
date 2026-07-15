import { useState } from 'react';

const departments = [
  {
    id: 'cosmetology',
    name: 'Skin & Cosmetology',
    icon: '✨',
    doctors: [
      { id: 'aparna', name: 'Dr. Aparna Krishna', specialty: 'Aesthetic Physician' },
      { id: 'aromal', name: 'Dr. Aromal Chekavar', specialty: 'Endocrine Surgeon' },
    ],
  },
  {
    id: 'ayurveda',
    name: 'Samsara Ayurveda',
    icon: '🌿',
    doctors: [
      { id: 'sreelatha', name: 'Dr. Sreelatha', specialty: 'Senior Ayurveda Consultant' },
      { id: 'heera', name: 'Dr. Heera Ratnam', specialty: 'Senior Ayurveda Consultant' },
      { id: 'krishna', name: 'Dr. Krishna Sreejith', specialty: 'Consulting Physician' },
      { id: 'rohini', name: 'Dr. Rohini R.', specialty: 'Ayurvedic Physician' },
    ],
  },
  {
    id: 'kalari',
    name: 'CVN Kalari',
    icon: '⚔️',
    doctors: [
      { id: 'sivakumar', name: 'Sivakumar Gurukkal', specialty: 'Head Gurukkal & Marma Specialist' },
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

  const dept = departments.find((d) => d.id === selectedDept);
  const doctor = dept?.doctors.find((d) => d.id === selectedDoctor);

  const today = new Date().toISOString().split('T')[0];

  const progressSteps = ['Department', 'Doctor', 'Date & Time', 'Confirm'];

  return (
    <div className="pt-24 min-h-screen bg-clinical-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-slate-gray mb-3">Book an Appointment</h1>
          <p className="text-gray-500 font-sans">Follow the steps below to schedule your visit.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0" />
          <div
            className="absolute top-4 left-0 h-0.5 bg-champagne-gold z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />
          {progressSteps.map((label, idx) => (
            <div key={label} className="flex flex-col items-center z-10">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  step > idx + 1
                    ? 'bg-champagne-gold text-white'
                    : step === idx + 1
                    ? 'bg-champagne-gold text-white ring-4 ring-champagne-gold/20'
                    : 'bg-white border-2 border-gray-200 text-gray-400'
                }`}
              >
                {step > idx + 1 ? '✓' : idx + 1}
              </div>
              <span className="text-xs mt-2 text-gray-500 hidden sm:block">{label}</span>
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          {/* Step 1: Department */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-serif text-slate-gray mb-2">Select a Department</h2>
              <p className="text-gray-400 font-sans text-sm mb-8">Choose the unit that best fits your needs.</p>
              <div className="grid gap-4">
                {departments.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => { setSelectedDept(d.id); setSelectedDoctor(''); }}
                    className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                      selectedDept === d.id
                        ? 'border-champagne-gold bg-champagne-gold/5'
                        : 'border-gray-100 hover:border-sage-green/40'
                    }`}
                  >
                    <span className="text-3xl">{d.icon}</span>
                    <span className="text-lg font-serif text-slate-gray">{d.name}</span>
                    {selectedDept === d.id && <span className="ml-auto text-champagne-gold">✓</span>}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  disabled={!selectedDept}
                  onClick={() => setStep(2)}
                  className="px-8 py-3 bg-champagne-gold text-white rounded-full font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-yellow-600 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Doctor */}
          {step === 2 && dept && (
            <div>
              <h2 className="text-2xl font-serif text-slate-gray mb-2">Select a Doctor</h2>
              <p className="text-gray-400 font-sans text-sm mb-8">Doctors available in <strong>{dept.name}</strong>.</p>
              <div className="grid gap-4">
                {dept.doctors.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDoctor(d.id)}
                    className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                      selectedDoctor === d.id
                        ? 'border-champagne-gold bg-champagne-gold/5'
                        : 'border-gray-100 hover:border-sage-green/40'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-sage-green/20 flex items-center justify-center text-sage-green font-serif font-bold">
                      {d.name.charAt(d.name.indexOf(' ') + 1)}
                    </div>
                    <div>
                      <p className="font-serif text-slate-gray">{d.name}</p>
                      <p className="text-xs text-gray-400 font-sans">{d.specialty}</p>
                    </div>
                    {selectedDoctor === d.id && <span className="ml-auto text-champagne-gold">✓</span>}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <button onClick={() => setStep(1)} className="px-6 py-3 border border-gray-200 rounded-full text-gray-500 hover:border-gray-400 transition-colors">
                  ← Back
                </button>
                <button
                  disabled={!selectedDoctor}
                  onClick={() => setStep(3)}
                  className="px-8 py-3 bg-champagne-gold text-white rounded-full font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-yellow-600 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-serif text-slate-gray mb-2">Pick a Date & Time</h2>
              <p className="text-gray-400 font-sans text-sm mb-8">Choose your preferred appointment slot.</p>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">Select Date</label>
                <input
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-sans text-slate-gray focus:outline-none focus:ring-2 focus:ring-champagne-gold/40"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-3">Select Time</label>
                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2 px-1 rounded-xl text-sm font-sans transition-all ${
                        selectedTime === t
                          ? 'bg-champagne-gold text-white'
                          : 'bg-clinical-white border border-gray-100 text-gray-600 hover:border-champagne-gold'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-sans text-slate-gray focus:outline-none focus:ring-2 focus:ring-champagne-gold/40"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-sans text-slate-gray focus:outline-none focus:ring-2 focus:ring-champagne-gold/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-sans text-slate-gray focus:outline-none focus:ring-2 focus:ring-champagne-gold/40"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(2)} className="px-6 py-3 border border-gray-200 rounded-full text-gray-500 hover:border-gray-400 transition-colors">
                  ← Back
                </button>
                <button
                  disabled={!selectedDate || !selectedTime || !formData.name || !formData.phone}
                  onClick={() => setStep(4)}
                  className="px-8 py-3 bg-champagne-gold text-white rounded-full font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-yellow-600 transition-colors"
                >
                  Review →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-sage-green/20 flex items-center justify-center mx-auto mb-4 text-3xl">📋</div>
                <h2 className="text-2xl font-serif text-slate-gray mb-2">Review Your Appointment</h2>
                <p className="text-gray-400 font-sans text-sm">Please confirm the details below.</p>
              </div>
              <div className="bg-clinical-white rounded-2xl p-6 border border-gray-100 space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-sans text-sm">Department</span>
                  <span className="font-serif text-slate-gray">{dept?.name}</span>
                </div>
                <div className="border-t border-gray-100" />
                <div className="flex justify-between">
                  <span className="text-gray-400 font-sans text-sm">Doctor</span>
                  <span className="font-serif text-slate-gray">{doctor?.name}</span>
                </div>
                <div className="border-t border-gray-100" />
                <div className="flex justify-between">
                  <span className="text-gray-400 font-sans text-sm">Date</span>
                  <span className="font-serif text-slate-gray">{new Date(selectedDate).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="border-t border-gray-100" />
                <div className="flex justify-between">
                  <span className="text-gray-400 font-sans text-sm">Time</span>
                  <span className="font-serif text-slate-gray">{selectedTime}</span>
                </div>
                <div className="border-t border-gray-100" />
                <div className="flex justify-between">
                  <span className="text-gray-400 font-sans text-sm">Patient Name</span>
                  <span className="font-serif text-slate-gray">{formData.name}</span>
                </div>
                <div className="border-t border-gray-100" />
                <div className="flex justify-between">
                  <span className="text-gray-400 font-sans text-sm">Phone</span>
                  <span className="font-serif text-slate-gray">{formData.phone}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(3)} className="px-6 py-3 border border-gray-200 rounded-full text-gray-500 hover:border-gray-400 transition-colors">
                  ← Edit
                </button>
                <button
                  onClick={() => {
                    alert(`✅ Appointment Confirmed!\n\nThank you, ${formData.name}. We will contact you at ${formData.phone} to confirm your slot with ${doctor?.name} on ${selectedDate} at ${selectedTime}.`);
                    setStep(1);
                    setSelectedDept(''); setSelectedDoctor(''); setSelectedDate(''); setSelectedTime('');
                    setFormData({ name: '', phone: '', email: '' });
                  }}
                  className="px-8 py-3 bg-champagne-gold text-white rounded-full font-medium hover:bg-yellow-600 transition-colors shadow-lg"
                >
                  ✓ Confirm Appointment
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
