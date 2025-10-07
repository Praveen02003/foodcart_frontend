import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../App'
import axios from '../Axios/Axios_file.js'
import '../Styles/Editfood.css'
import { updatedata } from '../Functions/Updatefood.js'
import { handleFile1 } from '../Functions/Handlefile1.js'
import { Snackbar, Alert, Button } from "@mui/material";
export const Editfood = () => {
    const {
        editfoodname,
        setEditfoodname,
        editfoodprice,
        setEditfoodprice,
        editfoodid,
        editfoodimage,
        setEditfoodimage,
        imagepreview,
        setImagepreview,
        open,
        setOpen,
        severity,
        setSeverity,
        message,
        setMessage
    } = useContext(Mycontext)

    const navigate = useNavigate()


    useEffect(() => {
        const name = localStorage.getItem("username");
        if (!name) {
            navigate("/");
        }
    }, []);


    return (
        <div className="editfood-container">
            <div className="editfood-card">
                <h1 className="editfood-title">Edit Food</h1>

                <div className="editfood-form">
                    <label>Food Name</label>
                    <input
                        type="text"
                        value={editfoodname}
                        placeholder="Enter food name"
                        onChange={(e) => setEditfoodname(e.target.value)}
                    />

                    <label>Food Price</label>
                    <input
                        type="text"
                        value={editfoodprice}
                        placeholder="Enter food price"
                        onChange={(e) => setEditfoodprice(e.target.value)}
                    />

                    <label>Food Image</label>
                    <input type="file" onChange={(event) => { handleFile1(event, setEditfoodimage) }} />

                    <img src={editfoodimage} alt="iamge" className="food-preview" />


                    <div className="editfood-buttons">
                        <button className="btn-secondary" onClick={() => navigate('/admindisplay')}>
                            Go To Display
                        </button>
                        <button className="btn-primary" onClick={() => { updatedata(navigate, editfoodid, editfoodname, editfoodprice, editfoodimage, setEditfoodimage, setOpen, setSeverity, setMessage) }}>
                            Update
                        </button>
                    </div>
                </div>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={300}
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
