import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalDetails, projects } from '../data';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';

function timeAgo(isoDate) {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}d ago`;
  }
  if (hours > 0) {
    return `${hours}h ago`;
  }
  if (minutes > 0) {
    return `${minutes}m ago`;
  }

  return 'Just now';
}

function formatEvent(event) {
  const repo = event.repo?.name || 'repository';
  const repoUrl = event.repo?.name ? `https://github.com/${event.repo.name}` : `https://github.com/${personalDetails.github}`;
  const eventTime = timeAgo(event.created_at);

  switch (event.type) {
    case 'PushEvent': {
      const commitCount = event.payload?.commits?.length || 0;
      const commitLabel = commitCount === 1 ? '1 commit' : `${commitCount} commits`;
      return {
        title: `${commitLabel} to ${repo}`,
        subtitle: eventTime,
        url: repoUrl
      };
    }
    case 'CreateEvent': {
      const refType = event.payload?.ref_type || 'item';
      const refName = event.payload?.ref ? ` ${event.payload.ref}` : '';
      return {
        title: `Created ${refType}${refName} in ${repo}`,
        subtitle: eventTime,
        url: repoUrl
      };
    }
    case 'IssuesEvent': {
      const action = event.payload?.action || 'updated';
      return {
        title: `${action} issue in ${repo}`,
        subtitle: eventTime,
        url: repoUrl
      };
    }
    case 'PullRequestEvent': {
      const action = event.payload?.action || 'updated';
      return {
        title: `${action} pull request in ${repo}`,
        subtitle: eventTime,
        url: repoUrl
      };
    }
    default:
      return {
        title: `${event.type.replace('Event', '')} in ${repo}`,
        subtitle: eventTime,
        url: repoUrl
      };
  }
}

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const [activity, setActivity] = useState([]);
  const [activityError, setActivityError] = useState('');
  const [isLoadingActivity, setIsLoadingActivity] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadActivity = async () => {
      setIsLoadingActivity(true);
      setActivityError('');
      try {
        const response = await fetch(`https://api.github.com/users/${personalDetails.github}/events/public?per_page=6`);
        if (!response.ok) {
          throw new Error('GitHub API error');
        }
        const data = await response.json();
        if (isMounted) {
          setActivity(Array.isArray(data) ? data.slice(0, 6) : []);
        }
      } catch (error) {
        if (isMounted) {
          setActivityError('Unable to load GitHub activity right now.');
        }
      } finally {
        if (isMounted) {
          setIsLoadingActivity(false);
        }
      }
    };

    loadActivity();

    return () => {
      isMounted = false;
    };
  }, []);

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '3rem' }}
        >
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <GithubIcon size={24} />
                <h3 style={{ fontSize: '1.4rem' }}>Live GitHub Activity</h3>
              </div>
              <a
                href={`https://github.com/${personalDetails.github}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-secondary)', fontWeight: 600 }}
              >
                View Profile
              </a>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
              {isLoadingActivity && (
                <p style={{ color: 'var(--text-secondary)' }}>Loading recent activity...</p>
              )}

              {!isLoadingActivity && activityError && (
                <p style={{ color: 'var(--text-secondary)' }}>{activityError}</p>
              )}

              {!isLoadingActivity && !activityError && activity.length === 0 && (
                <p style={{ color: 'var(--text-secondary)' }}>No recent public activity found.</p>
              )}

              {!isLoadingActivity && !activityError && activity.length > 0 && (
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {activity.map((event) => {
                    const formatted = formatEvent(event);
                    return (
                      <a
                        key={event.id}
                        href={formatted.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem 1.25rem',
                          borderRadius: '12px',
                          border: '1px solid var(--glass-border)',
                          background: 'rgba(255, 255, 255, 0.02)',
                          color: 'inherit'
                        }}
                      >
                        <span style={{ fontWeight: 600 }}>{formatted.title}</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{formatted.subtitle}</span>
                      </a>
                    );
                  })}
                </div>
              )}

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                Activity updates from the public GitHub API and may be rate limited.
              </p>
            </div>
          </div>
        </motion.div>

        <style>{`
          @media (max-width: 992px) {
            .featured-project-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
