import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Edgy() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [email, setEmail] = useState('');

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif", overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');
        * { box-sizing: border-box; }
        .edgy-root { font-family: 'Oswald', 'Arial Black', sans-serif; }
        .v-nav-link { color: #fff; text-decoration: none; font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase; font-family: system-ui, sans-serif; transition: color 0.2s; }
        .v-nav-link:hover { color: #FF1414; }
        .v-btn-primary { background: #FF1414; color: #fff; border: none; padding: 1rem 2.5rem; font-family: 'Oswald', sans-serif; font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }
        .v-btn-primary:hover { background: #fff; color: #000; }
        .v-btn-outline { background: transparent; color: #fff; border: 1px solid #333; padding: 1rem 2.5rem; font-family: system-ui, sans-serif; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }
        .v-btn-outline:hover { border-color: #FF1414; color: #FF1414; }
        .drop-card:hover { border-color: #FF1414; }
        .drop-card { transition: border-color 0.3s; }
        .v-input { background: #111; border: 1px solid #222; color: #fff; padding: 1rem 1.25rem; font-family: system-ui, sans-serif; font-size: 0.9rem; outline: none; transition: border-color 0.2s; width: 100%; }
        .v-input:focus { border-color: #FF1414; }
        .v-input::placeholder { color: #444; }
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100vh); } }
      `}</style>

      {/* Back */}
      <button onClick={() => navigate('/samples')} style={{ position: 'fixed', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.8)', border: '1px solid #222', color: '#555', padding: '0.4rem 0.9rem', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', zIndex: 200, fontFamily: 'system-ui' }}>
        ← Samples
      </button>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '1.25rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #111' }}>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.3em' }}>VANTA</span>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['drop', 'story', 'contact'].map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="v-nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>{s}</button>
          ))}
          <button className="v-btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.7rem' }}>Shop Now</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '8rem 2.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        {/* Red vertical bar */}
        <div style={{ position: 'absolute', left: '2.5rem', top: 0, bottom: 0, width: '3px', background: '#FF1414' }} />
        {/* Diagonal bg shape */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '42%', background: 'linear-gradient(160deg, #0f0f0f 0%, #1a0000 100%)', clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)', zIndex: 0 }} />
        {/* Scan lines overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,20,20,0.015) 3px, rgba(255,20,20,0.015) 4px)', pointerEvents: 'none', zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <p style={{ color: '#FF1414', fontSize: '0.7rem', letterSpacing: '0.5em', textTransform: 'uppercase', fontFamily: 'system-ui', marginBottom: '2rem' }}>SS26 // VANTA COLLECTIVE</p>
          <h1 style={{ fontFamily: "'Oswald', 'Arial Black', sans-serif", fontSize: 'clamp(5rem, 14vw, 13rem)', fontWeight: 700, lineHeight: 0.88, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
            WEAR<br />
            <span style={{ WebkitTextStroke: '2px #fff', color: 'transparent' }}>THE</span><br />
            VOID
          </h1>
          <p style={{ color: '#555', fontFamily: 'system-ui', fontSize: '1rem', lineHeight: 1.7, maxWidth: '380px', marginBottom: '2.5rem', fontWeight: 400 }}>
            Clothing for those who move in the dark. Limited drops. No restocks. No compromises.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="v-btn-primary" onClick={() => scrollTo('drop')}>Shop The Drop</button>
            <button className="v-btn-outline" onClick={() => scrollTo('story')}>Our Story</button>
          </div>
        </div>
      </section>

      {/* The Drop */}
      <section id="drop" style={{ padding: '7rem 2.5rem', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <p style={{ color: '#FF1414', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontFamily: 'system-ui', marginBottom: '0.5rem' }}>New Arrivals</p>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>The Drop</h2>
            </div>
            <span style={{ color: '#333', fontSize: '0.7rem', letterSpacing: '0.2em', fontFamily: 'system-ui', textTransform: 'uppercase' }}>SS26 Collection</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#111' }}>
            {[
              { name: 'VOID HOODIE', price: '$148', tag: 'SOLD OUT' },
              { name: 'SHADOW TEE', price: '$68', tag: 'LOW STOCK' },
              { name: 'ABYSS CARGO', price: '$198', tag: 'NEW' },
            ].map((item, i) => (
              <div key={i} className="drop-card" style={{ background: '#0a0a0a', padding: '2.5rem', border: '1px solid transparent', cursor: 'pointer' }}>
                <div style={{ aspectRatio: '3/4', background: i === 0 ? '#0f0f0f' : i === 1 ? '#0d0005' : '#050a0f', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ width: '60%', height: '70%', border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#1a1a1a', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'system-ui' }}>Image</span>
                  </div>
                  <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: item.tag === 'SOLD OUT' ? '#1a1a1a' : item.tag === 'NEW' ? '#FF1414' : '#222', color: item.tag === 'NEW' ? '#fff' : '#666', fontSize: '0.55rem', letterSpacing: '0.2em', padding: '0.3rem 0.6rem', fontFamily: 'system-ui' }}>
                    {item.tag}
                  </span>
                </div>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.name}</p>
                <p style={{ color: '#555', fontFamily: 'system-ui', fontSize: '0.9rem' }}>{item.price}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="v-btn-outline">View All Products</button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" style={{ padding: '7rem 2.5rem', background: '#050505', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#FF1414', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontFamily: 'system-ui', marginBottom: '1rem' }}>About</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '2rem' }}>
              BORN FROM<br />THE UNDERGROUND
            </h2>
            <div style={{ width: '40px', height: '3px', background: '#FF1414', marginBottom: '2rem' }} />
            <p style={{ color: '#666', fontFamily: 'system-ui', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              VANTA isn't a brand. It's a declaration. We make clothing for people who don't ask for permission — who exist in the margins and own them.
            </p>
            <p style={{ color: '#555', fontFamily: 'system-ui', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Every piece is designed in the dark and built to last. No seasons, no trends. Just craft that speaks for itself.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '4/5', background: '#111', border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#1a1a1a', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'system-ui' }}>Photo</span>
            </div>
            <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', width: '120px', height: '120px', background: '#FF1414', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>08</div>
                <div style={{ fontFamily: 'system-ui', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto marquee */}
      <div style={{ background: '#FF1414', padding: '1rem 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 20s linear infinite' }}>
          {Array(6).fill('WEAR THE VOID  ✦  NO RESTOCKS  ✦  BUILT IN THE DARK  ✦  SS26  ✦  ').map((t, i) => (
            <span key={i} style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginRight: '2rem' }}>{t}</span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* Contact */}
      <section id="contact" style={{ padding: '7rem 2.5rem', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#FF1414', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontFamily: 'system-ui', marginBottom: '1rem' }}>Stay in the loop</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>GET ON THE LIST</h2>
          <p style={{ color: '#555', fontFamily: 'system-ui', marginBottom: '3rem', lineHeight: 1.7 }}>Drop notifications. No spam. Unsubscribe anytime.</p>
          {formSent ? (
            <div style={{ border: '1px solid #FF1414', padding: '2rem', color: '#FF1414', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.2em', fontSize: '1.1rem' }}>
              YOU'RE ON THE LIST.
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0', border: '1px solid #222' }}>
              <input className="v-input" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} style={{ border: 'none', borderRight: '1px solid #222', flex: 1 }} />
              <button className="v-btn-primary" onClick={() => setFormSent(true)} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>Join</button>
            </div>
          )}
          <p style={{ color: '#222', fontSize: '0.7rem', fontFamily: 'system-ui', marginTop: '3rem' }}>
            ✦ Like this theme? <span style={{ color: '#444', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => navigate('/')}>Get it built for your business →</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #111', padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.3em', fontSize: '1rem' }}>VANTA</span>
        <span style={{ color: '#333', fontFamily: 'system-ui', fontSize: '0.7rem', letterSpacing: '0.1em' }}>© 2026 VANTA COLLECTIVE</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['IG', 'TW', 'TK'].map(s => (
            <span key={s} style={{ color: '#333', fontFamily: 'system-ui', fontSize: '0.65rem', letterSpacing: '0.15em', cursor: 'pointer' }} className="v-nav-link">{s}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
