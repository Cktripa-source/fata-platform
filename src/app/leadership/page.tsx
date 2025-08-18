'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Crown,
  Users,
  MapPin,
  Sparkles,
  Star,
  Globe,
  Shield,
  Award,
  Briefcase
} from 'lucide-react';

const leaders = [
  {
    name: 'HRH Izakare Drani Stephen',
    title: 'President',
    country: 'Uganda',
    gradient: 'from-amber-600 to-yellow-600',
    level: 'executive'
  },
  {
    name: 'HRH Dissake Camille',
    title: 'Vice President',
    country: 'Cameroon',
    gradient: 'from-yellow-600 to-orange-600',
    level: 'executive'
  },
  {
    name: 'HRH Kapinga Smogy Isaac',
    title: 'Secretary General',
    country: 'Zambia',
    gradient: 'from-amber-700 to-yellow-700',
    level: 'executive'
  },
  {
    name: 'HRH Naana Kabukour Dumaaley Dagojo1',
    title: 'Vice Secretary General',
    country: 'Ghana',
    gradient: 'from-orange-600 to-amber-600',
    level: 'executive'
  },
  {
    name: 'HRH Brook Temesgen',
    title: 'Treasurer General',
    country: 'Ethiopia',
    gradient: 'from-yellow-700 to-amber-800',
    level: 'executive'
  },
  {
    name: 'Baridam Suanu Timothy Yormaadam',
    title: 'Vice Treasurer General',
    country: 'Nigeria',
    gradient: 'from-amber-600 to-orange-700',
    level: 'executive'
  },
  {
    name: 'Bezo IV Mahamat Moussa',
    title: 'Supreme Council President',
    country: 'Chad',
    gradient: 'from-yellow-600 to-amber-700',
    level: 'council'
  },
  {
    name: 'Abdireshd Esmeal',
    title: 'Vice Publicity Secretary',
    country: 'Somalia',
    gradient: 'from-orange-600 to-yellow-700',
    level: 'council'
  },
  {
    name: 'Elhadji Malick Ngom',
    title: 'President of Advisory Council',
    country: 'Senegal',
    gradient: 'from-amber-700 to-orange-600',
    level: 'advisory'
  },
  {
    name: 'Boka Yapi Julien',
    title: 'Supreme Council Member',
    country: 'Ivory Coast',
    gradient: 'from-yellow-700 to-amber-600',
    level: 'council'
  },
];

