import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../App'
import { getitems } from '../Functions/Getitems'
import '../Showitems/Showitems.css'
import { handledeleteitem } from '../Functions/Handledeleteitem'
import { updateitemstate } from '../Functions/Updateitemstate'
import { useNavigate } from 'react-router-dom'
import { restrictpages } from '../Functions/Restrictadmin'
import { Snackbar, Alert, Button } from "@mui/material";
import { loader } from '../Loader/Loader'
export const Showitems = () => {
  const {
    showitems,
    setShowitems,
    count,
    setCount,
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

  const navigate = useNavigate()

  useEffect(() => {
    restrictpages(navigate)
    getitems(setShowitems)
  }, [count])
  return (
    <div className="viewitems-wrapper">
      <div className="viewitems-header">
        <h1>All Menu Items</h1>
        <p>Manage your entire menu — edit prices, update details, or remove old dishes.</p>
      </div>

      <div className="table-container">
        <table className="viewitems-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Item Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default Price</th>
              <th>Offer</th>
              <th>Final Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {showitems.length > 0 ? showitems.map((data, index) => (
              <tr key={index}>
                <td>
                  <img src={data.image} alt={data.name} className="item-img" />
                </td>
                <td>{data.name}</td>
                <td>{data.type}</td>
                <td className="desc">{data.description}</td>
                <td className="strike">₹{data.defaultprice}</td>
                <td className="offer">
                  {data.offer > 0 ? `-${data.offer}%` : "—"}
                </td>
                <td className="price">₹{data.price}</td>
                <td className="actions">
                  <button
                    className="update-btn"
                    onClick={() => updateitemstate(setOpen, setSeverity, setMessage, data, navigate, setFoodname, setFoodtype, setFoodprice, setFooddefaultprice, setFoodoffer, setFoodimage, setFooddiscription, setId)}
                  >
                    Update
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handledeleteitem(data._id, count, setCount, setOpen, setSeverity, setMessage)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )) : loader()}
          </tbody>
        </table>
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
