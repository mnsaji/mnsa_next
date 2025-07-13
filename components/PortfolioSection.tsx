"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Play,
  Award,
  Zap
} from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI Solutions" },
    { id: "ecommerce", label: "E-commerce" }
  ];

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      category: "ecommerce",
      description: "Revolutionary shopping experience with AI recommendations and predictive analytics",
      fullDescription:
        "A comprehensive e-commerce platform featuring machine learning-powered product recommendations, dynamic pricing algorithms, and intelligent inventory management. Built with advanced AI capabilities for personalized shopping experiences.",
      image: "/api/placeholder/400/300",
      tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
      features: ["AI Recommendations", "Predictive Analytics", "Smart Inventory", "Dynamic Pricing"],
      stats: { users: "50K+", conversion: "+300%", performance: "99.9%" },
      links: { live: "#", github: "#", demo: "#" },
      color: "cyan"
    },
    {
      id: 2,
      title: "Smart Healthcare Mobile App",
      category: "mobile",
      description: "AI-driven health monitoring and telemedicine platform",
      fullDescription:
        "Comprehensive healthcare application with AI-powered symptom analysis, real-time health monitoring, and integrated telemedicine capabilities. Features advanced ML models for health prediction and prevention.",
      image: "/api/placeholder/400/300",
      tech: ["React Native", "Python", "TensorFlow", "Firebase"],
      features: ["Symptom Analysis", "Health Monitoring", "Telemedicine", "ML Predictions"],
      stats: { users: "25K+", accuracy: "95%", satisfaction: "4.9/5" },
      links: { live: "#", github: "#", demo: "#" },
      color: "emerald"
    },
    {
      id: 3,
      title: "Corporate AI Dashboard",
      category: "ai",
      description: "Intelligent business analytics and automation platform",
      fullDescription:
        "Enterprise-grade AI dashboard providing real-time business insights, automated reporting, and predictive analytics for strategic decision making. Integrates multiple data sources with advanced visualization.",
      image: "/api/placeholder/400/300",
      tech: ["Vue.js", "Python", "D3.js", "PostgreSQL"],
      features: ["Real-time Analytics", "Automated Reports", "Predictive Models", "Data Visualization"],
      stats: { efficiency: "+400%", accuracy: "98%", savings: "$2M+" },
      links: { live: "#", github: "#", demo: "#" },
      color: "purple"
    },
    {
      id: 4,
      title: "Smart Manufacturing Web Portal",
      category: "web",
      description: "IoT-integrated manufacturing management system",
      fullDescription:
        "Advanced web portal for smart manufacturing with IoT sensor integration, real-time monitoring, predictive maintenance, and automated quality control systems.",
      image: "/api/placeholder/400/300",
      tech: ["Angular", "Node.js", "IoT", "InfluxDB"],
      features: ["IoT Integration", "Predictive Maintenance", "Quality Control", "Real-time Monitoring"],
      stats: { efficiency: "+250%", downtime: "-80%", quality: "+99%" },
      links: { live: "#", github: "#", demo: "#" },
      color: "amber"
    },
    {
      id: 5,
      title: "AI Financial Trading Bot",
      category: "ai",
      description: "Intelligent cryptocurrency trading automation",
      fullDescription:
        "Sophisticated AI trading bot using machine learning algorithms for cryptocurrency market analysis, automated trading decisions, and risk management with real-time portfolio optimization.",
      image: "/api/placeholder/400/300",
      tech: ["Python", "TensorFlow", "WebSocket", "Redis"],
      features: ["Market Analysis", "Auto Trading", "Risk Management", "Portfolio Optimization"],
      stats: { roi: "+450%", accuracy: "92%", volume: "$10M+" },
      links: { live: "#", github: "#", demo: "#" },
      color: "rose"
    },
    {
      id: 6,
      title: "Smart Learning Mobile Platform",
      category: "mobile",
      description: "AI-powered personalized education app",
      fullDescription:
        "Educational mobile platform with AI-driven personalized learning paths, adaptive assessments, and intelligent tutoring systems for enhanced learning outcomes.",
      image: "/api/placeholder/400/300",
      tech: ["Flutter", "Firebase", "TensorFlow Lite", "NodeJS"],
      features: ["Personalized Learning", "Adaptive Tests", "AI Tutoring", "Progress Analytics"],
      stats: { students: "100K+", improvement: "+85%", engagement: "95%" },
      links: { live: "#", github: "#", demo: "#" },
      color: "indigo"
    }
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return <></>; // Replace with actual JSX as you migrate the layout step-by-step
};

export default PortfolioSection;
