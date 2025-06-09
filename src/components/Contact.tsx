import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, ArrowRight, Heart, Download, FileText, X } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-100">
      {/* Floating blob shapes */}
      <div className="blob-shape w-[300px] h-[300px] -top-24 -right-16 animate-pulse-custom bg-[#81bfdf]"></div>
      <div className="blob-shape w-[450px] h-[450px] -bottom-32 -left-28 animate-pulse-custom bg-[#87ddf0]"></div>
      <div className="blob-shape w-[200px] h-[200px] top-[60%] right-[25%] animate-pulse-custom bg-[#b4def5]"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-secondary/5 to-white -z-10 bg-[#81c3df]/[0.22]"></div>
      <div className="blob-shape bg-primary/10 w-[500px] h-[500px] -bottom-80 -left-80"></div>
      
      <div className="container relative z-10 py-20 md:py-28">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-accent font-medium mb-6 bg-slate-600">
            <Heart className="h-4 w-4 mr-2 bg-transparent" />
            <span className="text-slate-100">Let's chat!</span>
          </div>
          
          <h2 className="section-title text-slate-700">Get In Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-slate-700">Let's discuss how we can collaborate on your firm's project!</p>
        </div>
        
        <div className="flex justify-center">
          <div className="space-y-8 max-w-3xl w-full">
            <div className="group relative">
              {/* Backlit blur effect container that appears on hover */}
              <div className="absolute inset-0 bg-slate-700 opacity-0 group-hover:opacity-70 blur-xl transition-all duration-300 rounded-xl -z-10"></div>
              
              <div className="backdrop-blur-sm p-8 rounded-2xl border border-primary/10 shadow-lg card-hover text-center bg-slate-100">
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-xl text-primary mb-4 bg-slate-600">
                    <Mail className="h-6 w-6" color="#f1f5f9" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-slate-900">Email Me</h3>
                    <p className="mb-3 text-slate-800">I am always open to connect with anyone, learn more about creative and technical projects, and discuss navigating this rewarding career path!</p>
                    <a href="mailto:basselatout@icloud.com" className="text-slate-800 hover:underline inline-flex items-center group justify-center">
                      basselatout@icloud.com
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity bg-transparent" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              {/* Backlit blur effect container that appears on hover */}
              <div className="absolute inset-0 bg-slate-700 opacity-0 group-hover:opacity-70 blur-xl transition-all duration-300 rounded-xl -z-10"></div>
              
              <div className="backdrop-blur-sm p-8 rounded-2xl border border-accent/10 shadow-lg card-hover text-center bg-slate-100">
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-xl text-accent mb-4 bg-slate-600">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-slate-800">Download my Resume!</h3>
                    <p className="mb-3 text-slate-800">
                      My next role could very well be within your firm; let my resume show you why!
                    </p>
                    <a href="public/lovable-uploads/Bassel_Atout_Resume_2025.pdf" download="Bassel_Atout_Resume_2025.pdf">
                      <Button variant="link" className="p-0 h-auto group bg-transparent text-slate-900">
                        Download Resume 
                        <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              {/* Backlit blur effect container that appears on hover */}
              <div className="absolute inset-0 bg-slate-700 opacity-0 group-hover:opacity-70 blur-xl transition-all duration-300 rounded-xl -z-10"></div>
              
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-white/20 shadow-lg text-center bg-slate-100">
                <h3 className="font-semibold text-xl mb-6 text-slate-900">Why work with me?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 justify-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-slate-700"></span>
                    <span className="text-lg text-gray-900">Balanced creative and technical expertise</span>
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-slate-700"></span>
                    <span className="text-lg text-slate-800"> Demonstrable track record of successful project delivery</span>
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-slate-700"></span>
                    <span className="text-lg text-slate-800">Fluent in creative &amp; managerial tools</span>
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-slate-700"></span>
                    <span className="text-lg text-slate-800">Portfolio-Proven Results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
