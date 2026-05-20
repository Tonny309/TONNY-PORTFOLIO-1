import React from 'react';
import { Code, Shield, Palette, FileText, Database, Award } from 'lucide-react';
import tonny1Img from "../assets/images/tonny1.png";
// import profilePicture from "../assets/images/profile_picture.jpg";
const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
    { name: 'Photoshop', level: 92, color: 'bg-blue-600' },
    { name: 'Kali Linux', level: 85, color: 'bg-gray-700' },
    { name: 'Cybersecurity', level: 88, color: 'bg-red-500' }
  ];

  const technologies = [
    { Icon: Code, name: 'Frontend Development', tools: ['React', 'TypeScript', 'Tailwind CSS'] },
    { Icon: Shield, name: 'Cybersecurity', tools: ['Kali Linux', 'Penetration Testing', 'Security Audits'] },
    { Icon: Palette, name: 'Graphic Design', tools: ['Photoshop', 'Illustrator', 'Figma'] },
    { Icon: FileText, name: 'Content Writing', tools: ['Technical Writing', 'Blog Posts', 'Documentation'] },
    { Icon: Database, name: 'Data Management', tools: ['Data Entry', 'Excel', 'Database Management'] }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
<h2 className="text-5xl font-extrabold mb-4">
    About
  <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
    Me
  </span>
</h2>


          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A versatile digital professional with a passion for technology, security, and creative design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image and Info */}
          <div className="text-center lg:text-left">
            <div className="relative mb-8">
              <img 
                src={tonny1Img}
                alt="Sarah Mitchell"
                className="w-64 h-64 rounded-full mx-auto object-cover shadow-elegant"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center animate-bounce-gentle">
                <Palette className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <div className="md:w-1/2">
        
      </div>
            
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tonny Maingi</h3>
    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
  I’m Antony Maingi, a Cybersecurity Enthusiast and Front-End Developer with skills in ethical hacking, penetration testing, responsive web development, and data modeling.
</p>

<p className="text-lg text-gray-600 mb-6 leading-relaxed">
  I have experience working with front-end technologies to build clean, responsive, and user-friendly interfaces, while also applying cybersecurity principles to improve system security and performance.
</p>

<p className="text-lg text-gray-600 mb-6 leading-relaxed">
  My technical skills include graphic design, data analysis, content writing, SQLMap testing, problem-solving, and creating practical digital solutions focused on usability and functionality.
</p>

<p className="text-lg text-gray-600 mb-6 leading-relaxed">
  I am passionate about continuous learning, technology innovation, and combining creativity with technical expertise to deliver impactful projects.
</p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Fun Fact:</h4>
              <p className="text-gray-700 italic">
                "I can secure your digital assets in the morning, design your brand identity in the afternoon, 
                and build your website in the evening - all while maintaining perfect documentation!"
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
    Skills
  </span></h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Tools <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
    & Technologies
  </span></h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map(({ Icon, name, tools }) => (
              <div key={name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;