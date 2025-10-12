import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../App'
import { getorders } from '../Functions/Getorders'
import '../Orders/Orders.css'
import { restrictpages } from '../Functions/Restrictadmin'
import { useNavigate } from 'react-router-dom'
export const Orders = () => {
  const {
    showorders,
    setShoworders
  } = useContext(Mycontext)

  const navigate = useNavigate()

  useEffect(() => {
    restrictpages(navigate)
    getorders(setShoworders)
  }, [])
  return (
    <div className="orders-page">
      <h1>Orders Dashboard</h1>
      {showorders && showorders.length > 0 ? (
        showorders.map((order, index) => (
          <div className="order-card" key={index}>
            <div className="order-header">
              <p><strong>Username:</strong> {order.username}</p>
              <p><strong>Email:</strong> {order.mail}</p>
              <p><strong>Total Amount:</strong> ₹{order.total}</p>
            </div>

            {order.itemdetails && order.itemdetails.length > 0 ? (
              <table className="items-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Offer</th>
                  </tr>
                </thead>
                <tbody>
                  {order.itemdetails.map((item, idx) => (
                    <tr key={idx}>
                      <td className="item-name">
                        <img src={item.image} alt={item.name} />
                        {item.name}
                      </td>
                      <td>{item.type}</td>
                      <td>₹{item.price}</td>
                      <td>{item.offer}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="no-items">No items in this order</p>
            )}
          </div>
        ))
      ) : (
        <p className="no-orders">No orders available</p>
      )}
    </div>



  )
}
