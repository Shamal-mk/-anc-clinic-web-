const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya R.',
      dept: 'Skin & Cosmetology',
      text: 'The aesthetic treatment I received at ANC Clinic was absolutely transformative. Dr. Aparna\'s expertise and the clinic\'s premium environment made me feel so confident and cared for.',
      rating: 5,
    },
    {
      name: 'Rajan M.',
      dept: 'Samsara Ayurveda',
      text: 'After years of joint pain, the Panchakarma treatment at Samsara Ayurveda gave me relief I never thought possible. Truly authentic Ayurveda at its finest.',
      rating: 5,
    },
    {
      name: 'Ananya K.',
      dept: 'CVN Kalari',
      text: 'Sivakumar Gurukkal\'s Marma therapy healed my sports injury in weeks. The knowledge and precision he brings is something you simply cannot find anywhere else.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-clinical-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-champagne-gold font-sans text-sm uppercase tracking-widest mb-3">What Our Patients Say</p>
          <h2 className="text-4xl font-serif text-slate-gray mb-4">Stories of Healing</h2>
          <div className="h-1 w-24 bg-champagne-gold mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-champagne-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-500 font-sans leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="border-t border-gray-100 pt-5">
                <p className="font-serif text-slate-gray font-medium">{t.name}</p>
                <p className="text-xs text-sage-green font-sans mt-1">{t.dept}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
