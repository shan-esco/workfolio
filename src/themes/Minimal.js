import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Minimal() {
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const projects = [
    { num: '01', title: 'Voss Residence', location: 'Oslo, Norway', year: '2025', type: 'Residential' },
    { num: '02', title: 'Kira Pavilion', location: 'Kyoto, Japan', year: '2024', type: 'Cultural' },
    { num: '03', title: 'Strand Tower', location: 'Copenhagen, DK', year: '2024', type: 'Commercial' },
    { num: '04', title: 'Maison Bleue', location: 'Lyon, France', year: '2023', type: 'Hospitality' },
  ];

  return (
    <div style={{ background: '#fafaf8', color: '#111', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display&display=swap');
        * { box-sizing: border-box; }
        .f-nav-link { color: #111; text-decoration: none; font-family: 'DM Sans', system-ui, sans-serif; font-size: 0.78rem; letter-spacing: 0.06em; font-weight: 400; transition: color 0.2s; background: none; border: none; cursor: pointer; }
        .f-nav-link:hover { color: #888; }
        .f-btn { background: #111; color: #fff; border: none; padding: 0.9rem 2.5rem; font-family: 'DM Sans', sans-serif; font-size: 0.78rem; letter-spacing: 0.12em; cursor: pointer; transition: all 0.2s; }
        .f-btn:hover { background: #333; }
        .f-btn-outline { background: transparent; color: #111; border: 1px solid #111; padding: 0.9rem 2.5rem; font-family: 'DM Sans', sans-serif; font-size: 0.78rem; letter-spacing: 0.12em; cursor: pointer; transition: all 0.2s; }
        .f-btn-outline:hover { background: #111; color: #fff; }
        .project-row { border-top: 1px solid #e5e5e0; transition: background 0.2s; cursor: pointer; }
        .project-row:hover { background: #f0f0ec; }
        .f-input { width: 100%; background: transparent; border: none; border-bottom: 1px solid #ddd; padding: 0.75rem 0; font-family: 'DM Sans', sans-serif; font-size: 0.95rem; color: #111; outline: none; transition: border-color 0.2s; }
        .f-input:focus { border-bottom-color: #111; }
        .f-input::placeholder { color: #bbb; }
      `}</style>

      {/* Back */}
      <button onClick={() => navigate('/samples')} style={{ position: 'fixed', top: '1rem', left: '1rem', background: 'rgba(250,250,248,0.9)', border: '1px solid #e5e5e0', color: '#aaa', padding: '0.4rem 0.9rem', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', zIndex: 200, fontFamily: "'DM Sans', sans-serif" }}>
        ← Samples
      </button>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, background: 'rgba(250,250,248,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e8e8e3', padding: '1.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '1rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>F O R M</div>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {[['Work', 'work'], ['Studio', 'studio'], ['Process', 'process'], ['Contact', 'contact']].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="f-nav-link">{label}</button>
          ))}
        </div>
        <button className="f-btn" style={{ padding: '0.6rem 1.5rem' }} onClick={() => scrollTo('contact')}>Start a Project</button>
      </nav>

      {/* Hero */}
      <section style={{ padding: '10rem 3rem 8rem', minHeight: '95vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '1px solid #e8e8e3' }}>
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', letterSpacing: '0.3em', color: '#aaa', textTransform: 'uppercase', marginBottom: '4rem' }}>Architecture & Interior Design Studio</p>
          <h1 style={{ fontFamily: "'DM Serif Display', 'Georgia', serif", fontSize: 'clamp(4rem, 11vw, 11rem)', fontWeight: 400, lineHeight: 0.92, letterSpacing: '-0.03em', color: '#111', maxWidth: '900px' }}>
            Space is<br />the medium.
          </h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '4rem' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#888', fontSize: '1rem', lineHeight: 1.75, maxWidth: '360px', fontWeight: 300 }}>
            We design spaces that communicate. Architecture, interiors, and furniture that live quietly — and last forever.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="f-btn" onClick={() => scrollTo('work')}>View Work</button>
            <button className="f-btn-outline" onClick={() => scrollTo('studio')}>Our Studio</button>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" style={{ padding: '7rem 3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, letterSpacing: '-0.02em' }}>Selected Work</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#aaa', letterSpacing: '0.1em' }}>2022 – 2026</p>
          </div>
          <div>
            {projects.map((p, i) => (
              <div key={i} className="project-row" style={{ padding: '2rem 1rem', display: 'grid', gridTemplateColumns: '3rem 1fr auto auto auto', alignItems: 'center', gap: '2rem' }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', color: '#bbb', letterSpacing: '0.05em' }}>{p.num}</span>
                <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.4rem', fontWeight: 400 }}>{p.title}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: '#888' }}>{p.location}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: '#bbb', background: '#f0f0ec', padding: '0.3rem 0.75rem' }}>{p.type}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#ccc' }}>{p.year}</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #e5e5e0' }} />
          </div>
        </div>
      </section>

      {/* Studio */}
      <section id="studio" style={{ padding: '7rem 3rem', background: '#111', color: '#fafaf8' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', letterSpacing: '0.3em', color: '#555', textTransform: 'uppercase', marginBottom: '1.5rem' }}>The Studio</p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, lineHeight: 1.2, marginBottom: '2.5rem' }}>
              We believe in the power of restraint.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#777', lineHeight: 1.9, marginBottom: '1.5rem', fontWeight: 300, fontSize: '0.95rem' }}>
              FORM is a practice built on the conviction that every element should earn its place. We remove until what remains is essential — and beautiful.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#555', lineHeight: 1.9, fontWeight: 300, fontSize: '0.95rem' }}>
              Founded in Oslo in 2015, our team of twelve architects and designers works across residential, commercial, hospitality, and cultural projects globally.
            </p>
          </div>
          <div style={{ aspectRatio: '4/5', background: '#1a1a1a', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#2a2a2a', fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Studio Photo</span>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ padding: '7rem 3rem', borderBottom: '1px solid #e8e8e3' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', letterSpacing: '0.3em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1.5rem' }}>How We Work</p>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, marginBottom: '5rem' }}>The Process</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
            {[
              { n: '1', title: 'Listen', desc: 'We begin by understanding — your space, your life, your constraints.' },
              { n: '2', title: 'Imagine', desc: 'Concepts are developed through sketches, models, and dialogue.' },
              { n: '3', title: 'Refine', desc: 'Every detail is considered. Nothing is arbitrary.' },
              { n: '4', title: 'Build', desc: 'We oversee execution with the same care as the design.' },
            ].map((step, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '3rem', color: '#e8e8e3', marginBottom: '1rem', lineHeight: 1 }}>{step.n}</div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.2rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#888', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '7rem 3rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', letterSpacing: '0.3em', color: '#aaa', textTransform: 'uppercase', marginBottom: '1rem' }}>Get In Touch</p>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, marginBottom: '1rem' }}>Start a Project</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#aaa', marginBottom: '3.5rem', lineHeight: 1.7, fontWeight: 300 }}>Tell us about your space. We'll take it from there.</p>
          {sent ? (
            <div style={{ borderTop: '1px solid #111', paddingTop: '2rem' }}>
              <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.5rem' }}>We'll be in touch.</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#aaa', fontWeight: 300, marginTop: '0.5rem' }}>Thank you for reaching out.</p>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <input className="f-input" type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <input className="f-input" type="email" placeholder="Email address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div style={{ marginBottom: '3rem' }}>
                <textarea className="f-input" rows={5} placeholder="Describe your project..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ resize: 'vertical', borderBottom: '1px solid #ddd' }} />
              </div>
              <button className="f-btn" onClick={() => setSent(true)} style={{ width: '100%', padding: '1.1rem', fontSize: '0.8rem', letterSpacing: '0.15em' }}>Send Inquiry</button>
            </div>
          )}
          <p style={{ color: '#ddd', fontSize: '0.7rem', fontFamily: "'DM Sans', sans-serif", marginTop: '2.5rem', textAlign: 'center' }}>
            Like this theme? <span style={{ color: '#aaa', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => navigate('/')}>Get it built for your business →</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e8e8e3', padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#bbb' }}>
        <span style={{ letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: '0.8rem', color: '#111' }}>F O R M</span>
        <span>© 2026 FORM Studio</span>
        <span>Oslo · Tokyo · Paris</span>
      </footer>
    </div>
  );
}
