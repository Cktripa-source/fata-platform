"use client";

import React, { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Phone, Mail, User, BookUser  } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500),
});

const keyContacts = [
  { role: 'President', name: 'HRH Drani Izakare', phone: '+256782201280', icon: <User  /> },
  { role: 'Secretary General', name: 'HRH Chief Ishima', phone: '+260977825941', icon: <BookUser  /> },
  { role: 'Admin/Treasurer', name: 'HRH Brook Temesgen', phone: '+251923125050', email: 'brooksewt@gmail.com', icon: <User  /> },
];

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-white transition-all duration-1000 ">
      {/* Hero Section */}
      <header className="relative py-20 px-4 overflow-hidden  ">
        <div className="relative z-10 text-center m-auto max-w-7xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-amber-800 to-yellow-800">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            We are here to help. Reach out to our leadership or send us a message through the form below.
          </p>
        </div>
      </header>

      <div className="grid lg:grid-cols-2 gap-12 px-4">
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-amber-600">Key Contacts</h2>
          <div className="space-y-6">
            {keyContacts.map((contact) => (
              <Card key={contact.name} className="shadow-lg transition-transform transform hover:scale-105">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-amber-600/10 p-3 rounded-full text-amber-600">{contact.icon}</div>
                  <div>
                    <CardTitle className="font-semibold text-xl">{contact.role}</CardTitle>
                    <p className="font-medium">{contact.name}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-amber-600" />
                    <a href={`tel:${contact.phone}`} className="hover:underline text-gray-700">{contact.phone}</a>
                  </div>
                  {contact.email && (
                    <div className="flex items-center gap-3 mt-2">
                      <Mail className="h-5 w-5 text-amber-600" />
                      <a href={`mailto:${contact.email}`} className="hover:underline text-gray-700">{contact.email}</a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-amber-900">Send Us a Message</h2>
          <Card className="border border-amber-700/25">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="border-gray-300 focus:border-amber-600 focus:ring focus:ring-amber-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} className="border-gray-300 focus:border-amber-600 focus:ring focus:ring-amber-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Inquiry about partnership" {...field} className="border-gray-300 focus:border-amber-600 focus:ring focus:ring-amber-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message here..." className="min-h-[120px] border-gray-300 focus:border-amber-600 focus:ring focus:ring-amber-600" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 text-white">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </section>
      </div>

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
    </div>
  );
}
