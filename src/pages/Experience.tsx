import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Possibility Neurotechnologies',
      position: 'Software Developer Co-op',
      duration: 'Aug 2022 - Oct 2023',
      location: 'Calgary, ON [Remote]',
      description:
        'Developed and maintained a BCI application using Electron that interfaced with the flagship ”Think2Switch” device.',
      achievements: [
        'Implemented dozens of design iterations to the main app, buildng screens, fixing bugs and improving usage flow',
        'Oversaw code standardization and linting practices for the team using Prettier',
        'Developed and implemented automated code quality checks with Git Actions',
        'Collaborated with product and QA teams to develop and deliver secure updates to possneuro.com',
      ],
      technologies: ['Electron', 'Node.js', 'JavaScript', 'HTML/CSS', 'Git'],
    },
    {
      company: 'Everworks Inc.',
      position: 'Systems Engineer Co-op',
      duration: 'May 2022 - July 2023',
      location: 'Dundas, ON',
      description:
        'Built SCADA visualization systems for live industrial data, and oversaw development of an internal web-based job board.',
      achievements: [
        'Improved user workflows with responsive UIs for industrial data that were displayed live on manufacturing floors [Collective Arts, Hamilton Health Sciences]',
        'Met with clients to address existing technical needs and negotiate POs',
        'Led full-stack development of web-based internal job board with PHP, JavaScript and PostgreSQL',
        'Performed investigations into vibrations analysis and alternative monitoring techniques for industrial apparatuses',
      ],
      technologies: [
        'Ignition',
        'Python',
        'TypeScript',
        'PHP',
        'PostgreSQL',
        'AWS',
      ],
    },
    {
      company: 'JaggedXY Inc.',
      position: 'Software Developer Co-op',
      duration: 'May 2021 - Sep 2021',
      location: 'Stratford, ON [Remote]',
      description:
        'Conducted research on biomechanical analysis and developed software tools for movement pattern recognition.',
      achievements: [
        'Full-stack development of a web app for visualizing telecom data, in use at Rogers and AT&T',
        'Built visualizations using the OpenStreetMap library in JavaScript',
        'Performed server-side data fetching in C# using .NET MVC architecture',
      ],
      technologies: ['JavaScript', '.NET', 'C#', 'OpenStreetMap'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Software and Biomedical Engineering',
      school: 'McMaster University',
      duration: '2019 - 2025',
      description:
        'Focused on software development and the intersection of software technologies in healthcare.',
    },
  ];

  return (
    <div className="experience">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Professional Experience</h1>
          <p className="page-subtitle">
            My journey through co-op terms and professional development in
            software and biomedical engineering
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <div className="experience-title">
                      <h3 className="job-title">{exp.position}</h3>
                      <span className="company-name">{exp.company}</span>
                    </div>
                    <div className="experience-meta">
                      <span className="duration">{exp.duration}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="achievements">
                    <h4 className="achievements-title">Key Achievements:</h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    <h4 className="technologies-title">Technologies Used:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-header">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <span className="school-name">{edu.school}</span>
                  <span className="education-duration">{edu.duration}</span>
                </div>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills Summary</h2>
          <div className="skills-summary">
            <div className="skill-category">
              <h3 className="skill-category-title">Programming Languages</h3>
              <div className="skill-bars">
                <div className="skill-bar">
                  <span className="skill-name">JavaScript/TypeScript</span>
                  <div className="skill-progress">
                    <div className="skill-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <span className="skill-name">Python</span>
                  <div className="skill-progress">
                    <div className="skill-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <span className="skill-name">Java</span>
                  <div className="skill-progress">
                    <div className="skill-fill" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <span className="skill-name">C++</span>
                  <div className="skill-progress">
                    <div className="skill-fill" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Technologies & Tools</h3>
              <div className="skill-bars">
                <div className="skill-bar">
                  <span className="skill-name">React & Node.js</span>
                  <div className="skill-progress">
                    <div className="skill-fill" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <span className="skill-name">Medical Device Development</span>
                  <div className="skill-progress">
                    <div className="skill-fill" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <span className="skill-name">Machine Learning</span>
                  <div className="skill-progress">
                    <div className="skill-fill" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div className="skill-bar">
                  <span className="skill-name">Cloud & DevOps</span>
                  <div className="skill-progress">
                    <div className="skill-fill" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
