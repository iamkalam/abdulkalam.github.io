import { motion } from 'framer-motion';
import { personalDetails } from '../data';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background glow */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px', 
        background: 'var(--accent-secondary)', filter: 'blur(150px)', 
        opacity: 0.1, borderRadius: '50%', bottom: '-10%', left: '50%', transform: 'translateX(-50%)', zIndex: -1 
      }} />

      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            What's Next?
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', margin: '1rem 0 1.5rem 0' }}>Get In Touch</h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            I'm currently looking for new opportunities as an AI/ML Engineer. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}
        >
          <ContactCard icon={<Mail size={24} />} title="Email" value={personalDetails.email} href={`mailto:${personalDetails.email}`} />
          <ContactCard icon={<Phone size={24} />} title="Phone" value={personalDetails.phone} href={`tel:${personalDetails.phone}`} />
          <ContactCard icon={<MapPin size={24} />} title="Location" value={personalDetails.location} />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={`mailto:${personalDetails.email}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2.5rem',
              background: 'var(--accent-gradient)',
              color: '#fff',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 600,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, value, href }) {
  const content = (
    <>
      <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'rgba(59, 130, 246, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--accent-primary)',
        marginBottom: '1rem'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{value}</p>
    </>
  );

  return (
    <div className="glass-panel" style={{
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      {href ? <a href={href} style={{ display: 'contents' }}>{content}</a> : content}
    </div>
  );
}
