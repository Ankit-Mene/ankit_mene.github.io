import React from "react";
import { MapPin, Mail, Phone, Linkedin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "meneankit321@gmail.com",
      link: "mailto:meneankit321@gmail.com",
      description: "Feel free to reach out via email"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 89391 17321",
      link: "tel:+918939117321",
      description: "Available for calls during business hours"
    },
    {
      icon: Phone,
      label: "Alternate Phone",
      value: "+91 99232 77603",
      link: "tel:+919923277603",
      description: "Alternative contact number"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ankit-mene",
      link: "https://linkedin.com/in/ankit-mene",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch for opportunities, collaborations, or technical discussions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-black">
                Let's Connect
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I'm always open to discussing new opportunities, technical challenges, 
                and potential collaborations. Whether you're looking for IT expertise, 
                cloud infrastructure solutions, or want to connect professionally, 
                feel free to reach out through any of the following channels.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="p-2 bg-gray-100 rounded-lg">
                <MapPin size={20} className="text-gray-600" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Location</h4>
                <p className="text-gray-600">Pune, India</p>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
                  <CardContent className="p-6">
                    <a
                      href={contact.link}
                      target={contact.link.startsWith("http") ? "_blank" : "_self"}
                      rel={contact.link.startsWith("http") ? "noopener noreferrer" : ""}
                      className="flex items-start space-x-4 hover:text-gray-800 transition-colors"
                    >
                      <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-black mb-1 group-hover:text-gray-800 transition-colors">
                          {contact.label}
                        </h4>
                        <p className="text-gray-700 mb-1 font-medium">
                          {contact.value}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-md">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gray-100 rounded-full">
              <MessageCircle size={28} className="text-gray-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-black mb-4">
            Ready to Collaborate?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            I'm currently open to new opportunities and exciting projects. 
            Let's discuss how my expertise in cloud infrastructure, IT analysis, 
            and operations management can contribute to your team's success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:meneankit321@gmail.com"
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              <Mail size={18} />
              <span>Send Email</span>
            </a>
            <a
              href="https://linkedin.com/in/ankit-mene"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-black hover:text-black transition-all duration-200 hover:scale-105"
            >
              <Linkedin size={18} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;