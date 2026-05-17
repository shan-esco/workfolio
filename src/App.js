import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Code, Smartphone, Mail, Github, Linkedin, ExternalLink, ChevronDown, Sparkles, Zap, Menu, X, Check, Star, Layers, Gamepad2, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('Web Development');
  const [billingCycle, setBillingCycle] = useState('project');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (activeSection !== 'home') return;
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSection]);

  const navigate = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    setFormStatus('sending');
    try {
      await emailjs.send(
        'service_683ok8q',
        'template_f1t4qik',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        '3bKLZ_TC3Bk_hLlIT'
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const testimonials = [
    { quote: "Shannon delivered an exceptional web experience that completely transformed our online presence. Her attention to detail and technical expertise are unmatched.", name: "Jane Doe", title: "CEO, Example Company", initials: "JD", color: "from-cyan-500 to-blue-500" },
    { quote: "Working with Shannon was a game-changer. She took our vague idea and turned it into a polished, fully functional product ahead of schedule.", name: "Marcus Williams", title: "Founder, Tech Startup", initials: "MW", color: "from-purple-500 to-pink-500" },
    { quote: "Shannon's VR simulation work for our training program was beyond what we imagined. She brings creativity and engineering together seamlessly.", name: "Dr. Alex Rivera", title: "Director, Research Institute", initials: "AR", color: "from-pink-500 to-rose-500" },
    { quote: "The UX redesign Shannon delivered increased our conversion rate significantly. She truly understands both design and the user's perspective.", name: "Taylor Kim", title: "Product Manager, SaaS Co.", initials: "TK", color: "from-green-500 to-emerald-500" },
  ];

  const services = [
    { icon: <Code className="w-8 h-8 sm:w-10 sm:h-10" />, title: "Web Development", description: "Next-gen web experiences with React, Node.js, and cutting-edge frameworks. Performance-obsessed, pixel-perfect execution.", color: "from-cyan-500 to-blue-500" },
    { icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10" />, title: "Mobile App Development", description: "Native and cross-platform apps built for performance, usability, and scale. iOS and Android covered.", color: "from-green-500 to-emerald-500" },
    { icon: <Code className="w-8 h-8 sm:w-10 sm:h-10" />, title: "Software Development", description: "Custom software solutions from backend systems to full-stack platforms. Built to last and built to scale.", color: "from-orange-500 to-yellow-500" },
    { icon: <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10" />, title: "VR / Game Design", description: "Immersive realities that blur the line between digital and physical. Built for the metaverse era.", color: "from-purple-500 to-indigo-500" },
    { icon: <Layers className="w-8 h-8 sm:w-10 sm:h-10" />, title: "UX/UI Design", description: "Intuitive flows and delightful interfaces that users love from first click.", color: "from-pink-500 to-rose-500" },
  ];

  const pricingData = {
    "Web Development": {
      color: "from-cyan-500 to-blue-500",
      tiers: [
        { name: "Starter", tagline: "Great for personal sites & landing pages", projectPrice: 499, retainerPrice: 299, featured: false, features: ["1 Custom Page or Landing Page", "Mobile Responsive Design", "Basic SEO Setup", "1 Round of Revisions", "2-Week Delivery", "Contact Form Integration", "30-Day Post-Launch Support"] },
        { name: "Pro", tagline: "Full websites for growing businesses", projectPrice: 1299, retainerPrice: 999, featured: true, features: ["Up to 5 Custom Pages", "Advanced SEO & Performance", "3 Rounds of Revisions", "4-Week Delivery", "CMS Integration", "Google Analytics Setup", "60-Day Post-Launch Support", "Priority Support"] },
        { name: "Enterprise", tagline: "Complex platforms & web applications", projectPrice: 3499, retainerPrice: 2499, featured: false, features: ["Unlimited Pages & Sections", "Custom Web App / Dashboard", "API Integrations", "Advanced Animations", "Unlimited Revisions", "6-Week Delivery", "90-Day Post-Launch Support", "Dedicated Slack Channel"] },
      ]
    },
    "Mobile App Development": {
      color: "from-green-500 to-emerald-500",
      tiers: [
        { name: "Starter", tagline: "Simple apps for one platform", projectPrice: 1500, retainerPrice: 999, featured: false, features: ["iOS or Android (one platform)", "Up to 5 Core Screens", "Basic UI from existing design", "1 Round of Revisions", "4-Week Delivery", "App Store Submission Help", "30-Day Post-Launch Support"] },
        { name: "Pro", tagline: "Cross-platform apps with custom UI", projectPrice: 4000, retainerPrice: 2799, featured: true, features: ["iOS + Android (React Native)", "Up to 15 Screens", "Custom UI/UX Design Included", "Push Notifications", "3 Rounds of Revisions", "6-Week Delivery", "Backend API Integration", "60-Day Post-Launch Support"] },
        { name: "Enterprise", tagline: "Full-scale apps with complex systems", projectPrice: 10000, retainerPrice: 6999, featured: false, features: ["iOS + Android + Web", "Unlimited Screens", "Custom Backend / Database", "Auth, Payments & Analytics", "Unlimited Revisions", "10-Week Delivery", "Dedicated Slack Channel", "90-Day Post-Launch Support"] },
      ]
    },
    "Software Development": {
      color: "from-orange-500 to-yellow-500",
      tiers: [
        { name: "Starter", tagline: "Scripts, tools & small automations", projectPrice: 1000, retainerPrice: 699, featured: false, features: ["Single-purpose tool or script", "Basic documentation", "1 Round of Revisions", "2-Week Delivery", "GitHub repo handoff", "30-Day Support"] },
        { name: "Pro", tagline: "Full-stack apps & internal platforms", projectPrice: 3500, retainerPrice: 2499, featured: true, features: ["Full-Stack Web Application", "Database Design & Setup", "REST API Development", "User Authentication", "3 Rounds of Revisions", "6-Week Delivery", "Deployment & DevOps Setup", "60-Day Post-Launch Support"] },
        { name: "Enterprise", tagline: "Complex systems built for scale", projectPrice: 0, retainerPrice: 0, featured: false, custom: true, features: ["Microservices Architecture", "CI/CD Pipeline Setup", "Cloud Infrastructure (AWS/GCP)", "Security & Compliance Review", "Unlimited Revisions", "Custom Timeline", "Dedicated Slack Channel", "Ongoing Retainer Available"] },
      ]
    },
    "VR / Game Design": {
      color: "from-purple-500 to-indigo-500",
      tiers: [
        { name: "Starter", tagline: "Simple scenes & interactive demos", projectPrice: 2000, retainerPrice: 1499, featured: false, features: ["Single Environment / Scene", "Basic Interactivity", "Unity or Unreal Engine", "1 Round of Revisions", "4-Week Delivery", "WebXR or standalone build", "30-Day Support"] },
        { name: "Pro", tagline: "Multi-level games & VR experiences", projectPrice: 5000, retainerPrice: 3499, featured: true, features: ["Multi-Scene / Multi-Level", "Custom 3D Assets", "Physics & Animation Systems", "VR Headset Optimization", "3 Rounds of Revisions", "8-Week Delivery", "Sound & FX Integration", "60-Day Post-Launch Support"] },
        { name: "Enterprise", tagline: "Full games & immersive simulations", projectPrice: 15000, retainerPrice: 9999, featured: false, features: ["Full Game or Simulation", "Custom Engine Features", "Multiplayer / Networked Play", "Advanced AI & Pathfinding", "Unlimited Revisions", "Custom Timeline", "Dedicated Slack Channel", "90-Day Post-Launch Support"] },
      ]
    },
    "UX/UI Design": {
      color: "from-pink-500 to-rose-500",
      tiers: [
        { name: "Starter", tagline: "Wireframes & simple UI design", projectPrice: 299, retainerPrice: 199, featured: false, features: ["Up to 5 Screen Designs", "Low or High-Fidelity Wireframes", "Figma File Handoff", "1 Round of Revisions", "1-Week Delivery", "Mobile + Desktop layouts", "30-Day Support"] },
        { name: "Pro", tagline: "Full product design with research", projectPrice: 799, retainerPrice: 599, featured: true, features: ["Up to 20 Screen Designs", "UX Research & User Flows", "Interactive Prototype", "Design System / Components", "3 Rounds of Revisions", "3-Week Delivery", "Developer Handoff Notes", "60-Day Support"] },
        { name: "Enterprise", tagline: "End-to-end UX for large products", projectPrice: 2500, retainerPrice: 1799, featured: false, features: ["Unlimited Screens", "Full UX Audit & Research", "Usability Testing", "Complete Design System", "Unlimited Revisions", "5-Week Delivery", "Stakeholder Presentation Deck", "90-Day Support"] },
      ]
    }
  };

  const serviceTabIcons = {
    "Web Development": <Code className="w-4 h-4" />,
    "Mobile App Development": <Smartphone className="w-4 h-4" />,
    "Software Development": <Code className="w-4 h-4" />,
    "VR / Game Design": <Gamepad2 className="w-4 h-4" />,
    "UX/UI Design": <Layers className="w-4 h-4" />,
  };

  const projects = [
    { title: "Aztro", category: "Web Development", description: "Full-stack platform with AI-powered recommendations", image: "/images/aztro/image.png", link: "https://aztro.space/", tech: ["React", "Node.js", "AI/ML"] },
    { title: "VR Little Village Simulation", category: "VR / Game Design", description: "Come play in our Little Village!", image: "/images/village/village.png", link: "https://github.com/shan-esco/Village_Environment", tech: ["Unity", "Unreal", "WebXR"] },
    { title: "Soul Kitchen", category: "Web Development", description: "Savor the cooking through the screen as you look through our flavorful menu.", image: "/images/catering/image.png", link: "https://github.com/shan-esco/catering-business", tech: ["Three.js", "GSAP", "WebGL"] },
    { title: "Truck Design System", category: "UX/UI Design", description: "Design System for an all new re-design!", image: "/images/autonation/DesignSystem.jpg", link: "https://www.behance.net/gallery/221138663/Truck-Design-System", tech: ["Figma"] },
    { title: "VR Solar System", category: "VR / Game Design", description: "Explore the Solar System in real-time!", image: "/images/solar/solar-cover.png", link: "https://github.com/shan-esco/Village_Environment", tech: ["Unity", "Unreal", "WebXR", "C#"] },
    { title: "Baseball Coach Trainer", category: "Web Development", description: "Award-winning portfolio with WebGL effects", image: "/images/baseball/image.png", link: "https://baseball-coach.vercel.app/", tech: ["Three.js", "React", "WebGL"] },
    { title: "Off Chain", category: "UX/UI Design", description: "Designed in 48 hours! Come check out our decentralized wallet!", image: "/images/offchain/cover.jpg", link: "https://www.behance.net/gallery/154938457/Off-Chain-(Eth-Bogota)", tech: ["Figma"] },
    { title: "Staxx", category: "Web Development", description: "A decentralized marketplace for artists to showcase and monetize their work.", image: "/images/staxx/staxx.jpg", link: "https://ethglobal.com/showcase/staxx-bf8pf", tech: ["Javascript"] },
    { title: "Tacti-Wear", category: "Web Development", description: "A place to get home made Tactical Wear", image: "/images/tacti/tacti1.jpg", link: "https://www.behance.net/gallery/124086517/Tacti-Wear", tech: ["React"] },
    { title: "Search Results Page", category: "UX/UI Design", description: "AutoNation's Search Results Page Re-design", image: "/images/srp/srp.png", link: "https://www.autonation.com/cars-for-sale?mk=dodge", tech: ["Figma"] },
    { title: "Vehicle Description Page", category: "Web Development", description: "AutoNation's Vehicle Description Page Re-design", image: "/images/vdp/vdp1.jpg", link: "https://www.autonation.com/cars/2c3cdxct5ph639419/dodge-charger-2023", tech: ["Figma"] },
    { title: "Corona Virus VR Game", category: "VR / Game Design", description: "A VR Simulation game where you can shoot all the parasites you see!", image: "/images/virus/virus-cover.png", link: "https://github.com/shan-esco/CoronaVirus_VRGame", tech: ["Unity", "C#"] },
    { title: "Archi-Tech", category: "Web Development", description: "Portfolio Template", image: "/images/archi/image.png", link: "https://www.archi-tech.co/", tech: ["React"] },
    { title: "Tennis VR Trainer", category: "VR / Game Design", description: "A VR Simulation game where you can workout!", image: "/images/workout/workout-cover.png", link: "https://github.com/shan-esco/FitnessWorkout_VRGame", tech: ["Unity", "C#"] },
    { title: "AutoNation Fleet Landing Page", category: "UX/UI Design", description: "Re-design for AutoNation's Fleet Services Landing Page", image: "/images/fleet/fleet.png", link: "https://www.autonation.com/an-fleet-services", tech: ["Figma"] },
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);
  const activePricing = pricingData[activeServiceTab];
  const prevTestimonial = () => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => setActiveTestimonial(prev => (prev + 1) % testimonials.length);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20" style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="absolute bg-white rounded-full" style={{ width: Math.random() * 3 + 1 + 'px', height: Math.random() * 3 + 1 + 'px', top: Math.random() * 100 + '%', left: Math.random() * 100 + '%', animation: `float ${Math.random() * 10 + 10}s linear infinite`, animationDelay: Math.random() * 5 + 's' }} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-20px) translateX(10px); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(139,92,246,0.5); } 50% { box-shadow: 0 0 40px rgba(139,92,246,0.8), 0 0 60px rgba(236,72,153,0.5); } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes testimonialFade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-slideIn { animation: slideIn 0.6s ease-out forwards; }
        .animate-fadeUp { animation: fadeUp 0.35s ease-out forwards; }
        .animate-testimonial { animation: testimonialFade 0.4s ease-out forwards; }
        .pricing-featured-glow { box-shadow: 0 0 0 1px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.15); }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-xl z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">SHANNON<span className="text-white"> ESCORIAZA</span></span>
          </h1>
          <div className="hidden md:flex gap-6 lg:gap-8 font-medium">
            {['home', 'services', 'portfolio', 'pricing', 'contact'].map((section) => (
              <button key={section} onClick={() => navigate(section)} className={`hover:text-cyan-400 transition uppercase text-sm tracking-wider ${activeSection === section ? 'text-cyan-400' : ''}`}>{section}</button>
            ))}
          </div>
          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 px-4 py-4 flex flex-col gap-4">
            {['home', 'services', 'portfolio', 'pricing', 'contact'].map((section) => (
              <button key={section} onClick={() => navigate(section)} className={`uppercase text-sm tracking-wider font-medium text-left py-2 transition ${activeSection === section ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}>{section}</button>
            ))}
          </div>
        )}
      </nav>

      {/* Home */}
      {activeSection === 'home' && (
        <>
          {/* Hero */}
          <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
              <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 text-center max-w-5xl animate-slideIn px-2">
              <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold uppercase tracking-widest text-xs sm:text-sm">Digital Craftsman</span>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-tight tracking-tighter">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">Building The</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Future of Web</span>
              </h2>
              <p className="text-base sm:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto font-light px-2">
                Architecting digital experiences that push boundaries.
                <span className="text-white font-medium"> Web, mobile, software, VR, and design</span> that doesn't compromise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setActiveSection('portfolio')} className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all hover:scale-105 animate-glow">
                  <span className="relative z-10">View Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button onClick={() => setActiveSection('contact')} className="border-2 border-cyan-400 hover:bg-cyan-400/10 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:scale-105 hover:border-purple-400">Let's Talk</button>
              </div>
              <div className="mt-12 sm:mt-20 animate-bounce">
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-cyan-400" />
              </div>
            </div>
          </section>

          {/* About */}
          <section className="relative py-20 sm:py-28 px-4 sm:px-6 border-t border-gray-900">
            <div className="relative max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-12 sm:mb-16">
                <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-cyan-400" />
                <span className="text-cyan-400 font-semibold uppercase tracking-widest text-xs sm:text-sm">About Me</span>
                <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">I Don't Just</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Build Products.</span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">I Leave Legacies.</span>
              </h2>
              <div className="space-y-5 text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
                <p>I'm Shannon Escoriaza — a software engineer, designer, and builder with <span className="text-white font-semibold">8 years of experience</span> across every corner of tech. From enterprise UX at AutoNation to engineering lunar terrain simulations at <span className="text-white font-semibold">NASA Kennedy Space Center</span>, I've built things that actually matter.</p>
                <p>My work spans web, mobile, software, VR, and design — not because I couldn't specialize, but because <span className="text-white font-semibold">the best products live at the intersection of all of it.</span> I've competed and won at hackathons worldwide, lectured at Nova Southeastern University, and shipped over 20 products across industries.</p>
                <p>What drives me isn't the code — it's the moment a client sees their dream product live for the first time. It's building tools so good they outlast the project. <span className="text-white font-semibold">Technology should be accessible, powerful, and built to be handed down.</span> That's the standard I hold every project to.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-5 sm:p-6 mb-10">
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'Unity', 'C#', 'Python', 'Figma', 'MongoDB', 'FastAPI', 'WebXR'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-black border border-gray-800 rounded-full text-xs font-semibold text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('portfolio')} className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 sm:py-4 rounded-full font-bold text-base overflow-hidden transition-all hover:scale-105 animate-glow">
                  <span className="relative z-10">See My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button onClick={() => navigate('contact')} className="border-2 border-gray-700 hover:border-cyan-400 hover:text-cyan-400 px-8 py-3 sm:py-4 rounded-full font-bold text-base transition-all hover:scale-105">Work With Me</button>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="relative py-20 sm:py-28 px-4 sm:px-6 border-t border-gray-900">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
                  <span className="text-cyan-400 font-semibold uppercase tracking-widest text-xs sm:text-sm">Kind Words</span>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">What Clients Say</span>
                </h2>
              </div>
              <div className="relative">
                <div key={activeTestimonial} className="animate-testimonial bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-8 sm:p-12 relative overflow-hidden">
                  <div className="absolute top-6 right-8 sm:top-8 sm:right-10">
                    <Quote className="w-12 h-12 sm:w-16 sm:h-16 opacity-10 text-white" />
                  </div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light mb-8 sm:mb-10 max-w-2xl">"{testimonials[activeTestimonial].quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${testimonials[activeTestimonial].color} flex items-center justify-center font-bold text-white text-sm sm:text-base flex-shrink-0`}>{testimonials[activeTestimonial].initials}</div>
                    <div>
                      <p className="font-bold text-white text-base sm:text-lg">{testimonials[activeTestimonial].name}</p>
                      <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].title}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6 sm:mt-8">
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => <button key={i} onClick={() => setActiveTestimonial(i)} className={`transition-all duration-300 rounded-full ${i === activeTestimonial ? 'w-6 h-2 bg-cyan-400' : 'w-2 h-2 bg-gray-700 hover:bg-gray-500'}`} />)}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={prevTestimonial} className="p-2 sm:p-3 rounded-full border border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition-all"><ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" /></button>
                    <button onClick={nextTestimonial} className="p-2 sm:p-3 rounded-full border border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition-all"><ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" /></button>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-700 text-xs mt-6">✦ Placeholder testimonials — swap these out in the <code className="text-gray-600">testimonials</code> array when you have real ones</p>
            </div>
          </section>
        </>
      )}

      {/* Services */}
      {activeSection === 'services' && (
        <section className="relative min-h-screen pt-28 sm:pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">What I Do</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-400">Expertise that delivers results</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border border-gray-800 hover:border-transparent transition-all duration-500 hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  <div className={`relative inline-block p-3 sm:p-4 rounded-xl bg-gradient-to-br ${service.color} mb-4 sm:mb-6`}><div className="text-white">{service.icon}</div></div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{service.description}</p>
                  <div className="mt-4 sm:mt-6 flex items-center text-cyan-400 font-semibold text-sm sm:text-base">Learn More <ExternalLink className="w-4 h-4 ml-2" /></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio */}
      {activeSection === 'portfolio' && (
        <section className="relative min-h-screen pt-28 sm:pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tighter">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Work</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-8">Projects that make an impact</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {categories.map((category) => (
                  <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold uppercase text-xs sm:text-sm tracking-wider transition-all duration-300 ${activeCategory === category ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white scale-105' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}`}>{category}</button>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]">
                  <div className="relative overflow-hidden h-48 sm:h-64">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  <div className="p-5 sm:p-8">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech, i) => <span key={i} className="px-2 sm:px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-gray-300">{tech}</span>)}
                    </div>
                    <a href={project.link} className="inline-flex items-center gap-2 text-cyan-400 hover:text-purple-400 font-semibold transition text-sm sm:text-base">View Project <ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {activeSection === 'pricing' && (
        <section className="relative min-h-screen pt-28 sm:pt-32 pb-20 px-4 sm:px-6">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-400 font-semibold uppercase tracking-widest text-xs sm:text-sm">Transparent Pricing</span>
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Pick Your Plan</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">No hidden fees. No surprises. Just great work at a fair price.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {Object.keys(pricingData).map((tab) => (
                <button key={tab} onClick={() => setActiveServiceTab(tab)} className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${activeServiceTab === tab ? `bg-gradient-to-r ${pricingData[tab].color} text-white scale-105 shadow-lg` : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'}`}>
                  {serviceTabIcons[tab]}
                  <span className="hidden sm:inline">{tab}</span>
                  <span className="sm:hidden">{tab.split(' ')[0]}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-1 bg-gray-900 border border-gray-800 rounded-full p-1.5">
                <button onClick={() => setBillingCycle('project')} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${billingCycle === 'project' ? `bg-gradient-to-r ${activePricing.color} text-white` : 'text-gray-400 hover:text-white'}`}>Per Project</button>
                <button onClick={() => setBillingCycle('retainer')} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${billingCycle === 'retainer' ? `bg-gradient-to-r ${activePricing.color} text-white` : 'text-gray-400 hover:text-white'}`}>
                  Monthly Retainer <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">Save ~20%</span>
                </button>
              </div>
            </div>
            <div key={activeServiceTab} className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch animate-fadeUp">
              {activePricing.tiers.map((tier, index) => (
                <div key={index} className={`relative flex flex-col rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${tier.featured ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-black pricing-featured-glow border-purple-500/50' : 'bg-gradient-to-b from-gray-900 to-black border-gray-800 hover:border-gray-600'}`}>
                  {tier.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"><div className={`bg-gradient-to-r ${activePricing.color} text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full`}>✦ Most Popular</div></div>}
                  <div className={`p-6 sm:p-8 pb-0 ${tier.featured ? 'pt-10 sm:pt-12' : ''}`}>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-1">{tier.name}</h3>
                    <p className="text-gray-500 text-sm mb-6">{tier.tagline}</p>
                    <div className="mb-6">
                      {tier.custom ? <div className={`text-4xl sm:text-5xl font-black tracking-tighter bg-gradient-to-r ${activePricing.color} bg-clip-text text-transparent`}>Custom</div> : (
                        <div className="flex items-end gap-1">
                          <span className="text-gray-500 text-lg font-semibold">$</span>
                          <span className={`text-5xl sm:text-6xl font-black tracking-tighter bg-gradient-to-r ${activePricing.color} bg-clip-text text-transparent`}>{billingCycle === 'project' ? tier.projectPrice.toLocaleString() : tier.retainerPrice.toLocaleString()}</span>
                        </div>
                      )}
                      <p className="text-gray-500 text-sm mt-1">{tier.custom ? "Let's scope it together" : billingCycle === 'project' ? 'starting price / project' : 'per month on retainer'}</p>
                    </div>
                    <div className={`h-px w-full bg-gradient-to-r ${activePricing.color} opacity-25 mb-6`} />
                  </div>
                  <div className="flex-1 px-6 sm:px-8 pb-6">
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm sm:text-base">
                          <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${activePricing.color} flex items-center justify-center`}><Check className="w-3 h-3 text-white" strokeWidth={3} /></span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 sm:p-8 pt-4">
                    <button onClick={() => navigate('contact')} className={`w-full py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-[1.03] bg-gradient-to-r ${activePricing.color} text-white ${tier.featured ? 'animate-glow' : 'opacity-90 hover:opacity-100'}`}>
                      {tier.custom ? 'Get a Custom Quote →' : 'Get Started →'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-sm mt-10">All prices are starting estimates — final quotes based on project scope.{' '}<button onClick={() => navigate('contact')} className="text-cyan-400 hover:text-purple-400 transition underline underline-offset-2">Let's chat about your project.</button></p>
          </div>
        </section>
      )}

      {/* Contact */}
      {activeSection === 'contact' && (
        <section className="relative min-h-screen pt-28 sm:pt-32 pb-20 px-4 sm:px-6 flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tighter">
                <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Let's Build Something</span>
              </h2>
              <p className="text-base sm:text-2xl text-gray-400">Got a project in mind? Let's make it happen.</p>
            </div>
            <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
              <a href="mailto:shanescobiz@gmail.com" className="group p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-cyan-400 transition-all hover:scale-110"><Mail className="w-7 h-7 sm:w-10 sm:h-10 text-cyan-400 group-hover:scale-110 transition-transform" /></a>
              <a href="https://github.com/shan-esco" className="group p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-purple-400 transition-all hover:scale-110"><Github className="w-7 h-7 sm:w-10 sm:h-10 text-purple-400 group-hover:scale-110 transition-transform" /></a>
              <a href="https://www.linkedin.com/in/shan-esco/" className="group p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-pink-400 transition-all hover:scale-110"><Linkedin className="w-7 h-7 sm:w-10 sm:h-10 text-pink-400 group-hover:scale-110 transition-transform" /></a>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-10 rounded-3xl border border-gray-800">

              {/* Success */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center font-semibold">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}

              {/* Error */}
              {formStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center font-semibold">
                  ✗ Please fill out all fields, or try again later.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/50 border border-gray-800 rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-cyan-400 transition-colors text-base sm:text-lg w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/50 border border-gray-800 rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-cyan-400 transition-colors text-base sm:text-lg w-full"
                />
              </div>
              <textarea
                placeholder="Tell me about your project..."
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 sm:px-6 py-3 sm:py-4 mb-4 sm:mb-6 focus:outline-none focus:border-cyan-400 transition-colors text-base sm:text-lg"
              />
              <button
                onClick={handleSubmit}
                disabled={formStatus === 'sending'}
                className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all hover:scale-[1.02] animate-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm sm:text-base text-gray-500">© 2026 Shannon Escoriaza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}