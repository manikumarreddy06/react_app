
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechVision Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200",
      content: "Alpis India helped us find exceptional engineering talent that transformed our development capabilities. Their screening process is thorough and spot-on.",
      company_logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=100"
    },
    {
      name: "Michael Rodriguez",
      role: "Engineering Manager, CloudScale",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200",
      content: "The quality of candidates and the speed of hiring through Alpis India exceeded our expectations. They truly understand tech talent.",
      company_logo: "https://images.unsplash.com/photo-1614680376408-12b368e13be6?auto=format&fit=crop&w=100"
    },
    {
      name: "Priya Sharma",
      role: "Head of Engineering, DataFlow Systems",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200",
      content: "Working with Alpis India streamlined our hiring process significantly. They found us developers who not only had the skills but also fit our culture perfectly.",
      company_logo: "https://images.unsplash.com/photo-1614680376739-51c6ea6c7a3b?auto=format&fit=crop&w=100"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped companies build exceptional tech teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <Quote className="h-8 w-8 text-indigo-600 mb-2" />
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
              <div className="flex items-center justify-between">
                <img
                  src={testimonial.company_logo}
                  alt="Company logo"
                  className="h-8 w-auto grayscale opacity-50"
                />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;