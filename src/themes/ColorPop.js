import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const C = { yellow: '#FFE500', pink: '#FF3CA0', blue: '#00C2FF', green: '#7BFF00', black: '#111', white: '#fff' };

export default function ColorPop() {
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  const services = [
    { title: 'Brand Identity', icon: '✦', color: C.pink, desc: 'Logos, color systems, and visual language that makes people stop scrolling.' },
    { title: 'Web Design', icon: '◈', color: C.blue, desc: 'Sites so good your competitors will wonder what you\'re paying for design.' },
    { title: 'Social Media', icon: '◉', color: C.green, desc: 'Content strategy and design that turns followers into loyal customers.' },
    { title: 'Packaging', icon: '▣', color: C.yellow, desc: 'Unboxing experiences that go viral for all the right reasons.' },
  ];

  const work = [
    { name: 'Mango Drop', type: 'Brand + Web', color: C.yellow },
    { name: 'Orbit App', type: 'UI Design', color: C.blue },
    { name: 'Kiki Eats', type: 'Brand + Packaging', color: C.pink },
    { name: 'NeonRun', type: 'Social + Motion', color: C.green },
    { name: 'Cloud Nine', type: 'Full Brand', color: C.blue },
    { name: 'Petal Studio', type: 'Web Design', color: C.yellow },
  ];

  return (
    <div style={{ background: C.yellow, color: C.black, fontFamily: "'Helvetica Neue', Arial, sans-serif", overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        .z-btn { font-family: 'Nunito', sans-serif; font-weight: 800; border: 3px solid #111; cursor: pointer; transition: all 0.15s; letter-spacing: 0.01em; }
        .z-btn:hover { transform: translate(-3px, -3px); box-shadow: 4px 4px 0 #111; }
        .work-card:hover { transform: translate(-3px, -3px); box-shadow: 5px 5px 0 #111; }
        .work-card { transition: all 0.15s; }
        .service-card:hover { transform: translate(-3px, -3px); box-shadow: 5px 5px 0 #111; }
        .service-card { transition: all 0.15s; }
        .z-input { background: #fff; border: 2px solid #111; padding: 0.9rem 1.1rem; font-family: 'Nunito', sans-serif; font-size: 0.95rem; outline: none; width: 100%; transition: border-color 0.2s; color: #111; }
        .z-input:focus { border-color: ${C.pink}; box-shadow: 3px 3px 0 #111; }
        .z-input::placeholder { color: #aaa; }
        @keyframes wiggle { 0%,100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
        .wiggle { animation: wiggle 3s ease-in-out infinite; display: inline-block; }
      `}</style>

      {/* Back */}
      <button onClick={() => navigate('/samples')} style={{ position: 'fixed', top: '1rem', left: '1rem', background: C.black, border: 'none', color: C.yellow, padding: '0.4rem 0.9rem', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', zIndex: 200, fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}>
        ← Samples
      </button>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, background: C.yellow, borderBottom: `3px solid ${C.black}`, padding: '1rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: '1.6rem', letterSpacing: '-0.02em' }}>
          Zesty<span style={{ color: C.pink }}>.</span>
        </span>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[['Work', 'work'], ['Services', 'services'], ['About', 'about'], ['Contact', 'contact']].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: C.black, transition: 'color 0.15s' }}>{label}</button>
          ))}
          <button className="z-btn" onClick={() => scrollTo('contact')} style={{ background: C.pink, color: C.white, padding: '0.65rem 1.5rem', fontSize: '0.85rem', borderRadius: '6px' }}>Say Hello 👋</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '7rem 2.5rem 5rem', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '2rem', right: '2rem', width: '300px', height: '300px', background: C.pink, borderRadius: '50%', opacity: 0.15 }} />
        <div style={{ position: 'absolute', bottom: '3rem', right: '8rem', width: '150px', height: '150px', background: C.blue, borderRadius: '50%', opacity: 0.2 }} />
        <div style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: C.black, color: C.yellow, padding: '0.4rem 1rem', borderRadius: '100px', fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '2rem' }}>
            ✦ Creative Agency · Est. 2019
          </div>
          <h1 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 'clamp(3.5rem, 10vw, 9rem)', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>
            We Make<br />
            <span className="wiggle" style={{ color: C.pink }}>Brands</span><br />
            <span style={{ WebkitTextStroke: `3px ${C.black}`, color: 'transparent' }}>POP.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '480px', marginBottom: '3rem', fontWeight: 600, color: '#444' }}>
            Brand identity, web design, packaging, and social media that makes your business impossible to ignore.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="z-btn" onClick={() => scrollTo('work')} style={{ background: C.black, color: C.yellow, padding: '1rem 2.5rem', fontSize: '1rem', borderRadius: '8px' }}>See Our Work</button>
            <button className="z-btn" onClick={() => scrollTo('contact')} style={{ background: C.pink, color: C.white, padding: '1rem 2.5rem', fontSize: '1rem', borderRadius: '8px' }}>Get a Quote</button>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" style={{ padding: '6rem 2.5rem', background: C.black, borderTop: `3px solid ${C.black}`, borderBottom: `3px solid ${C.black}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.03em', color: C.yellow }}>Our Work</h2>
            <span style={{ color: '#555', fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: '0.85rem' }}>50+ Projects Delivered</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {work.map((item, i) => (
              <div key={i} className="work-card" style={{ background: item.color, border: `3px solid ${C.black}`, borderRadius: '12px', padding: '3rem 2rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: '1.3rem', color: C.black, marginBottom: '0.4rem' }}>{item.name}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: 'rgba(0,0,0,0.5)' }}>{item.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '6rem 2.5rem', background: C.blue, borderBottom: `3px solid ${C.black}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.03em', color: C.black }}>What We Do</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {services.map((s, i) => (
              <div key={i} className="service-card" style={{ background: s.color, border: `3px solid ${C.black}`, borderRadius: '16px', padding: '2.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.02em', color: C.black, marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", color: 'rgba(0,0,0,0.65)', lineHeight: 1.6, fontSize: '0.95rem', fontWeight: 600 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '6rem 2.5rem', background: C.pink, borderBottom: `3px solid ${C.black}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div style={{ aspectRatio: '1', background: C.yellow, border: `3px solid ${C.black}`, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(0,0,0,0.2)', textTransform: 'uppercase' }}>Team Photo</span>
            <div style={{ position: 'absolute', bottom: '-1rem', right: '-1rem', background: C.blue, border: `3px solid ${C.black}`, borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: '0.65rem', textAlign: 'center', lineHeight: 1.2 }}>12<br/>People</div>
          </div>
          <div>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', color: C.white, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Chaotically<br />Organized.
            </h2>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1rem' }}>
              We're a small-but-mighty team of designers, strategists, and creative gremlins based in Miami. We've worked with 50+ brands across 12 countries.
            </p>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Our secret? We genuinely love what we do. And it shows in every pixel.
            </p>
            <button className="z-btn" onClick={() => scrollTo('contact')} style={{ background: C.yellow, color: C.black, padding: '0.9rem 2rem', fontSize: '0.9rem', borderRadius: '8px', marginTop: '2rem' }}>Work With Us</button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '6rem 2.5rem', background: C.green, borderBottom: `3px solid ${C.black}` }}>
        <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em', color: C.black, marginBottom: '1rem' }}>Let's Make<br />Something Wild.</h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, color: 'rgba(0,0,0,0.55)', marginBottom: '3rem', fontSize: '1.05rem' }}>Drop us a message. We reply within 24 hours.</p>
          {sent ? (
            <div style={{ background: C.yellow, border: `3px solid ${C.black}`, borderRadius: '16px', padding: '3rem', fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: '1.5rem' }}>
              🎉 We got it! Talk soon.
            </div>
          ) : (
            <div style={{ background: C.white, border: `3px solid ${C.black}`, borderRadius: '16px', padding: '2.5rem', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input className="z-input" type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ borderRadius: '8px' }} />
                <input className="z-input" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ borderRadius: '8px' }} />
              </div>
              <textarea className="z-input" rows={4} placeholder="Tell us about your project 🚀" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ marginBottom: '1.25rem', borderRadius: '8px', resize: 'vertical' }} />
              <button className="z-btn" onClick={() => setSent(true)} style={{ background: C.pink, color: C.white, padding: '1rem', width: '100%', fontSize: '1rem', borderRadius: '8px' }}>Send It! 🚀</button>
            </div>
          )}
          <p style={{ color: 'rgba(0,0,0,0.35)', fontSize: '0.7rem', fontFamily: "'Nunito', sans-serif", fontWeight: 600, marginTop: '2rem' }}>
            Like this theme? <span style={{ color: 'rgba(0,0,0,0.5)', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => navigate('/')}>Get it built for your business →</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: C.black, borderTop: `3px solid ${C.black}`, padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: '1.2rem', color: C.yellow }}>Zesty<span style={{ color: C.pink }}>.</span></span>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: '#555' }}>© 2026 Zesty Creative. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {['IG', 'TK', 'BE'].map(s => (
            <span key={s} style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: '0.75rem', color: '#555', cursor: 'pointer' }}>{s}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
