import React, { useContext, useEffect, useState } from 'react';
import { Mycontext } from '../App';
import axios from '../Axios/Axios_file.js';
import { useNavigate } from 'react-router-dom';
import '../Styles/Admindisplay.css';
import { deletefood } from '../Functions/Deletefood.js';
import { editfood } from '../Functions/Editfood.js';
import { logout } from '../Functions/Logout.js';
import { Snackbar, Alert, Button } from "@mui/material";
export const Admindisplay = () => {

  const {
    fooddata,
    setFooddata,
    setEditfoodname,
    setEditfoodprice,
    setEditfoodid,
    setEditfoodimage,
    count,
    setCount,
    open,
    setOpen,
    severity,
    setSeverity,
    message,
    setMessage
  } = useContext(Mycontext);

  const navigate = useNavigate();

  const fetch = async () => {
    try {
      const response = await axios.get('/display');
      setFooddata(response.data.message);
    } catch {
      alert('Unable To Find Food');
    }
  };

  useEffect(() => {
    const name = localStorage.getItem("username");
    if (!name) {
      navigate("/");
    }
    fetch();
  }, [count]);

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions">
          <button className="btn btn-secondary" onClick={() => { logout(navigate) }}>Logout</button>
          <button className="btn btn-primary" onClick={() => navigate('/add')}>Add Food</button>
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Food Image</th>
            <th>Food Name</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {fooddata.map((food, index) => (
            <tr key={index}>
              <td>
                <img
                  src={food.image}
                  alt={food.foodname}
                  className="food-image"
                />
              </td>
              <td>{food.foodname}</td>
              <td>{food.foodprice} ₹</td>
              <td>
                <button
                  className="btn btn-edit"
                  onClick={() => editfood(food, setEditfoodid, setEditfoodname, setEditfoodprice, setEditfoodimage, navigate)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => deletefood(food._id, count, setCount, setOpen, setSeverity, setMessage)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
