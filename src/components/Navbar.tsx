import { Menu, X } from 'lucide-react';
import logoimage from "../assets/images/Alpis_India_logo.png";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      // Only show the navbar if the scroll position is at the top
      setIsVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', controlNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-32">
          <div className="flex items-center">
            <span className="text-3xl font-bold mr-8">Alpis India</span>
            <div className="h-24 w-24">
              <img
                src={logoimage}
                alt="Alpis India Logo"
                className="rounded-md h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-lg hover:text-indigo-200 transition">Services</a>
            <a href="#why-us" className="text-lg hover:text-indigo-200 transition">Why Us</a>
            <a href="#testimonials" className="text-lg hover:text-indigo-200 transition">Success Stories</a>
            <a href="#about" className="text-lg hover:text-indigo-200 transition">About Us</a>
            <a href="#contact" className="text-lg hover:text-indigo-200 transition">Contact</a>
            <button className="bg-white text-indigo-600 px-6 py-3 text-lg rounded-md hover:bg-indigo-50 transition">
              Hire Talent
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-indigo-700">
            <a href="#services" className="block px-4 py-3 text-lg hover:bg-indigo-600 rounded-md">Services</a>
            <a href="#why-us" className="block px-4 py-3 text-lg hover:bg-indigo-600 rounded-md">Why Us</a>
            <a href="#testimonials" className="block px-4 py-3 text-lg hover:bg-indigo-600 rounded-md">Success Stories</a>
            <a href="#about" className="block px-4 py-3 text-lg hover:bg-indigo-600 rounded-md">About Us</a>
            <a href="#contact" className="block px-4 py-3 text-lg hover:bg-indigo-600 rounded-md">Contact</a>
            <button className="w-full text-left px-4 py-3 text-lg text-indigo-600 bg-white rounded-md font-medium">
              Hire Talent
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
