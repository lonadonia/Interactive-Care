
import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../content';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/carehero/1920/1080" 
            alt="Warm interior" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/30 border border-indigo-400/50 text-indigo-200 text-sm font-semibold mb-6 backdrop-blur-sm">
              Supporting Children's Growth & Safety
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Empowering Every Child's <span className="text-indigo-400">Better Future.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              We provide specialist residential care that feels like home, combined with professional support that transforms lives.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all text-center">
                Refer a Young Person
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all text-center">
                Explore Our Care
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">A Foundation Built on Trust</h2>
            <p className="text-lg text-gray-600">Our core values guide every decision we make, ensuring the highest standards of care and professionalism.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SITE_CONTENT.values.map((value, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-indigo-600 mb-6">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply opacity-50 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply opacity-50 filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to make a difference?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">Whether you're a local authority looking for a safe placement or a professional wanting to join our team, we're here to talk.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="px-10 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
              Contact Our Referral Team
            </Link>
            <Link to="/contact" className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              General Enquiries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
