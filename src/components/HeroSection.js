import React from "react";
import { MapPin, Mail, Phone, Linkedin, Download } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const contactInfo = [
    { icon: MapPin, text: "Pune, India", link: null },
    { icon: Mail, text: "meneankit321@gmail.com", link: "mailto:meneankit321@gmail.com" },
    { icon: Phone, text: "+91 89391 17321", link: "tel:+918939117321" },
    { icon: Linkedin, text: "linkedin.com/in/ankit-mene", link: "https://linkedin.com/in/ankit-mene" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-black">
              Ankit Mene
            </h1>
            <div className="w-24 h-1 bg-black mx-auto"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Senior IT Analyst & Cloud Infrastructure Specialist
            </p>
          </div>

          {/* Summary */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Results-driven IT analyst with over 6 years of experience in technical support, 
              cloud services, and operations management across the IT and e-commerce sectors. 
              Currently providing L3 support for virtual desktops and cloud infrastructure, 
              including Azure and Microsoft 365 environments.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              const content = (
                <div className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                  <IconComponent size={20} className="text-gray-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm break-all">{contact.text}</span>
                </div>
              );

              return contact.link ? (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith("http") ? "_blank" : "_self"}
                  rel={contact.link.startsWith("http") ? "noopener noreferrer" : ""}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* Abstract Geometric Element */}
          <div className="flex justify-center mt-16">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 border-2 border-gray-300 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border-2 border-gray-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;