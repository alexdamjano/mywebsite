import React, { useState } from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'medical', label: 'Medical Devices' },
    { id: 'web', label: 'Web Applications' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Lesion Cohesion',
      category: 'medical',
      description:
        'A mobile-desktop application that aids clinicians in imaging, monitoring, and analysing Mpox disease progression for their patients.',
      longDescription:
        'My final year Capstone project, Lesion Cohesion, was inspired by a research paper discussing the difficulties of tracking Mpox lesions on patients, even with aids like machine learning models for image processing. ' +
        'My group and I built a mobile application in React that visually guided clinicians through an imaging process that would produce high quality, standardized images that could be combined into a 2D mesh for analysis. ' +
        'By connecting to a local desktop, the application could gain additional analysis capabilities to give live updates about lesion count and infected area for patients.',
      technologies: ['React', 'JavaScript', 'Python', 'OpenCV', 'FireStore'],
      image: '🏥',
      demoUrl: 'https://youtu.be/0COM1sIxE9c?si=vpDf5qI2HwuIpAe2',
      githubUrl: 'https://github.com/SkinImagerCS/SkinImager_FrontEnd',
      features: [
        'Mobile app for clinicians',
        'UI guidance for image capture',
        'Cloud-based data storage',
        'Image analysis with OpenCV',
        'Usability and data integrity testing',
      ],
    },
    {
      id: 2,
      title: 'Healthcare Analytics Dashboard',
      category: 'web',
      description:
        'A web-based platform for analyzing patient data and generating insights to improve healthcare outcomes.',
      longDescription:
        'Built for healthcare administrators and providers, this dashboard provides comprehensive analytics on patient populations, treatment outcomes, and resource utilization. Features include interactive charts, predictive analytics, and customizable reports.',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'D3.js',
        'AWS',
      ],
      image: '📊',
      demoUrl: 'https://healthcare-analytics-demo.netlify.app',
      githubUrl: 'https://github.com/yourusername/healthcare-analytics',
      features: [
        'Interactive data visualization',
        'Predictive analytics for patient outcomes',
        'Customizable reporting system',
        'Real-time data integration',
        'Role-based access control',
      ],
    },
    {
      id: 3,
      title: 'Gait Analysis AI',
      category: 'ai',
      description:
        'Machine learning system for analyzing human walking patterns to assist in rehabilitation and injury prevention.',
      longDescription:
        'This AI-powered system uses computer vision and machine learning to analyze walking patterns from video recordings. It provides detailed biomechanical analysis and generates rehabilitation recommendations for patients recovering from injuries.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'React', 'PostgreSQL'],
      image: '🤖',
      demoUrl: 'https://gait-analysis-demo.netlify.app',
      githubUrl: 'https://github.com/yourusername/gait-analysis',
      features: [
        'Computer vision-based gait analysis',
        'Machine learning pattern recognition',
        'Automated rehabilitation recommendations',
        'Progress tracking over time',
        'Integration with medical devices',
      ],
    },
    {
      id: 4,
      title: 'Medication Reminder App',
      category: 'mobile',
      description:
        'Mobile application to help patients manage their medication schedules and track adherence.',
      longDescription:
        'A comprehensive medication management app that helps patients stay on track with their prescriptions. Features include medication scheduling, reminders, interaction checking, and progress tracking for healthcare providers.',
      technologies: [
        'React Native',
        'Node.js',
        'MongoDB',
        'Push Notifications',
      ],
      image: '💊',
      demoUrl: 'https://medication-reminder-demo.netlify.app',
      githubUrl: 'https://github.com/yourusername/medication-reminder',
      features: [
        'Smart medication scheduling',
        'Push notification reminders',
        'Drug interaction checking',
        'Progress tracking and reporting',
        'Family member notifications',
      ],
    },
    {
      id: 5,
      title: '3D Medical Imaging Viewer',
      category: 'medical',
      description:
        'Web-based 3D viewer for medical imaging data with annotation and measurement tools.',
      longDescription:
        'A sophisticated 3D medical imaging viewer that allows healthcare professionals to examine CT scans, MRIs, and other medical images in three dimensions. Includes tools for measurement, annotation, and collaboration.',
      technologies: ['Three.js', 'React', 'WebGL', 'Python', 'DICOM'],
      image: '🔬',
      demoUrl: 'https://3d-imaging-viewer.netlify.app',
      githubUrl: 'https://github.com/yourusername/3d-imaging-viewer',
      features: [
        '3D rendering of medical images',
        'Measurement and annotation tools',
        'DICOM file support',
        'Collaborative viewing features',
        'Cross-platform compatibility',
      ],
    },
    {
      id: 6,
      title: 'Telemedicine Platform',
      category: 'web',
      description:
        'Complete telemedicine solution for virtual consultations and remote patient care.',
      longDescription:
        'A comprehensive telemedicine platform that enables virtual consultations between patients and healthcare providers. Features include video conferencing, secure messaging, file sharing, and integration with electronic health records.',
      technologies: ['React', 'WebRTC', 'Node.js', 'Socket.io', 'PostgreSQL'],
      image: '👨‍⚕️',
      demoUrl: 'https://telemedicine-platform-demo.netlify.app',
      githubUrl: 'https://github.com/yourusername/telemedicine-platform',
      features: [
        'High-quality video conferencing',
        'Secure messaging system',
        'File sharing and document management',
        'Appointment scheduling',
        'EHR integration capabilities',
      ],
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="projects">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            A collection of my work combining software engineering and
            biomedical engineering expertise
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section">
        <div className="container">
          <div className="filter-container">
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${
                    selectedCategory === category.id ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`project-category ${project.category}`}>
                      {
                        categories.find((cat) => cat.id === project.category)
                          ?.label
                      }
                    </span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="project-features">
                    <h4 className="features-title">Key Features:</h4>
                    <ul className="features-list">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>
                No projects found in this category. Check back soon for new
                additions!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Interested in Collaborating?</h2>
            <p className="cta-description">
              I'm always open to discussing new project opportunities,
              especially in the healthcare technology space.
            </p>
            <a href="/contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
