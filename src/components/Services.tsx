
import React from "react";
import { Calendar, Briefcase, Users, Rocket, Palette, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  category: "creative" | "management";
}

const services: Service[] = [
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Developing comprehensive creative strategies and visual identities that align with brand objectives and resonate with target audiences.",
    category: "creative"
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "End-to-end project oversight ensuring on-time, on-budget delivery while maintaining quality standards and stakeholder satisfaction.",
    category: "management"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Building and leading high-performing creative and technical teams, fostering collaboration and delivering exceptional results.",
    category: "management"
  },
  {
    icon: Star,
    title: "Brand Development",
    description: "Creating compelling brand stories, visual systems, and communication strategies that establish strong market presence.",
    category: "creative"
  },
  {
    icon: Calendar,
    title: "Production Coordination",
    description: "Seamless coordination of production processes, resources, and timelines to bring creative concepts to life efficiently.",
    category: "management"
  },
  {
    icon: Rocket,
    title: "Launch Strategy",
    description: "Comprehensive planning for product, campaign, and brand launches to maximize impact and achieve business objectives.",
    category: "creative"
  }
];

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;
  
  return (
    <Card className="overflow-hidden border-border">
      <div className={`h-1 ${service.category === "creative" ? "bg-accent" : "bg-primary"}`} />
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-md ${service.category === "creative" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}`}>
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle>{service.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Balancing creative excellence with strategic execution
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 sm:p-8 bg-accent/5 rounded-lg border border-accent/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="text-center md:text-left md:flex-1">
              <h3 className="text-2xl font-bold mb-2">Need a tailored service package?</h3>
              <p className="text-muted-foreground">Contact me to discuss how I can help with your specific project needs.</p>
            </div>
            <button 
              className="px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 transition-colors"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
