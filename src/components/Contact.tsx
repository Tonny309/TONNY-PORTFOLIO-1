import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTelegram,FaFacebook } from "react-icons/fa";
import {  useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
// State
const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);


// Auto-hide with fade-out
useEffect(() => {
  if (submitStatus === "success") {
    const timer = setTimeout(() => setSubmitStatus(null), 5000); // hide after 5s
    return () => clearTimeout(timer);
  }
}, [submitStatus]);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 // Add this function (or update your existing handleSubmit)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch("https://formspree.io/f/xzzagqgd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // clear form
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'antonymaingi151@gmail.com',
      href: 'mailto:antonymaingi151@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 795 856 492',
      href: 'tel:+254795856492'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Muranga, Kenya',
      href: '#'
    }
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/itstonny314?igsh=MWR5N2xycWIzNjNsZg==", icon: FaInstagram, color: "hover:text-pink-500" },
    { label: "WhatsApp", href: "https://wa.me/+254708167754", icon: FaWhatsapp, color: "hover:text-green-500" },
    { label: "Facebook", href: "https://www.facebook.com/giovannial.tonnie", icon: FaFacebook, color: "hover:text-blue-600" },
    { label: "Telegram", href: "https://t.me/+254708167754", icon: FaTelegram, color: "hover:text-blue-500" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-400 to-purple-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl font-bold mb-4 ">Get In <span className="text-blue-500">
  Touch
</span></h2>
          <p className="text-xl max-w-3xl mx-auto font-bold">
          <span className="text--500">
    Ready to start your next project? Let's discuss how I can help bring your ideas to life</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
           {submitStatus === 'success' && (
  <div
    className={`mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center transition-opacity duration-1000 ${
      submitStatus === 'success' ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
    <span className="text-green-800">Message sent successfully! I'll get back to you soon.</span>
  </div>
)}


            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <b>Full Name</b>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <b>Email Address</b>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  <b>Subject</b>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                 <b> Message</b>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell me about your project or how I can help..."
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{label}</p>
                      <p className="text-gray-900 font-semibold">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6"><span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
    Follow Me
  </span></h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg text-gray-600 ${color} transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="mb-6">
                I'm always excited to take on new challenges and help bring innovative ideas to life. 
                Whether you need cybersecurity consultation, web development, or creative design services, 
                I'm here to help.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="font-medium">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
