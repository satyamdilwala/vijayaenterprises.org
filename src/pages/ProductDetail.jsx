import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, FileText, Send, X, AlertCircle, Loader2 } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === id);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');
    const [statusMessage, setStatusMessage] = useState('');

    if (!product) {
        return (
            <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <Link to="/products" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Products</Link>
            </div>
        );
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setStatusMessage('Sending inquiry...');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    productName: product.name,
                    subject: `Product Inquiry: ${product.name}`
                })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('success');
                setStatusMessage('Thank you! Your inquiry has been sent to contact@vijayaenterprises.org.');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => {
                    setIsModalOpen(false);
                    setStatus('idle');
                }, 3000);
            } else {
                setStatus('error');
                setStatusMessage(result.message || 'Failed to send inquiry.');
            }
        } catch (err) {
            console.error('Inquiry Error:', err);
            setStatus('error');
            setStatusMessage('Connection error. Please try again.');
        }
    };

    return (
        <div className="product-detail-page">
            <section className="page-header">
                <div className="container">
                    <button onClick={() => navigate(-1)} className="back-btn">
                        <ArrowLeft size={20} /> Back
                    </button>
                    <h1>{product.name}</h1>
                </div>
            </section>

            <section className="detail-content section-padding">
                <div className="container">
                    <div className="detail-grid">
                        <motion.div
                            className="detail-image"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/images/products/maize-gluten-meal.jpg';
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="detail-wrapper"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="description-box">
                                <h2>Product Overview</h2>
                                <p>{product.description}</p>
                            </div>

                            {product.specifications && (
                                <div className="specs-box">
                                    <h3><FileText size={20} /> Technical Specifications</h3>
                                    <div className="specs-grid">
                                        {product.specifications.map((spec, index) => (
                                            <div key={index} className="spec-item">
                                                <span className="label">{spec.label}</span>
                                                <span className="value">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="cta-box">
                                <h3>Interested in {product.name}?</h3>
                                <p>Contact our sales team for custom pricing, minimum order quantities, and bulk supply.</p>
                                <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
                                    Inquire Now <Send size={18} style={{ marginLeft: '10px' }} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Inquiry Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div 
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div 
                            className="modal-content"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <h2>Product Inquiry: {product.name}</h2>
                                <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                                    <X size={20} />
                                </button>
                            </div>

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

                            <form onSubmit={handleSubmit} className="modal-form">
                                <div className="form-group">
                                    <label>Full Name *</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        placeholder="Your Name" 
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
                                    <label>Message / Requirements *</label>
                                    <textarea 
                                        rows="4" 
                                        name="message" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        placeholder={`Please specify quantity, delivery location, or questions regarding ${product.name}...`} 
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
                                        <>Submit Inquiry <Send size={18} /></>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        .page-header {
          padding: 8rem 0 4rem;
          background: var(--primary-color);
          color: var(--white);
        }

        .back-btn {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          transition: var(--transition);
        }

        .back-btn:hover {
          color: var(--white);
        }

        .page-header h1 {
          color: var(--white);
          font-size: 3rem;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
        }

        .detail-image {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow);
          height: 500px;
        }

        .detail-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .description-box h2 {
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .description-box h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background: var(--secondary-color);
        }

        .description-box p {
          color: var(--text-light);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .specs-box {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 15px;
          margin-bottom: 2.5rem;
        }

        .specs-box h3 {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
        }

        .spec-item .label {
          font-size: 0.85rem;
          text-transform: uppercase;
          color: var(--text-light);
          font-weight: 600;
        }

        .spec-item .value {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .cta-box {
          border: 2px dashed #ddd;
          padding: 2.5rem;
          border-radius: 15px;
          text-align: center;
        }

        .cta-box h3 {
          margin-bottom: 0.5rem;
        }

        .cta-box p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }

        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-content {
          background: #ffffff;
          width: 100%;
          max-width: 550px;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 25px 50px rgba(0,0,0,0.25);
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .modal-header h2 {
          font-size: 1.4rem;
          color: var(--primary-color);
        }

        .close-btn {
          background: #f1f5f9;
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: #e2e8f0;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--primary-color);
        }

        .form-group input, .form-group textarea {
          padding: 0.8rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-family: inherit;
          font-size: 0.95rem;
        }

        .alert {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .alert-success { background: #e6f4ea; color: #137333; }
        .alert-error { background: #fce8e6; color: #c5221f; }

        .submit-btn {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 992px) {
          .detail-grid { grid-template-columns: 1fr; }
          .detail-image { height: 350px; }
        }
      `}</style>
        </div>
    );
};

export default ProductDetail;
