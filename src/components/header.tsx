'use client';

import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '../components/image/logo.png'
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  
  { href: '/activities', label: 'Activities' },
  { href: '/events', label: 'Events' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/news', label: 'News & Media' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        :root {
          --soil-primary: #8B4513;
          --soil-secondary: #A0522D;
          --soil-light: #D2691E;
          --soil-dark: #654321;
          --earth-cream: #F5F5DC;
          --stone-gray: #696969;
        }

        .header-bg {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(245, 245, 220, 0.92) 50%,
            rgba(255, 255, 255, 0.95) 100%
          );
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(139, 69, 19, 0.08);
        }

        .header-scrolled {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(25px) saturate(200%);
          box-shadow: 0 8px 32px rgba(139, 69, 19, 0.12);
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(2deg); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 69, 19, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 69, 19, 0.5);
          }
        }

        .logo-container {
          position: relative;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .logo-container:hover {
          animation: logoFloat 2s ease-in-out infinite;
        }

        .logo-container::before {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: conic-gradient(from 0deg, var(--soil-primary), var(--soil-light), var(--soil-secondary), var(--soil-primary));
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .logo-container:hover::before {
          opacity: 0.7;
        }

        .nav-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(139, 69, 19, 0.1),
            transparent
          );
          transition: left 0.5s;
        }

        .nav-item:hover::before {
          left: 100%;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--soil-primary), var(--soil-light));
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-item:hover::after,
        .nav-item.active::after {
          width: 80%;
        }

        .brand-text {
          background: linear-gradient(
            135deg,
            var(--soil-dark) 0%,
            var(--soil-primary) 25%,
            var(--soil-light) 50%,
            var(--soil-secondary) 75%,
            var(--soil-dark) 100%
          );
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .donate-btn {
          background: linear-gradient(135deg, var(--soil-primary) 0%, var(--soil-light) 100%);
          position: relative;
          overflow: hidden;
          border: none;
          box-shadow: 0 4px 15px rgba(139, 69, 19, 0.4);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .donate-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s;
        }

        .donate-btn:hover::before {
          left: 100%;
        }

        .donate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 69, 19, 0.6);
        }

        .mobile-menu-bg {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(245, 245, 220, 0.95) 30%,
            rgba(255, 255, 255, 0.98) 70%,
            rgba(245, 245, 220, 0.95) 100%
          );
          backdrop-filter: blur(30px) saturate(180%);
        }

        .mobile-menu-item {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: fadeInScale 0.5s ease-out;
          animation-delay: calc(var(--item-index) * 0.1s);
          animation-fill-mode: both;
        }

        .mobile-menu-item::before {
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

        .mobile-menu-item:hover::before {
          opacity: 0.08;
        }

        .mobile-menu-item:hover {
          transform: translateX(8px) scale(1.02);
          box-shadow: 0 8px 25px rgba(139, 69, 19, 0.15);
        }

        .hamburger-icon {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .hamburger-icon:hover {
          transform: scale(1.1) rotate(180deg);
        }

        .close-icon {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .close-icon:hover {
          transform: scale(1.1) rotate(90deg);
          color: #ef4444;
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: -1;
        }

        .shape {
          position: absolute;
          background: radial-gradient(circle, rgba(139, 69, 19, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 20s infinite linear;
        }

        .shape:nth-child(1) {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation-delay: -2s;
        }

        .shape:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 20%;
          animation-delay: -8s;
        }

        .shape:nth-child(3) {
          width: 80px;
          height: 80px;
          bottom: 30%;
          left: 70%;
          animation-delay: -15s;
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(-10px) rotate(240deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }

        .glass-border {
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 8px 32px rgba(31, 38, 135, 0.37),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <header className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out",
        isScrolled
          ? "header-scrolled h-16 py-2"
          : "header-bg h-20 py-4"
      )}>
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="logo-container">
                <Image
                  src={Logo}
                  alt="FATA Logo"
                  width={isScrolled ? 40 : 48}
                  height={isScrolled ? 40 : 48}
                  className={cn(
                    "transition-all duration-500 ease-out",
                    "filter drop-shadow-lg group-hover:drop-shadow-xl",
                    "group-hover:scale-110"
                  )}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "brand-text font-bold transition-all duration-500",
                  isScrolled ? "text-xl" : "text-2xl lg:text-3xl"
                )}>
                  FATA
                </span>
                <span className="text-xs text-stone-900 font-medium -mt-1 duration-300">
                  Building Communities
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-item px-4 py-3 text-sm font-semibold transition-all duration-300",
                    "hover:bg-gradient-to-r hover:from-stone-50 hover:to-amber-50",
                    "hover:text-amber-900 hover:scale-105 hover:-translate-y-0.5",
                    pathname === link.href
                      ? "active bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 scale-105"
                      : "text-stone-700"
                  )}
                  style={{ '--item-index': index } as React.CSSProperties}
                >
                  {link.label}
                </Link>
              ))}

              <Button
                asChild
                className={cn(
                  "donate-btn ml-6 px-6 py-3 text-white font-bold rounded-full",
                  "text-sm tracking-wide uppercase"
                )}
              >
                <Link href="/donate">
                  Donate Now
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative rounded-full hover:bg-amber-50 hover:scale-110 transition-all duration-300"
                  >
                    <Menu className="hamburger-icon h-6 w-6 text-stone-700" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="mobile-menu-bg w-full border-none glass-border"
                >
                  {/* Mobile Menu Header */}
                  <div className="flex justify-between items-center mb-12 pb-6 border-b border-stone-200">
                    <Link
                      href="/"
                      className="flex items-center space-x-3 group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="logo-container">
                        <Image
                          src="https://i.ibb.co/q5k1P9q/logo.png"
                          alt="FATA Logo"
                          width={36}
                          height={36}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="brand-text font-bold text-xl">
                        FATA Connect
                      </span>
                    </Link>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-full hover:bg-red-50 transition-colors duration-300"
                    >
                      <X className="close-icon h-6 w-6 text-stone-700" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="space-y-3">
                    {navLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "mobile-menu-item flex items-center justify-between px-6 py-4",
                          "text-lg font-semibold transition-all duration-300",
                          pathname === link.href
                            ? "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 scale-105"
                            : "text-stone-700 hover:text-amber-800"
                        )}
                        style={{ '--item-index': index } as React.CSSProperties}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="h-5 w-5 opacity-60 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    ))}

                    <div className="pt-8">
                      <Button
                        asChild
                        className={cn(
                          "donate-btn w-full py-4 text-white font-bold rounded-xl",
                          "text-lg tracking-wide uppercase"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Link href="/donate">
                          <span>Donate Now</span>
                          <ChevronRight className="ml-3 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className={cn("transition-all duration-500", isScrolled ? "h-16" : "h-20")} />
    </>
  );
}