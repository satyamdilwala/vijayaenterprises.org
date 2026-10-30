import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, User, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { ENQUIRY_API_URL } from '../config';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setStatusMessage('Sending your enquiry...');

        try {
            const response = await fetch(ENQUIRY_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('success');
                setStatusMessage('Thank you! Your enquiry has been sent successfully to info@vijayaenterprises.org.');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setStatusMessage(result.message || 'Failed to send enquiry. Please try again or contact us directly.');
            }
        } catch (err) {
            console.error('Submit Error:', err);
            setStatus('error');
            setStatusMessage('Connection error. Please check your internet and try again.');
        }
    };

    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We are here to help and answer any questions you might have.</p>
                </div>
            </section>

            <section className="contact-section section-padding">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Get in Touch</h2>
                            <p>Our team is available to assist you with your requirements and inquiries.</p>

                            <div className="info-cards">
                                <div className="info-card">
                                    <User className="icon" />
                                    <div>
                                        <h3>Contact Person</h3>
                                        <p>Mr. Tejas Thakkar</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <MapPin className="icon" />
                                    <div>
                                        <h3>Our Office</h3>
                                        <p>227, 2nd Floor, UdhyogKshetra Industrial Estate, Mulund - Goregoan Link Road, Mulund (West), Mumbai 400 080, India.</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <Phone className="icon" />
                                    <div>
                                        <h3>Phone / WhatsApp</h3>
                                        <p>+91 022 2562 3903 / 3905</p>
                                        <p>+91 022 2590 4763</p>
                                        <p>Mobile: +91 98210 11480</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <Mail className="icon" />
                                    <div>
                                        <h3>Email</h3>
                                        <p>info@vijayaenterprises.org</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <Clock className="icon" />
                                    <div>
                                        <h3>Work Hours</h3>
                                        <p>Monday - Saturday: 10:00 AM - 6:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-container"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {status === 'success' && (
                                <div className="alert alert-success">
                                    <CheckCircle2 size={24} />
                                    <span>{statusMessage}</span>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="alert alert-error">
                                    <AlertCircle size={24} />
                                    <span>{statusMessage}</span>
                                </div>
                            )}

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name *</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        placeholder="Your Full Name" 
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email Address *</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        placeholder="email@example.com" 
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        placeholder="+91 98765 43210" 
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        value={formData.subject} 
                                        onChange={handleChange} 
                                        placeholder="Product Inquiry / Partnership" 
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Message *</label>
                                    <textarea 
                                        rows="5" 
                                        name="message" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        placeholder="Write details of your requirement..." 
                                        required
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="btn btn-primary submit-btn" 
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? (
                                        <>Sending... <Loader2 size={18} className="spin" /></>
                                    ) : (
                                        <>Send Message <Send size={18} /></>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="map-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4239857973053!2d72.93796537599023!3d19.17665224881792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f9e665fd21%3A0xc6cb557e4e8992a7!2sUdhyog%20Kshetra%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1700130000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Full Map"
                ></iframe>
            </section>

            <style jsx>{`
        .page-header {
          padding: 8rem 0 4rem;
          background: var(--primary-color);
          color: var(--white);
          text-align: center;
        }

        .page-header h1 {
          color: var(--white);
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
        }

        .contact-info h2 {
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }

        .contact-info p {
          color: var(--text-light);
          margin-bottom: 3rem;
        }

        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-card {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .info-card .icon {
          width: 50px;
          height: 50px;
          background: var(--bg-light);
          color: var(--secondary-color);
          padding: 12px;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .info-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }

        .info-card p {
          margin-bottom: 0;
          line-height: 1.4;
          font-size: 0.95rem;
        }

        .contact-form-container {
          background: var(--white);
          padding: 3.5rem;
          border-radius: 30px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--primary-color);
        }

        .form-group input, .form-group textarea {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--secondary-color);
          box-shadow: 0 0 0 4px rgba(212, 163, 115, 0.1);
        }

        .alert {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.2rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .alert-success {
          background-color: #e6f4ea;
          color: #137333;
          border: 1px solid #ceead6;
        }

        .alert-error {
          background-color: #fce8e6;
          color: #c5221f;
          border: 1px solid #fad2cf;
        }

        .submit-btn {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          padding: 1rem;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .map-full {
          margin-top: 5rem;
          line-height: 0;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; gap: 4rem; }
          .contact-form-container { padding: 2rem; }
        }
      `}</style>
        </div>
    );
};

export default Contact;
