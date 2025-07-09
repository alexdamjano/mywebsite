import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Medical Device Company',
      position: 'Software Engineering Co-op',
      duration: 'Jan 2023 - Aug 2023',
      location: 'Toronto, ON',
      description: 'Developed embedded software for medical monitoring devices, focusing on real-time data processing and patient safety features.',
      achievements: [
        'Implemented real-time signal processing algorithms for vital signs monitoring',
        'Reduced device boot time by 40% through optimization of embedded systems',
        'Collaborated with biomedical engineers to ensure FDA compliance requirements',
        'Developed automated testing framework for medical device software'
      ],
      technologies: ['C++', 'Embedded Systems', 'RTOS', 'Python', 'Git']
    },
    {
      company: 'Healthcare Technology Startup',
      position: 'Full Stack Developer Co-op',
      duration: 'May 2022 - Dec 2022',
      location: 'Vancouver, BC',
      description: 'Built web applications for healthcare providers to manage patient data and generate analytics reports.',
      achievements: [
        'Developed RESTful APIs for patient data management system',
        'Created responsive frontend using React and TypeScript',
        'Implemented secure authentication and authorization systems',
        'Integrated third-party medical device APIs for data collection'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS']
    },
    {
      company: 'University Research Lab',
      position: 'Biomedical Engineering Research Assistant',
      duration: 'Sep 2021 - Apr 2022',
      location: 'Waterloo, ON',
      description: 'Conducted research on biomechanical analysis and developed software tools for movement pattern recognition.',
      achievements: [
        'Designed and implemented machine learning algorithms for gait analysis',
        'Created 3D visualization tools for biomechanical data',
        'Published research findings in academic conference proceedings',
        'Mentored undergraduate students in research methodologies'
      ],
      technologies: ['Python', 'MATLAB', 'Machine Learning', 'OpenCV', '3D Modeling']
    },
    {
      company: 'Software Development Firm',
      position: 'Software Developer Co-op',
      duration: 'Jan 2021 - Aug 2021',
      location: 'Ottawa, ON',
      description: 'Worked on enterprise software solutions, focusing on backend development and database optimization.',
      achievements: [
        'Developed microservices architecture for scalable applications',
        'Optimized database queries resulting in 60% performance improvement',
        'Implemented CI/CD pipelines for automated testing and deployment',
        'Participated in code reviews and mentored junior developers'
      ],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Jenkins']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      school: 'University of Waterloo',
      duration: '2019 - 2024',
      description: 'Focused on software development, algorithms, and system design with emphasis on healthcare applications.'
    },
    {
      degree: 'Bachelor of Biomedical Engineering',
      school: 'University of Waterloo',
      duration: '2019 - 2024',
      description: 'Specialized in medical device design, biomechanics, and healthcare technology innovation.'
    }
  ];

  return (
    <div className="experience">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Professional Experience</h1>
          <p className="page-subtitle">
            My journey through co-op terms and professional development in software and biomedical engineering
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
                        <li key={idx} className="achievement-item">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="technologies">
                    <h4 className="technologies-title">Technologies Used:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
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