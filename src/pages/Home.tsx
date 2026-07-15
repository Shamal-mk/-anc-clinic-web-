import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen bg-clinical-white">
      <Hero />
      <section id="departments" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-slate-gray mb-4">Our Departments</h2>
            <div className="h-1 w-24 bg-champagne-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Skin & Cosmetology',
                desc: 'Medical aesthetics, dermatology, and reconstructive care.',
                link: '/departments/cosmetology',
                icon: '✨'
              },
              {
                title: 'Samsara Ayurveda',
                desc: 'Authentic Ayurvedic healing and holistic wellness.',
                link: '/departments/ayurveda',
                icon: '🌿'
              },
              {
                title: 'CVN Kalari',
                desc: 'Traditional Kalari Chikilsa and marma therapy.',
                link: '/departments/kalari',
                icon: '⚔️'
              }
            ].map((dept) => (
              <a href={dept.link} key={dept.title} className="group block bg-clinical-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-4xl mb-6">{dept.icon}</div>
                <h3 className="text-2xl font-serif text-slate-gray mb-4 group-hover:text-sage-green transition-colors">{dept.title}</h3>
                <p className="text-gray-500 font-sans leading-relaxed">{dept.desc}</p>
                <div className="mt-8 flex items-center text-champagne-gold font-medium">
                  Explore <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
