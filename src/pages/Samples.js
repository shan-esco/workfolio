import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Menu, X, Sparkles } from 'lucide-react';

const themes = [
  {
    id: 'edgy',
    name: 'VANTA',
    style: 'Edgy / Underground',
    description: 'Raw, bold, and unapologetic. Built for streetwear brands, music artists, tattoo studios, and nightlife businesses that refuse to blend in.',
    colors: ['#0a0a0a', '#FF1414', '#ffffff'],
    colorLabels: ['Black', 'Red', 'White'],
    tags: ['Dark', 'High Contrast', 'Bold Type'],
    path: '/samples/edgy',
  },
  {
    id: 'pro',
    name: 'Meridian',
    style: 'Business Professional',
    description: 'Polished, authoritative, and trustworthy. Ideal for law firms, consultants, financial advisors, and agencies that need to command respect.',
    colors: ['#0a1628', '#c9a84c', '#e8edf3'],
    colorLabels: ['Navy', 'Gold', 'Silver'],
    tags: ['Corporate', 'Serif', 'Refined'],
    path: '/samples/pro',
  },
  {
    id: 'minimal',
    name: 'FORM',
    style: 'Modern Minimal',
    description: 'Whitespace-forward, elegant, and deliberate. Built for studios, photographers, architects, and luxury brands where restraint is the statement.',
    colors: ['#fafaf8', '#111111', '#999999'],
    colorLabels: ['Cream', 'Black', 'Gray'],
    tags: ['Minimal', 'Elegant', 'Spacious'],
    path: '/samples/minimal',
  },
  {
    id: 'colorpop',
    name: 'Zesty',
    style: 'Colorful Pop',
    description: 'Bold, playful, and impossible to ignore. Great for creative agencies, food brands, event companies, and youth-focused businesses that want to stand out.',
    colors: ['#FFE500', '#FF3CA0', '#00C2FF'],
    colorLabels: ['Yellow', 'Pink', 'Blue'],
    tags: ['Colorful', 'Fun', 'High Energy'],
    path: '/samples/colorpop',
  },
  {
    id: 'aero',
    name: 'Aura',
    style: 'Natural / Frutiger Aero',
    description: 'Soft, glassy, and nature-inspired. Perfect for wellness brands, spas, eco companies, and health apps that want to feel clean, calm, and premium.',
    colors: ['#87CEEB', '#98D8C8', '#e8f4f8'],
    colorLabels: ['Sky', 'Aqua', 'Mist'],
    path: '/samples/aero',
    tags: ['Natural', 'Glassmorphism', 'Calm'],
  },
];

export default function Samples() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goTo = (section) => {
    setMenuOpen(false);
    if (section === 'samples') return;
    navigate('/', { state: { section } });
  };

  return (
    <div className="relative min-h-screen bg-black text-white">

      {/* ── Animations defined FIRST so keyframes exist before the stars render ── */}
      <style>{`
        @keyframes float    { 0%,100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-20px) translateX(10px); } }
        @keyframes glow     { 0%,100% { box-shadow: 0 0 20px rgba(139,92,246,.5); } 50% { box-shadow: 0 0 40px rgba(139,92,246,.8), 0 0 60px rgba(236,72,153,.5); } }
        @keyframes fadeUp   { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .animate-glow       { animation: glow 3s ease-in-out infinite; }
        .theme-card         { animation: fadeUp .5s ease-out forwards; opacity:0; }
        .theme-card:nth-child(1) { animation-delay:.1s; }
        .theme-card:nth-child(2) { animation-delay:.2s; }
        .theme-card:nth-child(3) { animation-delay:.3s; }
        .theme-card:nth-child(4) { animation-delay:.4s; }
        .theme-card:nth-child(5) { animation-delay:.5s; }
        .preview-btn { transition: all .2s ease; }
        .preview-btn:hover  { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(139,92,246,.35); }
      `}</style>

      {/* ── Space background (identical to Portfolio) ── */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width:  Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top:    Math.random() * 100 + '%',
                left:   Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: Math.random() * 5 + 's',
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Nav (matches Portfolio exactly) ── */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-xl z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 rounded-full px-2.5 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-green-400 text-xs font-semibold hidden sm:inline">Available</span>
            </div>
            <button onClick={() => navigate('/')} className="text-lg sm:text-2xl lg:text-3xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SHANNON<span className="text-white"> ESCORIAZA</span>
              </span>
            </button>
          </div>

          <div className="hidden md:flex gap-6 lg:gap-8 font-medium">
            {['home', 'services', 'portfolio', 'pricing', 'samples', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => goTo(section)}
                className={`hover:text-cyan-400 transition uppercase text-sm tracking-wider ${section === 'samples' ? 'text-cyan-400' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 px-4 py-4 flex flex-col gap-4">
            {['home', 'services', 'portfolio', 'pricing', 'samples', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => goTo(section)}
                className={`uppercase text-sm tracking-wider font-medium text-left py-2 transition ${section === 'samples' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── Page content (z-10 so it sits above the fixed background) ── */}
      <div className="relative z-10">

        {/* Header */}
        <div style={{ textAlign: 'center', padding: '9rem 1.5rem 4rem' }}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-semibold uppercase tracking-widest text-xs sm:text-sm">Ready-to-Deploy</span>
            <Sparkles className="w-4 h-4 text-pink-400" />
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">Website</span>
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Themes</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-xl max-w-xl mx-auto mb-3 leading-relaxed font-light">
            Pick a style. Click to explore it like a real website.<br />Every theme is fully customized for your business.
          </p>
          <p className="text-gray-600 text-sm">Scroll down to see pricing →</p>
        </div>

        {/* Theme Cards */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 6rem', display: 'grid', gap: '1.5rem' }}>
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="theme-card group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.01]"
              style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: '200px' }}
            >
              {/* Color swatch panel */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {theme.colors.map((color, i) => (
                  <div
                    key={color}
                    style={{ flex: 1, background: color, display: 'flex', alignItems: 'flex-end', padding: '0.5rem 0.75rem' }}
                  >
                    <span style={{ fontSize: '0.55rem', letterSpacing: '0.12em', color: i === 0 ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)', textTransform: 'uppercase', fontWeight: 600 }}>
                      {theme.colorLabels[i]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Info panel */}
              <div className="p-5 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">{theme.style}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">
                    {theme.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 max-w-lg">{theme.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {theme.tags.map(tag => (
                      <span key={tag} className="px-2 sm:px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="preview-btn mt-4 sm:mt-6 inline-flex items-center gap-2 text-cyan-400 hover:text-purple-400 font-semibold transition text-sm sm:text-base"
                  onClick={() => navigate(theme.path)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, width: 'fit-content' }}
                >
                  Preview Theme <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing CTA */}
        <div className="border-t border-gray-900 py-20 px-6 text-center">
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-4">Affordable Pricing</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Your site, your style.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Starting at $299.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed font-light">
            Each theme is customized with your brand, content, and domain. Real code, real results.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-full animate-glow transition-all hover:scale-105"
              style={{ padding: '0.9rem 2.5rem', fontSize: '1rem', border: 'none', cursor: 'pointer' }}
            >
              Get a Custom Quote
            </button>
            <button
              onClick={() => navigate('/')}
              className="border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 text-white font-semibold rounded-full transition-all hover:scale-105"
              style={{ padding: '0.9rem 2.5rem', fontSize: '1rem', background: 'transparent', cursor: 'pointer' }}
            >
              Back to Portfolio
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-900 py-8 text-center">
          <p className="text-gray-600 text-sm">© 2026 Shannon Escoriaza. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
