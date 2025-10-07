import React, { useContext, useEffect } from "react";
import { Mycontext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "../Axios/Axios_file.js";
import "../Styles/Adminlogin.css";
import { Snackbar, Alert, Button } from "@mui/material";
import { sendmail } from "../Functions/Sendmail.js";
import { login } from "../Functions/Login.js";
export const Adminlogin = () => {
  const {
    adminemail,
    setAdminemail,
    adminpassword,
    setAdminpassword,
    email,
    setEmail,
    password,
    setPassword,
    open,
    setOpen,
    severity,
    setSeverity,
    message,
    setMessage
  } = useContext(Mycontext);

  const navigate = useNavigate();


  useEffect(() => {
    const name = localStorage.getItem("username");
    if (name) {
      navigate("/admindisplay");
    }
  }, [navigate]);

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h1 className="admin-title">Admin Login</h1>

        <div className="admin-form">
          <label className="admin-label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(event) => setAdminemail(event.target.value)}
            className="admin-input"
          />

          <label className="admin-label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(event) => setAdminpassword(event.target.value)}
            className="admin-input"
          />

          <button onClick={() => { login(navigate, email, password, adminemail, adminpassword, setOpen, setSeverity, setMessage) }} className="btn login-btn">
            Login
          </button>

          <button onClick={() => { sendmail(email, password) }} className="btn forget-btn">
            Forget Password
          </button>
        </div>
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
  );
};
