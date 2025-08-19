"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Sparkles, ArrowRight, Clock, Users } from 'lucide-react';

import Image from 'next/image';
import Meet4 from '../image/meet4.jpeg';
import Meet5 from '../image/meet5.jpeg';
import Meet6 from '../image/meet6.jpeg';
import Meet7 from '../image/meet7.jpeg';
import Meet8 from '../image/meet8.jpeg';
import Meet9 from '../image/meet9.jpeg';
import { useRouter } from 'next/navigation';
const upcomingEvents = [
  {
    title: 'FATA Annual General Assembly 2024',
    date: 'October 25-27, 2024',
    location: 'Accra, Ghana',
    description: 'The premier gathering of traditional leaders to set the agenda for the upcoming year, featuring keynote speeches, workshops, and cultural showcases. This year\'s theme is "Youth Engagement in Traditional Governance". Registration is now open for all members and partners.',
    image:Meet4,
    gradient: 'from-amber-600 to-yellow-600',
    attendees: '500+ Expected',
    duration: '3 Days',
  },
];

const pastEvents = [
  {
    title: 'Peacebuilding Summit in the Horn of Africa',
    date: 'March 15, 2024',
    location: 'Addis Ababa, Ethiopia',
    summary: 'A landmark summit that brought together traditional leaders from across the Horn of Africa to address regional conflicts and foster cross-border cooperation. Key outcomes included the signing of a joint peace declaration and the establishment of a regional council of elders for conflict mediation.',
    image: Meet5,
    gradient: 'from-amber-700 to-orange-600',
    impact: '12 Countries Participated',
    outcome: 'Joint Peace Declaration',
  },
  {
    title: 'Cultural Heritage Festival',
    date: 'November 20, 2023',
    location: 'Dakar, Senegal',
    summary: 'A vibrant celebration of African cultural diversity, featuring music, dance, art, and storytelling from over 30 different traditions. The festival attracted thousands of visitors and provided a platform for artisans and performers to showcase their talents.',
    image:Meet6,
    gradient: 'from-yellow-600 to-amber-700',
    impact: '30+ Traditions Featured',
    outcome: '5000+ Visitors',
  },
];

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const upcomingRef = useRef<HTMLDivElement>(null);
  const pastRef = useRef<HTMLDivElement>(null);
  const [upcomingInView, setUpcomingInView] = useState(false);
  const [pastInView, setPastInView] = useState(false);

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

    const upcomingObserver = new IntersectionObserver(
      ([entry]) => setUpcomingInView(entry.isIntersecting),
      observerOptions
    );

    const pastObserver = new IntersectionObserver(
      ([entry]) => setPastInView(entry.isIntersecting),
      observerOptions
    );

    if (upcomingRef.current) upcomingObserver.observe(upcomingRef.current);
    if (pastRef.current) pastObserver.observe(pastRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      upcomingObserver.disconnect();
      pastObserver.disconnect();
    };
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(180,83,9,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(217,119,6,0.2) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-md rounded-full border border-amber-200">
            <Calendar className="h-4 w-4 text-amber-700" />
            <span className="text-amber-800 text-sm font-medium">Events & Gatherings</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
            Events
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Stay informed about our upcoming gatherings and explore highlights from transformative past events
          </p>
        </div>
      </header>

      {/* Upcoming Events */}
      <section ref={upcomingRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Join us at these transformative gatherings shaping Africa's future
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className={`group relative transition-all duration-700 ${upcomingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} rounded-3xl blur-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />

                <Card className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-2/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 z-10" />
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={800}
                        height={600}
                        className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 border border-amber-200">
                          <span className="text-amber-800 font-semibold text-sm">Featured Event</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-8 lg:p-12">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-amber-600" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-amber-600" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-amber-600" />
                            <span>{event.attendees}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-amber-600" />
                            <span>{event.duration}</span>
                          </div>
                        </div>
                        <CardTitle className="text-3xl font-bold text-black group-hover:text-amber-800 transition-colors">
                          {event.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="p-0 mb-8">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {event.description}
                        </p>
                      </CardContent>

                      <CardFooter className="p-0 flex flex-wrap gap-4">
                        <Button className={`group bg-gradient-to-r ${event.gradient} hover:shadow-lg text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105`}>
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" className="border-amber-200 text-amber-800 hover:bg-amber-50 px-6 py-3 rounded-full">
                          Learn More
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section ref={pastRef} className="py-20 px-4 bg-gradient-to-b from-amber-25 to-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
              Past Events
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Celebrating our achievements and the impact we've made together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={event.title}
                className={`group relative transition-all duration-700 ${pastInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} rounded-3xl blur-xl opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />

                <Card className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl overflow-hidden h-full hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                  {/* Image Header */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={800}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="bg-white/90 backdrop-blur-md rounded-full px-3 py-1">
                        <span className="text-amber-800 font-medium text-xs">Completed</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-amber-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-amber-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-amber-800 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      {event.summary}
                    </p>

                    {/* Impact Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-100">
                        <div className="text-lg font-bold text-amber-800">{event.impact}</div>
                        <div className="text-xs text-gray-600">Impact</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-50 rounded-xl border border-yellow-100">
                        <div className="text-lg font-bold text-yellow-800">{event.outcome}</div>
                        <div className="text-xs text-gray-600">Outcome</div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Button variant="outline" className="w-full border-amber-200 text-amber-800 hover:bg-amber-50 rounded-full group">
                      View Full Report
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white/95 backdrop-blur-xl border border-amber-200 rounded-3xl p-12 shadow-2xl">
              <div className="mb-6">
                <Sparkles className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-black mb-4">
                  Don't Miss Our Next Event
                </h3>
                <p className="text-xl text-gray-700 mb-8">
                  Be part of Africa's transformation through traditional leadership excellence
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 rounded-full text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
                  Subscribe to Updates
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-amber-200 text-amber-800 hover:bg-amber-50 rounded-full px-8 py-3">
                  View Event Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}