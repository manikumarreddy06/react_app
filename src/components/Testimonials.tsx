import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechVision Inc",
      content: "Alpis India helped us find exceptional engineering talent that transformed our development capabilities. Their screening process is thorough and spot-on.",
    },
    {
      name: "Michael Rodriguez",
      role: "Engineering Manager, CloudScale",
      content: "The quality of candidates and the speed of hiring through Alpis India exceeded our expectations. They truly understand tech talent.",
    },
    {
      name: "Priya Sharma",
      role: "Head of Engineering, DataFlow Systems",
      content: "Working with Alpis India streamlined our hiring process significantly. They found us developers who not only had the skills but also fit our culture perfectly.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Success Stories</h2>
          <p className="mt-3 text-lg text-gray-600">
            See how we've helped companies build exceptional tech teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="text-xl font-semibold text-center mb-2">{testimonial.name}</div>
                <div className="text-sm text-gray-500 text-center">{testimonial.role}</div>
              </div>

              <p className="text-gray-700 text-center italic mb-6">{testimonial.content}</p>

              {/* Full Stars (Filled) */}
              <div className="flex justify-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;