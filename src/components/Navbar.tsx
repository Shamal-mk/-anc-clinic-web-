import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skin & Cosmetology', path: '/departments/cosmetology' },
    { name: 'Ayurveda', path: '/departments/ayurveda' },
    { name: 'Kalari', path: '/departments/kalari' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full bg-white/70 backdrop-blur-xl z-50 border-b border-platinum-slate/40 transition-luxury will-change-transform-opacity">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Left: Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="hover:opacity-90 transition-opacity min-w-[48px] min-h-[48px] flex items-center">
                <img className="h-10 w-auto object-contain" src="/logos/ANC Logo.jpeg" alt="ANC Clinic Logo" />
              </Link>
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden md:flex space-x-10 items-center">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative py-2 text-xs uppercase tracking-widest font-sans transition-colors duration-300 ${
                      isActive ? 'text-obsidian-charcoal font-semibold' : 'text-obsidian-charcoal/60 hover:text-obsidian-charcoal'
                    } group min-h-[48px] flex items-center`}
                  >
                    {link.name}
                    <span className={`absolute bottom-2 left-0 w-full h-[1px] bg-champagne-gold transform transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Right: Premium Outline Button (Desktop) & Hamburger Menu (Mobile) */}
            <div className="flex items-center gap-4">
              <Link
                to="/booking"
                className="hidden md:inline-flex border border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-sans transition-all duration-300 hover:shadow-lg min-h-[48px] items-center"
              >
                Request Private Consultation
              </Link>

              {/* Hamburger Button (Touch Target: 48x48px) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border border-platinum-slate text-obsidian-charcoal hover:border-obsidian-charcoal focus:outline-none transition-luxury min-w-[48px] min-h-[48px]"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-4 relative flex flex-col justify-between">
                  <span className={`w-full h-[1.5px] bg-current rounded transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <span className={`w-full h-[1.5px] bg-current rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-[1.5px] bg-current rounded transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </div>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Glassmorphic Burger Menu Drawer (Animates from right) */}
      <div 
        className={`fixed inset-0 z-40 bg-obsidian-charcoal/20 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div 
        className={`fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] z-50 bg-white/90 backdrop-blur-2xl shadow-2xl border-l border-platinum-slate/40 flex flex-col justify-between p-8 transform transition-transform duration-500 ease-luxury md:hidden will-change-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 pt-16">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                className={`text-lg font-serif tracking-wide transition-colors ${
                  isActive ? 'text-champagne-gold font-semibold' : 'text-obsidian-charcoal/70 hover:text-obsidian-charcoal'
                } min-h-[48px] flex items-center`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="pb-8">
          <Link
            to="/booking"
            onClick={handleLinkClick}
            className="w-full text-center border border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-white py-3.5 rounded-full text-xs uppercase tracking-widest font-sans transition-all duration-300 hover:shadow-lg min-h-[48px] flex items-center justify-center"
          >
            Request Private Consultation
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
