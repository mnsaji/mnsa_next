"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold orbitron mb-6">
            <span className="text-white">Get In</span> <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your next innovative project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-slate-900/40">
            <h3 className="text-2xl font-semibold text-white mb-6 orbitron flex items-center gap-3">
              <MessageCircle className="text-cyan-400" />
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name - MNSA"
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="mnsatechnology01@email.com"
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-cyan-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 8808438961"
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Interested</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="3d-design">3D Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-cyan-400 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 cyber-border glow-box"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-gradient-to-br from-cyan-900/20 to-slate-900/40">
              <h3 className="text-2xl font-semibold text-white mb-6 orbitron">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400">mnsatechnology01@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Phone className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-400">+91 8808438961</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Office</h4>
                    <p className="text-gray-400">Thakur complex, Kandiwali Mumbai-400101</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-gradient-to-br from-purple-900/20 to-slate-900/40">
              <h3 className="text-2xl font-semibold text-white mb-6 orbitron">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>

            <div className="cyber-border p-6 rounded-xl backdrop-blur-sm bg-gradient-to-br from-amber-900/20 to-slate-900/40">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Quick Response Guarantee</h4>
                <p className="text-gray-400 text-sm">We respond to all inquiries within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
