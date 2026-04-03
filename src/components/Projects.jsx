import { motion } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        </motion.div>

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '2.5rem' }}
          >
            <div className="glass-panel featured-project-grid" style={{
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <FolderGit2 size={38} color="var(--accent-primary)" />
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
                        onMouseOver={(e) => e.target.style.color='var(--text-primary)'}
                        onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}
                      >
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {featuredProject.demo && (
                      <a
                        href={featuredProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
                        onMouseOver={(e) => e.target.style.color='var(--text-primary)'}
                        onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{featuredProject.title}</h3>
                {featuredProject.impact && (
                  <p style={{
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                    marginBottom: '0.75rem'
                  }}>
                    {featuredProject.impact}
                  </p>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {featuredProject.points.slice(0, 3).map((point, i) => (
                    <p key={i} style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
                      {point}
                    </p>
                  ))}
                </div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  borderTop: '1px solid var(--glass-border)',
                  paddingTop: '1rem'
                }}>
                  {featuredProject.tech}
                </p>
              </div>

              {featuredProject.image && (
                <div style={{
                  width: '100%',
                  height: '260px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'var(--bg-color)',
                  border: '1px solid var(--glass-border)'
                }}>
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          {otherProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div
                className="glass-panel"
                style={{
                  height: '100%',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <FolderGit2 size={36} color="var(--accent-primary)" />
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
                        onMouseOver={(e) => e.target.style.color='var(--text-primary)'}
                        onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}
                      >
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
                        onMouseOver={(e) => e.target.style.color='var(--text-primary)'}
                        onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {project.image && (
                  <div style={{
                    width: '100%',
                    height: '180px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: 'var(--bg-color)',
                    border: '1px solid var(--glass-border)',
                    marginBottom: '1.25rem'
                  }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}

                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{project.title}</h3>

                {project.impact && (
                  <p style={{
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                    marginBottom: '0.75rem'
                  }}>
                    {project.impact}
                  </p>
                )}
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
                  {project.points.slice(0, 2).map((point, i) => (
                    <p key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {point}
                    </p>
                  ))}
                </div>

                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  marginTop: 'auto',
                  borderTop: '1px solid var(--glass-border)',
                  paddingTop: '1rem'
                }}>
                  {project.tech}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <style>{`
          @media (max-width: 992px) {
            .featured-project-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
