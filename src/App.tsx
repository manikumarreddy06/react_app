

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <About />
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Alpis India</h3>
              <p className="text-gray-400">
              Here One Ultimate Meets Another.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#why-us" className="text-gray-400 hover:text-white">Why Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Success Stories</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>hr@alpisindia.com</li>
                <li>+(91)8299640321</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Alpis India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
