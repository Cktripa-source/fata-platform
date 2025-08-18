'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Heart, 
  Landmark, 
  Sprout, 
  Users, 
  Shield, 
  Award, 
  Globe, 
  CheckCircle,
  CreditCard,
  Lock,
  Star,
  ArrowRight,
  Zap
} from "lucide-react";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [donationType, setDonationType] = useState('one-time');

  const donationImpact = [
    { 
      title: 'Peacebuilding Missions', 
      icon: <Heart className="h-8 w-8" />,
      description: 'Mediating conflicts and building lasting peace',
      color: 'from-red-500 to-pink-500'
    },
    { 
      title: 'Cultural Preservation', 
      icon: <Landmark className="h-8 w-8" />,
      description: 'Protecting African heritage and traditions',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      title: 'Community Development', 
      icon: <Sprout className="h-8 w-8" />,
      description: 'Sustainable projects for rural communities',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Youth Engagement', 
      icon: <Users className="h-8 w-8" />,
      description: 'Empowering next generation leaders',
      color: 'from-purple-500 to-violet-500'
    },
  ];

  const impactLevels = [
    { amount: 25, impact: 'Provides educational materials for 5 youth leaders' },
    { amount: 50, impact: 'Funds one day of community mediation training' },
    { amount: 100, impact: 'Supports cultural documentation project for one month' },
    { amount: 250, impact: 'Enables a complete peace-building workshop' },
    { amount: 500, impact: 'Funds a full community development initiative' }
  ];

  const testimonials = [
    {
      name: 'Chief Amara Kone',
      location: 'Mali',
      text: 'FATA\'s support helped us resolve a 10-year land dispute peacefully.',
      rating: 5
    },
    {
      name: 'Elder Sarah Mwangi',
      location: 'Kenya',
      text: 'Thanks to FATA, our cultural festivals now reach thousands of young people.',
      rating: 5
    }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return customAmount ? parseInt(customAmount) : selectedAmount;
  };

  const handleDonation = async () => {
    setIsLoading(true);
    
    // Simulate Stripe payment processing
    try {
      // In a real implementation, you would:
      // 1. Create a Stripe payment intent
      // 2. Process the payment
      // 3. Handle success/error states
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to success page or show success message
      alert(`Thank you for your ${getCurrentAmount()} ${donationType === 'recurring' ? 'monthly' : ''} donation!`);
      
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
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

        .hero-gradient {
          background: linear-gradient(
            135deg,
            rgba(139, 69, 19, 0.95) 0%,
            rgba(160, 82, 45, 0.9) 30%,
            rgba(210, 105, 30, 0.85) 70%,
            rgba(139, 69, 19, 0.95) 100%
          );
        }

        .soil-gradient-bg {
          background: linear-gradient(
            135deg,
            #F5F5DC 0%,
            #FAEBD7 25%,
            #F5F5DC 50%,
            #FFEFD5 75%,
            #F5F5DC 100%
          );
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(139, 69, 19, 0.1);
          box-shadow: 
            0 25px 50px -12px rgba(139, 69, 19, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.8);
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

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
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
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }

        .donate-button {
          background: linear-gradient(135deg, var(--soil-primary) 0%, var(--soil-light) 100%);
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .donate-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s;
        }

        .donate-button:hover::before {
          left: 100%;
        }

        .donate-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(139, 69, 19, 0.4);
        }

        .amount-button {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 2px solid rgba(139, 69, 19, 0.2);
          background: rgba(245, 245, 220, 0.5);
        }

        .amount-button:hover {
          transform: translateY(-2px);
          border-color: var(--soil-primary);
          box-shadow: 0 10px 20px rgba(139, 69, 19, 0.2);
        }

        .amount-button.selected {
          background: linear-gradient(135deg, var(--soil-primary), var(--soil-light));
          color: white;
          border-color: var(--soil-primary);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(139, 69, 19, 0.3);
        }

        .impact-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(139, 69, 19, 0.1);
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }

        .impact-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(139, 69, 19, 0.2);
          border-color: var(--soil-light);
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
          z-index: 0;
        }

        .shape {
          position: absolute;
          background: radial-gradient(circle, rgba(139, 69, 19, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 20s infinite linear;
        }

        .shape:nth-child(1) {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 5%;
          animation-delay: -2s;
        }

        .shape:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 50%;
          right: 10%;
          animation-delay: -8s;
        }

        .shape:nth-child(3) {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 70%;
          animation-delay: -15s;
        }

        @keyframes float {
          0%, 100% {
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

        .stripe-card-element {
          background: white;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          transition: border-color 0.15s ease;
        }

        .stripe-card-element:focus {
          border-color: var(--soil-primary);
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139, 69, 19, 0.1);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(139, 69, 19, 0.15);
        }

        .loading-spinner {
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 2px solid white;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="min-h-screen soil-gradient-bg relative">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 px-4 md:px-8 text-center">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="animate-fade-in-up">
              <h1 className="section-title text-5xl md:text-7xl font-bold mb-6">
                Support FATA's Mission
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
                Your generous contribution empowers traditional leaders to build 
                <span className="font-semibold text-amber-800"> peace</span>, preserve 
                <span className="font-semibold text-amber-800"> culture</span>, and create 
                <span className="font-semibold text-amber-800"> sustainable development</span> across Africa.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-12 px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column - Impact Information */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Impact Areas */}
              <section className="animate-scale-in">
                <h2 className="section-title text-3xl font-bold mb-8">Your Impact in Action</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {donationImpact.map((item, index) => (
                    <Card key={item.title} className="impact-card rounded-2xl p-6" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className={`bg-gradient-to-r ${item.color} p-4 rounded-2xl text-white shadow-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-xl text-stone-900 mb-2">{item.title}</h3>
                            <p className="text-stone-600 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Impact Levels */}
              <section>
                <h2 className="section-title text-3xl font-bold mb-8">See Your Donation's Impact</h2>
                <div className="space-y-4">
                  {impactLevels.map((level, index) => (
                    <Card key={level.amount} className="glass-card rounded-xl p-6 border-l-4 border-l-amber-600">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold">
                            ${level.amount}
                          </div>
                          <p className="text-stone-700 font-medium">{level.impact}</p>
                        </div>
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Testimonials */}
              <section>
                <h2 className="section-title text-3xl font-bold mb-8">Voices from the Community</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="testimonial-card rounded-2xl p-6">
                      <CardContent className="p-0">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <p className="text-stone-700 italic mb-4">"{testimonial.text}"</p>
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold text-stone-900">{testimonial.name}</div>
                            <div className="text-stone-600 text-sm">{testimonial.location}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Other Ways to Give */}
              <section>
                <h2 className="section-title text-3xl font-bold mb-6">Other Ways to Support</h2>
                <Card className="glass-card rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl">
                      <Landmark className="h-8 w-8 text-amber-600" />
                      <span>Bank Transfer & Wire Donations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-700 mb-4 leading-relaxed">
                      For large donations, bank transfers, or inquiries about legacy giving, 
                      our treasury department is here to assist with personalized support.
                    </p>
                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                      <p className="font-semibold text-amber-900">
                        Treasury Contact: 
                        <a href="mailto:brooksewt@gmail.com" className="text-amber-700 hover:text-amber-800 underline ml-2">
                          brooksewt@gmail.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Right Column - Donation Form */}
            <div className="lg:sticky lg:top-24">
              <Card className="glass-card shadow-2xl rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8">
                  <CardTitle className="flex items-center space-x-3 text-2xl font-bold">
                    <Shield className="h-8 w-8" />
                    <span>Secure Donation</span>
                  </CardTitle>
                  <CardDescription className="text-amber-100 text-lg">
                    Choose your impact level and payment method
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8">
                  <Tabs value={donationType} onValueChange={setDonationType} className="w-full mb-8">
                    <TabsList className="grid w-full grid-cols-2 bg-stone-100 rounded-xl p-1">
                      <TabsTrigger 
                        value="one-time" 
                        className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-amber-800 data-[state=active]:shadow-sm"
                      >
                        One-Time Gift
                      </TabsTrigger>
                      <TabsTrigger 
                        value="recurring"
                        className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-amber-800 data-[state=active]:shadow-sm"
                      >
                        Monthly Support
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  {/* Amount Selection */}
                  <div className="space-y-6">
                    <Label className="text-lg font-semibold text-stone-800">Choose Amount</Label>
                    <div className="grid grid-cols-2 gap-4">
                      {[25, 50, 100, 250].map(amount => (
                        <Button
                          key={amount}
                          onClick={() => handleAmountSelect(amount)}
                          className={`amount-button h-16 text-lg font-bold rounded-xl ${
                            selectedAmount === amount ? 'selected' : ''
                          }`}
                          variant="outline"
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>

                    {/* Custom Amount */}
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount" className="text-base font-medium">Custom Amount</Label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-stone-600">$</span>
                        <Input
                          id="custom-amount"
                          type="number"
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                          placeholder="Enter amount"
                          className="pl-8 text-xl h-16 rounded-xl border-2 border-stone-200 focus:border-amber-600"
                          min="1"
                        />
                      </div>
                    </div>

                    {/* Current Impact Display */}
                    {getCurrentAmount() && (
                      <div className="bg-green-50 p-4 rounded-xl border border-green-200 animate-fade-in-up">
                        <div className="flex items-center space-x-3">
                          <Zap className="h-6 w-6 text-green-600" />
                          <div>
                            <p className="font-semibold text-green-800">Your ${getCurrentAmount()} donation impact:</p>
                            <p className="text-green-700 text-sm">
                              {impactLevels.find(level => getCurrentAmount() >= level.amount)?.impact || 'Every dollar makes a difference!'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Payment Method Selection */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium">Payment Method</Label>
                      <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                        <SelectTrigger className="h-14 rounded-xl border-2 border-stone-200 text-lg">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card" className="text-lg">
                            <div className="flex items-center space-x-3">
                              <CreditCard className="h-5 w-5" />
                              <span>Credit/Debit Card</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Stripe Card Elements Placeholder */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium">Payment Details</Label>
                      <div className="space-y-3">
                        <div className="stripe-card-element">
                          <div className="text-stone-500">Card number</div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="stripe-card-element">
                            <div className="text-stone-500">MM / YY</div>
                          </div>
                          <div className="stripe-card-element">
                            <div className="text-stone-500">CVC</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Donation Button */}
                    <Button
                      onClick={handleDonation}
                      disabled={isLoading || !getCurrentAmount()}
                      className="donate-button w-full h-16 text-xl font-bold rounded-xl text-white border-0"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-3">
                          <div className="loading-spinner"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-3">
                          <Heart className="h-6 w-6" />
                          <span>
                            Donate ${getCurrentAmount()} {donationType === 'recurring' ? '/month' : 'now'}
                          </span>
                          <ArrowRight className="h-6 w-6" />
                        </div>
                      )}
                    </Button>

                    {/* Security Note */}
                    <div className="flex items-center justify-center space-x-2 text-stone-600 text-sm">
                      <Lock className="h-4 w-4" />
                      <span>Secured by Stripe • SSL Encrypted • PCI Compliant</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="mt-6 glass-card rounded-2xl">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center space-x-6">
                      <Award className="h-8 w-8 text-amber-600" />
                      <Shield className="h-8 w-8 text-green-600" />
                      <Globe className="h-8 w-8 text-blue-600" />
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      FATA is a registered non-profit organization. Your donation is tax-deductible 
                      and directly supports our mission across Africa.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}