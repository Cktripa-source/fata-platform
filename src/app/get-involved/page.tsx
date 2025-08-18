'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  CheckCircle2,
  Sparkles,
  Users,
  Heart,
  Calendar,
  Mail,
  HandHeart,
  Target,
  ArrowRight,
  Gift,
  Briefcase,
  BookOpen
} from 'lucide-react';

export default function GetInvolvedPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const whoCanJoinRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const [whoCanJoinInView, setWhoCanJoinInView] = useState(false);
  const [supportInView, setSupportInView] = useState(false);

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

    const whoCanJoinObserver = new IntersectionObserver(
      ([entry]) => setWhoCanJoinInView(entry.isIntersecting),
      observerOptions
    );

    const supportObserver = new IntersectionObserver(
      ([entry]) => setSupportInView(entry.isIntersecting),
      observerOptions
    );

    if (whoCanJoinRef.current) whoCanJoinObserver.observe(whoCanJoinRef.current);
    if (supportRef.current) supportObserver.observe(supportRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      whoCanJoinObserver.disconnect();
      supportObserver.disconnect();
    };
  }, []);

  const whoCanJoin = [
    {
      title: 'Traditional leaders and authorities',
      icon: <Users className="h-5 w-5" />,
      gradient: 'from-amber-600 to-yellow-600'
    },
    {
      title: 'Civil society and non-governmental organizations',
      icon: <HandHeart className="h-5 w-5" />,
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      title: 'Donors and philanthropic foundations',
      icon: <Gift className="h-5 w-5" />,
      gradient: 'from-amber-700 to-yellow-700'
    },
    {
      title: 'Academic and research institutions',
      icon: <BookOpen className="h-5 w-5" />,
      gradient: 'from-orange-600 to-amber-600'
    },
    {
      title: 'Youth and women\'s groups dedicated to our cause',
      icon: <Target className="h-5 w-5" />,
      gradient: 'from-yellow-700 to-amber-800'
    }
  ];

  const supportOptions = [
    {
      title: 'Become a Partner',
      description: 'Collaborate with us on projects, sponsor our initiatives, and join our network of organizations committed to African development.',
      icon: <Briefcase className="h-8 w-8" />,
      gradient: 'from-amber-600 to-yellow-600',
      buttonText: 'Partner With Us'
    },
    {
      title: 'Donate',
      description: 'Your financial contribution directly supports our peace-building missions, cultural preservation efforts, and community programs.',
      icon: <Heart className="h-8 w-8" />,
      gradient: 'from-yellow-600 to-orange-600',
      buttonText: 'Make a Donation'
    },
    {
      title: 'Sponsor an Event',
      description: 'Gain visibility and show your commitment by sponsoring our annual forum, a cultural festival, or a peace-building workshop.',
      icon: <Calendar className="h-8 w-8" />,
      gradient: 'from-orange-600 to-amber-700',
      buttonText: 'Sponsor Event'
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
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
            backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(180,83,9,0.2) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(217,119,6,0.2) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-md rounded-full border border-amber-200">
            <HandHeart className="h-4 w-4 text-amber-700" />
            <span className="text-amber-800 text-sm font-medium">Join Our Mission</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
            Get Involved
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            Your participation and support are vital to our mission. Discover how you can contribute to a better Africa.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 rounded-full text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-amber-200 text-amber-800 hover:bg-amber-50 rounded-full px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </header>

      {/* Who Can Join Section */}
      <section ref={whoCanJoinRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
              Who Can Join?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We welcome diverse partners committed to Africa's transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoCanJoin.map((item, index) => (
              <div
                key={item.title}
                className={`group relative transition-all duration-700 ${whoCanJoinInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />

                <Card className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-2xl p-6 h-full hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mb-2" />
                        <p className="text-gray-800 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    <div className={`mt-4 h-0.5 bg-gradient-to-r ${item.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Volunteer Section */}
          <div className="mt-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <Card className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-amber-700 to-yellow-700 rounded-2xl flex items-center justify-center">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-black group-hover:text-amber-800 transition-colors">
                      Volunteer Opportunities
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    We occasionally have opportunities for skilled professionals to volunteer their time and expertise in areas like event management, research, communications, and program support.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    If you are interested in volunteering, please send your resume and a cover letter detailing your interests to our contact email.
                  </p>
                  <Button className="group bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 rounded-full text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105">
                    <a href="mailto:brooksewt@gmail.com" className="flex items-center gap-2">
                      Contact Us to Volunteer
                      <Mail className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Support Section */}
      <section ref={supportRef} className="py-20 px-4 bg-gradient-to-b from-amber-25 to-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
              How to Support
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Multiple ways to make a meaningful impact on Africa's future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div
                key={option.title}
                className={`group relative transition-all duration-700 ${supportInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${option.gradient} rounded-3xl blur-xl opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />

                <Card className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl p-8 h-full hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                  <CardHeader className="pb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${option.gradient} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {option.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-black group-hover:text-amber-800 transition-colors">
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors mb-8">
                      {option.description}
                    </p>
                    <Button className={`w-full bg-gradient-to-r ${option.gradient} hover:shadow-lg text-white font-semibold rounded-full py-3 transition-all duration-300 group-hover:scale-105`}>
                      {option.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${option.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <Card className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl p-12 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-700 to-yellow-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-amber-800 transition-colors">
                  Join Our Newsletter
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  Stay informed about our work and impact. Sign up for updates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/80 border-amber-200 rounded-full px-6 py-3 focus:border-amber-400 focus:ring-amber-400/20"
                />
                <Button
                  className="bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 rounded-full text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl p-12 shadow-2xl">
              <div className="mb-8">
                <Sparkles className="h-12 w-12 text-amber-600 mx-auto mb-6 animate-pulse" />
                <h3 className="text-4xl font-bold text-black mb-6">
                  Ready to Make a Difference?
                </h3>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Every contribution, big or small, helps us build a more peaceful, united, and prosperous Africa
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 rounded-full text-white font-semibold px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
                  Get Started Today
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-amber-200 text-amber-800 hover:bg-amber-50 rounded-full px-8 py-4">
                  Contact Us
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}