export default function LeadershipPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const orgChartRef = useRef<HTMLDivElement>(null);
  const leadersRef = useRef<HTMLDivElement>(null);
  const [orgChartInView, setOrgChartInView] = useState(false);
  const [leadersInView, setLeadersInView] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observers
    const observerOptions = { threshold: 0.3 };

    const orgChartObserver = new IntersectionObserver(
      ([entry]) => setOrgChartInView(entry.isIntersecting),
      observerOptions
    );

    const leadersObserver = new IntersectionObserver(
      ([entry]) => setLeadersInView(entry.isIntersecting),
      observerOptions
    );

    if (orgChartRef.current) orgChartObserver.observe(orgChartRef.current);
    if (leadersRef.current) leadersObserver.observe(leadersRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      orgChartObserver.disconnect();
      leadersObserver.disconnect();
    };
  }, []);

  const getRoleIcon = (title: string) => {
    if (title.includes('President')) return <Crown className="h-5 w-5" />;
    if (title.includes('Secretary')) return <Briefcase className="h-5 w-5" />;
    if (title.includes('Treasurer')) return <Award className="h-5 w-5" />;
    if (title.includes('Council')) return <Shield className="h-5 w-5" />;
    return <Star className="h-5 w-5" />;
  };

  const executiveLeaders = leaders.filter(leader => leader.level === 'executive');
  const councilLeaders = leaders.filter(leader => leader.level === 'council');
  const advisoryLeaders = leaders.filter(leader => leader.level === 'advisory');

  return (
    <div className={`min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(16)].map((_, i) => (
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
      <header className="relative py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(180,83,9,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(217,119,6,0.2) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-md rounded-full border border-amber-200">
            <Crown className="h-4 w-4 text-amber-700" />
            <span className="text-amber-800 text-sm font-medium">Leadership Excellence</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
            Our Leadership
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Meet the dedicated council and representatives leading the Forum of African Traditional Authorities
          </p>
        </div>
      </header>

      {/* Organizational Structure */}
      <section ref={orgChartRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
              Organizational Structure
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our hierarchical framework designed for effective governance and collaboration
            </p>
          </div>

          <div
            className={`relative group transition-all duration-700 ${orgChartInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

            <Card className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="p-8">
                <div className="aspect-video relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100">
                  <img
                    src="https://images.unsplash.com/photo-1553028826-f4804151e0b2?w=1200&h=800&fit=crop&crop=center"
                    alt="FATA Organizational Chart"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 border border-amber-200">
                      <span className="text-amber-800 font-semibold text-sm">Governance Structure</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50/50 to-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-md rounded-full border border-amber-200 mb-6">
              <Crown className="h-4 w-4 text-amber-700" />
              <span className="text-amber-800 text-sm font-medium">Executive Team</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
              Executive Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {executiveLeaders.map((leader, index) => {
              // Use different images for variety
              const imageUrls = [
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
              ];

              return (
                <div
                  key={leader.name}
                  className="group relative transition-all duration-700 hover:scale-105"
                  style={{
                    opacity: 0,
                    transform: 'translateY(30px)',
                    animation: `fadeInUp 0.8s ease-out ${index * 150}ms forwards`
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${leader.gradient} rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />

                  <Card className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl overflow-hidden h-full hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <CardHeader className="p-0 relative">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={imageUrls[index % imageUrls.length]}
                          alt={`Portrait of ${leader.name}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${leader.gradient} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {getRoleIcon(leader.title)}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                      <CardTitle className="text-lg font-bold text-black group-hover:text-amber-800 transition-colors mb-2 leading-tight">
                        {leader.name}
                      </CardTitle>
                      <p className={`bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent font-semibold mb-3 text-sm`}>
                        {leader.title}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{leader.country}</span>
                      </div>
                    </CardContent>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${leader.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `
        }} />
      </section>

      {/* Council & Advisory Leadership */}
      <section ref={leadersRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Council Leadership */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-md rounded-full border border-amber-200 mb-6">
                <Shield className="h-4 w-4 text-amber-700" />
                <span className="text-amber-800 text-sm font-medium">Council Members</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
                Supreme Council
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {councilLeaders.map((leader, index) => (
                <div
                  key={leader.name}
                  className={`group relative transition-all duration-700 ${leadersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${leader.gradient} rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />

                  <Card className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl overflow-hidden h-full hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                    <CardHeader className="p-0 relative">
                      <div className="aspect-square relative">
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                          alt={`Portrait of ${leader.name}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${leader.gradient} rounded-full flex items-center justify-center text-white shadow-lg`}>
                            {getRoleIcon(leader.title)}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                      <CardTitle className="text-xl font-bold text-black group-hover:text-amber-800 transition-colors mb-2">
                        {leader.name}
                      </CardTitle>
                      <p className={`bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent font-semibold mb-2`}>
                        {leader.title}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{leader.country}</span>
                      </div>
                    </CardContent>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${leader.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Leadership */}
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-md rounded-full border border-amber-200 mb-6">
                <Globe className="h-4 w-4 text-amber-700" />
                <span className="text-amber-800 text-sm font-medium">Advisory Council</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
                Advisory Leadership
              </h3>
            </div>

            <div className="flex justify-center">
              {advisoryLeaders.map((leader, index) => (
                <div
                  key={leader.name}
                  className={`group relative transition-all duration-700 max-w-sm ${leadersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${(index + 9) * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${leader.gradient} rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />

                  <Card className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl overflow-hidden h-full hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                    <CardHeader className="p-0 relative">
                      <div className="aspect-square relative">
                        <img
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                          alt={`Portrait of ${leader.name}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${leader.gradient} rounded-full flex items-center justify-center text-white shadow-lg`}>
                            {getRoleIcon(leader.title)}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                      <CardTitle className="text-xl font-bold text-black group-hover:text-amber-800 transition-colors mb-2">
                        {leader.name}
                      </CardTitle>
                      <p className={`bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent font-semibold mb-2`}>
                        {leader.title}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{leader.country}</span>
                      </div>
                    </CardContent>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${leader.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl p-12 shadow-2xl">
              <div className="mb-8">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-4xl font-bold text-black mb-6">
                  Leadership Excellence
                </h3>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Our diverse leadership represents the rich tapestry of African traditional authority, working together for continental unity and progress
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 rounded-full text-white font-semibold px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 inline-flex items-center gap-2">
                  Connect With Leadership
                  <Sparkles className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}