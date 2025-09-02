// import { Button } from '../components/button';
// import { TypewriterEffect } from './TypewriterEffect';
// import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
// import heroImage from '@/assets/hero-bg.jpg';

// const Hero = () => {
//   const titles = [
//     'Cybersecurity Enthusiast',
//     'Graphic Designer',
//     'Front-End Developer',
//     'Content Creator'
//   ];

//   return (
//     <section id="hero">
//       {/* your JSX content */}
//     </section>
//   );
// };

// export default Hero;

//   return (
//     <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       />
//       <div className="absolute inset-0 bg-gradient-hero opacity-90" />
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//         <div className="animate-fade-in">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//             Hi, I'm{' '}
//             <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
//               Tonny Maingi
//             </span>
//           </h1>
          
//           <div className="text-2xl md:text-3xl text-white/90 mb-8 h-16 flex items-center justify-center">
//             <TypewriterEffect phrases={titles} />
//           </div>

//           <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
//             I craft secure digital experiences through innovative design and robust development. 
//             Let's build something amazing together.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//             <Button variant="hero" size="xl" className="group">
//               Explore My Work
//               <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
//             </Button>
//             <Button variant="glass" size="xl">
//               Download CV
//             </Button>
//           </div>

//           {/* Social Links */}
//           <div className="flex justify-center space-x-6">
//             <Button variant="glass" size="icon" className="hover:scale-110">
//               <Github className="h-5 w-5" />
//             </Button>
//             <Button variant="glass" size="icon" className="hover:scale-110">
//               <Linkedin className="h-5 w-5" />
//             </Button>
//             <Button variant="glass" size="icon" className="hover:scale-110">
//               <Mail className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Floating Animation */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
//         <ArrowDown className="h-8 w-8 text-white/60" />
//       </div>
//     </section>
//   );
// };

import { Button } from '../components/button'; // ✅ adjust path if needed
import { TypewriterEffect } from './TypewriterEffect';
import { ArrowDown, Mail } from 'lucide-react';
import heroImage from '@/assets/images/hero.jpg';
  import { FaInstagram, FaWhatsapp, FaLinkedin, FaTelegram,FaFacebook } from "react-icons/fa";

  
const Hero = () => {
  const titles = [
    'Cybersecurity Enthusiast',
    'Graphic Designer',
    'Front-End Developer',
    'Content Creator'
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
   


      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-white drop-shadow-lg
">
            Hi, I'm{' '}
<span className="text-cyan-400">    Tonny Maingi
  </span>
          </h1>
          {/* Typewriter effect */}
          <div className="text-2xl md:text-3xl text-white/90 mb-8 h-16 flex items-center justify-center">
            <TypewriterEffect phrases={titles} />
          </div>

          {/* Subtext */}
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"><span className="text-yellow-400">
  I craft secure digital experiences through innovative design and
            robust development. Let's build something amazing together.
</span>
          </p>

          {/* Call to action buttons */}
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
  {/* Explore My Work */}
  <Button
    size="xl"
    className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
  >
      <a href="#portfolio">
    Explore My Work
    <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
  </a>
  </Button>

  {/* Download CV */}
  <Button
    size="xl"
    className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-yellow-500 transition-all duration-300"
  >
    Download CV
  </Button>
</div>


          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="glass" size="icon" className="hover:scale-110">
              <FaWhatsapp className="h-5 w-5" />
            </Button>
            <Button variant="glass" size="icon" className="hover:scale-110">
              <FaInstagram className="h-5 w-5" />
            </Button>
            <Button variant="glass" size="icon" className="hover:scale-110">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
