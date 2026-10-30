import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Wheat, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-col">
                        <Link to="/" className="footer-logo">
                            <Wheat size={32} />
                            <span>Vijaya Enterprises</span>
                        </Link>
                        <p className="footer-desc">
                            Renowned indenting agent established in 1995, specializing in high-quality agricultural products for global industries.
                        </p>
                        <div className="social-links">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Our Products</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <div className="contact-item">
                            <MapPin size={20} />
                            <span>227, 2nd Floor, UdhyogKshetra Industrial Estate, Mulund (West), Mumbai - 400080</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} />
                            <span>+91-22-3500 8094</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} />
                            <span>contact@vijayaenterprises.org</span>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="footer-col">
                        <h3>Our Location</h3>
                        <div className="map-container">
                            <iframe
                                src="https://maps.google.com/maps?q=227,+2nd+Floor,+VIJAYA+ENTERPRISES,+Udyog+Kshetra+Ind.+Estate,+Mulund+West,+Mumbai,+Maharashtra+400080&hl=en&z=17&output=embed"
                                width="100%"
                                height="150"
                                style={{ border: 0, borderRadius: '10px' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Vijaya Enterprises. All Rights Reserved. Designed for Excellence.</p>
                </div>
            </div>

            <style jsx>{`
        .footer {
          background: var(--primary-color);
          color: var(--white);
          padding: 5rem 0 1rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--white);
        }

        .footer-desc {
          color: #a9bcad;
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .social-links a:hover {
          background: var(--secondary-color);
          transform: translateY(-3px);
        }

        .footer-col h3 {
          color: var(--white);
          font-size: 1.2rem;
          margin-bottom: 2rem;
          position: relative;
        }

        .footer-col h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50px;
          height: 2px;
          background: var(--secondary-color);
        }

        .footer-col ul li {
          margin-bottom: 1rem;
        }

        .footer-col ul a {
          color: #a9bcad;
        }

        .footer-col ul a:hover {
          color: var(--secondary-color);
          padding-left: 5px;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: #a9bcad;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 2rem;
          text-align: center;
          color: #a9bcad;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
