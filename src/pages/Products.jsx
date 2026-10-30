import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { products } from '../data/products';

const Products = () => {
    return (
        <div className="products-page">
            <section className="page-header">
                <div className="container">
                    <h1>Our Product Catalog</h1>
                    <p>Premium agricultural commodities sourced for global industries.</p>
                </div>
            </section>

            <section className="products-list section-padding">
                <div className="container">
                    <div className="products-grid">
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                className="product-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="product-image">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '/images/products/maize-gluten-meal.jpg';
                                        }}
                                    />
                                </div>
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p>{product.shortDescription}</p>
                                    <Link to={`/products/${product.id}`} className="btn-text">
                                        View Details <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
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
          margin-bottom: 1.5rem;
          font-size: 1.4rem;
        }

        .product-info p {
          color: var(--text-light);
          margin-bottom: 2rem;
          font-size: 0.95rem;
          min-height: 3rem;
        }

        .btn-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--secondary-color);
        }
      `}</style>
        </div>
    );
};

export default Products;
