import React from "react";
import { Calendar, MapPin, Building } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Technical Executive (IT Analyst)",
      company: "Cybage Software",
      location: "Pune",
      duration: "October 2023 - Present",
      description: [
        "Provide L3 technical support for virtual desktops and cloud services",
        "Manage incidents using ITSM tools for SLA compliance (Jira, Atlassian, Salesforce, HaloITSM)",
        "Troubleshoot server/network issues and proactively monitor system performance",
        "Implement Azure / DaaS improvements and create knowledge base documentation",
        "Handle Microsoft 365 onboarding and coordinate escalations"
      ]
    },
    {
      title: "Transportation Specialist (ROC-OB)",
      company: "Amazon India Pvt Ltd",
      location: "Hyderabad",
      duration: "June 2022 - October 2023",
      description: [
        "Implemented supply chain solutions by coordinating with cross-functional teams",
        "Managed daily operations, including team training, shift coordination, and performance meetings",
        "Conducted real-time data evaluation and pattern studies using Excel and SQL",
        "Created and tracked performance indicators to boost productivity",
        "Partnered with Amazon's technical teams on system specifications",
        "Provided operational support around the clock for problem solving"
      ]
    },
    {
      title: "Business Customer Service Associate (BCSA)",
      company: "Amazon India Pvt Ltd",
      location: "Various Locations",
      duration: "August 2018 - June 2022",
      description: [
        "Handled administrative duties to maintain operational efficiency",
        "Managed daily operations, including team training and shift coordination",
        "Evaluated and documented merchandise patterns for optimization",
        "Operated multiple platforms (Amazon proprietary systems) for query handling",
        "Delivered email-based customer assistance, enhancing the experience",
        "Collaborated with departments for streamlined problem solving"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            6+ years of progressive experience in IT analysis, cloud infrastructure, and operations management
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-black group-hover:text-gray-800 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Building size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 mt-2 lg:mt-0">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;