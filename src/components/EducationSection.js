import React from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const EducationSection = () => {
  const education = {
    degree: "Bachelor of Technology - IT Cloud Computing",
    institution: "Hindustan Institute of Technology and Science",
    description: "Specialized in IT and Cloud Computing technologies with comprehensive coursework in modern computing infrastructure, cloud architecture, and enterprise IT solutions."
  };

  const certificationModules = [
    "Introduction to Opensource Software and Open Standards",
    "IT Infrastructure Landscape Overview",
    "Introduction to Virtualization",
    "Cloud Computing Architecture and Deployment Models",
    "Business Intelligence",
    "Managing the Cloud",
    "Cloud Performance Tuning",
    "Service Oriented Architecture",
    "Business Process Management"
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strong educational foundation in IT and cloud computing with industry-recognized certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Academic Education */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md h-full">
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-black group-hover:text-gray-800 transition-colors">
                    Academic Qualification
                  </CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-black">
                  {education.degree}
                </h3>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin size={16} />
                  <span>{education.institution}</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {education.description}
              </p>

              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  Bachelor's Degree
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  Information Technology
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  Cloud Computing
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Professional Certification */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md h-full">
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Award size={24} />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-black group-hover:text-gray-800 transition-colors">
                    Professional Certification
                  </CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-black">
                  IBM Certified Cloud Computing & Virtualization Specialist
                </h3>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Award size={16} />
                  <span>IBM Professional Certification</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-black uppercase tracking-wide">
                  Certification Modules
                </h4>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {certificationModules.map((module, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  IBM Certified
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  Cloud Computing
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  Virtualization
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;