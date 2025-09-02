import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import CLEMMOH2Img from "../assets/images/CLEMMOH2.jpg";
import cyrusImg from "../assets/images/cyrus.jpeg";
import cynthiaImg from "../assets/images/cynthia.jpeg";
import tabithaImg from "../assets/images/tabitha.png";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Cynthia Bonareri',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      content: 'Tonny delivered exceptional work on our website redesign. His attention to detail and understanding of both design and security made him the perfect choice for our project.',
      rating: 5,
      image: cynthiaImg
    },
    {
      id: 2,
      name: 'Clement Musyoka',
      position: 'CEO',
      company: 'CJM Adventures co.',
      content: 'The graphic design work Tonny created for our brand exceeded all expectations. Professional, creative, and delivered on time. Highly recommended!',
      rating: 5,
      image: CLEMMOH2Img
    },
    {
      id: 3,
      name: 'Tabitha Mwangi',
      position: 'IT Manager',
      company: 'SecureBank Ltd.',
      content: 'Tonny\'s cybersecurity audit was thorough and professional. He identified vulnerabilities we didn\'t know existed and provided clear solutions.',
      rating: 5,
      image: tabithaImg
    },
    {
      id: 4,
      name: 'Cyrus Maundu',
      position: 'Senior Lecturer',
      company: 'Cyrus Academy and Tech.',
      content: 'Working with Tonny was a pleasure. His technical blog posts have significantly improved our content strategy and SEO rankings.',
      rating: 5,
      image: cyrusImg
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
    Clients say
  </span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it -<span className="bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
   <b> here's what my clients have to say about working with me</b>
  </span>
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-blue-600 mb-6" />
            
            <div className="text-center">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Client Info */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-blue-600 font-medium">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid (Hidden on mobile) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-lg p-6 shadow-md transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-blue-600' : 'hover:shadow-lg'
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;