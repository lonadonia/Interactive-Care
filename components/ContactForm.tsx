
import React, { useState } from 'react';
import { DEPARTMENTS } from '../content';
// Import ContactDepartment to fix type casting in the form state
import { ContactDepartment } from '../types';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: DEPARTMENTS[0],
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', department: DEPARTMENTS[0], subject: '', message: '' });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-100 p-8 rounded-2xl text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
           </svg>
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent Successfully</h3>
        <p className="text-green-800 mb-6">Thank you for contacting Better Futures. A member of the {formData.department} team will get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-green-700 font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
            placeholder="John Doe"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input
            required
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
            placeholder="john@example.com"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
        <select
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none bg-white"
          value={formData.department}
          // Fix: cast the string value from the select to the ContactDepartment enum type
          onChange={e => setFormData({...formData, department: e.target.value as ContactDepartment})}
        >
          {DEPARTMENTS.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
        <input
          required
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
          placeholder="How can we help?"
          value={formData.subject}
          onChange={e => setFormData({...formData, subject: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none resize-none"
          placeholder="Please provide details of your enquiry..."
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>

      <button
        disabled={status === 'submitting'}
        type="submit"
        className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Enquiry...
          </>
        ) : 'Send Message'}
      </button>

      <p className="text-center text-xs text-gray-400">
        By submitting this form, you agree to our privacy policy and data protection terms.
      </p>
    </form>
  );
};

export default ContactForm;
