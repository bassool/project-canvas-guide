import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket, Award, Star, ArrowLeft, ArrowRight, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// Define project types
type ProjectCategory = "all" | "creative" | "management" | "strategy";
interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  tags: string[];
  featured?: boolean;
  galleryImages?: string[];
  tools?: string[];
  impact?: string;
  challenge?: string;
  solution?: string;
}

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "Depth Perception",
    description: "Directed and produced full album along with and marketing strategy, social media and video direction, and live performance planning and performing",
    category: "creative",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Multimedia Production", "Design Direction", "Creative Strategy"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1508700108023-c5249f4df085",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
    ],
    tools: ["Ableton Live", "Adobe Premiere", "Figma", "Social Media Platforms"],
    impact: "Increased artist visibility by 40% and generated 1M+ streams across platforms",
    challenge: "Creating cohesive visual and audio experience with limited resources",
    solution: "Developed integrated marketing strategy that leveraged artist's unique style across all touchpoints"
  }, {
    id: 2,
    title: "Product Launch Campaign",
    description: "End-to-end project management for successful market entry of innovative SaaS product.",
    category: "management",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Project Management", "Timeline Planning", "Resource Allocation"],
    galleryImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ],
    tools: ["Asana", "Slack", "HubSpot", "Google Analytics"],
    impact: "Successfully launched product with 95% on-time delivery of project milestones",
    challenge: "Coordinating cross-functional teams across different time zones",
    solution: "Implemented agile methodology with clear communication protocols and documentation"
  }, {
    id: 3,
    title: "Marketing Strategy Development",
    description: "Comprehensive marketing strategy with focus on digital channels and measurable KPIs.",
    category: "strategy",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Strategy", "Analytics", "Market Research"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    ],
    tools: ["Google Analytics", "SEMrush", "Tableau", "Mailchimp"],
    impact: "Increased conversion rates by 32% and reduced customer acquisition cost by 24%",
    challenge: "Identifying optimal marketing channels with limited budget",
    solution: "Created data-driven approach to channel selection based on audience research and ROI potential"
  }, {
    id: 4,
    title: "Design System Creation",
    description: "Unified design language to ensure consistency across all digital and print touchpoints.",
    category: "creative",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Design Systems", "UI/UX", "Documentation"],
    galleryImages: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
    ],
    tools: ["Figma", "Storybook", "Zeplin", "InVision"],
    impact: "Reduced design time by 60% and improved consistency across product suite",
    challenge: "Balancing flexibility for designers with consistency for brand integrity",
    solution: "Created component-based system with clear guidelines and examples of appropriate usage"
  }, {
    id: 5,
    title: "Team Leadership & Workflow Optimization",
    description: "Restructured creative team processes to increase productivity by 40%.",
    category: "management",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tags: ["Team Leadership", "Process Optimization", "Agile"],
    featured: true,
    galleryImages: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1552581234-26160f608093"
    ],
    tools: ["Trello", "Notion", "Slack", "Monday.com"],
    impact: "Increased team productivity by 40% while improving work-life balance",
    challenge: "Addressing inefficient workflows that caused burnout and missed deadlines",
    solution: "Implemented agile methodologies with regular retrospectives to continuously improve processes"
  }
];

const ProjectCard = ({
  project
}: {
  project: Project;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("project-card group animate-fade-in card-hover border-glow flex flex-col h-full", project.featured ? "relative" : "")} style={{
      animationDelay: `${project.id * 100}ms`
    }}>
      {project.featured && <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-accent text-black font-medium rounded-full flex items-center gap-1 px-3">
            <Star className="h-3 w-3" /> Featured
          </Badge>
        </div>}
      
      <div className="relative overflow-hidden aspect-video">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      
      <div className="p-6 bg-white dark:bg-card flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 transition-colors text-slate-900">{project.title}</h3>
        <p className="mb-4 flex-grow text-slate-900">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => <Badge key={index} variant="outline" className="text-foreground bg-slate-800">{tag}</Badge>)}
        </div>
        
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="mt-2 w-full rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              View Project Details
            </Button>
          </PopoverTrigger>
          <div className={cn("fixed inset-0 z-50 flex items-center justify-center transition-all", 
                            isOpen ? "bg-black/60 backdrop-blur-sm" : "pointer-events-none opacity-0")}
               style={{transition: "all 0.1s ease-out"}}>
            <PopoverContent className="w-[90vw] max-w-3xl p-0 bg-background border border-primary/20 shadow-2xl" 
                           side="bottom" align="center" sideOffset={20}>
              <div className="p-6 border-b relative">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-4 top-4 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {project.galleryImages && project.galleryImages.length > 0 && (
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.galleryImages.map((img, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <div className="aspect-video overflow-hidden rounded-md">
                              <img 
                                src={img} 
                                alt={`${project.title} gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
              )}
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools?.map((tool, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">{tool}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Impact</h4>
                    <p className="text-foreground/90">{project.impact}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Challenge</h4>
                    <p className="text-foreground/90">{project.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">Solution</h4>
                    <p className="text-foreground/90">{project.solution}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 pt-0 flex justify-end">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full" 
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
              </div>
            </PopoverContent>
          </div>
        </Popover>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  const filteredProjects = activeTab === "all" ? projects : projects.filter(project => project.category === activeTab);
  
  return <section id="work" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="hidden md:block absolute left-0 top-1/4 w-32 h-32 border-l-4 border-t-4 border-primary/20 -z-10"></div>
      <div className="hidden md:block absolute right-0 bottom-1/4 w-32 h-32 border-r-4 border-b-4 border-accent/20 -z-10"></div>
      <div className="hidden md:block absolute left-1/4 bottom-0 w-16 h-16 rounded-full border-2 border-secondary/30 -z-10"></div>
      
      <div className="container">
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium mb-4">
            <Rocket className="h-4 w-4 mr-2" />
            <span>Browse my portfolio</span>
          </div>
          
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of my work spanning creative direction and project management
          </p>
          
          {/* Decorative element */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-dotted border-primary/10 animate-spin-slow"></div>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={value => setActiveTab(value as ProjectCategory)}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md rounded-full p-1 bg-secondary/10">
              <TabsTrigger value="all" className="rounded-full text-sm">All</TabsTrigger>
              <TabsTrigger value="creative" className="rounded-full text-sm">Creative</TabsTrigger>
              <TabsTrigger value="management" className="rounded-full text-sm">Management</TabsTrigger>
              <TabsTrigger value="strategy" className="rounded-full text-sm">Strategy</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
          </TabsContent>
          
          <TabsContent value="creative" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
          </TabsContent>
          
          <TabsContent value="management" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
          </TabsContent>
          
          <TabsContent value="strategy" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 hover:bg-secondary/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>;
};
export default Projects;
