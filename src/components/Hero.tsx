import { ArrowRight, Users, Briefcase, Trophy } from 'lucide-react';
import logoImage from '../assets/images/Alpis_India_logo.png';

const Hero = () => {
  return (
    // Reduced pt-28 and mt-4 for better alignment
    <div className="relative bg-white text-gray-900 pt-28 mt-4">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: `url(${logoImage})`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Connect with Elite Tech Talent
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Alpis India bridges the gap between innovative companies and exceptional tech professionals
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-md hover:bg-blue-700 transition"
            >
              Hire Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Users className="h-10 w-10 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">500+</h3>
            <p className="text-gray-600">Tech Professionals</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Briefcase className="h-10 w-10 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">200+</h3>
            <p className="text-gray-600">Successful Placements</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Trophy className="h-10 w-10 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">98%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;