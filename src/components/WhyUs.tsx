import React from 'react';
import { Rocket, Shield, Clock, Award, Target, HandshakeIcon } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Fast Matchmaking',
      description: 'Get matched with the right talent within 48 hours, significantly reducing your hiring timeline.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Guaranteed Satisfaction',
      description: '100% satisfaction guarantee with our risk-free trial period for all placements.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Precision Matching',
      description: 'Our AI-powered matching system ensures perfect alignment with your technical requirements.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Time-Saving Process',
      description: 'Skip lengthy interviews - our pre-vetted talents are ready to start immediately.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Elite Talent Pool',
      description: 'Access to top 1% of tech talent, thoroughly assessed and verified.'
    },
    {
      icon: <HandshakeIcon className="h-8 w-8" />,
      title: 'Dedicated Support',
      description: 'Personal account manager available 24/7 to ensure smooth collaboration.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Alpis India?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional results through our innovative approach to tech talent acquisition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;