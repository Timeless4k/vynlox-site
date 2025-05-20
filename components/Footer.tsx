'use client';

import { Mail, Twitter, Linkedin, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = {
  main: [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ],
  services: [
    { name: 'AI Sales Assistant', href: '#services' },
    { name: 'Business Automation', href: '#services' },
    { name: 'AI-Enhanced Websites', href: '#services' },
    { name: 'Knowledge Workers', href: '#services' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    {
      name: 'Email',
      href: 'mailto:hello@vynlox.com',
      icon: Mail,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/vynlox',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/vynlox',
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-bold font-display tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Vynlox
              </span>
            </div>
            <p className="text-zinc-600 mb-6 text-sm">
              Helping service businesses scale smarter with AI solutions — without hiring developers or learning code.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-400 hover:text-indigo-600 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Site Links */}
          <div>
            <h3 className="text-zinc-900 font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-zinc-600 hover:text-indigo-600 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-zinc-900 font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-zinc-600 hover:text-indigo-600 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-zinc-900 font-semibold mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm mb-6">
              <p className="text-zinc-600">
                <Mail className="h-4 w-4 inline-block mr-2 text-indigo-600" />
                hello@vynlox.com
              </p>
              <p className="text-zinc-600">
                <Phone className="h-4 w-4 inline-block mr-2 text-indigo-600" />
                +61 2 8888 8888
              </p>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="rounded-lg border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300"
            >
              Book Free Call
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 mt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Vynlox. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            {navigation.legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-zinc-500 hover:text-zinc-700 text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}