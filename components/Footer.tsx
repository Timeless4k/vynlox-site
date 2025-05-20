'use client';

import { Mail, Twitter, Linkedin } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
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
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-zinc-600 hover:text-zinc-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-zinc-400 hover:text-zinc-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        
        <p className="mt-8 text-center text-base text-zinc-500">
          &copy; {new Date().getFullYear()} Vynlox. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 