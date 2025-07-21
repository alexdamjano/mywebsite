import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const skills = [
    {
      category: 'Programming',
      items: [
        'JavaScript/TypeScript',
        'Python',
        'Java',
        'C/C#/C++',
        'React',
        'Node.js',
        'Electron',
        'PyTorch',
      ],
    },
    {
      category: 'Biomedical',
      items: [
        'Medical Device Design',
        'Signal Processing',
        'Biomechanics',
        'CAD/3D Modeling',
      ],
    },
    {
      category: 'Tools & Technologies',
      items: [
        'Git',
        'Google Cloud Products',
        'AWS',
        'PostgreSQL',
        'Matlab',
        'Arduino',
        'Figma',
      ],
    },
  ];

  const featuredProjects = [
    {
      title: 'Medical Device Prototype',
      description:
        'Developed a novel medical device for patient monitoring using embedded systems and IoT technologies.',
      technologies: ['C++', 'Arduino', 'IoT', 'CAD'],
      link: '/projects',
    },
    {
      title: 'Healthcare Analytics Platform',
      description:
        'Built a web application for analyzing patient data and generating insights for healthcare providers.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Python'],
      link: '/projects',
    },
    {
      title: 'Biomechanical Analysis Tool',
      description:
        'Created software for analyzing human movement patterns and providing rehabilitation recommendations.',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'MATLAB'],
      link: '/projects',
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Alex</span>
              </h1>
              <p className="hero-subtitle">
                Software & Biomedical Engineering Graduate
              </p>
              <p className="hero-description">
                Passionate about creating innovative solutions that bridge the
                gap between technology and healthcare. I combine software
                engineering expertise with biomedical knowledge to develop
                impactful applications.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-avatar">
                <div className="avatar-placeholder">
                  <span className="avatar-text">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Recent graduate with a unique blend of software engineering and
            biomedical engineering expertise
          </p>

          <div className="about-content">
            <div className="about-text">
              <p>
                I recently graduated with degrees in both Software Engineering
                and Biomedical Engineering, giving me a unique perspective on
                how technology can enhance healthcare outcomes. During my
                academic journey, I completed multiple co-op terms where I
                gained hands-on experience in medical device development,
                healthcare software, and data analysis.
              </p>
              <p>
                My passion lies in creating solutions that make a real
                difference in people's lives. Whether it's developing software
                for medical devices, building healthcare analytics platforms, or
                creating tools for biomechanical analysis, I'm always excited to
                tackle new challenges.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Co-op Terms</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Degrees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technical skills across software development and biomedical
            engineering
          </p>

          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-card">
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work combining software and biomedical
            engineering
          </p>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to={project.link} className="btn btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Work Together?</h2>
            <p className="cta-description">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can create something amazing together.
            </p>
            <Link to="/contact" className="btn btn-white">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
