import React from 'react'
import '../Help/Help.css'
export const Help = () => {
    return (
        <div className="admin-help">
            <h1 className="help-title">Help & Support</h1>

            {/* Overview Section */}
            <section className="help-section">
                <h2>📘 Overview</h2>
                <p>
                    Welcome to the <b>Tastenow Admin Help Center! </b>
                    Here you can find solutions, FAQs, and support info to help you manage your food order app with ease.
                </p>
            </section>

            {/* FAQ Section */}
            <section className="help-section">
                <h2>❓ Frequently Asked Questions</h2>
                <div className="faq-card">
                    <h3>How do I add a new food item?</h3>
                    <p>
                        Go to <b>Menu → Add Item</b>, fill in the details, upload an image, and click <b>Save</b>.
                    </p>
                </div>

                <div className="faq-card">
                    <h3>How can I view or edit customer orders?</h3>
                    <p>
                        Open the <b>Orders</b> tab in the sidebar to view all orders and update their status.
                    </p>
                </div>

                <div className="faq-card">
                    <h3>How do I update prices or offers?</h3>
                    <p>
                        Navigate to <b>Menu → Edit Item</b> and adjust the price or offer percentage.
                    </p>
                </div>

                <div className="faq-card">
                    <h3>How do I check payment details?</h3>
                    <p>
                        Go to the <b>Payments</b> section to view completed and pending transactions.
                    </p>
                </div>
            </section>

            {/* Troubleshooting Section */}
            <section className="help-section">
                <h2>⚙️ Troubleshooting</h2>
                <ul className="troubleshooting-list">
                    <li>🔁 Page not loading? Try refreshing or clearing browser cache.</li>
                    <li>⚠️ Data not updating? Check your backend server connection.</li>
                    <li>🔒 Token expired? Log out and log in again to refresh your session.</li>
                    <li>📶 App slow? Check your internet connection or restart the server.</li>
                </ul>
            </section>

            {/* Contact Section */}
            <section className="help-section contact-section">
                <h2>📞 Contact Support</h2>
                <p>If you still need help, reach out to our support team:</p>
                <div className="contact-card">
                    <p>📧 Email: <a href="mailto:support@foodapp.com">support@tastenow.com</a></p>
                    <p>📱 Phone: +91 98765 43210</p>
                </div>
            </section>
        </div>
    )
}
