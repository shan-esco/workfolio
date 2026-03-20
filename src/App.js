import React, { useState, useEffect } from 'react';
import { Code, Palette, Boxes, Mail, Github, Linkedin, ExternalLink, ChevronDown, Sparkles, Zap, Cpu } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: "Next-gen web experiences with React, Node.js, and cutting-edge frameworks. Performance-obsessed, pixel-perfect execution.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Graphic Design",
      description: "Bold visual identities that break conventions. UI/UX that doesn't just look good—it converts.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Boxes className="w-10 h-10" />,
      title: "VR Development",
      description: "Immersive realities that blur the line between digital and physical. Built for the metaverse era.",
      color: "from-purple-500 to-indigo-500"
    },
     {
      icon: <Boxes className="w-10 h-10" />,
      title: "UX/UI Design",
      description: "Immersive realities that blur the line between digital and physical. Built for the metaverse era.",
      color: "from-green-500 to-indigo-500"
    }
  ];

  const projects = [
    {
      title: "Aztro",
      category: "Web Development",
      description: "Full-stack platform with AI-powered recommendations",
      image: "/images/aztro/image.png",
      link: "https://aztro.space/",
      tech: ["React", "Node.js", "AI/ML"]
    },
    {
      title: "Identity Branding",
      category: "Graphic Design",
      description: "Minimalist branding for a corporate environment",
      image: "/images/branding/branding-cover.jpg",
      link: "https://www.behance.net/gallery/133625515/Identity-Branding",
      tech: ["Figma", "After Effects", "3D"]
    },
    {
      title: "VR Little Village Simulation",
      category: "VR Development",
      description: "Come play in our Little Village!",
      image: "/images/village/village.png",
      link: "https://github.com/shan-esco/Village_Environment",
      tech: ["Unity", "Unreal", "WebXR"]
    },
    {
      title: "Soul Kitchen",
      category: "Web Development",
      description: "Savor the cooking through the screen as you look through our flavorful menu.",
      image: "/images/catering/image.png",
      link: "https://github.com/shan-esco/catering-business",
      tech: ["Three.js", "GSAP", "WebGL"]
    },
    {
      title: "Truck Design System",
      category: "UX/UI Design",
      description: "Design System for an all new re-design!",
      image: "/images/autonation/DesignSystem.jpg",
      link: "https://www.behance.net/gallery/221138663/Truck-Design-System",
      tech: ["Three.js", "GSAP", "WebGL"]
    },
    {
      title: "VR Solar System",
      category: "VR Development",
      description: "Explore the Solar System in real-time!",
      image: "/images/solar/solar-cover.png",
      link: "https://github.com/shan-esco/Village_Environment",
      tech: ["Unity", "Unreal", "WebXR", "C#"]
    },
    {
      title: "Baseball Coach Trainer",
      category: "Web Development",
      description: "Award-winning portfolio with WebGL effects",
      image: "/images/baseball/image.png",
      link: "https://baseball-coach.vercel.app/",
      tech: ["Three.js", "REACT", "WebGL"]
    },
    {
      title: "Off Chain",
      category: "UX/UI Design",
      description: "Designed in 48 hours! Come check out our decentralized wallet!",
      image: "/images/offchain/cover.jpg",
      link: "https://www.behance.net/gallery/154938457/Off-Chain-(Eth-Bogota)",
      tech: ["Three.js", "GSAP", "WebGL"]
    },
    {
      title: "Staxx",
      category: "Web Development",
      description: "A decentralized marketplace for artists to showcase and monetize their work.",
      image: "/images/staxx/staxx.jpg",
      link: "https://ethglobal.com/showcase/staxx-bf8pf",
      tech: ["Javascript"]
    },
    {
      title: "Thorn",
      category: "Graphic Design",
      description: "An annnual report re-design",
      image: "/images/thorn/cover.jpg",
      link: "https://www.behance.net/gallery/124084975/Annual-Report",
      tech: ["Adobe Illustrator"]
    },
    {
      title: "Tacti-Wear",
      category: "Web Development",
      description: "A place to get home made Tactical Wear",
      image: "/images/tacti/tacti1.jpg",
      link: "https://www.behance.net/gallery/124086517/Tacti-Wear",
      tech: ["React"],
    },
    {
      title: "Search Results Page",
      category: "UX/UI Design",
      description: "AutoNation's Search Results Page Re-design",
      image: "/images/srp/srp.png",
      link: "https://www.autonation.com/cars-for-sale?mk=dodge",
      tech: ["Figma"],
    },
    {
      title: "Vehicle Description Page",
      category: "Web Development",
      description: "AutoNation's Vehicle Description Page Re-design",
      image: "/images/vdp/vdp1.jpg",
      link: "https://www.autonation.com/cars/2c3cdxct5ph639419/dodge-charger-2023",
      tech: ["Figma"],
    },
    {
      title: "Corona Virus VR Game",
      category: "VR Development",
      description: "A VR Simulation game where you can shoot all the parasites you see!",
      image: "/images/virus/virus-cover.png",
      link: "https://github.com/shan-esco/CoronaVirus_VRGame",
      tech: ["Unity", "C#"],
    },
    {
      title: "HappyWater",
      category: "Graphic Design",
      description: "HappyWater's New Label Design",
      image: "/images/happywater/alkaline.jpg",
      link: "https://www.behance.net/gallery/124517155/Happy-Water",
      tech: ["Adobe Illustrator"]
    },
    {
      title: "Archi-Tech",
      category: "Web Development",
      description: "Portfolio Template",
      image: "/images/archi/image.png",
      link: "https://www.archi-tech.co/",
      tech: ["React"],
    },
    {
      title: "Tennis VR Trainer",
      category: "VR Development",
      description: "A VR Simulation game where you can workout!",
      image: "/images/workout/workout-cover.png",
      link: "https://github.com/shan-esco/FitnessWorkout_VRGame",
      tech: ["Unity", "C#"],
    },
    {
      title: "AutoNation Fleet Landing Page",
      category: "UX/UI Design",
      description: "Re-design for AutoNation's Fleet Services Landing Page",
      image: "/images/fleet/fleet.png",
      link: "https://www.autonation.com/an-fleet-services",
      tech: ["Three.js", "GSAP", "WebGL"]
    },
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: Math.random() * 5 + 's'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(236, 72, 153, 0.5); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-slideIn { animation: slideIn 0.6s ease-out forwards; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-xl z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SHANNON<span className="text-white"> ESCORIAZA</span>
            </span>
          </h1>
          <div className="flex gap-8 font-medium">
            {['home', 'services', 'portfolio', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => setActiveSection(section)} 
                className={`hover:text-cyan-400 transition uppercase text-sm tracking-wider ${
                  activeSection === section ? 'text-cyan-400' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div 
            className="absolute inset-0 opacity-20"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 text-center max-w-5xl animate-slideIn">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm">
                Digital Craftsman
              </span>
              <Sparkles className="w-5 h-5 text-pink-400" />
            </div>
            
            <h2 className="text-8xl font-black mb-6 leading-tight tracking-tighter">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Building The
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future of Web
              </span>
            </h2>
            
            <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
              Architecting digital experiences that push boundaries. 
              <span className="text-white font-medium"> Web development, design, and VR</span> that doesn't compromise.
            </p>
            
            <div className="flex gap-6 justify-center">
              <button 
                onClick={() => setActiveSection('portfolio')}
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 animate-glow"
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button 
                onClick={() => setActiveSection('contact')}
                className="border-2 border-cyan-400 hover:bg-cyan-400/10 px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:border-purple-400"
              >
                Let's Talk
              </button>
            </div>

            <div className="mt-20 animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-cyan-400" />
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeSection === 'services' && (
        <section className="relative min-h-screen pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-7xl font-black mb-6 tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  What I Do
                </span>
              </h2>
              <p className="text-xl text-gray-400">Expertise that delivers results</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-transparent transition-all duration-500 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className={`relative inline-block p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  
                  <div className="mt-6 flex items-center text-cyan-400 font-semibold group-hover:gap-2 transition-all">
                    Learn More 
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:ml-0 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {activeSection === 'portfolio' && (
        <section className="relative min-h-screen pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-7xl font-black mb-6 tracking-tighter">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Featured Work
                </span>
              </h2>
              <p className="text-xl text-gray-400">Projects that make an impact</p>

              <br/>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold uppercase text-sm tracking-wider transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white scale-105'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.link}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-purple-400 font-semibold transition group/link"
                    >
                      View Project 
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center mb-16">
              <h2 className="text-7xl font-black mb-6 tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  Let's Build Something
                </span>
              </h2>
              <p className="text-2xl text-gray-400">Got a project in mind? Let's make it happen.</p>
            </div>
            
            <div className="flex justify-center gap-6 mb-12">
              <a href="mailto:shanescobiz@gmail.com" 
                 className="group p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-cyan-400 transition-all hover:scale-110">
                <Mail className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/shan-esco" 
                 className="group p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-purple-400 transition-all hover:scale-110">
                <Github className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/shan-esco/" 
                 className="group p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-pink-400 transition-all hover:scale-110">
                <Linkedin className="w-10 h-10 text-pink-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="bg-black/50 border border-gray-800 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="bg-black/50 border border-gray-800 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                />
              </div>
              <textarea 
                placeholder="Tell me about your project..."
                rows="6"
                className="w-full bg-black/50 border border-gray-800 rounded-xl px-6 py-4 mb-6 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-[1.02] animate-glow">
                Send Message
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500">© 2026 Shannon Escoriaza All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}