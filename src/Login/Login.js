import React, { useContext, useEffect } from 'react'
import '../Login/Login.css'
import { Mycontext } from '../App'
import { loginadmin } from '../Functions/Loginadmin'
import { useNavigate } from 'react-router-dom'
import { restrictadmin } from '../Functions/Restrictadmin'
import { Snackbar, Alert, Button } from "@mui/material";
export const Login = () => {
  const {
    mail,
    setMail,
    password,
    setPassword,
    open,
    setOpen,
    severity,
    setSeverity,
    message,
    setMessage
  } = useContext(Mycontext)

  const navigate = useNavigate()

  useEffect(() => {
    restrictadmin(navigate)
  }, [])
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>
        <div className="login-form">
          <label>
            Email:
            <input type="email" placeholder="Enter your email" onChange={(event) => { setMail(event.target.value) }} />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter your password" onChange={(event) => { setPassword(event.target.value) }} />
          </label>
        </div>
        <button className="login-button" onClick={() => { loginadmin(navigate, mail, password, setOpen, setSeverity, setMessage) }}>Login</button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={severity} onClose={() => setOpen(false)}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}
