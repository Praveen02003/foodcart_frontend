import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Not.css'

export const Not = () => {
  const navigate = useNavigate()

  return (
    <div className="not-container">
      <h1 className="not-title">404</h1>
      <p className="not-text">The URL you are looking for does not exist.</p>
      <button className="btn-home" onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  )
}
