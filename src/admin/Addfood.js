import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../App'
import axios from '../Axios/Axios_file.js'
import { useNavigate } from 'react-router-dom'
import '../Styles/Addfood.css'
import { add } from '../Functions/Add.js'
import { handleFile } from '../Functions/Handlefile.js'

export const Addfood = () => {
    const {
        foodname,
        setFoodname,
        foodprice,
        setFoodprice,
        foodimage,
        setFoodimage,
        addimagepreview,
        setAddimagepreview
    } = useContext(Mycontext)

    const navigate = useNavigate()

    useEffect(() => {
        const name = localStorage.getItem("username");
        if (!name) {
          navigate("/");
        }
      }, []);
    

    return (
        <div className="addfood-container">
            <div className="addfood-card">
                <h1 className="addfood-title">Add Food</h1>

                <div className="addfood-form">
                    <label>Food Name</label>
                    <input
                        type="text"
                        placeholder="Enter food name"
                        value={foodname}
                        onChange={(e) => setFoodname(e.target.value)}
                    />

                    <label>Food Price</label>
                    <input
                        type="text"
                        placeholder="Enter food price"
                        value={foodprice}
                        onChange={(e) => setFoodprice(e.target.value)}
                    />

                    <label>Food Image</label>
                    <input type="file" onChange={(event) => { handleFile(event, setAddimagepreview, setFoodimage) }} />

                    {addimagepreview && (
                        <img src={addimagepreview} alt="preview" className="food-preview" />
                    )}

                    <div className="addfood-buttons">
                        <button className="btn-secondary" onClick={() => navigate('/admindisplay')}>
                            Go To Display
                        </button>
                        <button className="btn-primary" onClick={() => { add(foodname, foodprice, foodimage) }}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
