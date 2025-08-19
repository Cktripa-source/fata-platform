'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Twitter, Facebook, Linkedin, Youtube, Mail, MapPin, Phone, ArrowUp, Heart, Send } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from '../components/image/logo.png'

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/events', label: 'Events' },
    { href: '/news', label: 'News & Media' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/donate', label: 'Donate' },
  ];

  const socialLinks = [
    { 
      href: '#', 
      icon: <Twitter className="h-5 w-5" />, 
      label: 'Twitter',
      color: 'hover:bg-blue-500'
    },
    { 
      href: '#', 
      icon: <Facebook className="h-5 w-5" />, 
      label: 'Facebook',
      color: 'hover:bg-blue-600'
    },
    { 
      href: '#', 
      icon: <Linkedin className="h-5 w-5" />, 
      label: 'LinkedIn',
      color: 'hover:bg-blue-700'
    },
    { 
      href: '#', 
      icon: <Youtube className="h-5 w-5" />, 
      label: 'YouTube',
      color: 'hover:bg-red-600'
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'info@fataconnect.org',
      href: 'mailto:info@fataconnect.org'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Address',
      value: 'Pan-African Unity Center, Accra, Ghana',
      href: '#'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        
        :root {
          --soil-primary: #8B4513;
          --soil-secondary: #A0522D;
          --soil-light: #D2691E;
          --soil-dark: #654321;
          --earth-cream: #F5F5DC;
          --stone-gray: #696969;
          --sand-beige: #F4A460;
        }

        .footer-gradient {
          background: linear-gradient(
            135deg,
            #2F1B14 0%,
            #3D2B1F 25%,
            #4A3429 50%,
            #3D2B1F 75%,
            #2F1B14 100%
          );
          position: relative;
          overflow: hidden;
        }

        .footer-overlay {
          background: linear-gradient(
            135deg,
            rgba(139, 69, 19, 0.1) 0%,
            rgba(160, 82, 45, 0.05) 50%,
            rgba(139, 69, 19, 0.1) 100%
          );
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
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
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }

        .logo-container {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .logo-container:hover {
          animation: float 2s ease-in-out infinite;
        }

        .brand-text {
          background: linear-gradient(
            135deg,
            #F5F5DC 0%,
            #D2691E 25%,
            #F4A460 50%,
            #D2691E 75%,
            #F5F5DC 100%
          );
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s ease-in-out infinite;
          font-family: 'Playfair Display', serif;
        }

        .social-icon {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .social-icon:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .link-hover {
          position: relative;
          transition: all 0.3s ease;
        }

        .link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--soil-light), var(--sand-beige));
          transition: width 0.3s ease;
        }

        .link-hover:hover::after {
          width: 100%;
        }

        .link-hover:hover {
          color: var(--sand-beige);
          transform: translateX(4px);
        }

        .newsletter-form {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .newsletter-form:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .newsletter-button {
          background: linear-gradient(135deg, var(--soil-primary), var(--soil-light));
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .newsletter-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .newsletter-button:hover::before {
          left: 100%;
        }

        .newsletter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(139, 69, 19, 0.4);
        }

        .scroll-top-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 50;
          background: linear-gradient(135deg, var(--soil-primary), var(--soil-light));
          color: white;
          border: none;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 8px 25px rgba(139, 69, 19, 0.4);
          opacity: 0;
          transform: translateY(20px);
        }

        .scroll-top-button.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-top-button:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 15px 35px rgba(139, 69, 19, 0.6);
          animation: pulse 1.5s infinite;
        }

        .contact-item {
          transition: all 0.3s ease;
          padding: 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(8px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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
          background: radial-gradient(circle, rgba(245, 245, 220, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 20s infinite linear;
        }

        .shape:nth-child(1) {
          width: 300px;
          height: 300px;
          top: -10%;
          left: 10%;
          animation-delay: -2s;
        }

        .shape:nth-child(2) {
          width: 200px;
          height: 200px;
          top: 40%;
          right: 5%;
          animation-delay: -8s;
        }

        .shape:nth-child(3) {
          width: 150px;
          height: 150px;
          bottom: 10%;
          left: 60%;
          animation-delay: -15s;
        }

        .success-message {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          padding: 12px 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          space-x: 8px;
          animation: fadeInUp 0.5s ease-out;
        }

        @media (max-width: 768px) {
          .scroll-top-button {
            bottom: 1rem;
            right: 1rem;
            width: 48px;
            height: 48px;
          }
        }
      `}</style>

      <footer className="footer-gradient text-white relative mt-10">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        <div className="footer-overlay absolute inset-0"></div>
        
        <div className="container py-16 px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 animate-fade-in-up">
              <Link href="/" className="logo-container flex items-center gap-3 mb-6 inline-block">
                <div className="relative">
                  <Image 
                    src={Logo} 
                    alt="FATA Logo" 
                    width={48} 
                    height={48} 
                    className="h-12 w-12 filter drop-shadow-lg" 
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/20 to-orange-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150"></div>
                </div>
                <span className="brand-text font-bold text-2xl">
                  FATA Connect
                </span>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Uniting traditional leaders across Africa for peace, cultural preservation, and sustainable development. Building bridges for a prosperous future.
              </p>
              
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Link 
                    key={index}
                    href={social.href} 
                    aria-label={social.label}
                    className={`social-icon w-12 h-12 rounded-full flex items-center justify-center text-gray-300 hover:text-white ${social.color}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-bold text-xl mb-6 text-amber-200">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="link-hover text-gray-300 hover:text-amber-200 transition-all duration-300 inline-block"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-bold text-xl mb-6 text-amber-200">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="contact-item">
                    <Link 
                      href={contact.href}
                      className="flex items-start space-x-3 text-gray-300 hover:text-amber-200 transition-colors duration-300"
                    >
                      <div className="text-amber-400 mt-1 flex-shrink-0">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-amber-200">{contact.label}</div>
                        <div className="text-sm">{contact.value}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-bold text-xl mb-6 text-amber-200">Stay Connected</h3>
              <div className="newsletter-form">
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Subscribe to receive updates on our initiatives, events, and the positive impact we're making together.
                </p>
                
                {isSubscribed ? (
                  <div className="success-message">
                    <Heart className="h-5 w-5" />
                    <span className="font-medium">Thank you for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-400 focus:ring-amber-400/20 rounded-xl"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="newsletter-button w-full rounded-xl font-semibold text-white border-0"
                      disabled={!email}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Subscribe Now
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} Forum of African Traditional Authorities (FATA). All Rights Reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Building unity • Preserving culture • Creating lasting peace
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="link-hover text-gray-400 hover:text-amber-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="link-hover text-gray-400 hover:text-amber-200">
                  Terms of Use
                </Link>
                <div className="flex items-center text-gray-500">
                  <span className="text-xs mr-1">Made with</span>
                  <Heart className="h-3 w-3 text-red-500" />
                  <span className="text-xs ml-1">for Africa</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`scroll-top-button ${showScrollTop ? 'visible' : ''}`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </footer>
    </>
  );
}