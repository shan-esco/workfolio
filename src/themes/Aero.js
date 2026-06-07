import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Aero() {
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const services = [
    { icon: '🌿', title: 'Deep Tissue Massage', desc: 'Release chronic tension with targeted pressure therapy tailored to your body.' },
    { icon: '🧘', title: 'Guided Meditation', desc: 'One-on-one sessions to quiet the mind and reconnect with your inner calm.' },
    { icon: '🍃', title: 'Holistic Nutrition', desc: 'Personalized plans rooted in naturopathic principles and seasonal whole foods.' },
    { icon: '☀️', title: 'Yoga & Movement', desc: 'Small group and private classes spanning Vinyasa, Yin, and restorative flow.' },
    { icon: '💧', title: 'Hydrotherapy', desc: 'Cold plunge and contrast therapy to accelerate recovery and boost circulation.' },
    { icon: '✨', title: 'Energy Healing', desc: 'Reiki and biofield sessions to restore balance at the energetic level.' },
  ];

  const testimonials = [
    { text: 'Aura completely changed how I relate to my own body. I came in stressed and left feeling like myself again.', name: 'Maya L.', title: 'Yoga Instructor' },
    { text: 'The nutrition program alone was worth it. I have more energy than I did at 25.', name: 'David R.', title: 'Entrepreneur' },
    { text: "The most peaceful place I've ever walked into. I leave every session a different person.", name: 'Sophie K.', title: 'Therapist' },
  ];

  const glass = {
    background: 'rgba(255,255,255,0.18)',
    border: '1px solid rgba(255,255,255,0.35)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderRadius: '20px',
  };

  const glassDark = {
    background: 'rgba(255,255,255,0.12)',
    border: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '20px',
  };

  return (
    <div style={{ background: 'linear-gradient(160deg, #c8e6f5 0%, #a8d8ea 30%, #b8ebd8 60%, #d4f0e0 100%)', minHeight: '100vh', color: '#1a3a2a', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .a-nav-link { color: #2a5a3a; text-decoration: none; font-family: 'Poppins', system-ui; font-size: 0.82rem; font-weight: 500; transition: color 0.2s; background: none; border: none; cursor: pointer; }
        .a-nav-link:hover { color: #4a9060; }
        .a-btn { background: rgba(42,90,58,0.85); color: #fff; border: 1px solid rgba(255,255,255,0.3); padding: 0.85rem 2rem; font-family: 'Poppins', sans-serif; font-size: 0.82rem; font-weight: 600; letter-spacing: 0.05em; cursor: pointer; border-radius: 100px; backdrop-filter: blur(8px); transition: all 0.2s; }
        .a-btn:hover { background: rgba(42,90,58,1); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(42,90,58,0.25); }
        .a-btn-outline { background: rgba(255,255,255,0.3); color: #2a5a3a; border: 1px solid rgba(255,255,255,0.5); padding: 0.85rem 2rem; font-family: 'Poppins', sans-serif; font-size: 0.82rem; font-weight: 600; cursor: pointer; border-radius: 100px; backdrop-filter: blur(8px); transition: all 0.2s; }
        .a-btn-outline:hover { background: rgba(255,255,255,0.5); transform: translateY(-2px); }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(30,80,50,0.12); }
        .service-card { transition: all 0.3s ease; }
        .a-input { width: 100%; background: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.7); border-radius: 12px; padding: 0.85rem 1.1rem; font-family: 'Poppins', sans-serif; font-size: 0.9rem; color: #1a3a2a; outline: none; backdrop-filter: blur(8px); transition: all 0.2s; }
        .a-input:focus { border-color: rgba(74,144,96,0.6); box-shadow: 0 0 0 3px rgba(74,144,96,0.1); background: rgba(255,255,255,0.7); }
        .a-input::placeholder { color: rgba(42,90,58,0.4); }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .float { animation: float 6s ease-in-out infinite; }
        .float2 { animation: float 8s ease-in-out infinite 1s; }
        .float3 { animation: float 7s ease-in-out infinite 2s; }
      `}</style>

      {/* Decorative blobs */}
      <div className="float" style={{ position: 'fixed', top: '10%', right: '5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(150,220,190,0.35) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
      <div className="float2" style={{ position: 'fixed', bottom: '15%', left: '3%', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(135,200,235,0.3) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
      <div className="float3" style={{ position: 'fixed', top: '50%', left: '50%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(200,240,210,0.2) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />

      {/* Back */}
      <button onClick={() => navigate('/samples')} style={{ position: 'fixed', top: '1rem', left: '1rem', ...glassDark, padding: '0.4rem 0.9rem', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', zIndex: 200, fontFamily: "'Poppins', sans-serif", color: '#2a5a3a', border: '1px solid rgba(255,255,255,0.3)' }}>
        ← Samples
      </button>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, ...glass, margin: '1rem', borderRadius: '16px', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.4rem' }}>✿</span>
          <div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#1a3a2a', letterSpacing: '-0.01em' }}>Aura</div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '0.55rem', letterSpacing: '0.2em', color: '#4a9060', textTransform: 'uppercase', marginTop: '-2px' }}>Wellness Studio</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[['Services', 'services'], ['About', 'about'], ['Testimonials', 'testimonials'], ['Book', 'book']].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="a-nav-link">{label}</button>
          ))}
          <button className="a-btn" style={{ padding: '0.6rem 1.4rem', fontSize: '0.78rem' }} onClick={() => scrollTo('book')}>Book a Session</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '6rem 2.5rem 5rem', minHeight: '88vh', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', ...glass, padding: '0.4rem 1rem', fontSize: '0.72rem', fontFamily: "'Poppins', sans-serif", fontWeight: 500, color: '#2a5a3a', marginBottom: '2rem', letterSpacing: '0.05em' }}>
              🌿 Holistic Wellness · Miami, FL
            </div>
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.15, letterSpacing: '-0.03em', color: '#1a3a2a', marginBottom: '1.5rem' }}>
              Find Your<br />
              <span style={{ color: '#2a7a4a' }}>Balance.</span><br />
              Feel Alive.
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", color: '#4a6a5a', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '420px', marginBottom: '2.5rem', fontWeight: 300 }}>
              A sanctuary for body, mind, and spirit. Evidence-based holistic therapies rooted in nature, guided by science.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="a-btn" onClick={() => scrollTo('book')}>Book a Session</button>
              <button className="a-btn-outline" onClick={() => scrollTo('services')}>Explore Services</button>
            </div>
            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem' }}>
              {[['500+', 'Happy Clients'], ['8', 'Therapists'], ['12', 'Treatments']].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: '#1a3a2a' }}>{val}</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.72rem', color: '#6a9a7a', fontWeight: 400 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero glass card */}
          <div style={{ ...glass, padding: '2.5rem', position: 'relative' }}>
            <div style={{ aspectRatio: '4/5', background: 'linear-gradient(135deg, rgba(168,216,234,0.4) 0%, rgba(152,216,200,0.4) 100%)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', gap: '0.5rem' }}>
              <span style={{ fontSize: '4rem' }}>🌺</span>
              <span style={{ color: 'rgba(42,90,58,0.3)', fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Studio Photo</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#1a3a2a' }}>Next Available</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem', color: '#6a9a7a' }}>Today · 3:00 PM</div>
              </div>
              <button className="a-btn" style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }} onClick={() => scrollTo('book')}>Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '6rem 2.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.72rem', letterSpacing: '0.25em', color: '#4a9060', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What We Offer</p>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', color: '#1a3a2a' }}>Our Treatments</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {services.map((s, i) => (
              <div key={i} className="service-card" style={{ ...glass, padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '1.05rem', color: '#1a3a2a', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: '#5a7a6a', lineHeight: 1.7, fontSize: '0.85rem', fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '6rem 2.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ ...glass, padding: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.72rem', letterSpacing: '0.25em', color: '#4a9060', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Story</p>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: '#1a3a2a', lineHeight: 1.2, marginBottom: '1.75rem' }}>Rooted in Nature. Powered by Science.</h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", color: '#5a7a6a', lineHeight: 1.8, marginBottom: '1.25rem', fontWeight: 300, fontSize: '0.95rem' }}>
                Founded in 2018, Aura was born from a simple belief: true wellness happens when ancient wisdom meets modern understanding. Our team of certified therapists, nutritionists, and movement coaches brings decades of combined expertise.
              </p>
              <p style={{ fontFamily: "'Poppins', sans-serif", color: '#6a8a7a', lineHeight: 1.8, fontWeight: 300, fontSize: '0.9rem' }}>
                Every treatment is personalized. Every session is an invitation to slow down and reconnect.
              </p>
            </div>
            <div>
              <div style={{ aspectRatio: '4/5', background: 'linear-gradient(135deg, rgba(168,216,234,0.5) 0%, rgba(152,216,200,0.5) 100%)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'rgba(42,90,58,0.2)', fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>About Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ padding: '6rem 2.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', color: '#1a3a2a' }}>Client Stories</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ ...glass, padding: '2rem' }}>
                <div style={{ color: '#4a9060', fontSize: '1.5rem', marginBottom: '1rem' }}>✦✦✦✦✦</div>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: '#3a5a4a', lineHeight: 1.75, fontWeight: 300, fontSize: '0.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{t.text}"</p>
                <div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.85rem', color: '#1a3a2a' }}>{t.name}</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.72rem', color: '#6a9a7a' }}>{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book / Contact */}
      <section id="book" style={{ padding: '6rem 2.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <div style={{ ...glass, padding: '3.5rem', textAlign: 'center' }}>
            <span style={{ fontSize: '2.5rem' }}>🌸</span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em', color: '#1a3a2a', marginBottom: '0.75rem', marginTop: '1rem' }}>Book a Session</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", color: '#5a7a6a', marginBottom: '2.5rem', fontWeight: 300, fontSize: '0.95rem' }}>We'll reach out within 2 hours to confirm your appointment.</p>
            {sent ? (
              <div style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '16px', padding: '2.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌿</div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: '#1a3a2a', fontSize: '1.1rem' }}>Booking request received.</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", color: '#6a9a7a', fontWeight: 300, fontSize: '0.9rem', marginTop: '0.5rem' }}>We'll be in touch very soon.</p>
              </div>
            ) : (
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input className="a-input" type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input className="a-input" type="email" placeholder="Email address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <select className="a-input" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                  <option value="">Choose a treatment</option>
                  {services.map(s => <option key={s.title}>{s.title}</option>)}
                </select>
                <textarea className="a-input" rows={4} placeholder="Any notes or questions?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ resize: 'vertical' }} />
                <button className="a-btn" onClick={() => setSent(true)} style={{ width: '100%', padding: '1rem', fontSize: '0.9rem', borderRadius: '12px' }}>Request Booking 🌿</button>
              </div>
            )}
            <p style={{ color: 'rgba(42,90,58,0.3)', fontSize: '0.7rem', fontFamily: "'Poppins', sans-serif", marginTop: '2rem' }}>
              Like this theme? <span style={{ color: '#4a9060', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => navigate('/')}>Get it built for your business →</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ ...glassDark, margin: '1rem', borderRadius: '16px', padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>✿</span>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: '#1a3a2a' }}>Aura</span>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', color: '#6a9a7a' }}>Wellness Studio</span>
        </div>
        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', color: '#6a9a7a' }}>© 2026 Aura Wellness Studio. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['IG', 'FB', 'Book'].map(l => <span key={l} style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', color: '#4a9060', cursor: 'pointer' }}>{l}</span>)}
        </div>
      </footer>
    </div>
  );
}
