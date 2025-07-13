import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ParticleSystem from '../components/ParticleSystem';
import FloatingElements from '../components/FloatingElements';
// import Enhanced3DBackground from '../components/Enhanced3DBackground';
import { ExternalLink, Github, Filter, Star, Award, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      category: "web",
      description: "Revolutionary shopping experience with AI recommendations and 3D product visualization",
      technologies: ["React", "Three.js", "TensorFlow", "Node.js"],
      image: "/placeholder.svg",
      featured: true,
      rating: 5,
      client: "TechMart Solutions"
    },
    {
      id: 2,
      title: "Smart Healthcare Mobile App",
      category: "mobile",
      description: "AI-driven health monitoring with real-time diagnostics and telemedicine features",
      technologies: ["React Native", "Python", "ML Kit", "Firebase"],
      image: "/placeholder.svg",
      featured: true,
      rating: 5,
      client: "MediCare Plus"
    },
    {
      id: 3,
      title: "Digital Marketing Automation Suite",
      category: "marketing",
      description: "Complete marketing automation with AI-powered analytics and campaign optimization",
      technologies: ["Vue.js", "Python", "Google APIs", "PostgreSQL"],
      image: "/placeholder.svg",
      featured: false,
      rating: 4,
      client: "GrowthHack Inc"
    },
    {
      id: 4,
      title: "3D Real Estate Virtual Tours",
      category: "web",
      description: "Immersive virtual property tours with AI-powered interior design suggestions",
      technologies: ["Three.js", "WebXR", "React", "AWS"],
      image: "/placeholder.svg",
      featured: true,
      rating: 5,
      client: "RealEstate Pro"
    },
    {
      id: 5,
      title: "AI Fitness Companion App",
      category: "mobile",
      description: "Personalized workout plans with AI form correction and nutrition tracking",
      technologies: ["Flutter", "TensorFlow Lite", "Firebase", "HealthKit"],
      image: "/placeholder.svg",
      featured: false,
      rating: 4,
      client: "FitLife Technologies"
    },
    {
      id: 6,
      title: "Social Media Analytics Dashboard",
      category: "marketing",
      description: "Comprehensive social media analytics with predictive insights and automation",
      technologies: ["React", "D3.js", "Python", "Social APIs"],
      image: "/placeholder.svg",
      featured: false,
      rating: 4,
      client: "SocialMetrics Ltd"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'marketing', label: 'Digital Marketing' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* <Enhanced3DBackground /> */}
      <ParticleSystem />
      <FloatingElements />
      <Navbar />

      <main className="relative z-10 pt-16">
        {/* Hero */}
        <section className="py-20 px-4 text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-400/30 mb-8 cyber-border">
            <Award className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-semibold text-sm tracking-wider space-grotesk">
              OUR PORTFOLIO
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold orbitron mb-6 leading-tight">
            <span className="gradient-text glow-text">Success</span><br />
            <span className="text-white">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed exo-2">
            Explore our portfolio of innovative projects that have transformed businesses worldwide
          </p>
        </section>

        {/* Filters */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cyber-border space-grotesk ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white glow-box'
                    : 'bg-slate-900/40 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="cyber-border rounded-xl backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/50 transition-all duration-300 group hover:scale-105 overflow-hidden relative"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" /> FEATURED
                    </div>
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400 exo-2">{project.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 space-grotesk group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed exo-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-800/50 text-cyan-400 rounded text-xs cyber-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 cyber-border text-sm flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </button>
                    <button className="px-4 py-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300 cyber-border">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard icon={Zap} label="Projects Completed" value="150+" color="text-cyan-400" />
            <StatCard icon={Award} label="Happy Clients" value="50+" color="text-purple-400" />
            <StatCard icon={Star} label="Average Rating" value="4.9/5" color="text-emerald-400" />
            <StatCard icon={ExternalLink} label="Success Rate" value="95%" color="text-amber-400" />
          </div>
        </section>
      </main>

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

// Helper Stat Card component
const StatCard = ({ icon: Icon, label, value, color }: any) => (
  <div className="text-center cyber-border p-6 rounded-xl backdrop-blur-sm bg-slate-900/40">
    <Icon className={`w-12 h-12 mx-auto mb-4 ${color}`} />
    <div className={`text-3xl font-bold orbitron mb-2 ${color}`}>{value}</div>
    <div className="text-gray-400 exo-2">{label}</div>
  </div>
);

export default Portfolio;
