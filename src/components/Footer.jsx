import { personalDetails } from '../data';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 0',
      borderTop: '1px solid var(--glass-border)',
      background: 'var(--bg-color)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href={`https://github.com/${personalDetails.github}`} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--text-primary)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>
            <GithubIcon size={20} />
          </a>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--text-primary)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>
            <LinkedinIcon size={20} />
          </a>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Designed and built by <span style={{ color: 'var(--accent-primary)' }}>{personalDetails.name}</span>
        </p>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.6 }}>
          © {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
