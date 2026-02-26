
import { Navigation } from '@/components/Navigation';
import { ResourceSection } from '@/components/ResourceSection';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Flame, Droplets, MapPin, Search, LifeBuoy, Info } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  // Extract images from placeholder file
  const mitigationImg = PlaceHolderImages.find(img => img.id === 'mitigation-hero');
  const activeFireImg = PlaceHolderImages.find(img => img.id === 'during-fire-hero');
  const postFireImg = PlaceHolderImages.find(img => img.id === 'post-fire-hero');

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-[800px] w-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 h-[600px] w-[600px] bg-accent/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                Resilience & Support Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight font-headline tracking-tight">
                Strength and Resilience <br />
                <span className="text-accent underline decoration-accent/30 underline-offset-8">Before, During, & After</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Wildfire risk is part of our landscape, but it doesn't have to be our disaster. 
                Find immediate support, localized resources, and guidance for every stage of fire risk.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 rounded-full text-lg font-bold shadow-lg">
                  Find Local Resources
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 h-14 px-8 rounded-full text-lg font-bold">
                  View Safety Toolkit
                </Button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2">
                    <Image 
                      src="https://picsum.photos/seed/forest/400/400" 
                      alt="Dry forest brush" 
                      fill 
                      className="object-cover"
                      data-ai-hint="dry forest"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="text-white font-bold">Mitigation</span>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2">
                    <Image 
                      src="https://picsum.photos/seed/rebuild/400/600" 
                      alt="Community support" 
                      fill 
                      className="object-cover"
                      data-ai-hint="community support"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="text-white font-bold">Recovery</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2">
                    <Image 
                      src="https://picsum.photos/seed/rain/400/600" 
                      alt="Rain drought" 
                      fill 
                      className="object-cover"
                      data-ai-hint="dry rain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="text-white font-bold">Prevention</span>
                    </div>
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2">
                    <Image 
                      src="https://picsum.photos/seed/shelter/400/400" 
                      alt="Emergency response" 
                      fill 
                      className="object-cover"
                      data-ai-hint="emergency shelter"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="text-white font-bold">Aid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stage 1: Mitigation */}
      <ResourceSection
        id="mitigation"
        subtitle="Stage 1: Mitigation"
        title="Prevention Before the Spark"
        description="The most effective fire management happens before the smoke appears. Addressing extreme weather, heat domes, and dry kindling through home hardening and defensible space creates a buffer of resilience."
        imageUrl={mitigationImg?.imageUrl || ""}
        imageHint={mitigationImg?.imageHint || "dry brush"}
        accent
        resources={[
          {
            title: "Firewise.org",
            description: "Expert guidance on creating defensible spaces around your home.",
            url: "https://www.firewise.org",
            icon: <ShieldCheck className="w-5 h-5 text-accent" />
          },
          {
            title: "NET PBEM",
            description: "Portland's Neighborhood Emergency Teams for localized community response.",
            url: "https://www.portland.gov/pbem/net",
            icon: <MapPin className="w-5 h-5 text-accent" />
          },
          {
            title: "Brush Management",
            description: "Identifying and clearing high-risk kindling in your property space.",
            url: "#",
            icon: <LifeBuoy className="w-5 h-5 text-accent" />
          },
          {
            title: "Drought Preparation",
            description: "Strategies for extreme heat and lack of rainfall resilience.",
            url: "#",
            icon: <Droplets className="w-5 h-5 text-accent" />
          }
        ]}
      />

      {/* Stage 2: Active Fire */}
      <ResourceSection
        id="active-fire"
        subtitle="Stage 2: Active Fire"
        title="Immediate Emergency Aid"
        description="When disaster strikes, rapid access to support is vital. We connect you with verified organizations providing food, temporary shelter, and financial assistance during active wildfire events."
        imageUrl={activeFireImg?.imageUrl || ""}
        imageHint={activeFireImg?.imageHint || "emergency aid"}
        imagePosition="right"
        resources={[
          {
            title: "American Red Cross",
            description: "Emergency shelter, food assistance, and disaster mental health services.",
            url: "https://www.redcross.org",
            icon: <Flame className="w-5 h-5 text-destructive" />
          },
          {
            title: "FEMA Assistance",
            description: "Federal disaster support for housing and insurance claims.",
            url: "https://www.fema.gov",
            icon: <LifeBuoy className="w-5 h-5 text-accent" />
          },
          {
            title: "Food Relief",
            description: "Find local food banks and distribution centers in active fire zones.",
            url: "#",
            icon: <Info className="w-5 h-5 text-accent" />
          },
          {
            title: "Evacuation Maps",
            description: "Real-time updates on active fire perimeters and evacuation routes.",
            url: "#",
            icon: <Search className="w-5 h-5 text-accent" />
          }
        ]}
      />

      {/* Stage 3: Post-Fire */}
      <ResourceSection
        id="recovery"
        subtitle="Stage 3: Post-Fire Recovery"
        title="Restoring Resilience"
        description="The risk doesn't end when the fire is out. Burnt landscapes are vulnerable to mudslides and floods. We provide tools for structural recovery and long-term environmental restoration."
        imageUrl={postFireImg?.imageUrl || ""}
        imageHint={postFireImg?.imageHint || "forest regrowth"}
        accent
        resources={[
          {
            title: "Flood Mitigation",
            description: "Essential resources for preventing mudslides on burnt terrain.",
            url: "#",
            icon: <Droplets className="w-5 h-5 text-accent" />
          },
          {
            title: "Mudslide Alert Systems",
            description: "Localized warning systems for high-risk post-fire zones.",
            url: "#",
            icon: <MapPin className="w-5 h-5 text-accent" />
          },
          {
            title: "Structural Restoration",
            description: "Guidelines for assessing and rebuilding fire-damaged structures.",
            url: "#",
            icon: <ShieldCheck className="w-5 h-5 text-accent" />
          },
          {
            title: "Community Relief",
            description: "Long-term support networks for emotional and financial recovery.",
            url: "#",
            icon: <LifeBuoy className="w-5 h-5 text-accent" />
          }
        ]}
      />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-accent h-8 w-8" />
              <span className="font-bold text-2xl font-headline tracking-tight">Wildfire Hub</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Empowering communities through empathy, education, and action. Together, we build a future that survives and thrives.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Platform</h4>
              <ul className="space-y-2 text-primary-foreground/60">
                <li><a href="#" className="hover:text-accent">About Us</a></li>
                <li><a href="#" className="hover:text-accent">Mitigation Tools</a></li>
                <li><a href="#" className="hover:text-accent">Recovery Hub</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Support</h4>
              <ul className="space-y-2 text-primary-foreground/60">
                <li><a href="#" className="hover:text-accent">Emergency Map</a></li>
                <li><a href="#" className="hover:text-accent">Contact Aid</a></li>
                <li><a href="#" className="hover:text-accent">Report Risk</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/60">
                <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/40 text-sm">
          <p>© {new Date().getFullYear()} Wildfire Resilient Hub. Localized for English Support.</p>
        </div>
      </footer>
    </div>
  );
}
