import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '📱'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '💼'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: '✉️'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Alex</h3>
            <p className="footer-description">
              Software & Biomedical Engineering Graduate passionate about creating innovative solutions.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/experience" className="footer-link">Experience</a></li>
              <li><a href="/projects" className="footer-link">Projects</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Alex. All rights reserved.
          </p>
          <p className="footer-built-with">
            Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 