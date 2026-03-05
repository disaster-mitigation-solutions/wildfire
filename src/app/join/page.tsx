'use client';

import React from 'react';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
              Community Partnership
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
              Solution Provider Sign Up
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Join our network of verified organizations providing critical disaster resilience and recovery resources.
            </p>
          </div>

            <Card className="shadow-xl border-none">
              <CardHeader className="bg-primary text-primary-foreground p-8 rounded-t-lg">
                <CardTitle className="text-2xl font-bold">Partner Details</CardTitle>
                <CardDescription className="text-primary-foreground/70">
                  Please provide information about your organization and primary contact for Disaster Mitigation Solutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <iframe data-tally-src="https://tally.so/embed/GxrEZz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="492" frameBorder="0" marginHeight="0" marginWidth="0" title="Solution Provider Sign Up"></iframe>
                <Script
                  id="tally-js"
                  src="https://tally.so/widgets/embed.js"
                  onLoad={() => {
                    Tally.loadEmbeds();
                  }}
                />
              </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
