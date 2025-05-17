import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MessageSquare, ArrowRight, Heart } from "lucide-react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // This would normally send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };
  return <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-secondary/5 to-white -z-10"></div>
      <div className="blob-shape bg-primary/10 w-[500px] h-[500px] -bottom-80 -left-80"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium mb-4">
            <Heart className="h-4 w-4 mr-2" />
            <span>Let's collaborate</span>
          </div>
          
          <h2 className="section-title text-slate-500">Get In Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-slate-500">
            Let's discuss how we can collaborate on your next project
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 shadow-lg card-hover">
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-slate-900">Email Me</h3>
                  <p className="mb-3 text-slate-500">
                    For inquiries and collaboration opportunities
                  </p>
                  <a href="mailto:contact@example.com" className="text-primary hover:underline inline-flex items-center group">
                    contact@example.com
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-accent/10 shadow-lg card-hover">
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-xl bg-accent/10 text-accent">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Let's Talk</h3>
                  <p className="text-muted-foreground mb-3">
                    Schedule a discovery call to discuss your project needs
                  </p>
                  <Button variant="link" className="p-0 h-auto text-accent group">
                    Book a consultation 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-white/20 shadow-lg">
              <h3 className="font-semibold text-xl mb-6 text-slate-900">Why work with me?</h3>
              <ul className="space-y-4">
                <li className="flex items-baseline gap-3">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/80"></span>
                  <span className="text-lg text-gray-900">Balanced creative and technical expertise</span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="inline-block w-4 h-4 rounded-full bg-secondary/80"></span>
                  <span className="text-lg text-slate-800">Proven track record of successful project delivery</span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent/80"></span>
                  <span className="text-lg text-slate-800">Clear communication throughout the process</span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/80"></span>
                  <span className="text-lg text-slate-800">Focus on achieving your business objectives</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-border p-8 shadow-lg relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full border-4 border-dotted border-accent/30 animate-spin-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full border-4 border-dashed border-primary/30 animate-spin-slow" style={{
            animationDirection: "reverse"
          }}></div>
            
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-slate-800">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium bg-transparent">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required className="rounded-lg border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="rounded-lg border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="What's this regarding?" required className="rounded-lg border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell me about your project..." rows={5} required className="rounded-lg border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              
              <Button type="submit" className="w-full rounded-full py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;