import React, { useEffect } from 'react'
import '../Contact/Contact.css'
export const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <hr className="contact-divider" />
            <p className="intro">
                We'd love to hear from you! Whether you have a question about your order,
                need support, or want to partner with us — our team is here to help.
            </p>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>📍 123 Foodie Street, India</p>
                    <p>📞 +91 98765 43210</p>
                    <p>✉️ support@tastenow.com</p>
                    <p>🕒 Mon - Sun | 9:00 AM - 11:00 PM</p>

                    <div className="social-links">
                        <h3>Follow Us</h3>
                        <p>Facebook | Instagram | Twitter | LinkedIn</p>
                    </div>
                </div>

                <div className="contact-form" >
                    <h2>Send a Message</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                    ></textarea>
                    <button type="submit">Send Message</button>
                </div>
            </div>

            <div className="map-section">
                <iframe
                    title="FoodieApp Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.522833!2d80.279!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52640b8b!2sChennai!5e0!3m2!1sen!2sin!4v1695999999999"
                    width="100%"
                    height="300"
                    style={{ border: "none", borderRadius: "12px" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <p className="footer-note">
                ❤️ Thank you for choosing <strong>Tastenow</strong> — delivering happiness, one meal at a time.
            </p>
        </div>
    )
}
