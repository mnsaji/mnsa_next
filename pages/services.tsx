import React from 'react';
import Navbar from '../components/Navbar';
import ParticleSystem from '../components/ParticleSystem';
import FloatingElements from '../components/FloatingElements';
// import Enhanced3DBackground from '../components/Enhanced3DBackground';
import { Code, Smartphone, TrendingUp, Search, Palette, Database, Cloud } from 'lucide-react';

type Color = 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose' | 'indigo';

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  color: Color;
}

const services: Service[] = [
  {
    icon: Code,
    title: "AI Web Development",
    description: "Next-generation websites with integrated AI capabilities and immersive 3D experiences",
    features: ["Custom AI Integration", "3D Web Experiences", "Progressive Web Apps", "Real-time Analytics"],
    technologies: ["React", "Three.js", "TensorFlow.js", "WebGL"],
    color: "cyan",
  },
  {
    icon: Smartphone,
    title: "Smart Mobile Apps",
    description: "Intelligent mobile solutions powered by machine learning algorithms",
    features: ["Cross-platform Development", "AI-powered Features", "Real-time Sync", "Advanced Security"],
    technologies: ["React Native", "Flutter", "Firebase", "ML Kit"],
    color: "purple",
  },
  {
    icon: TrendingUp,
    title: "AI Digital Marketing",
    description: "Data-driven marketing strategies powered by artificial intelligence",
    features: ["Predictive Analytics", "Automated Campaigns", "Customer Insights", "ROI Optimization"],
    technologies: ["Google Analytics", "Facebook Ads API", "Python", "TensorFlow"],
    color: "emerald",
  },
  {
    icon: Search,
    title: "Advanced SEO Services",
    description: "AI-enhanced SEO strategies for maximum online visibility",
    features: ["Technical SEO", "Content Optimization", "Link Building", "Performance Monitoring"],
    technologies: ["Semrush", "Ahrefs", "Google Search Console", "Schema Markup"],
    color: "amber",
  },
  {
    icon: Palette,
    title: "3D UI/UX Design",
    description: "Immersive user experiences with cutting-edge 3D design elements",
    features: ["3D Prototyping", "Interactive Design", "User Research", "Design Systems"],
    technologies: ["Figma", "Blender", "Adobe Creative Suite", "Principle"],
    color: "rose",
  },
  {
    icon: Database,
    title: "AI Software Development",
    description: "Custom software solutions with integrated artificial intelligence",
    features: ["Machine Learning Models", "Data Processing", "API Development", "Cloud Integration"],
    technologies: ["Python", "Node.js", "PostgreSQL", "Docker"],
    color: "indigo",
  },
];

const getColorClasses = (color: Color) => {
  const colorMap = {
    cyan: { bg: "from-cyan-900/20", border: "border-cyan-400/30", text: "text-cyan-400", icon: "text-cyan-400" },
    purple: { bg: "from-purple-900/20", border: "border-purple-400/30", text: "text-purple-400", icon: "text-purple-400" },
    emerald: { bg: "from-emerald-900/20", border: "border-emerald-400/30", text: "text-emerald-400", icon: "text-emerald-400" },
    amber: { bg: "from-amber-900/20", border: "border-amber-400/30", text: "text-amber-400", icon: "text-amber-400" },
    rose: { bg: "from-rose-900/20", border: "border-rose-400/30", text: "text-rose-400", icon: "text-rose-400" },
    indigo: { bg: "from-indigo-900/20", border: "border-indigo-400/30", text: "text-indigo-400", icon: "text-indigo-400" },
  };

  return colorMap[color];
};

// Predefine button gradient classes to avoid Tailwind's JIT missing them
const buttonGradientClasses: Record<Color, string> = {
  cyan: "from-cyan-500 hover:from-cyan-400",
  purple: "from-purple-500 hover:from-purple-400",
  emerald: "from-emerald-500 hover:from-emerald-400",
  amber: "from-amber-500 hover:from-amber-400",
  rose: "from-rose-500 hover:from-rose-400",
  indigo: "from-indigo-500 hover:from-indigo-400",
};

const Services = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      {/* <Enhanced3DBackground /> */}
      <ParticleSystem />
      <FloatingElements />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-400/30 mb-8 cyber-border">
              <Cloud className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-semibold text-sm tracking-wider space-grotesk">OUR SERVICES</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold orbitron mb-6 leading-tight">
              <span className="gradient-text glow-text">Revolutionary</span><br />
              <span className="text-white">Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed exo-2">
              Comprehensive AI-powered services designed to transform your digital presence
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, idx) => {
                const colors = getColorClasses(service.color);
                return (
                  <div
                    key={idx}
                    className={`cyber-border p-8 rounded-xl backdrop-blur-sm bg-gradient-to-br ${colors.bg} to-slate-900/40 hover:bg-slate-800/50 transition-all duration-300 group hover:scale-105`}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${colors.bg} cyber-border group-hover:scale-110 transition-transform`}>
                        <service.icon className={`w-8 h-8 ${colors.icon}`} />
                      </div>

                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold ${colors.text} mb-3 orbitron`}>{service.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed exo-2">{service.description}</p>

                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 space-grotesk">Key Features:</h4>
                          <ul className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-center text-gray-400 exo-2">
                                <div className={`w-2 h-2 ${colors.bg} rounded-full mr-2`}></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 space-grotesk">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, i) => (
                              <span key={i} className={`px-3 py-1 rounded-full bg-slate-800/50 text-sm ${colors.text} cyber-border`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          className={`bg-gradient-to-r ${buttonGradientClasses[service.color]} to-purple-600 hover:to-purple-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cyber-border glow-box space-grotesk`}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold orbitron mb-6">
                <span className="gradient-text">Our</span> <span className="text-white">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto exo-2">
                A systematic approach to delivering exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
                { step: "02", title: "Strategy", description: "Crafting the perfect solution blueprint" },
                { step: "03", title: "Development", description: "Building with cutting-edge technologies" },
                { step: "04", title: "Launch", description: "Deploying and optimizing for success" }
              ].map((process, i) => (
                <div key={i} className="cyber-border p-6 rounded-xl backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/50 transition-all duration-300 group text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4 orbitron group-hover:scale-110 transition-transform">{process.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 space-grotesk">{process.title}</h3>
                  <p className="text-gray-400 exo-2">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Services;
