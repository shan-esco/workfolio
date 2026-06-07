import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Professional() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const services = [
    { title: 'Strategic Planning', desc: 'Long-range growth strategies built on data, market analysis, and competitive intelligence.' },
    { title: 'Financial Advisory', desc: 'Capital structure optimization, M&A support, and investment strategy for complex transactions.' },
    { title: 'Operations Consulting', desc: 'Streamlining processes, reducing overhead, and building scalable operational frameworks.' },
    { title: 'Executive Coaching', desc: 'One-on-one leadership development for C-suite executives navigating high-stakes decisions.' },
  ];

  const stats = [
    { value: '200+', label: 'Clients Served' },
    { value: '$4B+', label: 'Capital Advised' },
    { value: '18', label: 'Countries' },
    { value: '94%', label: 'Retention Rate' },
  ];

  return (
    <div style={{ background: '#f5f4f0', color: '#0a1628', fontFamily: "'Georgia', 'Times New Roman', serif", overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        .m-nav-link { color: #0a1628; text-decoration: none; font-family: 'Inter', system-ui, sans-serif; font-size: 0.8rem; letter-spacing: 0.08em; font-weight: 500; transition: color 0.2s; background: none; border: none; cursor: pointer; }
        .m-nav-link:hover { color: #c9a84c; }
        .m-btn-gold { background: #c9a84c; color: #fff; border: none; padding: 0.9rem 2.25rem; font-family: 'Inter', sans-serif; font-size: 0.8rem; letter-spacing: 0.12em; font-weight: 600; cursor: pointer; transition: all 0.2s; text-transform: uppercase; }
        .m-btn-gold:hover { background: #b8923a; }
        .m-btn-outline { background: transparent; color: #0a1628; border: 1px solid #0a1628; padding: 0.9rem 2.25rem; font-family: 'Inter', sans-serif; font-size: 0.8rem; letter-spacing: 0.12em; font-weight: 600; cursor: pointer; transition: all 0.2s; text-transform: uppercase; }
        .m-btn-outline:hover { background: #0a1628; color: #fff; }
        .service-card:hover { box-shadow: 0 8px 40px rgba(10,22,40,0.1); transform: translateY(-4px); }
        .service-card { transition: all 0.3s ease; }
        .m-input { width: 100%; background: #fff; border: 1px solid #ddd; padding: 0.9rem 1.1rem; font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #0a1628; outline: none; transition: border-color 0.2s; }
        .m-input:focus { border-color: #c9a84c; }
        .m-input::placeholder { color: #aaa; }
      `}</style>

      {/* Back */}
      <button onClick={() => navigate('/samples')} style={{ position: 'fixed', top: '1rem', left: '1rem', background: 'rgba(245,244,240,0.9)', border: '1px solid #ddd', color: '#888', padding: '0.4rem 0.9rem', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', zIndex: 200, fontFamily: "'Inter', sans-serif" }}>
        ← Samples
      </button>

      {/* Top bar */}
      <div style={{ background: '#0a1628', color: '#c9a84c', padding: '0.6rem 2.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", letterSpacing: '0.08em' }}>
        <span>Est. 2008 · New York, NY</span>
        <span>+1 (212) 555-0100 · contact@meridiancg.com</span>
      </div>

      {/* Nav */}
      <nav style={{ background: '#f5f4f0', borderBottom: '1px solid #e0ddd6', padding: '1.25rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.02em', color: '#0a1628' }}>Meridian</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.55rem', letterSpacing: '0.35em', color: '#c9a84c', textTransform: 'uppercase', marginTop: '1px' }}>Consulting Group</div>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {[['Services', 'services'], ['About', 'about'], ['Results', 'results'], ['Contact', 'contact']].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="m-nav-link">{label}</button>
          ))}
          <button className="m-btn-gold" style={{ padding: '0.65rem 1.5rem', fontSize: '0.7rem' }} onClick={() => scrollTo('contact')}>Schedule a Call</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: '#0a1628', color: '#fff', padding: '8rem 2.5rem', minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '45%', background: 'linear-gradient(135deg, #0d1f3c 0%, #0a1628 100%)', borderLeft: '1px solid rgba(201,168,76,0.15)' }} />
        <div style={{ position: 'absolute', top: '3rem', right: '3rem', width: '280px', height: '280px', border: '1px solid rgba(201,168,76,0.1)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '5rem', right: '5rem', width: '200px', height: '200px', border: '1px solid rgba(201,168,76,0.08)', borderRadius: '50%' }} />
        <div style={{ maxWidth: '680px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' }}>Strategic Advisory</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '2rem', letterSpacing: '-0.01em' }}>
            Strategy.<br />Results.<br />
            <span style={{ color: '#c9a84c' }}>Legacy.</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '500px', marginBottom: '3rem', fontWeight: 300 }}>
            Meridian has guided over 200 organizations through their most consequential decisions. We bring clarity where complexity reigns.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="m-btn-gold" onClick={() => scrollTo('contact')}>Schedule a Consultation</button>
            <button style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.9rem 2.25rem', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', letterSpacing: '0.12em', fontWeight: 600, cursor: 'pointer', textTransform: 'uppercase' }} onClick={() => scrollTo('about')}>Our Approach</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="results" style={{ background: '#0a1628', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '3rem 2.5rem' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '1rem', borderRight: i < 3 ? '1px solid rgba(201,168,76,0.15)' : 'none' }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2.5rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.4rem' }}>{s.value}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '7rem 2.5rem', background: '#f5f4f0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1rem' }}>What We Do</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#0a1628' }}>Practice Areas</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <div key={i} className="service-card" style={{ background: '#fff', padding: '2.5rem', border: '1px solid #e8e5df' }}>
                <div style={{ width: '32px', height: '2px', background: '#c9a84c', marginBottom: '1.5rem' }} />
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.35rem', fontWeight: 600, color: '#0a1628', marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", color: '#666', lineHeight: 1.75, fontSize: '0.9rem', fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '7rem 2.5rem', background: '#0a1628', color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <div style={{ aspectRatio: '3/4', background: '#0d1f3c', border: '1px solid rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <span style={{ color: 'rgba(201,168,76,0.2)', fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Photo</span>
              <div style={{ position: 'absolute', bottom: '2rem', left: '-2rem', background: '#c9a84c', padding: '1.5rem', width: '160px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: '#0a1628', lineHeight: 1 }}>18</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: '#0a1628', textTransform: 'uppercase' }}>Years of Advisory</div>
              </div>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Firm</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '2rem' }}>
              Trusted by Leaders.<br />Built for Results.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '1.5rem', fontWeight: 300, fontSize: '0.95rem' }}>
              Since 2008, Meridian Consulting Group has served as a trusted partner to Fortune 500 boards, private equity firms, and high-growth startups navigating their most complex challenges.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, fontWeight: 300, fontSize: '0.95rem' }}>
              Our team of 40+ senior advisors brings deep sector expertise, global reach, and an unwavering commitment to long-term client success.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem' }}>
              <button className="m-btn-gold" onClick={() => scrollTo('contact')}>Work With Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '7rem 2.5rem', background: '#f5f4f0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1rem' }}>Get in Touch</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#0a1628', marginBottom: '1rem' }}>Schedule a Consultation</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: '#888', marginBottom: '3rem', lineHeight: 1.7, fontWeight: 300 }}>
            Tell us about your organization. We'll respond within one business day.
          </p>
          {sent ? (
            <div style={{ background: '#fff', border: '1px solid #c9a84c', padding: '3rem', textAlign: 'center' }}>
              <div style={{ color: '#c9a84c', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank You</div>
              <p style={{ color: '#888', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '0.9rem' }}>We'll be in touch within one business day.</p>
            </div>
          ) : (
            <div style={{ background: '#fff', border: '1px solid #e8e5df', padding: '3rem', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Full Name</label>
                  <input className="m-input" type="text" placeholder="John Smith" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Email Address</label>
                  <input className="m-input" type="email" placeholder="john@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Service of Interest</label>
                <select className="m-input" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                  <option value="">Select a practice area</option>
                  {services.map(s => <option key={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Tell Us About Your Challenge</label>
                <textarea className="m-input" rows={5} placeholder="Brief description of your situation..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ resize: 'vertical' }} />
              </div>
              <button className="m-btn-gold" style={{ width: '100%', padding: '1rem' }} onClick={() => setSent(true)}>Submit Inquiry</button>
            </div>
          )}
          <p style={{ color: '#ccc', fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", marginTop: '2rem' }}>
            Like this theme? <span style={{ color: '#c9a84c', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => navigate('/')}>Get it built for your business →</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0a1628', color: 'rgba(255,255,255,0.3)', padding: '2.5rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', letterSpacing: '0.08em' }}>
        <div>
          <span style={{ color: '#c9a84c', fontFamily: "'Playfair Display', serif", fontSize: '1rem' }}>Meridian</span>
          <span style={{ color: 'rgba(255,255,255,0.2)', marginLeft: '0.5rem' }}>Consulting Group</span>
        </div>
        <span>© 2026 Meridian Consulting Group. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacy', 'Terms', 'LinkedIn'].map(l => <span key={l} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>{l}</span>)}
        </div>
      </footer>
    </div>
  );
}
