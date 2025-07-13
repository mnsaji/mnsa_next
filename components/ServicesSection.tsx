"use client";

import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Brain,
  Palette,
  TrendingUp,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "AI-Powered Web Development",
      shortDesc: "Intelligent, responsive websites that adapt and learn",
      fullDesc:
        "Revolutionary web development using machine learning algorithms, smart content optimization, and predictive user experience enhancements.",
      features: [
        "Smart Analytics Integration",
        "Auto-Optimizing Performance",
        "AI Content Personalization",
        "Predictive UX",
      ],
      tech: ["React", "Next.js", "TensorFlow.js", "Python AI"],
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Intelligent Mobile Apps",
      shortDesc: "Native & cross-platform apps with AI capabilities",
      fullDesc:
        "Mobile applications enhanced with artificial intelligence, machine learning models, and smart automation features for superior user engagement.",
      features: [
        "Cross-Platform Development",
        "AI-Driven Features",
        "Real-time Analytics",
        "Smart Notifications",
      ],
      tech: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Brain,
      title: "Custom AI Solutions",
      shortDesc: "Bespoke artificial intelligence implementations",
      fullDesc:
        "Tailored AI solutions including chatbots, recommendation engines, predictive analytics, and automated decision-making systems.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
      tech: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Palette,
      title: "3D UI/UX Design",
      shortDesc: "Immersive user experiences with 3D elements",
      fullDesc:
        "Next-generation user interface design incorporating 3D elements, advanced animations, and immersive user experiences.",
      features: [
        "3D Interface Design",
        "Interactive Prototypes",
        "Motion Graphics",
        "VR/AR Integration",
      ],
      tech: ["Three.js", "Blender", "Figma", "WebGL"],
      color: "amber",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing AI",
      shortDesc: "AI-driven marketing strategies and automation",
      fullDesc:
        "Intelligent digital marketing campaigns powered by AI algorithms for optimal targeting, content creation, and performance optimization.",
      features: [
        "AI Content Generation",
        "Smart Ad Targeting",
        "Predictive SEO",
        "Automated Campaigns",
      ],
      tech: ["Google AI", "Meta APIs", "Analytics", "Automation"],
      color: "rose",
      gradient: "from-rose-500 to-red-600",
    },
    {
      icon: Shield,
      title: "Cybersecurity AI",
      shortDesc: "AI-enhanced security and threat detection",
      fullDesc:
        "Advanced cybersecurity solutions using artificial intelligence for threat detection, prevention, and automated response systems.",
      features: [
        "Threat Detection AI",
        "Automated Response",
        "Security Analytics",
        "Compliance Monitoring",
      ],
      tech: ["Python Security", "AI Models", "Cloud Security", "Blockchain"],
      color: "indigo",
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 border border-emerald-400/30 mb-8 cyber-border">
            <Sparkles className="w-5 h-5 text-emerald-400 animate-spin" />
            <span className="text-emerald-400 font-semibold text-sm tracking-wider space-grotesk">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold orbitron mb-6">
            <span className="text-white">AI-Enhanced</span>{" "}
            <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto exo-2">
            Discover our comprehensive suite of AI-powered services designed to
            transform your business and accelerate your digital journey into the
            future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`cyber-border rounded-xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:-rotate-1 ${
                  hoveredService === index
                    ? `bg-gradient-to-br from-${service.color}-900/30 to-slate-900/50 glow-box`
                    : "bg-slate-900/40 hover:bg-slate-800/50"
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="p-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${service.color}-400/20 to-purple-400/20 flex items-center justify-center mb-6 transition-all duration-300 ${
                      hoveredService === index ? "scale-110 animate-pulse-glow" : ""
                    }`}
                  >
                    <Icon className={`w-8 h-8 text-${service.color}-400`} />
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-4 space-grotesk transition-all duration-300 ${
                      hoveredService === index
                        ? "text-white glow-text"
                        : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 exo-2 leading-relaxed">
                    {hoveredService === index
                      ? service.fullDesc
                      : service.shortDesc}
                  </p>

                  {hoveredService === index && (
                    <div className="mb-6 animate-fade-in">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 space-grotesk">
                        KEY FEATURES
                      </h4>
                      <div className="space-y-2">
                        {service.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="flex items-center gap-2"
                          >
                            <div
                              className={`w-1.5 h-1.5 bg-${service.color}-400 rounded-full animate-pulse`}
                            ></div>
                            <span className="text-sm text-gray-300 exo-2">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 space-grotesk">
                      TECHNOLOGIES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className={`px-3 py-1 bg-slate-800/50 border border-${service.color}-400/30 rounded-full text-xs text-gray-300 cyber-border exo-2`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/services">
                    <button
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:scale-105 text-white py-3 rounded-lg font-semibold transition-all duration-300 cyber-border flex items-center justify-center gap-2 space-grotesk group`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
            <h3 className="text-3xl font-bold text-white mb-4 orbitron">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 exo-2 text-lg">
              Let our AI-powered solutions take your business to the next level.
              Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cyber-border glow-box space-grotesk">
                  Get Free Consultation
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cyber-border space-grotesk">
                  View Our Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
