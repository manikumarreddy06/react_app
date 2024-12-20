import { Target, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story & Mission
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Alpis India was founded in 2020 by Priya, Alpis India was created with a clear vision to bridge the gap between exceptional tech talent and forward-thinking companies. Understanding the challenges businesses face in sourcing the right technical expertise, we aim to simplify the recruitment process and deliver the best-fit solutions.
              </p>
              <p className="mb-6">
                Our mission is to transform tech recruitment by combining human insight with data-driven strategies. This approach ensures an ideal match between companies and top-tier talent, fostering long-term success for both parties. At Alpis India, we are committed to delivering exceptional value by connecting the right talent with the right opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Target className="h-10 w-10 text-indigo-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Our Vision</h3>
                  <p className="text-sm text-gray-600">To be the most trusted tech talent partner globally</p>
                </div>
                <div className="text-center">
                  <Users className="h-10 w-10 text-indigo-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Our People</h3>
                  <p className="text-sm text-gray-600">50+ recruitment experts and tech veterans</p>
                </div>
                <div className="text-center">
                  <Heart className="h-10 w-10 text-indigo-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Our Values</h3>
                  <p className="text-sm text-gray-600">Integrity, Excellence, Innovation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm">Successful Placements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;