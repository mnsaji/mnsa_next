'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ParticleSystem from '../components/ParticleSystem';
import FloatingElements from '../components/FloatingElements';
// import Enhanced3DBackground from '../components/Enhanced3DBackground';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here (e.g., API call)
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "mnsatechnology01@gmail.com",
      description: "Send us an email anytime",
      bgColor: "from-cyan-400/20 to-purple-400/20",
      textColor: "text-cyan-400"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 8808438961",
      description: "Mon-Fri from 9am to 6pm",
      bgColor: "from-purple-400/20 to-purple-400/20",
      textColor: "text-purple-400"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Thakur complex, Kandivali Mumbai 400101",
      description: "Come say hello at our office",
      bgColor: "from-emerald-400/20 to-purple-400/20",
      textColor: "text-emerald-400"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM",
      description: "Weekend support available",
      bgColor: "from-amber-400/20 to-purple-400/20",
      textColor: "text-amber-400"
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "AI Solutions",
    "Digital Marketing",
    "UI/UX Design",
    "E-commerce Solutions",
    "Other"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Effects */}
      {/* <Enhanced3DBackground /> */}
      <ParticleSystem />
      <FloatingElements />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-400/30 mb-8 cyber-border">
            <MessageSquare className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-semibold text-sm tracking-wider space-grotesk">GET IN TOUCH</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold orbitron mb-6 leading-tight">
            <span className="gradient-text glow-text">Let's Build</span><br />
            <span className="text-white">Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed exo-2">
            Ready to transform your digital presence? We're here to turn your vision into reality
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="py-10 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map(({ icon: Icon, title, details, description, bgColor, textColor }, i) => (
              <div key={i} className="cyber-border p-6 rounded-xl backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/50 transition-all duration-300 group text-center hover:scale-105">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${textColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 space-grotesk">{title}</h3>
                <p className={`${textColor} font-semibold mb-1 exo-2`}>{details}</p>
                <p className="text-gray-400 text-sm exo-2">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-slate-900/40">
              <h2 className="text-3xl font-bold text-white mb-6 orbitron">Send us a Message</h2>
              <p className="text-gray-300 mb-8 exo-2">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 space-grotesk">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 cyber-border exo-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 space-grotesk">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="mnsatechnology01@gmail.com"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 cyber-border exo-2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2 space-grotesk">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 8808438961"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 cyber-border exo-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-300 mb-2 space-grotesk">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 cyber-border exo-2"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-300 mb-2 space-grotesk">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 cyber-border exo-2"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 space-grotesk">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 cyber-border exo-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cyber-border glow-box flex items-center justify-center space-grotesk"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div className="cyber-border rounded-xl backdrop-blur-sm bg-slate-900/40 p-8">
                <h3 className="text-2xl font-bold text-white mb-4 orbitron">Find Us</h3>
                <div className="w-full h-64 bg-slate-800/50 rounded-lg cyber-border flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-gray-300 exo-2">Interactive Map Coming Soon</p>
                    <p className="text-gray-400 text-sm exo-2">Tech Hub, Bangalore, India</p>
                  </div>
                </div>
              </div>

              <div className="cyber-border rounded-xl backdrop-blur-sm bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-4 orbitron">Quick Response</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-300 exo-2">Usually responds in 2-4 hours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 exo-2">Free consultation available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 exo-2">24/7 emergency support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Glow Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Contact;
