"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import ParticleSystem from '@/components/ParticleSystem';
import FloatingElements from '@/components/FloatingElements';
// import Enhanced3DBackground from '@/components/Enhanced3DBackground';
import { Calendar, User, ArrowRight, BookOpen, Zap } from 'lucide-react';
import Image from 'next/image';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Web Development: Beyond 2024",
      excerpt: "Explore how artificial intelligence is revolutionizing web development with automated coding, intelligent design systems, and predictive user experiences.",
      author: "Mohit Sharma",
      date: "December 15, 2024",
      category: "AI Technology",
      readTime: "8 min read",
      featured: true,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Building Immersive 3D Web Experiences with Three.js",
      excerpt: "A comprehensive guide to creating stunning 3D web applications that engage users and provide unforgettable digital experiences.",
      author: "Nisha Patel",
      date: "December 12, 2024",
      category: "Web Development",
      readTime: "12 min read",
      featured: true,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Mobile App Development Trends in 2024",
      excerpt: "Discover the latest trends in mobile app development, from AI integration to cross-platform solutions that are shaping the industry.",
      author: "Sanjay Kumar",
      date: "December 10, 2024",
      category: "Mobile Development",
      readTime: "6 min read",
      featured: false,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "SEO in the Age of AI: Strategies That Actually Work",
      excerpt: "Learn how to leverage AI tools and techniques to boost your search engine rankings and drive organic traffic in 2024.",
      author: "Arjun Singh",
      date: "December 8, 2024",
      category: "Digital Marketing",
      readTime: "10 min read",
      featured: false,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "The Psychology of 3D UI/UX Design",
      excerpt: "Understanding how 3D elements in user interfaces affect user behavior and engagement in modern web applications.",
      author: "Nisha Patel",
      date: "December 5, 2024",
      category: "UI/UX Design",
      readTime: "7 min read",
      featured: false,
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Building Scalable APIs with Modern Technologies",
      excerpt: "Best practices for creating robust, scalable APIs that can handle millions of requests while maintaining performance.",
      author: "Mohit Sharma",
      date: "December 2, 2024",
      category: "Backend Development",
      readTime: "15 min read",
      featured: false,
      image: "/placeholder.svg"
    }
  ];

  const categories = [
    "All Posts",
    "AI Technology",
    "Web Development",
    "Mobile Development",
    "Digital Marketing",
    "UI/UX Design",
    "Backend Development"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* <Enhanced3DBackground /> */}
      <ParticleSystem />
      <FloatingElements />
      <Navbar />

      <main className="relative z-10 pt-16">
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-400/30 mb-8 cyber-border">
              <BookOpen className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-semibold text-sm tracking-wider space-grotesk">TECH INSIGHTS</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold orbitron mb-6 leading-tight">
              <span className="gradient-text glow-text">Innovation</span><br />
              <span className="text-white">Chronicles</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed exo-2">
              Stay ahead with the latest insights, trends, and innovations in technology and digital transformation
            </p>
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-2 orbitron">Featured Articles</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="cyber-border rounded-xl backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/50 transition-all duration-300 group hover:scale-105 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={800} 
                      height={400} 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">FEATURED</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3 exo-2">
                      <span className="bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded">{post.category}</span>
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 space-grotesk group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed exo-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 exo-2">
                        <User className="w-4 h-4 mr-2" />{post.author}
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 cyber-border text-sm flex items-center space-grotesk">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-2 orbitron">Latest Articles</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full bg-slate-900/40 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 cyber-border text-sm space-grotesk"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="cyber-border rounded-xl backdrop-blur-sm bg-slate-900/40 hover:bg-slate-800/50 transition-all duration-300 group hover:scale-105 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={600} 
                      height={300} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 exo-2">
                      <span className="bg-purple-400/20 text-purple-400 px-2 py-1 rounded">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 space-grotesk group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm exo-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-400 exo-2">
                        <User className="w-3 h-3 mr-1" />{post.author}
                      </div>
                      <span className="text-gray-500 exo-2">{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-border p-12 rounded-xl backdrop-blur-sm bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
              <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl font-bold text-white mb-4 orbitron">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8 exo-2">Get the latest tech insights and industry trends delivered to your inbox</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-900/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 cyber-border exo-2"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 cyber-border glow-box space-grotesk">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Blog;
