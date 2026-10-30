import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Globe, Award, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-subtitle">Leading Indenting Agent Since 1995</span>
            <h1>Sourcing the Best <br /><span>Agricultural Products</span> for Global Industry</h1>
            <p>We are specialized in supplying Yellow Corn and essential grains for the corn wet milling and animal feed industries in India and beyond.</p>
            <div className="hero-btns">
              <Link to="/products" className="btn btn-primary">Explore Products</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section-padding">
        <div className="container">
          <div className="section-title">
            <span>Our Strengths</span>
            <h2>Why Partners Choose Us</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-box"><ShieldCheck size={32} /></div>
              <h3>Guaranteed Quality</h3>
              <p>We source only from top-tier farms ensuring compliance with stringent quality norms.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><Globe size={32} /></div>
              <h3>Global Sourcing</h3>
              <p>Our network spans across boundaries to bring the best produce to your doorstep.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><Award size={32} /></div>
              <h3>25+ Years Experience</h3>
              <p>Founded in 1995, we bring decades of expertise and reliability to the table.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><Truck size={32} /></div>
              <h3>Efficient Logistics</h3>
              <p>Timely delivery and transparent transactions are the cornerstones of our service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured section-padding">
        <div className="container">
          <div className="section-header">
            <div className="header-text">
              <span>Product Selection</span>
              <h2>Featured Offerings</h2>
            </div>
            <Link to="/products" className="view-all">View All Products <ArrowRight size={20} /></Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                whileHover={{ y: -10 }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                  <Link to={`/products/${product.id}`} className="btn-text">Learn More <ArrowRight size={16} /></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to source premium grains?</h2>
            <p>Connect with Mr. Tejas Thakkar and our expert team for inquiries and partnerships.</p>
            <Link to="/contact" className="btn btn-secondary">Get In Touch Now</Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          height: 90vh;
          background: url('/images/hero.png') center/cover no-repeat;
          position: relative;
          display: flex;
          align-items: center;
          color: var(--white);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(27, 67, 50, 0.8), rgba(27, 67, 50, 0.4));
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
        }

        .hero-subtitle {
          display: block;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }

        .hero h1 {
          font-size: 4rem;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 2rem;
        }

        .hero h1 span {
          color: var(--secondary-color);
        }

        .hero p {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          color: rgba(255,255,255,0.9);
        }

        .hero-btns {
          display: flex;
          gap: 1.5rem;
        }

        .section-title {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title span, .section-header span {
          display: block;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--secondary-color);
          margin-bottom: 0.5rem;
        }

        .section-title h2 {
          font-size: 2.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
        }

        .feature-card {
          background: var(--white);
          padding: 3rem 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .feature-card:hover {
          background: var(--primary-color);
          color: var(--white);
        }

        .feature-card:hover h3 {
          color: var(--white);
        }

        .icon-box {
          width: 70px;
          height: 70px;
          background: rgba(212, 163, 115, 0.1);
          color: var(--secondary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: var(--transition);
        }

        .feature-card:hover .icon-box {
          background: rgba(255,255,255,0.1);
          color: var(--white);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
        }

        .view-all {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--primary-color);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .product-card {
          background: var(--white);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .product-image {
          height: 250px;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-info {
          padding: 2rem;
        }

        .product-info h3 {
          margin-bottom: 1rem;
          font-size: 1.4rem;
        }

        .product-info p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .btn-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--secondary-color);
        }

        .cta-section {
          background: linear-gradient(rgba(27, 67, 50, 0.9), rgba(27, 67, 50, 0.9)), url('/images/maize.png') center/cover fixed;
          text-align: center;
          color: var(--white);
        }

        .cta-section h2 {
          color: var(--white);
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .cta-section p {
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 2.5rem; }
          .section-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
