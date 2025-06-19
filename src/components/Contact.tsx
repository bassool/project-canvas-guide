import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, ArrowRight, Heart, Download, FileText, X } from "lucide-react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    const form = e.target as HTMLFormElement;
    form.reset();
  };
  const handleResumeDownload = async () => {
    try {
      const response = await fetch('/lovable-uploads/Bassel_Atout_Resume_2025.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Bassel_Atout_Resume_2025.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };
  return <section id="contact" className="relative overflow-hidden bg-amber-50">
      {/* Small floating elements - updated to blue-950 */}
      <div className="absolute top-[10%] left-[6%] w-3 h-3 rounded-full bg-blue-950 animate-float opacity-20"></div>
      <div className="absolute top-[16%] right-[9%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-25" style={{
      animationDelay: "0.5s"
    }}></div>
      <div className="absolute top-[32%] left-[11%] w-4 h-4 rounded-full bg-blue-950 animate-float opacity-15" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute top-[52%] right-[14%] w-3 h-3 rounded-full bg-blue-950 animate-pulse opacity-30" style={{
      animationDelay: "1.5s"
    }}></div>
      <div className="absolute bottom-[16%] left-[8%] w-2 h-2 rounded-full bg-blue-950 animate-float opacity-25" style={{
      animationDelay: "2s"
    }}></div>
      <div className="absolute bottom-[26%] right-[11%] w-5 h-5 rounded-full bg-blue-950 animate-pulse opacity-20" style={{
      animationDelay: "2.5s"
    }}></div>
      
      {/* Small rotating circles - updated to blue-950 */}
      <div className="absolute top-[18%] left-[16%] w-6 h-6 rounded-full border border-blue-950 animate-spin-slow opacity-25"></div>
      <div className="absolute top-[38%] right-[19%] w-4 h-4 rounded-full border border-blue-950 animate-spin-slow opacity-20" style={{
      animationDirection: "reverse"
    }}></div>
      <div className="absolute bottom-[20%] left-[19%] w-5 h-5 rounded-full border border-blue-950 animate-spin-slow opacity-30" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute bottom-[40%] right-[24%] w-3 h-3 rounded-full border border-blue-950 animate-spin-slow opacity-25" style={{
      animationDirection: "reverse",
      animationDelay: "1.5s"
    }}></div>
      
      {/* Additional floating bubbles - updated to blue-950 */}
      <div className="absolute top-[58%] left-[4%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-20" style={{
      animationDelay: "3s"
    }}></div>
      <div className="absolute top-[68%] right-[5%] w-3 h-3 rounded-full bg-blue-950 animate-float opacity-15" style={{
      animationDelay: "3.5s"
    }}></div>
      <div className="absolute top-[7%] left-[32%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-25" style={{
      animationDelay: "4s"
    }}></div>
      <div className="absolute bottom-[7%] right-[32%] w-4 h-4 rounded-full bg-blue-950 animate-float opacity-20" style={{
      animationDelay: "4.5s"
    }}></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-secondary/5 to-white -z-10 bg-orange-400"></div>
      
      <div className="container relative z-10 py-16 md:py-24 bg-transparent">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-blue-950 font-medium mb-6 border border-blue-950 bg-transparent">
            <Heart className="h-4 w-4 mr-2 text-blue-950" />
            <span className="text-blue-950">Let's chat!</span>
          </div>
          
          <h2 className="section-title text-blue-950">Get In Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-blue-950">Let's discuss how we can collaborate on your firm's project!</p>
        </div>
        
        <div className="flex justify-center">
          <div className="space-y-8 max-w-3xl w-full">
            <div className="group relative">
              {/* Backlit blur effect container that appears on hover */}
              <div className="absolute inset-0 bg-blue-950 opacity-0 group-hover:opacity-70 blur-xl transition-all duration-300 rounded-xl -z-10"></div>
              
              <div className="backdrop-blur-sm p-8 rounded-2xl border border-primary/10 shadow-lg card-hover text-center bg-white">
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-xl text-primary mb-4 bg-blue-950">
                    <Mail className="h-6 w-6" color="#ffffff" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-blue-950">Email Me</h3>
                    <p className="mb-3 text-blue-950">I am always open to connect with anyone, learn more about creative and technical projects, and discuss navigating this rewarding career path!</p>
                    <a href="mailto:basselatout@icloud.com" className="text-blue-950 hover:underline inline-flex items-center group justify-center">
                      basselatout@icloud.com
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity bg-transparent" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              {/* Backlit blur effect container that appears on hover */}
              <div className="absolute inset-0 bg-blue-950 opacity-0 group-hover:opacity-70 blur-xl transition-all duration-300 rounded-xl -z-10"></div>
              
              <div className="backdrop-blur-sm p-8 rounded-2xl border border-accent/10 shadow-lg card-hover text-center bg-white">
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-xl text-accent mb-4 bg-blue-950">
                    <FileText className="h-6 w-6" color="#ffffff" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-blue-950">Download my Resume!</h3>
                    <p className="mb-3 text-blue-950">
                      My next role could very well be within your firm; let my resume show you why!
                    </p>
                    <Button onClick={handleResumeDownload} variant="link" className="p-0 h-auto group bg-transparent text-blue-950">
                      Download Resume 
                      <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              {/* Backlit blur effect container that appears on hover */}
              <div className="absolute inset-0 bg-blue-950 opacity-0 group-hover:opacity-70 blur-xl transition-all duration-300 rounded-xl -z-10"></div>
              
              <div className="backdrop-blur-sm p-8 rounded-2xl border border-accent/10 shadow-lg card-hover text-center bg-white">
                <h3 className="font-semibold text-xl mb-6 text-blue-950">Why work with me?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 justify-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-blue-950"></span>
                    <span className="text-lg text-blue-950">Balanced creative and technical expertise</span>
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-blue-950"></span>
                    <span className="text-lg text-blue-950">Demonstrable track record of successful project delivery</span>
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-blue-950"></span>
                    <span className="text-lg text-blue-950">Fluent in creative & managerial tools</span>
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-blue-950 text-blue-950"></span>
                    <span className="text-lg text-blue-950">Portfolio-Proven Results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;