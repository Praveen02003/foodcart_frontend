import React from 'react'
import '../Policies/Policies.css'
export const Policies = () => {
  return (
    <div className="admin-policies">
      <h1 className="page-title">Admin Policies & Guidelines</h1>
      <p className="page-subtitle">
        Review and follow these policies to ensure smooth and secure platform management.
      </p>

      <div className="policies-grid">

        <div className="policy-card">
          <div className="policy-icon">🔒</div>
          <h2>Privacy & Data Protection</h2>
          <p>
            Admins must handle all customer data securely. Never share user information
            externally. Only authorized admins can access customer records.
          </p>
        </div>

        <div className="policy-card">
          <div className="policy-icon">💳</div>
          <h2>Refund & Cancellations</h2>
          <p>
            Refunds are processed only for valid cancellation requests approved by admin.
            Always verify payment details before confirming a refund.
          </p>
        </div>

        <div className="policy-card">
          <div className="policy-icon">🚚</div>
          <h2>Delivery Policy</h2>
          <p>
            Ensure that listed delivery partners meet platform quality and timing standards.
            Delays or issues should be reported immediately to the support team.
          </p>
        </div>

        <div className="policy-card">
          <div className="policy-icon">🛠️</div>
          <h2>Admin Access Control</h2>
          <p>
            Admin credentials are confidential. Do not share login details.
            Suspicious activity will result in temporary account suspension.
          </p>
        </div>

        <div className="policy-card">
          <div className="policy-icon">📦</div>
          <h2>Menu & Inventory Management</h2>
          <p>
            Always verify pricing, availability, and offers before publishing.
            Maintain accurate stock details to avoid customer complaints.
          </p>
        </div>

        <div className="policy-card">
          <div className="policy-icon">📢</div>
          <h2>Policy Updates</h2>
          <p>
            Policies are reviewed periodically. Admins will be notified through dashboard alerts
            when updates are made to guidelines or platform terms.
          </p>
        </div>

      </div>
    </div>
  )
} 
