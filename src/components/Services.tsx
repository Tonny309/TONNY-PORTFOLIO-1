import React from 'react';
import { Shield, Code, Palette, FileText, Database, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      Icon: Palette,
      title: 'Graphic Design',
      description: 'Creating visually stunning designs that communicate your brand message effectively through logos, branding, and marketing materials.',
      features: ['Logo Design', 'Brand Identity', 'Print Materials', 'Digital Graphics'],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      Icon: Code,
      title: 'Front-End Development',
      description: 'Building responsive, modern websites and web applications with clean code and exceptional user experiences.',
      features: ['React Development', 'Responsive Design', 'UI/UX Implementation', 'Performance Optimization'],
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      Icon: Shield,
      title: 'Cybersecurity',
      description: 'Protecting your digital assets with comprehensive security assessments, penetration testing, and security consulting.',
      features: ['Security Audits', 'Penetration Testing', 'Vulnerability Assessment', 'Security Consulting'],
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      Icon: Database,
      title: 'Data Entry',
      description: 'Accurate and efficient data management services ensuring your information is organized and accessible.',
      features: ['Data Processing', 'Database Management', 'Excel Automation', 'Quality Assurance'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      Icon: FileText,
      title: 'Blog Writing',
      description: 'Engaging, SEO-optimized content that establishes your authority and connects with your target audience.',
      features: ['Technical Writing', 'SEO Content', 'Blog Posts', 'Documentation'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
    Services
  </span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your needs, combining technical expertise with creative vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ Icon, title, description, features, color, bgColor, iconColor }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
            >
              <div className={`${bgColor} p-6 transition-all duration-300 group-hover:scale-105`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white rounded-lg p-3 shadow-md">
                    <Icon className={`w-8 h-8 ${iconColor}`} />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              </div>
              
              <div className="p-6 pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
                
                <div className="space-y-2 mb-6">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color} mr-3`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 px-4 bg-gradient-to-r ${color} text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;