import React from "react";
import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ankit Mene</h3>
            <p className="text-gray-400 leading-relaxed">
              Senior IT Analyst specializing in cloud infrastructure, 
              technical support, and operations management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About", id: "hero" },
                { label: "Experience", id: "experience" },
                { label: "Projects", id: "projects" },
                { label: "Skills", id: "skills" },
                { label: "Education", id: "education" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Professional Focus */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Expertise</h4>
            <div className="space-y-2 text-gray-400">
              <div>Cloud Infrastructure</div>
              <div>Azure & Microsoft 365</div>
              <div>IT Service Management</div>
              <div>Technical Support (L3)</div>
              <div>Process Automation</div>
              <div>Operations Management</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Ankit Mene. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <span>Built with</span>
                <Heart size={16} className="text-red-500" />
                <span>and</span>
                <Code size={16} className="text-blue-400" />
                <span>and</span>
                <Coffee size={16} className="text-yellow-600" />
              </div>
            </div>
          </div>

          {/* Professional Statement */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>
              "Dedicated to improving operational efficiency, streamlining processes, 
              and supporting global enterprise systems in fast-paced, SLA-driven environments."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;