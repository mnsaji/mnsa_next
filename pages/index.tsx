// pages/index.tsx

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import ParticleSystem from '../components/ParticleSystem';
import FloatingElements from '../components/FloatingElements';
import Enhanced3DBackground from '../components/Enhanced3DBackground';

export default function HomePage() {
   return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background Effects */}
      {/* <Enhanced3DBackground /> */}
      <ParticleSystem />
      <FloatingElements />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
       <AboutSection />
       <ServicesSection />
       <PortfolioSection />
        <ContactSection />   
      </main>

      {/* Enhanced glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '4s' }}
      ></div>
    </div>
  );
}
