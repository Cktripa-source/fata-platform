"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Heart, Mail, Target, Users, Star, Globe, Award, Zap, ChevronDown, Play } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredNews = [
    {
      title: 'Annual FATA Conference Concludes Successfully',
      description: 'Leaders from across the continent gathered to discuss key issues of peace and development in a groundbreaking summit.',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop&crop=center',
      hint: 'african conference',
      link: '/news',
      category: 'Conference',
      date: '2024-08-15'
    },
    {
      title: 'New Cultural Exchange Program Launched',
      description: 'FATA launches an innovative initiative to promote inter-tribal understanding and heritage preservation across Africa.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center',
      hint: 'cultural exchange',
      link: '/activities',
      category: 'Programs',
      date: '2024-08-10'
    },
    {
      title: 'FATA Mediates Regional Conflict Resolution',
      description: 'A successful peace mission led by FATA representatives brings harmony and understanding to communities.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center',
      hint: 'peace negotiation',
      link: '/news',
      category: 'Peace',
      date: '2024-08-05'
    },
  ];

  const quickNav = [
    { title: 'Mission', href: '/about', icon: <Target />, description: 'Our core purpose and values' },
    { title: 'Leadership', href: '/leadership', icon: <Users />, description: 'Meet our dedicated leaders' },
    { title: 'Events', href: '/events', icon: <Calendar />, description: 'Upcoming gatherings' },
    { title: 'Get Involved', href: '/get-involved', icon: <Heart />, description: 'Join our community' },
    { title: 'Contact', href: '/contact', icon: <Mail />, description: 'Reach out to us' },
  ];

  const stats = [
    { number: '50+', label: 'Traditional Authorities', icon: <Users /> },
    { number: '25+', label: 'Countries United', icon: <Globe /> },
    { number: '100+', label: 'Peace Initiatives', icon: <Award /> },
    { number: '1M+', label: 'Lives Impacted', icon: <Star /> },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        
        :root {
          --soil-primary: #8B4513;
          --soil-secondary: #A0522D;
          --soil-light: #D2691E;
          --soil-dark: #654321;
          --earth-cream: #FDF6E3;
          --stone-gray: #4A4A4A;
          --sand-beige: #F4E4BC;
          --warm-white: #FFFEF7;
        }

        .hero-gradient {
          background: linear-gradient(
            135deg,
            rgba(245, 245, 220, 0.95) 0%,
            rgba(139, 69, 19, 0.1) 30%,
            rgba(160, 82, 45, 0.1) 70%,
            rgba(245, 245, 220, 0.98) 100%
          );
        }

        .hero-bg {
          background: linear-gradient(
            135deg,
            #FDF6E3 0%,
            #F5F5DC 25%,
            #FAEBD7 50%,
            #F5F5DC 75%,
            #FDF6E3 100%
          );
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(139, 69, 19, 0.1);
          box-shadow: 
            0 8px 32px rgba(139, 69, 19, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .soil-gradient-bg {
          background: linear-gradient(
            135deg,
            #FFFEF7 0%,
            #FDF6E3 25%,
            #F5F5DC 50%,
            #FAEBD7 75%,
            #FFFEF7 100%
          );
        }

        .dark-soil-bg {
          background: linear-gradient(
            135deg,
            #8B4513 0%,
            #A0522D 30%,
            #D2691E 70%,
            #8B4513 100%
          );
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          background: linear-gradient(
            135deg,
            #000000 0%,
            #8B4513 30%,
            #D2691E 60%,
            #000000 100%
          );
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s ease-in-out infinite;
        }

        .magnetic-button {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .magnetic-button:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 20px 40px rgba(139, 69, 19, 0.3);
        }

        .news-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139, 69, 19, 0.1);
        }

        .news-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(139, 69, 19, 0.05) 0%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .news-card:hover::before {
          opacity: 1;
        }

        .news-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(139, 69, 19, 0.2);
          border-color: var(--soil-light);
        }

        .quick-nav-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139, 69, 19, 0.1);
        }

        .quick-nav-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--soil-primary), var(--soil-light));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .quick-nav-card:hover::before {
          opacity: 0.03;
        }

        .quick-nav-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(139, 69, 19, 0.15);
          border-color: var(--soil-light);
          background: rgba(255, 255, 255, 0.98);
        }

        .stats-counter {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          background: linear-gradient(135deg, var(--soil-primary), var(--soil-light));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          background: linear-gradient(135deg, var(--soil-dark), var(--soil-primary));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          background: radial-gradient(circle, rgba(139, 69, 19, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 20s infinite linear;
        }

        .shape:nth-child(1) {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 10%;
          animation-delay: -2s;
        }

        .shape:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 50%;
          right: 15%;
          animation-delay: -8s;
        }

        .shape:nth-child(3) {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 60%;
          animation-delay: -15s;
        }

        .category-badge {
          background: linear-gradient(135deg, var(--soil-primary), var(--soil-light));
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--stone-gray);
          animation: float 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }
        }

        .carousel-container {
          position: relative;
        }

        .carousel-nav {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(139, 69, 19, 0.2);
          color: var(--soil-primary);
          transition: all 0.3s ease;
        }

        .carousel-nav:hover {
          background: var(--soil-primary);
          color: white;
          transform: scale(1.1);
        }
      `}</style>

      <div className={`flex flex-col ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        {/* Enhanced Hero Section */}
        <section className="relative h-screen w-full overflow-hidden hero-bg">
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100">
            <img 
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop&crop=center" 
              alt="African landscape showcasing traditional leadership"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="absolute inset-0 hero-gradient" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                Uniting Africa's
                <br />
                <span className="animate-float inline-block">Traditional Leaders</span>
              </h1>

              <p className="mt-6 max-w-4xl mx-auto text-xl md:text-2xl font-light leading-relaxed text-gray-700">
                Fostering Peace, Unity, and Sustainable Development Through
                <span className="font-semibold text-amber-800"> Collaboration </span>
                and
                <span className="font-semibold text-amber-800"> Heritage</span>.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                <button className="magnetic-button bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-600 hover:to-orange-600 text-white text-xl px-10 py-6 rounded-full font-bold border-2 border-amber-200 inline-flex items-center justify-center">
                  <span>Discover Our Mission</span>
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>

                <button className="magnetic-button glass-card text-amber-800 hover:text-white hover:bg-amber-700 text-xl px-10 py-6 rounded-full font-bold border-2 border-amber-300 inline-flex items-center justify-center">
                  <Play className="mr-3 h-6 w-6" />
                  <span>Join Our Movement</span>
                </button>
              </div>

              {/* Stats Preview */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-card rounded-2xl p-6 text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex justify-center mb-3 text-amber-700">
                      {React.cloneElement(stat.icon, { className: "w-8 h-8" })}
                    </div>
                    <div className="stats-counter text-3xl md:text-4xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-indicator">
              <ChevronDown className="w-8 h-8" />
            </div>
          </div>
        </section>

        {/* Enhanced Welcome Section */}
        <section className="py-24 px-4 md:px-8 soil-gradient-bg relative overflow-hidden">
          <div className="floating-shapes opacity-30">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="animate-fade-in-up">
              <h2 className="section-title text-4xl md:text-6xl font-bold mb-8">
                Welcome to FATA Connect
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-700 to-orange-700 mx-auto mb-8 rounded-full"></div>

              <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light">
                FATA is a dedicated organization that brings together traditional authorities from across the African continent.
                Our mission is to leverage traditional leadership to foster
                <span className="font-semibold text-amber-800"> peace</span>, preserve
                <span className="font-semibold text-amber-800"> cultural heritage</span>, promote
                <span className="font-semibold text-amber-800"> unity</span>, and support
                <span className="font-semibold text-amber-800"> sustainable development</span> for all communities.
              </p>

              <button className="mt-8 text-amber-800 text-xl font-bold group hover:text-amber-900 inline-flex items-center bg-transparent border-none cursor-pointer">
                Explore Our Complete Story
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced Featured News Section */}
        <section className="py-24 px-4 md:px-8 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
                Latest News & Impact Stories
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-700 to-orange-700 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about our latest initiatives, achievements, and the positive impact we're making across Africa.
              </p>
            </div>

            <div className="carousel-container">
              <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
                {featuredNews.map((news, index) => (
                  <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 snap-start">
                    <div className="news-card h-full flex flex-col overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="category-badge">
                            {news.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-8 flex-grow flex flex-col">
                        <div className="text-sm text-amber-700 font-semibold mb-3">
                          {new Date(news.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-black hover:text-amber-800 transition-colors duration-300">
                          {news.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed flex-grow text-lg">
                          {news.description}
                        </p>
                        <div className="mt-6 flex items-center text-amber-700 font-semibold hover:text-amber-800 transition-colors duration-300">
                          <span>Read Full Story</span>
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Quick Navigation Section */}
        <section className="py-24 px-4 md:px-8 soil-gradient-bg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
                Explore FATA Connect
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-700 to-orange-700 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the different facets of our organization and find ways to connect with our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {quickNav.map((item, index) => (
                <div
                  key={item.title}
                  className="group animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="quick-nav-card p-8 h-full text-center rounded-2xl shadow-lg">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-full text-amber-700 group-hover:from-amber-700 group-hover:to-orange-700 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                        {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                      </div>
                      <h3 className="text-xl font-bold text-black group-hover:text-amber-800 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <ArrowRight className="w-5 h-5 text-amber-600" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 px-4 md:px-8 dark-soil-bg text-white relative overflow-hidden">
          <div className="floating-shapes opacity-20">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl md:text-2xl text-amber-100 mb-12 leading-relaxed">
                Join us in our mission to unite traditional leaders and build a more peaceful,
                prosperous Africa for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="magnetic-button bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xl px-10 py-6 rounded-full font-bold inline-flex items-center justify-center">
                  <Heart className="mr-3 h-6 w-6" />
                  Get Involved Today
                </button>
                <button className="magnetic-button bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-amber-800 text-xl px-10 py-6 rounded-full font-bold border-2 border-white/30 inline-flex items-center justify-center">
                  <Zap className="mr-3 h-6 w-6" />
                  Support Our Cause
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}