import React from 'react';
import { Users, Code, Briefcase, HeartHandshake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Talent Matching',
      description: 'Connect with pre-vetted tech professionals who match your specific requirements and company culture.'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Technical Assessment',
      description: 'Rigorous evaluation process ensuring only top-tier technical talent makes it to your team.'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Project Staffing',
      description: 'Flexible staffing solutions for short-term projects or long-term engagements.'
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: 'Client Success',
      description: 'Dedicated support throughout the entire hiring and onboarding process.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end solutions for companies looking to build exceptional tech teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;