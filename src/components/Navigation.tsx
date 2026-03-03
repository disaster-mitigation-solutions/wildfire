
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldAlert, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Resilience', href: '/#resilience' },
    { name: 'During Fire', href: '/#active-fire' },
    { name: 'Post-Fire', href: '/#recovery' },
    { name: 'Request to Join', href: '/join' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm border-b" : "py-6 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors">
            <ShieldAlert className="text-primary-foreground h-6 w-6" />
          </div>
          <span className="font-bold text-xl text-primary font-headline tracking-tight">Wildfire Hub</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-primary/80 hover:text-accent font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-6">
            Emergency Map
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-primary" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="text-2xl font-bold text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-8 py-6 text-lg">
          Emergency Map
        </Button>
        <button 
          className="absolute top-8 right-8 p-2 text-primary" 
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>
      </div>
    </nav>
  );
}
