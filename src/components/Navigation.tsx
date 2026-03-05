"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldAlert, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      isScrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-sm border-b" : "py-6 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors">
            <ShieldAlert className="text-primary-foreground h-6 w-6" />
          </div>
          <span className="font-bold text-lg md:text-xl text-primary font-headline tracking-tight leading-none">
            Disaster Mitigation Solutions
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-primary/80 hover:text-accent font-medium transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-6 shadow-sm">
            Emergency Map
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="flex items-center gap-2">
                  <ShieldAlert className="text-primary h-6 w-6" />
                  <span className="text-primary font-headline">Navigation</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="text-xl font-bold text-primary hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 border-t">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full py-6 text-lg">
                    Emergency Map
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
