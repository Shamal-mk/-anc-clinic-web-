import React from 'react';
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
    <nav className="fixed w-full bg-clinical-white/90 backdrop-blur-md z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-16 w-auto" src="/logos/ANC Logo.jpeg" alt="ANC Clinic Logo" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-champagne-gold font-medium'
                    : 'text-slate-gray hover:text-sage-green'
                } transition-colors duration-200 text-sm tracking-wide uppercase font-sans`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-champagne-gold hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
