import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppChat = () => {
    // Replace with the actual phone number
    const phoneNumber = "919821011480";
    const message = "Hello, I am interested in your products.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="tooltip">Chat with us</span>

            <style>{`
                .whatsapp-float {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background-color: #25D366;
                    color: white;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    z-index: 1000;
                    transition: all 0.3s ease;
                }

                .whatsapp-float:hover {
                    bottom: 35px; /* Slight lift effect */
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
                    transform: scale(1.1);
                }

                .tooltip {
                    position: absolute;
                    right: 70px;
                    background-color: #333;
                    color: #fff;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-size: 12px;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease;
                    white-space: nowrap;
                }

                .whatsapp-float:hover .tooltip {
                    opacity: 1;
                    visibility: visible;
                }
            `}</style>
        </a>
    );
};

export default WhatsAppChat;
