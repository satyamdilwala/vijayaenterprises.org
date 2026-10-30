import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Award, Microscope, ClipboardList, Thermometer } from 'lucide-react';

const Quality = () => {
    return (
        <div className="quality-page">
            <section className="page-header">
                <div className="container">
                    <h1>Quality Assurance</h1>
                    <p>Uncompromising commitment to international standards and safety.</p>
                </div>
            </section>

            <section className="quality-intro section-padding">
                <div className="container">
                    <motion.div
                        className="intro-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Our Quality Promise</h2>
                        <p>At Vijaya Enterprises, quality is not just a checkbox; it is the cornerstone of our existence. We understand that in the agricultural supply chain, consistency and purity are paramount for our clients in the wet milling and feed industries.</p>
                    </motion.div>
                </div>
            </section>

            <section className="process-section section-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Our 4-Step Quality Process</h2>
                    </div>
                    <div className="process-grid">
                        <motion.div className="process-card" whileHover={{ scale: 1.05 }}>
                            <div className="step-number">01</div>
                            <h3>Source Selection</h3>
                            <p>We source only from certified farms in non-polluted suburban areas, ensuring the raw crop is healthy and free from harmful chemicals.</p>
                        </motion.div>
                        <motion.div className="process-card" whileHover={{ scale: 1.05 }}>
                            <div className="step-number">02</div>
                            <h3>Lab Testing</h3>
                            <p>Every batch undergoes rigorous testing for moisture content, purity levels, and foreign matter in government-approved laboratories.</p>
                        </motion.div>
                        <motion.div className="process-card" whileHover={{ scale: 1.05 }}>
                            <div className="step-number">03</div>
                            <h3>Processing & Cleaning</h3>
                            <p>State-of-the-art cleaning and sortex machinery remove impurities to meet specific client parameters (e.g., max 14% moisture).</p>
                        </motion.div>
                        <motion.div className="process-card" whileHover={{ scale: 1.05 }}>
                            <div className="step-number">04</div>
                            <h3>Pre-Shipment Inspection</h3>
                            <p>A final inspection is conducted before loading to guarantee the cargo matches the exact specifications promised.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="standards-section section-padding">
                <div className="container">
                    <div className="standards-content">
                        <h2>Parameters We Control</h2>
                        <ul className="standards-list">
                            <li><CheckCircle size={20} className="check-icon" /> <span>Moisture Content (Max 14%)</span></li>
                            <li><CheckCircle size={20} className="check-icon" /> <span>Foreign Matter (Max 1-2%)</span></li>
                            <li><CheckCircle size={20} className="check-icon" /> <span>Broken Grains (Max 2%)</span></li>
                            <li><CheckCircle size={20} className="check-icon" /> <span>Protein Content</span></li>
                            <li><CheckCircle size={20} className="check-icon" /> <span>Aflatoxin Levels (Strictly Controlled)</span></li>
                            <li><CheckCircle size={20} className="check-icon" /> <span>Admixture</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <style>{`
                .page-header {
                    background: linear-gradient(rgba(27, 67, 50, 0.9), rgba(27, 67, 50, 0.8)), url('/images/products/milling-wheat.jpg') center/cover;
                    padding: 8rem 0 4rem;
                    text-align: center;
                    color: var(--white);
                }

                .page-header h1 {
                    color: var(--white);
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }

                .quality-intro {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .process-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-top: 3rem;
                }

                .process-card {
                    background: var(--white);
                    padding: 2.5rem;
                    border-radius: 15px;
                    box-shadow: var(--shadow);
                    position: relative;
                    overflow: hidden;
                    border-top: 5px solid var(--secondary-color);
                }

                .step-number {
                    font-size: 3rem;
                    font-weight: 700;
                    color: rgba(212, 163, 115, 0.2);
                    position: absolute;
                    top: 10px;
                    right: 20px;
                }

                .process-card h3 {
                    margin-bottom: 1rem;
                    color: var(--primary-color);
                }

                .process-card p {
                    color: var(--text-light);
                    font-size: 0.95rem;
                }

                .standards-section {
                    background-color: var(--bg-light);
                }

                .standards-content {
                    background: var(--white);
                    padding: 3rem;
                    border-radius: 20px;
                    box-shadow: var(--shadow);
                    max-width: 800px;
                    margin: 0 auto;
                }

                .standards-content h2 {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .standards-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .standards-list li {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 1.1rem;
                    font-weight: 500;
                    color: var(--text-dark);
                }

                .check-icon {
                    color: var(--accent-color);
                    flex-shrink: 0;
                }

                @media (max-width: 768px) {
                    .standards-list {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Quality;
