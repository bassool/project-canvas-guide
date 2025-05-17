import React from "react";
import { Calendar, Briefcase, Users, Rocket, Palette, Star, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  category: "creative" | "management";
  color: "primary" | "secondary" | "accent";
}
const services: Service[] = [{
  icon: Palette,
  title: "Creative Direction",
  description: "Developing comprehensive creative strategies and visual identities that align with brand objectives and resonate with target audiences.",
  category: "creative",
  color: "primary"
}, {
  icon: Briefcase,
  title: "Project Management",
  description: "End-to-end project oversight ensuring on-time, on-budget delivery while maintaining quality standards and stakeholder satisfaction.",
  category: "management",
  color: "secondary"
}, {
  icon: Users,
  title: "Team Leadership",
  description: "Building and leading high-performing creative and technical teams, fostering collaboration and delivering exceptional results.",
  category: "management",
  color: "accent"
}, {
  icon: Star,
  title: "Brand Development",
  description: "Creating compelling brand stories, visual systems, and communication strategies that establish strong market presence.",
  category: "creative",
  color: "primary"
}, {
  icon: Calendar,
  title: "Production Coordination",
  description: "Seamless coordination of production processes, resources, and timelines to bring creative concepts to life efficiently.",
  category: "management",
  color: "secondary"
}, {
  icon: Rocket,
  title: "Launch Strategy",
  description: "Comprehensive planning for product, campaign, and brand launches to maximize impact and achieve business objectives.",
  category: "creative",
  color: "accent"
}];
const ServiceCard = ({
  service
}: {
  service: Service;
}) => {
  const Icon = service.icon;
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20"
  };
  return <Card className="overflow-hidden border-border card-hover bg-gradient-to-br from-white to-secondary/5">
      <div className={`h-1 bg-${service.color}`} />
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${colorClasses[service.color]}`}>
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle>{service.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>;
};
const Services = () => {
  return <section id="services" className="py-20 md:py-28 relative">
      {/* Decorative blobs */}
      <div className="blob-shape bg-primary/10 w-[500px] h-[500px] -right-64 top-0"></div>
      <div className="blob-shape bg-secondary/10 w-[400px] h-[400px] -left-32 bottom-0"></div>
      
      {/* Decorative pattern */}
      <div className="absolute top-20 left-10 grid grid-cols-3 gap-2 opacity-10 -z-10">
        {[...Array(9)].map((_, i) => <div key={i} className="w-4 h-4 rounded-full bg-accent"></div>)}
      </div>
      
      <div className="absolute bottom-20 right-10 grid grid-cols-3 gap-2 opacity-10 -z-10">
        {[...Array(9)].map((_, i) => <div key={i} className="w-4 h-4 rounded-full bg-primary"></div>)}
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>What I can do for you</span>
          </div>
          
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Balancing creative excellence with strategic execution
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => <div key={index} className="animate-fade-in" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <ServiceCard service={service} />
            </div>)}
        </div>
        
        
      </div>
    </section>;
};
export default Services;