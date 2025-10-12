import React from 'react'
import '../Notfound/Notfound.css'
export const Notfound = () => {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          It seems you've wandered off the menu!
          The page you're looking for isn't available or might have been removed.
        </p>
        <button>Back to Dashboard</button>
      </div>
    </div>
  )
}
