import React from 'react';
import Navbar from '@/components/Navbar';
import ParticleSystem from '@/components/ParticleSystem';
import FloatingElements from '@/components/FloatingElements';
// import Enhanced3DBackground from '@/components/Enhanced3DBackground';
import {
  Users,
  Target,
  Lightbulb,
  Award,
  Brain,
  Zap,
  Rocket,
  Globe,
  Shield,
  Code
} from 'lucide-react';

const teamMembers = [
  {
    name: "Mohit Sharma",
    role: "AI Solutions Architect",
    expertise: "Machine Learning, Deep Learning",
    icon: Brain
  },
  {
    name: "Nisha Patel",
    role: "Full Stack Developer",
    expertise: "React, Node.js, Python",
    icon: Code
  },
  {
    name: "Sanjay Kumar",
    role: "UI/UX Designer",
    expertise: "3D Design, User Experience",
    icon: Zap
  },
  {
    name: "Arjun Singh",
    role: "Digital Marketing Specialist",
    expertise: "SEO, Social Media, Analytics",
    icon: Rocket
  }
];

const milestones = [
  { year: "2019", event: "Company Founded", description: "Started with a vision to revolutionize digital solutions" },
  { year: "2020", event: "First AI Project", description: "Delivered our first machine learning solution" },
  { year: "2021", event: "Team Expansion", description: "Grew to 10+ skilled professionals" },
  { year: "2022", event: "100+ Projects", description: "Successfully completed 100 projects" },
  { year: "2023", event: "AI Excellence Award", description: "Recognized for innovation in AI solutions" },
  { year: "2024", event: "Global Reach", description: "Expanded services to international markets" }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      {/* <Enhanced3DBackground /> */}
      <ParticleSystem />
      <FloatingElements />

      {/* Navbar */}
      <Navbar />

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-400/30 mb-8 cyber-border">
              <Globe className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-semibold text-sm tracking-wider space-grotesk">
                ABOUT OUR JOURNEY
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold orbitron mb-6 leading-tight">
              <span className="gradient-text glow-text">Innovating</span><br />
              <span className="text-white">The Future</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed exo-2">
              Pioneering the next generation of digital solutions with cutting-edge AI technology and innovative design.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-gradient-to-br from-cyan-900/20 to-slate-900/40 hover:bg-slate-800/50 transition-all duration-300 group">
              <Shield className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold text-cyan-400 mb-4 orbitron">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg exo-2">
                To revolutionize the digital landscape by creating immersive, AI-powered solutions that transform 
                businesses and elevate user experiences to unprecedented levels.
              </p>
            </div>

            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-gradient-to-br from-purple-900/20 to-slate-900/40 hover:bg-slate-800/50 transition-all duration-300 group">
              <Brain className="w-16 h-16 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold text-purple-400 mb-4 orbitron">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg exo-2">
                To be the leading force in next-generation technology solutions, pioneering advancements in artificial 
                intelligence and immersive digital experiences.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold orbitron mb-6">
              <span className="gradient-text">Our</span> <span className="text-white">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Users, title: 'Innovation', desc: 'Constantly pushing boundaries with cutting-edge solutions', color: 'text-cyan-400' },
              { icon: Target, title: 'Excellence', desc: 'Delivering superior quality in every project we undertake', color: 'text-purple-400' },
              { icon: Lightbulb, title: 'Creativity', desc: 'Transforming ideas into revolutionary digital experiences', color: 'text-amber-400' },
              { icon: Award, title: 'Integrity', desc: 'Building trust through transparency and ethical practices', color: 'text-emerald-400' },
            ].map((val, i) => (
              <div key={i} className="cyber-border p-6 rounded-xl backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/50 transition-all duration-300 group text-center">
                <val.icon className={`w-12 h-12 ${val.color} mb-4 mx-auto group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold text-white mb-2 space-grotesk">{val.title}</h3>
                <p className="text-gray-400 exo-2">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold orbitron mb-6">
              <span className="gradient-text">Our</span> <span className="text-white">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto exo-2">
              Meet the brilliant minds behind MNSA Technologies' innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member, i) => (
              <div key={i} className="cyber-border p-6 rounded-xl backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/50 transition-all duration-300 group text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <member.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 space-grotesk">{member.name}</h3>
                <p className="text-cyan-400 mb-2 exo-2">{member.role}</p>
                <p className="text-gray-400 text-sm exo-2">{member.expertise}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold orbitron mb-6">
                <span className="gradient-text">Our</span> <span className="text-white">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto exo-2">
                From humble beginnings to industry leadership
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400"></div>
              {milestones.map((m, i) => (
                <div key={i} className={`flex items-center mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="cyber-border p-6 rounded-xl backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/50 transition-all duration-300">
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2 orbitron">{m.year}</h3>
                      <h4 className="text-xl font-semibold text-white mb-2 space-grotesk">{m.event}</h4>
                      <p className="text-gray-400 exo-2">{m.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center relative z-10 border-4 border-slate-900">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Glow Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default AboutPage;
