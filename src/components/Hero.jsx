import { motion } from 'framer-motion';
import { personalDetails } from '../data';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
export default function Hero() {
  const MotionDiv = motion.div;
  const toolboxItems = [
    { label: 'React', icon: reactLogo },
    { label: 'Vite', icon: viteLogo },
    { label: 'Python' },
    { label: 'SQL' },
    { label: 'Tableau' }
  ];

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glowing orbs */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px', 
        background: 'var(--accent-primary)', filter: 'blur(150px)', 
        opacity: 0.15, borderRadius: '50%', top: '-10%', left: '-10%', zIndex: -1 
      }} />
      <div style={{
        position: 'absolute', width: '400px', height: '400px', 
        background: 'var(--accent-secondary)', filter: 'blur(150px)', 
        opacity: 0.15, borderRadius: '50%', bottom: '10%', right: '-5%', zIndex: -1 
      }} />

      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem', alignItems: 'center' }}>
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '100px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 500 }}>
            Hello, I am {personalDetails.name} 👋
          </div>
          
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            <span className="text-gradient">{personalDetails.role}</span> <br/>
            Based in {personalDetails.location.split(',')[0]}
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.8 }}>
            {personalDetails.tagline}
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.875rem 2rem', background: 'var(--text-primary)', color: 'var(--bg-color)',
              borderRadius: '8px', fontWeight: 600, fontSize: '1rem'
            }}>
              View Work <ArrowRight size={18} />
            </a>
            
            <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
              <SocialIcon href="https://github.com/iamkalam" icon={<GithubIcon size={20} />} />
              <SocialIcon href="https://www.linkedin.com/in/abdul-kalam-800860267/" icon={<LinkedinIcon size={20} />} />
              <SocialIcon href={`mailto:${personalDetails.email}`} icon={<Mail size={20} />} />
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            alignItems: 'center',
            marginTop: '2rem'
          }}>
            {toolboxItems.map((item) => (
              <div key={item.label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.75rem',
                borderRadius: '999px',
                border: '1px solid var(--glass-border)',
                background: 'var(--glass-bg)',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem'
              }}>
                {item.icon && (
                  <img src={item.icon} alt="" style={{ width: '16px', height: '16px' }} />
                )}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-container"
          style={{ position: 'relative' }}
        >
          <div className="glass-panel animate-float" style={{
            aspectRatio: '1/1',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'var(--bg-color)',
            border: '2px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)'
          }}>
            <img 
              src="/profile.png" 
              alt="Abdul Kalam" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'top center' 
              }} 
            />
          </div>
          
          <div className="glass-panel" style={{
            position: 'absolute', bottom: '-20px', left: '-20px', padding: '1.5rem',
            display: 'flex', flexDirection: 'column', gap: '0.25rem'
          }}>
            <span style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>3+</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Years Experience</span>
          </div>
        </MotionDiv>
      </div>
      
      <style>{`
        @media (max-width: 992px) {
          .container { grid-template-columns: 1fr !important; text-align: center; }
          .hero-image-container { max-width: 320px; margin: 2.5rem auto 0; }
          .container > div:first-child { display: flex; flexDirection: column; alignItems: center; }
        }
      `}</style>
    </section>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{
      width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: '50%', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
      color: 'var(--text-secondary)', transition: 'all 0.3s ease'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.color = 'var(--text-primary)';
      e.currentTarget.style.transform = 'translateY(-3px)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}>
      {icon}
    </a>
  );
}
