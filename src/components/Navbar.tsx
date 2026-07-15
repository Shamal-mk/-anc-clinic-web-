import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cosmetology', path: '/departments/cosmetology' },
    { name: 'Ayurveda', path: '/departments/ayurveda' },
    { name: 'Kalari', path: '/departments/kalari' },
  ];

  return (
    <nav className="fixed w-full bg-white/70 backdrop-blur-xl z-50 border-b border-platinum-slate/40 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <img className="h-12 w-auto object-contain" src="/logos/ANC Logo.jpeg" alt="ANC Clinic Logo" />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-2 text-xs uppercase tracking-widest font-sans transition-colors duration-300 ${
                    isActive ? 'text-obsidian-charcoal font-semibold' : 'text-obsidian-charcoal/60 hover:text-obsidian-charcoal'
                  } group`}
                >
                  {link.name}
                  {/* Luxury underline animation */}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-champagne-gold transform transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Right: Premium Outline Button */}
          <div className="flex items-center">
            <Link
              to="/booking"
              className="border border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-sans transition-all duration-300 hover:shadow-lg"
            >
              Request Private Consultation
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
