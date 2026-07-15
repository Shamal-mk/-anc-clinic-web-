import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-clinical-white">
      <Hero />

      {/* Stats Strip */}
      <div className="bg-champagne-gold py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { value: '3', label: 'Specialised Units' },
            { value: '9+', label: 'Expert Doctors' },
            { value: '10K+', label: 'Happy Patients' },
            { value: '15+', label: 'Years of Excellence' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-serif font-bold">{s.value}</p>
              <p className="text-sm font-sans mt-1 opacity-90">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Departments */}
      <section id="departments" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-champagne-gold font-sans text-sm uppercase tracking-widest mb-3">Our Specialities</p>
            <h2 className="text-4xl font-serif text-slate-gray mb-4">Three Pillars of Care</h2>
            <div className="h-1 w-24 bg-champagne-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Skin & Cosmetology',
                desc: 'Advanced medical aesthetics, dermatology, and reconstructive procedures in a premium clinical setting.',
                link: '/departments/cosmetology',
                icon: '✨',
                color: 'from-rose-50 to-white',
              },
              {
                title: "Dr. Unnikrishnan's Samsara Ayurveda",
                desc: 'Authentic Panchakarma, Ayurvedic healing, and holistic wellness guided by expert Vaidyas.',
                link: '/departments/ayurveda',
                icon: '🌿',
                color: 'from-sage-green/10 to-white',
              },
              {
                title: 'CVN Kalari',
                desc: 'Traditional Kalari Chikilsa, Marma therapy, and Kalaripayattu training from master Gurukkals.',
                link: '/departments/kalari',
                icon: '⚔️',
                color: 'from-amber-50 to-white',
              },
            ].map((dept) => (
              <Link
                to={dept.link}
                key={dept.title}
                className={`group block bg-gradient-to-b ${dept.color} p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                <div className="text-5xl mb-6">{dept.icon}</div>
                <h3 className="text-2xl font-serif text-slate-gray mb-4 group-hover:text-sage-green transition-colors">{dept.title}</h3>
                <p className="text-gray-500 font-sans leading-relaxed text-sm">{dept.desc}</p>
                <div className="mt-8 flex items-center text-champagne-gold font-medium text-sm">
                  Explore Unit <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-champagne-gold font-sans text-sm uppercase tracking-widest mb-3">Our Promise</p>
            <h2 className="text-4xl font-serif text-slate-gray mb-4">Why Choose ANC Clinic?</h2>
            <div className="h-1 w-24 bg-champagne-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Expert Specialists', desc: 'A curated team of doctors across aesthetics, Ayurveda, and Kalari.' },
              { icon: '🌿', title: 'Holistic Approach', desc: 'We treat the whole person — mind, body, and spirit — not just symptoms.' },
              { icon: '✨', title: 'Premium Experience', desc: 'State-of-the-art facilities designed for comfort, privacy, and results.' },
              { icon: '❤️', title: 'Patient-Centred', desc: 'Every treatment plan is personalised to your unique needs and goals.' },
            ].map((f) => (
              <div key={f.title} className="text-center p-6 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-serif text-slate-gray text-xl mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm font-sans leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Banner */}
      <section className="py-20 bg-slate-gray text-white text-center px-4">
        <h2 className="text-4xl font-serif mb-4">Ready to Begin Your Healing Journey?</h2>
        <p className="text-gray-300 font-sans mb-8 max-w-xl mx-auto">Book a consultation with our specialists today and take the first step toward wellness.</p>
        <Link
          to="/booking"
          className="inline-block px-10 py-4 bg-champagne-gold hover:bg-yellow-600 text-white rounded-full font-medium text-lg shadow-xl transition-all transform hover:-translate-y-1"
        >
          Book an Appointment
        </Link>
      </section>
    </div>
  );
};

export default Home;
