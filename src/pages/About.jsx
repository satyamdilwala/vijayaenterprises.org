import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Our Legacy</h1>
          <p>Since 1995, Vijaya Enterprises has been a trusted partner in the agricultural commodities market.</p>
        </div>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>The Journey of Quality</h2>
              <p>
                Founded by Mr. Tejas Thakkar, Vijaya Enterprises has carved a niche for itself as a renowned indenting agent for yellow corn, oilseed meals, and various other agricultural products. Our deep-rooted commitment to quality and transparency has made us a leading choice for the corn wet milling and animal feed industries.
              </p>
              <p>
                We believe that the foundation of a healthy industry lies in the quality of its raw materials. That's why we meticulously source our products from non-polluted, healthy suburban areas where nature's goodness is preserved.
              </p>

              <h3>Our Mission</h3>
              <p>
                To provide our global clientele with the highest quality agricultural products while maintaining the highest standards of integrity and customer service. We aim to be the most reliable link between the bounty of nature and the demands of modern industry.
              </p>
            </motion.div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="stat-card">
                <span className="number">25+</span>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-card">
                <span className="number">50+</span>
                <p>Product Varieties</p>
              </div>
              <div className="stat-card">
                <span className="number">500+</span>
                <p>Satisfied Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="values-section section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Transparent transactions and honest dealings are non-negotiable for us.</p>
            </div>
            <div className="value-card">
              <h3>Quality</h3>
              <p>Stringent quality norms are applied to every single batch we source.</p>
            </div>
            <div className="value-card">
              <h3>Relationships</h3>
              <p>We build long-term partnerships based on trust and mutual growth.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
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

        .about-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text h2 {
          margin-bottom: 1.5rem;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          color: var(--text-light);
        }

        .about-text h3 {
          margin: 2rem 0 1rem;
        }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .stat-card {
          background: var(--white);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
          text-align: center;
          border-left: 5px solid var(--secondary-color);
        }

        .stat-card .number {
          display: block;
          font-size: 3rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .values-section {
          background: #f1f3f1;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .value-card {
          background: var(--white);
          padding: 3rem 2rem;
          border-radius: 20px;
          text-align: center;
        }

        .value-card h3 {
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default About;
