import React from 'react';
// import { Mail, Linkedin, Github, Twitter, ArrowUp, Heart } from 'lucide-react';
import { Mail, Phone, MapPin, Send, CheckCircle,ArrowUp, Heart  } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTelegram,FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Cybersecurity',
    'Graphic Design',
    'Data Entry',
    'Blog Writing'
  ];
const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/itstonny314?igsh=MWR5N2xycWIzNjNsZg==", icon: FaInstagram, color: "hover:text-pink-500" },
    { label: "WhatsApp", href: "https://wa.me/+254708167754", icon: FaWhatsapp, color: "hover:text-green-500" },
    { label: "Facebook", href: "https://www.facebook.com/giovannial.tonnie", icon: FaFacebook, color: "hover:text-blue-600" },
    { label: "Telegram", href: "https://t.me/+254708167754", icon: FaTelegram, color: "hover:text-blue-500" },
  ];
 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tonny Maingi
              </h3>
              <p className="text-gray-400 mt-2">
                Cybersecurity Enthusiast & Creative Developer
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Passionate about creating secure, beautiful, and functional digital experiences. 
              I blend technical expertise with creative vision to help businesses thrive in the digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-2">Email</p>
                <a
                  href="mailto:tonny.maingi@example.com"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  antonymaingi151@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Location</p>
                <p className="text-white">Murang'a, Kenya</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="font-medium">Available for work</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Currently accepting new projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              © {currentYear} Tonny Maingi. Made with 
              <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" />
              and lots of coffee.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <p className="text-gray-400">
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;