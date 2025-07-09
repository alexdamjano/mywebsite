import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'alex@example.com',
      link: 'mailto:alex@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Toronto, Ontario, Canada',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/alex',
      link: 'https://linkedin.com/in/alex'
    }
  ];

  const availability = [
    {
      day: 'Monday - Friday',
      time: '9:00 AM - 6:00 PM EST'
    },
    {
      day: 'Saturday',
      time: '10:00 AM - 2:00 PM EST'
    },
    {
      day: 'Sunday',
      time: 'Available for urgent inquiries'
    }
  ];

  return (
    <div className="contact">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="section-title">Send Me a Message</h2>
              <p className="section-subtitle">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you!
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="project-inquiry">Project Inquiry</option>
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows={6}
                    required
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="form-success">
                    <p>Thank you for your message! I'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-error">
                    <p>Sorry, there was an error sending your message. Please try again.</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="section-title">Contact Information</h2>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3 className="contact-title">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="contact-value">
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="availability-section">
                <h3 className="availability-title">Availability</h3>
                <div className="availability-list">
                  {availability.map((item, index) => (
                    <div key={index} className="availability-item">
                      <span className="availability-day">{item.day}</span>
                      <span className="availability-time">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="response-time">
                <h3 className="response-title">Response Time</h3>
                <p className="response-description">
                  I typically respond to messages within 24 hours during business days. 
                  For urgent inquiries, please feel free to call or text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start a Project?</h2>
            <p className="cta-description">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'm here to help bring your ideas to life.
            </p>
            <div className="cta-actions">
              <a href="/projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="/experience" className="btn btn-outline">
                Learn About My Experience
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 