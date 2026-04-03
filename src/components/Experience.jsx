import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work <span className="text-gradient">Experience</span></h2>
        </motion.div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical line timeline */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'var(--glass-border)',
            zIndex: 0
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}
              >
                {/* Timeline dot */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--glass-bg)',
                  border: '2px solid var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Briefcase size={18} color="var(--accent-primary)" />
                </div>

                <div className="glass-panel" style={{ padding: '2rem', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{exp.title}</h3>
                      <h4 style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: 500 }}>{exp.company}</h4>
                    </div>
                    <span style={{
                      padding: '0.4rem 1rem',
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: 'var(--accent-primary)',
                      borderRadius: '100px',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} style={{
                        position: 'relative',
                        paddingLeft: '1.5rem',
                        marginBottom: '0.75rem',
                        color: 'var(--text-secondary)'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '10px',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--accent-secondary)'
                        }} />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
