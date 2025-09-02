import React, { useState } from 'react';
import { ExternalLink, Github, X, Filter } from 'lucide-react';
import brendaImg from "../assets/images/brenda.png";
import brochureImg from "../assets/images/brochure.png";
import brandImg from "../assets/images/brand.jpg";
import commerceImg from "../assets/images/commerce.jpg";
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  // const [selectedProject, setSelectedProject] = useState(null);
const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'design', name: 'Graphic Design' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'blog', name: 'Blog Articles' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: commerceImg,
      description: 'A modern e-commerce platform built with React and Node.js',
      fullDescription: 'A comprehensive e-commerce solution featuring user authentication, payment processing, inventory management, and responsive design. Built with React, Node.js, and integrated with Stripe for payments.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'design',
      image: brandImg,
      description: 'Complete brand identity package for a tech startup',
      fullDescription: 'Comprehensive brand identity design including logo, color palette, typography, business cards, and brand guidelines for a growing tech startup.',
      technologies: ['Photoshop', 'Illustrator', 'Figma'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Security Audit Report',
      category: 'security',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive security assessment for a financial institution',
      fullDescription: 'Detailed security audit including vulnerability assessment, penetration testing, and compliance review for a mid-sized financial institution.',
      technologies: ['Kali Linux', 'Nmap', 'Burp Suite', 'OWASP'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Tech Blog Series',
      category: 'blog',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Educational blog series on cybersecurity best practices',
      fullDescription: 'A comprehensive blog series covering cybersecurity fundamentals, best practices, and emerging threats, written for both technical and non-technical audiences.',
      technologies: ['Technical Writing', 'SEO', 'WordPress'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      image: brendaImg,
      description: 'Responsive portfolio website with modern animations',
      fullDescription: 'A fully responsive portfolio website featuring smooth animations, modern design, and optimized performance. Built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Corporate Brochure',
      category: 'design',
      image: brochureImg,
      description: 'Professional brochure design for a consulting firm',
      fullDescription: 'Multi-page corporate brochure showcasing services, team, and company values with professional photography and clean layout design.',
      technologies: ['InDesign', 'Photoshop', 'Print Design'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
    Portfolio
  </span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           <b> A showcase of my recent projects spanning web development, design, cybersecurity, and content creation
          </b></p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Filter className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.fullDescription}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: any) => (
                      <span key={tech} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;