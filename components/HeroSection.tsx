'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, Brain, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    'AI-Powered Digital Solutions',
    'Revolutionary Technology Partners',
    'Future-Ready Development',
    'Intelligent Business Automation',
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Rocket },
    { number: '98%', label: 'Client Satisfaction', icon: Sparkles },
    { number: '24/7', label: 'Technical Support', icon: Zap },
    { number: '50+', label: 'AI Solutions', icon: Brain },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-center justify-center relative py-10">
      {/* Animated Floating Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-900/50 to-purple-900/50 border border-violet-400/40 mb-8 cyber-border hover:scale-105 transition-transform backdrop-blur-md">
            <Sparkles className="w-6 h-6 text-violet-400 animate-spin" />
            <span className="text-violet-300 font-semibold text-sm tracking-wider space-grotesk">
              NEXT-GENERATION AI TECHNOLOGY
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold orbitron mb-8 leading-tight">
            <span className="text-slate-100">Empowering</span>
            <br />
            <span className="gradient-text glow-text animate-pulse">
              {heroTexts[currentText]}
            </span>
          </h1>

          <p className="text-xl md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed exo-2">
            Transform your digital presence with cutting-edge AI technology, innovative web solutions,
            and intelligent automation that drives real business results. Welcome to the future of technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cyber-border glow-box group space-grotesk text-lg shadow-xl hover:shadow-violet-500/25">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/portfolio">
              <Button
                variant="outline"
                className="border-violet-400/50 text-violet-300 hover:bg-violet-400/10 px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cyber-border group space-grotesk text-lg backdrop-blur-md"
              >
                View Our Work
                <Sparkles className="ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="cyber-border p-8 rounded-2xl backdrop-blur-md bg-slate-900/50 hover:bg-gradient-to-br hover:from-violet-900/40 hover:to-purple-900/40 transition-all duration-300 group hover:scale-110 hover:rotate-1 shadow-xl hover:shadow-violet-500/20"
              >
                <stat.icon className="w-10 h-10 text-violet-400 mx-auto mb-4 group-hover:scale-125 group-hover:text-purple-300 transition-all" />
                <div className="text-3xl font-bold text-slate-100 mb-3 orbitron group-hover:glow-text">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm space-grotesk group-hover:text-violet-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HeroSection;
