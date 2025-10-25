import React from "react";
import { Cloud, Server, Database, Shield, Monitor, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      skills: ["Microsoft Azure", "Azure AD", "DaaS", "Virtual Desktop Infrastructure", "Cloud Computing Architecture"]
    },
    {
      category: "IT Service Management",
      icon: Shield,
      skills: ["ITIL / ITSM", "Service Desk", "Incident Response Management", "SLA Management", "Process Optimization"]
    },
    {
      category: "Technical Support",
      icon: Monitor,
      skills: ["L3 Technical Support", "Network Troubleshooting", "Server Diagnostics", "Performance Monitoring", "End User Support"]
    },
    {
      category: "Tools & Platforms",
      icon: Server,
      skills: ["Jira", "Atlassian", "Salesforce", "HaloITSM", "Microsoft 365 (O365)", "PowerShell"]
    },
    {
      category: "Data & Analytics",
      icon: Database,
      skills: ["SQL", "Data Evaluation", "Pattern Analysis", "Performance Indicators", "Reporting"]
    },
    {
      category: "Operations",
      icon: Zap,
      skills: ["Operational Efficiency", "Cross-functional Coordination", "Team Training", "Documentation", "Automation"]
    }
  ];

  const certifications = [
    "IBM Certified Cloud Computing & Virtualization Specialist",
    "Introduction to Opensource Software and Open Standards",
    "IT Infrastructure Landscape Overview",
    "Cloud Computing Architecture and Deployment Models",
    "Business Intelligence & Performance Tuning",
    "Service Oriented Architecture",
    "Business Process Management"
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical expertise across cloud infrastructure, IT service management, and operations
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md h-full"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-black">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-light text-black mb-4">
              Certifications & Training
            </h3>
            <div className="w-16 h-0.5 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;