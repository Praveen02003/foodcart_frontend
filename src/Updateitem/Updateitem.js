import React, { useContext } from 'react'
import { Mycontext } from '../App'
import { handleaddimage } from '../Functions/Handleaddimage'
import '../Updateitem/Updateitem.css'
import { updateitem } from '../Functions/Updateitem'
import { Snackbar, Alert, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'
export const Updateitem = () => {
    const {
        foodname,
        setFoodname,
        foodprice,
        setFoodprice,
        fooddefaultprice,
        setFooddefaultprice,
        foodoffer,
        setFoodoffer,
        fooddiscription,
        setFooddiscription,
        foodtype,
        setFoodtype,
        foodimage,
        setFoodimage,
        id,
        setId,
        open,
        setOpen,
        severity,
        setSeverity,
        message,
        setMessage

    } = useContext(Mycontext)

    const navigate=useNavigate()

    return (
        <div className="update-item-page">
            <div className="update-item-card">
                <h1>Update Menu Item</h1>

                <div className="input-group">
                    <label>Item Name</label>
                    <input
                        type="text"
                        placeholder="Enter item name"
                        value={foodname}
                        onChange={(event) => { setFoodname(event.target.value) }}
                    />
                </div>

                <div className="input-group">
                    <label>Type</label>
                    <select value={foodtype} onChange={(event) => { setFoodtype(event.target.value) }}>
                        <option value="">Select Type</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Price (₹)</label>
                    <input
                        type="number"
                        placeholder="Enter price"
                        value={foodprice}
                        onChange={(event) => { setFoodprice(event.target.value) }}
                    />
                </div>

                <div className="input-group">
                    <label>Default Price (₹)</label>
                    <input
                        type="number"
                        value={fooddefaultprice}
                        placeholder="Enter default price"
                        disabled
                    />
                </div>

                <div className="input-group">
                    <label>Offer (%)</label>
                    <input
                        type="number"
                        placeholder="Enter offer"
                        value={foodoffer}
                        onChange={(event) => { setFoodoffer(event.target.value) }}
                    />
                </div>

                <div className="input-group">
                    <label>Item Image</label>
                    <input type="file" onChange={(event) => { handleaddimage(event, setFoodimage) }} />
                </div>

                {foodimage && (
                    <div className="image-preview">
                        <img src={foodimage} alt="Preview" />
                    </div>
                )}

                <div className="input-group">
                    <label>Description</label>
                    <textarea
                        placeholder="Enter description"
                        rows="3"
                        value={fooddiscription}
                        onChange={(event) => { setFooddiscription(event.target.value) }}
                    />
                </div>

                <button className="update-button" onClick={() => { updateitem(navigate,setOpen, setSeverity, setMessage, id, foodname, foodtype, foodprice, foodoffer, foodimage, fooddiscription, setFooddefaultprice) }}>
                    Upadate Item
                </button>


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
