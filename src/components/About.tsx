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
            Hey there! 👋 I’m Antony Maingi — a passionate Cybersecurity student, Front-End Developer, and lifelong learner driven by curiosity and innovation.
<p>My tech journey started with the Ajira Digital Program, where I built a solid foundation in graphic design, content writing, and data analysis. 
From there, I expanded into front-end development and data modeling, combining clean, responsive code with structured solutions that focus on real user needs.</p>
<p>Currently, I’m diving deeper into cybersecurity, specializing in ethical hacking and penetration testing. 
I enjoy exploring tools like SQLMap and applying them to strengthen digital systems.</p>
 <p>At the same time, I keep my creative side alive by building intuitive interfaces and problem-solving through technology.</p>
<p>Beyond the screen, I’m actively involved in leadership and community work — serving as the Sports, Games, and Entertainment Minister at my university.
 These roles sharpen my teamwork, communication, and organizational skills, which I carry back into my tech projects.
<p>When I’m not debugging code or analyzing networks, you’ll probably find me outdoors hiking, brainstorming new ideas, or geeking out over sci-fi stories. 
I believe that the best innovations come from blending technical excellence with creativity and human-centered thinking.</p>
</p>
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