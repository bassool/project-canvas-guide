
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Let's discuss how we can collaborate on your next project
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="bg-secondary/30 p-6 rounded-lg border border-border">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-md bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Me</h3>
                  <p className="text-muted-foreground mb-2">
                    For inquiries and collaboration opportunities
                  </p>
                  <a href="mailto:contact@example.com" className="text-primary hover:underline">
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg border border-border">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-md bg-accent/10 text-accent">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Let's Talk</h3>
                  <p className="text-muted-foreground mb-2">
                    Schedule a discovery call to discuss your project needs
                  </p>
                  <Button variant="link" className="p-0 h-auto text-accent">
                    Book a consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
              <h3 className="font-semibold text-lg mb-4">Why work with me?</h3>
              <ul className="space-y-2">
                <li className="flex items-baseline gap-2">
                  <span className="text-primary">•</span>
                  <span>Balanced creative and technical expertise</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-primary">•</span>
                  <span>Proven track record of successful project delivery</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-primary">•</span>
                  <span>Clear communication throughout the process</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-primary">•</span>
                  <span>Focus on achieving your business objectives</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card rounded-lg border border-border p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="What's this regarding?" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  rows={5} 
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
