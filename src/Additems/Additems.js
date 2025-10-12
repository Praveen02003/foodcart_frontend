import React, { useContext, useEffect } from 'react'
import '../Additems/Additems.css'
import { Mycontext } from '../App'
import { addfooditems } from '../Functions/Addfooditems'
import { handleaddimage } from '../Functions/Handleaddimage'
import { restrictpages } from '../Functions/Restrictadmin'
import { useNavigate } from 'react-router-dom'
import { Snackbar, Alert, Button } from "@mui/material";
export const Additems = () => {
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
        category,
        setCategory,
        open,
        setOpen,
        severity,
        setSeverity,
        message,
        setMessage
    } = useContext(Mycontext)


    const navigate = useNavigate()

    useEffect(() => {
        restrictpages(navigate)
    }, [])
    return (
        <div className="additem-page">
            <div className="additem-card">
                <h1>Add New Menu Item</h1>

                <div className="input-group">
                    <label>Item Name</label>
                    <input
                        type="text"
                        placeholder="Enter item name"
                        onChange={(event) => { setFoodname(event.target.value) }}
                    />
                </div>

                <div className="input-group">
                    <label>Type</label>
                    <select onChange={(event) => { setFoodtype(event.target.value) }}>
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
                        onChange={(event) => { setFoodprice(event.target.value) }}
                    />
                </div>

                <div className="input-group">
                    <label>Default price (₹)</label>
                    <input
                        type="number"
                        value={fooddefaultprice}
                        placeholder="Enter price"
                        onChange={(event) => { setFooddefaultprice(event.target.value) }}
                        disabled
                    />
                </div>

                <div className="input-group">
                    <label>Offer (%)</label>
                    <input
                        type="number"
                        placeholder="Enter offer"
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
                        onChange={(event) => { setFooddiscription(event.target.value) }}
                    />
                </div>


                <div className="input-group">
                    <label>Category</label>
                    <select onChange={(event) => { setCategory(event.target.value) }}>
                        <option value="">Select Category</option>
                        <option value="beverages">beverages</option>
                        <option value="breakfasts">breakfasts</option>
                        <option value="burgers">burgers</option>
                        <option value="desserts">desserts</option>
                        <option value="pizzas">pizzas</option>
                        <option value="populars">populars</option>
                        <option value="rolls">rolls</option>
                        <option value="salads">salads</option>
                        <option value="sandwiches">sandwiches</option>
                        <option value="snacks">snacks</option>
                        <option value="soups">soups</option>
                        <option value="starters">starters</option>
                    </select>
                </div>


                <button className="additem-button" onClick={() => { addfooditems(foodname, foodtype, foodprice, foodoffer, foodimage, fooddiscription, category, setFooddefaultprice, setOpen, setSeverity, setMessage) }}>
                    Add Item
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
