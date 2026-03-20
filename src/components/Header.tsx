import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const logoUrl =
    'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1773931112/logo.png-removebg-preview_rcjrg3.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={`h-12 w-12 rounded-lg flex items-center justify-center overflow-hidden p-1.5 shadow-sm ${
                isScrolled ? 'bg-gray-100 border border-gray-200' : 'bg-white/95'
              }`}
            >
              {!logoError ? (
                <img
                  src={logoUrl}
                  alt="Valor Infotech logo"
                  className="w-full h-full object-contain scale-110"
                  draggable={false}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-blue-700 font-bold text-xl">V</span>
              )}
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Valor Infotech
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-orange-400'}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-orange-400'}`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-orange-400'}`}
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
