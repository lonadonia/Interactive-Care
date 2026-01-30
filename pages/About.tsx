
import React from 'react';
import { SITE_CONTENT } from '../content';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Better Futures</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {SITE_CONTENT.mission}
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Philosophy of Care</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Better Futures was founded on the principle that residential care should not just be a roof over a child's head, but a springboard for their future. 
                  We believe that every child, regardless of their background or previous trauma, has the capacity for resilience and growth when provided with the right environment.
                </p>
                <p>
                  Our multidisciplinary approach combines clinical expertise with a family-style living environment, ensuring that emotional needs are met alongside practical development.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="p-6 bg-indigo-50 rounded-2xl">
                  <span className="text-4xl font-bold text-indigo-600 block mb-2">95%</span>
                  <span className="text-sm font-semibold text-gray-600">Educational Engagement</span>
                </div>
                <div className="p-6 bg-emerald-50 rounded-2xl">
                  <span className="text-4xl font-bold text-emerald-600 block mb-2">12+</span>
                  <span className="text-sm font-semibold text-gray-600">Specialist Hubs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/carestory/800/600" 
                alt="Supportive environment" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-indigo-600 rounded-3xl -z-0 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Led by Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our leadership team brings together decades of experience in social work, psychology, and healthcare management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {SITE_CONTENT.team.map((member, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-indigo-50"
                />
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
