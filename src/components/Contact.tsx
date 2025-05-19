
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
          
          <h2 className="section-title text-slate-700">Get In Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-slate-700">
            Let's discuss how we can collaborate on your next project
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="space-y-8 max-w-3xl w-full">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 shadow-lg card-hover text-center">
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-xl bg-primary/10 text-primary mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-slate-900">Email Me</h3>
                  <p className="mb-3 text-slate-800">I am always open to connect with anyone, learn more about creative and technical projects, and discuss navigating this rewarding career path!</p>
                  <a href="mailto:contact@example.com" className="text-primary hover:underline inline-flex items-center group justify-center">
                    contact@example.com
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-accent/10 shadow-lg card-hover text-center">
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-xl bg-accent/10 text-accent mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-slate-800">Let's Talk</h3>
                  <p className="mb-3 text-slate-800">
                    Schedule a discovery call to discuss your project needs
                  </p>
                  <Button variant="link" className="p-0 h-auto group bg-transparent text-slate-800">
                    Book a consultation 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-white/20 shadow-lg text-center">
              <h3 className="font-semibold text-xl mb-6 text-slate-900">Why work with me?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 justify-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/80"></span>
                  <span className="text-lg text-gray-900">Balanced creative and technical expertise</span>
                </li>
                <li className="flex items-center gap-3 justify-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-secondary/80"></span>
                  <span className="text-lg text-slate-800">Proven track record of successful project delivery</span>
                </li>
                <li className="flex items-center gap-3 justify-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent/80"></span>
                  <span className="text-lg text-slate-800">Clear communication throughout the process</span>
                </li>
                <li className="flex items-center gap-3 justify-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/80"></span>
                  <span className="text-lg text-slate-800">Focus on achieving your business objectives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;
