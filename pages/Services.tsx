
import React from 'react';
import { SITE_CONTENT } from '../content';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-indigo-700 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Holistic, outcomes-focused care tailored to the unique journey of every child and young person.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SITE_CONTENT.services.map((service, i) => (
              <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                   <div className="inline-block p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {service.icon === 'Home' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                        {service.icon === 'Users' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                        {service.icon === 'BookOpen' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                      </svg>
                   </div>
                   <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                   <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                     {service.description}
                   </p>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {service.details.map((detail, dIdx) => (
                       <li key={dIdx} className="flex items-center space-x-3 text-gray-700">
                         <div className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                           <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                           </svg>
                         </div>
                         <span>{detail}</span>
                       </li>
                     ))}
                   </ul>
                </div>
                <div className="flex-1 w-full">
                   <img 
                    src={`https://picsum.photos/seed/${service.id}/800/500`} 
                    alt={service.title} 
                    className="rounded-3xl shadow-xl w-full h-auto object-cover"
                   />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Therapeutic Focus</h3>
                <p className="text-gray-400">All our environments are trauma-informed and led by qualified clinical practitioners.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Safeguarding First</h3>
                <p className="text-gray-400">Robust governance frameworks ensuring the safety and wellbeing of every individual.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Quality Assured</h3>
                <p className="text-gray-400">Committed to exceeding Ofsted standards and achieving high-quality outcomes.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
