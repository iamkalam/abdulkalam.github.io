import { motion } from 'framer-motion';
import { personalDetails, education, skills, certificates } from '../data';
import { Server, Code, Database, Terminal, BarChart3 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Overview</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              {personalDetails.summary}
            </p>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem' }}>Education</h3>
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.1rem' }}>{education.degree}</h4>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{education.graduation}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{education.institution}</p>
              <p style={{ color: 'var(--text-secondary)' }}>GPA: <strong style={{ color: 'var(--text-primary)' }}>{education.gpa}</strong></p>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Certifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certificates.map((cert, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-secondary)' }} />
                  <div>
                    <h5 style={{ fontWeight: 500, fontSize: '1rem' }}>{cert.title}</h5>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Technical Skills</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    {getSkillIcon(skillGroup.category)}
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{skillGroup.category}</h4>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {skillGroup.items.map((item, i) => (
                      <span key={i} style={{
                        padding: '0.4rem 0.8rem',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 992px) {
            .about-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function getSkillIcon(category) {
  switch (category) {
    case 'Programming Languages': return <Code size={20} color="var(--accent-primary)" />;
    case 'AI / ML': return <Terminal size={20} color="var(--accent-secondary)" />;
    case 'Database': return <Database size={20} color="#10b981" />;
    case 'Web Development': return <Server size={20} color="#f59e0b" />;
    case 'BI & Analytics': return <BarChart3 size={20} color="#22c55e" />;
    default: return <Code size={20} color="var(--text-secondary)" />;
  }
}
