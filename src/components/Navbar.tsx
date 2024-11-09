import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import logoImage from '../assets/images/Alpis_India_logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
          <span className="text-2xl font-bold mr-6">Alpis India</span>
          <svg
              xmlns=""
              viewBox="0 0 100 100"
              className="h-16"
            >
              <rect x="20" y="20" width="60" height="60" fill="#4338ca" />
              <image href={logoImage} x="20" y="20" width="60" height="60" />
            </svg>
          
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-indigo-200 transition">Services</a>
            <a href="#why-us" className="hover:text-indigo-200 transition">Why Us</a>
            <a href="#testimonials" className="hover:text-indigo-200 transition">Success Stories</a>
            <a href="#about" className="hover:text-indigo-200 transition">About Us</a>
            <a href="#contact" className="hover:text-indigo-200 transition">Contact</a>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition">
              Hire Talent
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-700">
            <a href="#services" className="block px-3 py-2 hover:bg-indigo-600 rounded-md">Services</a>
            <a href="#why-us" className="block px-3 py-2 hover:bg-indigo-600 rounded-md">Why Us</a>
            <a href="#testimonials" className="block px-3 py-2 hover:bg-indigo-600 rounded-md">Success Stories</a>
            <a href="#about" className="block px-3 py-2 hover:bg-indigo-600 rounded-md">About Us</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-indigo-600 rounded-md">Contact</a>
            <button className="w-full text-left px-3 py-2 text-indigo-600 bg-white rounded-md font-medium">
              Hire Talent
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;