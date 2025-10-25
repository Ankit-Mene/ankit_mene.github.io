import React from "react";
import { ExternalLink, Code, Server, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Offshore Client Workspace Deployment",
      description: "Designed and deployed a comprehensive testing environment for the Quality team to validate releases before public deployment, enabling direct hardware access and streamlined validation processes.",
      technologies: ["Azure", "Virtual Desktop Infrastructure", "Testing Environment", "Hardware Integration"],
      icon: Server,
      highlights: [
        "Enhanced release validation process",
        "Direct hardware access implementation",
        "Improved deployment reliability",
        "Streamlined quality assurance workflow"
      ]
    },
    {
      title: "Azure AD Onboarding Automation",
      description: "Developed and implemented a comprehensive PowerShell script integrated with Google Forms to automate the user onboarding process, significantly reducing manual effort and increasing operational efficiency.",
      technologies: ["PowerShell", "Azure AD", "Google Forms", "Automation", "Process Optimization"],
      icon: Code,
      highlights: [
        "Reduced manual effort by 80%",
        "Automated user provisioning",
        "Integrated multiple platforms",
        "Improved onboarding efficiency"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Key projects showcasing automation, cloud infrastructure, and process optimization expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md h-full"
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <IconComponent size={24} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-black group-hover:text-gray-800 transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-black uppercase tracking-wide">
                      Key Highlights
                    </h4>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-black uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;