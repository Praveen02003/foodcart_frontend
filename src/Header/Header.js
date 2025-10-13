import React from 'react'
import '../Header/Header.css'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Functions/Logout'
export const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="admin-header">
      <div className="header-left" onClick={() => navigate("/home")}>
        <h1 className="logo">Tastenow <span>Admin Panel</span></h1>
      </div>

      {localStorage.getItem("admintoken") ? (
        <nav className="header-center">
          <p onClick={() => navigate("/home")}>Dashboard</p>
          <p onClick={() => navigate("/orders")}>Orders</p>
          <p onClick={() => navigate("/showitems")}>Menu</p>
          <p onClick={() => navigate("/additems")}>Add Menu Items</p>
        </nav>
      ) : ""}

      <div className="header-right">
        {localStorage.getItem("admintoken") ? (
          <button className="logout-btn" onClick={() => logout(navigate)}>
            Logout
          </button>
        ) : (
          <button className="login-btn" onClick={() => navigate("/")}>
            Login
          </button>
        )}
      </div>
    </header>

  )
}
