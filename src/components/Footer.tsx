import React from "react";
import { Separator } from "@/components/ui/separator";
import { Linkedin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="pt-20 pb-10 border-t border-gray-200 bg-cyan-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-900">Portfolio</h2>
            <p className="text-gray-600">Creative Director & Project Manager</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#home" className="text-sm font-medium text-gray-600 hover:text-blue-950 transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#work" className="text-sm font-medium text-gray-600 hover:text-blue-950 transition-colors relative group">
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="text-sm font-medium text-gray-600 hover:text-blue-950 transition-colors relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-950 transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-950 transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-200" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            © {currentYear} Portfolio. All rights reserved.
          </div>
          
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="https://www.linkedin.com/in/basselatout/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-950 transition-colors relative group flex items-center">
              <Linkedin className="h-4 w-4 mr-1" />
              LinkedIn
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;