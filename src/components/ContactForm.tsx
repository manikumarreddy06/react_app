import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyWebsite: '',
    contactPerson: '',
    email: '',
    phone: '',
    skills: '',
    requirements: '',
  });

  const [submitStatus, setSubmitStatus] = useState({
    show: false,
    isError: false,
    message: '',
  });

  const SERVICE_ID = 'service_9q0rfss';
  const TEMPLATE_ID = 'template_6drhbjm';
  const USER_ID = 'QcGnC8EARYYYVFY6U';

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(USER_ID);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const templateParams = {
        timestamp: new Date().toLocaleString(),
        companyName: formData.companyName,
        companyWebsite: formData.companyWebsite,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        skills: formData.skills,
        requirements: formData.requirements,
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      );

      setSubmitStatus({
        show: true,
        isError: false,
        message: "Request submitted successfully! We'll contact you soon.",
      });

      // Clear form after successful submission
      setFormData({
        companyName: '',
        companyWebsite: '',
        contactPerson: '',
        email: '',
        phone: '',
        skills: '',
        requirements: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, show: false }));
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        show: true,
        isError: true,
        message: 'There was an error submitting your request. Please try again later.',
      });

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, show: false }));
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
      <h3 className="text-3xl font-semibold mb-4 text-center">Let's Connect</h3>
      
      {submitStatus.show && (
        <div 
          className={`mb-6 p-4 rounded-md ${
            submitStatus.isError ? 'bg-red-500' : 'bg-green-500'
          } text-white transition-all duration-300`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Your company name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contact Person</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Your name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Your phone number"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company Website</label>
          <input
            type="text"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="https://company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Required Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g., React, Node.js, Python"
            className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Project Requirements</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="Tell us about your project requirements"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition flex items-center justify-center space-x-2 font-medium"
        >
          <Send className="h-5 w-5" />
          <span>Submit Request</span>
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-white/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="tel:+8299640321" className="flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition">
            <Phone className="h-5 w-5" />
            <span>+(91)8299640321</span>
          </a>
          <a href="mailto:hr@alpisindia.com" className="flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition">
            <Mail className="h-5 w-5" />
            <span>hr@alpisindia.com</span>
          </a>
          <a href="https://wa.me/8299640321" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition">
            <MessageSquare className="h-5 w-5" />
            <span>WhatsApp Chat</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;