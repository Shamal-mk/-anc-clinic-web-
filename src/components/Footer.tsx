import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <img src="/logos/ANC Logo.jpeg" alt="ANC Clinic" className="h-16 w-auto rounded-xl mb-4 bg-white p-1" />
            <p className="text-gray-400 text-sm font-sans leading-relaxed">
              ANC (Anoop Newlifecare) Clinic — where premium healthcare meets compassionate healing.
            </p>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-serif text-champagne-gold mb-5 text-lg">Departments</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-sans">
              <li><Link to="/departments/cosmetology" className="hover:text-white transition-colors">Skin & Cosmetology</Link></li>
              <li><Link to="/departments/ayurveda" className="hover:text-white transition-colors">Samsara Ayurveda</Link></li>
              <li><Link to="/departments/kalari" className="hover:text-white transition-colors">CVN Kalari</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-champagne-gold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-sans">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/booking" className="hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-champagne-gold mb-5 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-sans">
              <li className="flex gap-2">
                <span>📍</span>
                <span className="flex flex-col">
                  <span>ANC Wellness</span>
                  <span>Town Limit</span>
                  <span>Kadappakada</span>
                  <span>Kollam – 691004</span>
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <span>📞</span>
                  <span>+91 90741 46088</span>
                </div>
                <div className="pl-6 text-[11px] text-gray-400">
                  88910 87444 / +91 87145 79444
                </div>
              </li>
              <li className="flex gap-2"><span>✉️</span><span>dr@anlc.in</span></li>
              <li className="flex gap-2"><span>🕐</span><span>9:30 AM – 6:00 PM (Daily, including Sundays)</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-sans">
            © {new Date().getFullYear()} ANC (Anoop Newlifecare) Clinic. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-sans">Crafted with care for premium healthcare.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
