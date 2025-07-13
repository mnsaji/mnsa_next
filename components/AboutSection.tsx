'use client';

import React, { useState } from 'react';
import {
  Users,
  Target,
  Eye,
  Award,
  TrendingUp,
  Globe,
  Zap,
  Shield,
} from 'lucide-react';

// 1️⃣ Define a type for tab keys
type TabKey = 'mission' | 'vision' | 'values';

// 2️⃣ Update tab content object with the type
const tabContent: Record<TabKey, {
  title: string;
  content: string;
  highlights: string[];
}> = {
  mission: {
    title: 'Transforming Digital Landscapes',
    content:
      "We are dedicated to revolutionizing the digital world through innovative AI-powered solutions, cutting-edge web development, and intelligent automation. Our mission is to empower businesses with technology that not only meets today's demands but anticipates tomorrow's challenges.",
    highlights: [
      'AI-First Development Approach',
      'Customer-Centric Innovation',
      'Sustainable Technology Solutions',
      'Global Digital Transformation',
    ],
  },
  vision: {
    title: "Building Tomorrow's Technology Today",
    content:
      "To become the world's leading AI-powered digital solutions provider, creating intelligent systems that seamlessly integrate with human potential. We envision a future where technology amplifies human creativity and drives unprecedented business growth.",
    highlights: [
      'Next-Gen AI Integration',
      'Seamless Human-Tech Collaboration',
      'Scalable Global Solutions',
      'Ethical Technology Leadership',
    ],
  },
  values: {
    title: 'Our Core Principles',
    content:
      'Built on a foundation of integrity, innovation, and excellence, our values guide every decision and shape every solution we create. We believe in transparency, continuous learning, and delivering value that exceeds expectations.',
    highlights: [
      'Innovation at Every Step',
      'Transparent Communication',
      'Excellence in Execution',
      'Continuous Learning Culture',
    ],
  },
};

// 3️⃣ Use the type in your useState
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('mission');

  const tabs: { id: TabKey; label: string; icon: any }[] = [
    { id: 'mission', label: 'Our Mission', icon: Target },
    { id: 'vision', label: 'Our Vision', icon: Eye },
    { id: 'values', label: 'Our Values', icon: Award },
  ];

  const achievements = [
    { icon: Globe, title: 'Global Reach', desc: 'Serving clients across 25+ countries', color: 'violet' },
    { icon: TrendingUp, title: 'Growth Rate', desc: '300% year-over-year expansion', color: 'purple' },
    { icon: Shield, title: 'Security First', desc: 'ISO 27001 certified processes', color: 'indigo' },
    { icon: Zap, title: 'Lightning Fast', desc: 'Average 2.3s load time delivery', color: 'fuchsia' },
  ];

 


  const tabContent = {
    mission: {
      title: 'Transforming Digital Landscapes',
      content:
        'We are dedicated to revolutionizing the digital world through innovative AI-powered solutions, cutting-edge web development, and intelligent automation. Our mission is to empower businesses with technology that not only meets today\'s demands but anticipates tomorrow\'s challenges.',
      highlights: [
        'AI-First Development Approach',
        'Customer-Centric Innovation',
        'Sustainable Technology Solutions',
        'Global Digital Transformation',
      ],
    },
    vision: {
      title: "Building Tomorrow's Technology Today",
      content:
        "To become the world's leading AI-powered digital solutions provider, creating intelligent systems that seamlessly integrate with human potential. We envision a future where technology amplifies human creativity and drives unprecedented business growth.",
      highlights: [
        'Next-Gen AI Integration',
        'Seamless Human-Tech Collaboration',
        'Scalable Global Solutions',
        'Ethical Technology Leadership',
      ],
    },
    values: {
      title: 'Our Core Principles',
      content:
        'Built on a foundation of integrity, innovation, and excellence, our values guide every decision and shape every solution we create. We believe in transparency, continuous learning, and delivering value that exceeds expectations.',
      highlights: [
        'Innovation at Every Step',
        'Transparent Communication',
        'Excellence in Execution',
        'Continuous Learning Culture',
      ],
    },
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-900/50 to-violet-900/50 border border-purple-400/40 mb-8 cyber-border backdrop-blur-md">
            <Users className="w-6 h-6 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-semibold text-sm tracking-wider space-grotesk">
              ABOUT MNSA TECHNOLOGIES
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold orbitron mb-6">
            <span className="text-slate-100">Pioneering the </span>
            <span className="gradient-text">AI Revolution</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto exo-2">
            Since our inception, we've been at the forefront of technological innovation,
            delivering intelligent solutions that transform businesses and empower growth.
          </p>
        </div>

        {/* Tab Section */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 cyber-border space-grotesk backdrop-blur-md ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-600/30 to-purple-600/30 text-violet-300 glow-box shadow-xl'
                    : 'bg-slate-900/50 text-slate-400 hover:text-violet-300 hover:bg-slate-800/60'
                }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'animate-pulse' : ''}`} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="cyber-border p-10 rounded-2xl backdrop-blur-md bg-slate-900/50 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 orbitron">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed exo-2">
                  {tabContent[activeTab].content}
                </p>
                <div className="space-y-3">
                  {tabContent[activeTab].highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 space-grotesk">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-xl cyber-border flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                      <Zap className="w-12 h-12 text-cyan-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 space-grotesk">
                      Innovation Hub
                    </h4>
                    <p className="text-gray-400 exo-2">Where ideas meet technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="cyber-border p-8 rounded-2xl backdrop-blur-md bg-slate-900/50 hover:bg-slate-800/60 transition-all duration-300 group text-center hover:scale-105 hover:rotate-1 shadow-xl hover:shadow-violet-500/20"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-${achievement.color}-400/20 to-purple-400/20 flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <achievement.icon className={`w-8 h-8 text-${achievement.color}-400 group-hover:animate-pulse`} />
              </div>
              <h4 className="text-xl font-semibold text-slate-100 mb-2 space-grotesk group-hover:glow-text">
                {achievement.title}
              </h4>
              <p className="text-slate-400 exo-2 group-hover:text-slate-300">
                {achievement.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
