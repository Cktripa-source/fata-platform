'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Landmark, Megaphone, Shield, Sprout, Users, ArrowDown, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const objectivesRef = useRef<HTMLDivElement>(null);
  const [objectivesInView, setObjectivesInView] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for objectives section
    const observer = new IntersectionObserver(
      ([entry]) => {
        setObjectivesInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (objectivesRef.current) {
      observer.observe(objectivesRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const objectives: { title: string; description: string; icon: ReactNode; gradient: string }[] = [
    {
      title: 'Promote Peace and Security',
      description: 'Facilitate dialogue, mediate conflicts, and support peace initiatives at community and national levels.',
      icon: <Shield className="h-8 w-8" />,
      gradient: 'from-amber-800 to-yellow-700',
    },
    {
      title: 'Preserve Cultural Heritage',
      description: 'Safeguard and promote Africa\'s rich languages, cultural practices, and traditional knowledge systems for future generations.',
      icon: <Landmark className="h-8 w-8" />,
      gradient: 'from-amber-700 to-orange-700',
    },
    {
      title: 'Foster Unity',
      description: 'Strengthen inter-tribal, regional, and continental cooperation among traditional leaders and their communities.',
      icon: <Users className="h-8 w-8" />,
      gradient: 'from-yellow-700 to-amber-800',
    },
    {
      title: 'Support Sustainable Development',
      description: 'Promote community-based initiatives in education, healthcare, and environmental protection for self-reliant communities.',
      icon: <Sprout className="h-8 w-8" />,
      gradient: 'from-amber-800 to-yellow-800',
    },
    {
      title: 'Advocate for Traditional Leaders',
      description: 'Increase the involvement and recognition of traditional leaders in national and international decision-making processes.',
      icon: <Megaphone className="h-8 w-8" />,
      gradient: 'from-orange-700 to-amber-700',
    },
  ];

  const scrollToObjectives = () => {
    objectivesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-800/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Dynamic cursor effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-20 blur-3xl transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(180,83,9,0.3) 0%, rgba(217,119,6,0.2) 50%, transparent 100%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(180,83,9,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(217,119,6,0.2) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(245,158,11,0.2) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-md rounded-full border border-amber-200">
            <Sparkles className="h-4 w-4 text-amber-700" />
            <span className="text-amber-800 text-sm font-medium">About Our Organization</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800 animate-pulse">
            FATA
          </h1>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-700 mb-12 leading-relaxed">
            Empowering Traditional Leadership for a United, Peaceful, and Sustainable Africa
          </p>
          
          <button
            onClick={scrollToObjectives}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
          >
            Discover Our Mission
            <ArrowDown className="h-5 w-5 group-hover:animate-bounce" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </div>
      </header>

      {/* Mission and Vision Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-3xl blur-xl opacity-15 group-hover:opacity-25 transition-opacity duration-300" />
              <div className="relative bg-white/90 backdrop-blur-xl border border-amber-200 rounded-3xl p-8 hover:bg-white/95 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-black mb-6">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To foster peace, unity, and sustainable development across Africa by uniting and empowering traditional leadership as a vital force for positive change.
                </p>
                <div className="mt-6 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full" />
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl blur-xl opacity-15 group-hover:opacity-25 transition-opacity duration-300" />
              <div className="relative bg-white/90 backdrop-blur-xl border border-amber-200 rounded-3xl p-8 hover:bg-white/95 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Landmark className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-black mb-6">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be the leading and most respected platform for traditional leadership collaboration in Africa, contributing to a continent that is peaceful, culturally vibrant, and sustainably developed.
                </p>
                <div className="mt-6 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section ref={objectivesRef} className="py-20 px-4 bg-gradient-to-b from-amber-25 to-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
              Core Objectives
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our strategic pillars for transforming Africa through traditional leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={objective.title}
                className={`group relative transition-all duration-700 ${
                  objectivesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${objective.gradient} rounded-3xl blur-xl opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />
                
                <div className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl p-8 h-full hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${objective.gradient} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {objective.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-amber-800 transition-colors">
                    {objective.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                    {objective.description}
                  </p>
                  
                  <div className={`mt-6 h-1 bg-gradient-to-r ${objective.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold text-black mb-6">
                Join Our Mission
              </h3>
              <p className="text-xl text-gray-700 mb-8">
                Be part of Africa's transformation through traditional leadership excellence
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25">
                Get Involved
                <Sparkles className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}