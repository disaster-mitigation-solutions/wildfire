import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Resource {
  title: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
}

interface ResourceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  resources: Resource[];
  imagePosition?: 'left' | 'right';
  accent?: boolean;
}

export function ResourceSection({
  id,
  title,
  subtitle,
  description,
  imageUrl,
  imageHint,
  resources,
  imagePosition = 'left',
  accent = false,
}: ResourceSectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 px-4 md:px-8", accent ? "bg-primary/5" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          "flex flex-col gap-10 md:gap-16 items-center",
          imagePosition === 'right' ? "lg:flex-row-reverse" : "lg:flex-row"
        )}>
          <div className="flex-1 w-full relative group order-first lg:order-none">
            <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 md:h-32 md:w-32 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 h-24 w-24 md:h-32 md:w-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4">
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm">{subtitle}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight font-headline">{title}</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-md transition-all border-none bg-card/80 backdrop-blur-sm group/card">
                  <CardHeader className="p-4 md:p-5 pb-2">
                    <CardTitle className="text-base md:text-lg flex items-center gap-2 text-primary">
                      <span className="shrink-0">{resource.icon}</span>
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-5 pt-0">
                    <CardDescription className="mb-4 text-sm line-clamp-2">{resource.description}</CardDescription>
                    <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-accent font-bold group" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Access Resource <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
