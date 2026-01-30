
import React from 'react';
// Fix: Import Link from react-router-dom to resolve the 'Cannot find name Link' errors
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import InteractiveMap from '../components/InteractiveMap';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-indigo-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            We are here to support you. Whether you're making a referral or just have a question, our specialist team is ready to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Info Sidebar */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ways to Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Call Us</h4>
                      <p className="text-gray-600 mt-1">020 7123 4567</p>
                      <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Email Enquiries</h4>
                      <p className="text-gray-600 mt-1">hello@betterfutures.care</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Head Office</h4>
                      <p className="text-gray-600 mt-1">123 Care Street, London, E2 9JU</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-900 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-4">Urgent Safeguarding</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  If you have an urgent safeguarding concern outside of office hours, please contact the relevant local authority emergency duty team or emergency services.
                </p>
                <Link to="/contact" className="block w-full text-center py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                  Referral Form
                </Link>
              </div>
            </div>

            {/* Main Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send an Enquiry</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Network</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our residential homes and outreach hubs across the UK.</p>
          </div>
          <InteractiveMap />
        </div>
      </section>
    </div>
  );
};

export default Contact;
