import React from 'react';
import { motion } from 'framer-motion';
import { Ship, ClipboardCheck, Wheat, Globe, TrendingUp, Users } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Wheat size={40} />,
            title: "Global Grain Sourcing",
            description: "We procure premium quality grains including Yellow Corn, Millet, and Sorghum from the best farms across India."
        },
        {
            icon: <ClipboardCheck size={40} />,
            title: "Quality Assurance",
            description: "Rigorous quality checks and lab testing to ensure every shipment meets international standards."
        },
        {
            icon: <Ship size={40} />,
            title: "Export & Logistics",
            description: "End-to-end logistics solutions ensuring timely delivery via sea and road transport to global destinations."
        },
        {
            icon: <Globe size={40} />,
            title: "Market Analysis",
            description: "Providing insights on global grain prices and trends to help our partners make informed buying decisions."
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Supply Chain Optimization",
            description: "Streamlined supply chains to reduce costs and improve efficiency for bulk orders."
        },
        {
            icon: <Users size={40} />,
            title: "Vendor Management",
            description: "Building strong relationships with certified farmers and suppliers to guarantee consistent supply."
        }
    ];

    return (
        <div className="services-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Comprehensive Agricultural Trading Solutions</p>
                </div>
            </div>

            <section className="services-section section-padding">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                className="service-card"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .page-header {
                    background: linear-gradient(rgba(27, 67, 50, 0.9), rgba(27, 67, 50, 0.8)), url('/images/hero.png') center/cover;
                    padding: 8rem 0 4rem;
                    text-align: center;
                    color: var(--white);
                }

                .page-header h1 {
                    color: var(--white);
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 3rem;
                }

                .service-card {
                    background: var(--white);
                    padding: 3rem 2rem;
                    border-radius: 15px;
                    box-shadow: var(--shadow);
                    text-align: center;
                    transition: var(--transition);
                    border: 1px solid rgba(0,0,0,0.05);
                }

                .service-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--secondary-color);
                }

                .icon-wrapper {
                    width: 80px;
                    height: 80px;
                    background: #fdf5ef;
                    color: var(--secondary-color);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                    transition: var(--transition);
                }

                .service-card:hover .icon-wrapper {
                    background: var(--primary-color);
                    color: var(--white);
                }

                .service-card h3 {
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                }

                .service-card p {
                    color: var(--text-light);
                }
            `}</style>
        </div>
    );
};

export default Services;
