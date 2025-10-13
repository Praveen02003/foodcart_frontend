import React from 'react'
import '../Footer/Footer.css'
import { useNavigate } from 'react-router-dom'
export const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="admin-footer">
      <h3>Tastenow Admin Panel</h3>
      <p>Manage your orders, menu, and customers efficiently.</p>
      <p>© 2025 Tastenow. All rights reserved.</p>

      <div className="footer-links">
        <span onClick={() => { navigate('/about') }}>About</span>
        <span onClick={() => { navigate('/help') }}>Help</span>
        <span onClick={() => { navigate('/contact') }}>Contact</span>
        <span onClick={() => { navigate('/policies') }}>Policies</span>
      </div>
    </footer>

  )
}
