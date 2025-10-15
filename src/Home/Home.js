import React, { useContext, useEffect } from 'react'
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../App';
import { getallitemslength, getitems } from '../Functions/Getitems';
import { gettotalorders } from '../Functions/Gettotalorders';
import { gettotalcustomers } from '../Functions/Gettotalcustomers';
import { gettotalrevenue } from '../Functions/Gettotalrevenue';
import { restrictpages } from '../Functions/Restrictadmin';
import { loader } from '../Loader/Loader';
export const Home = () => {
    const {
        itemslength,
        setItemslength,
        totalorders,
        setTotalorders,
        totalcustomers,
        setTotalcustomers,
        totalrevenue,
        setTotalrevenue
    } = useContext(Mycontext)
    const navigate = useNavigate()
    useEffect(() => {
        restrictpages(navigate)
        gettotalrevenue(setTotalrevenue)
        gettotalcustomers(setTotalcustomers)
        gettotalorders(setTotalorders)
        getallitemslength(setItemslength)
    }, [])
    return (
        <div className="admin-home">
            <h1 className="home-title">Welcome Back, Admin!</h1>

            <div className="stats-cards">
                <div className="stat-card" style={{ borderLeft: "6px solid #ff6f61" }}>
                    <div className="stat-icon">🛒</div>
                    <div className="stat-info">
                        <h3>Total Orders</h3>
                        <p>{totalorders === null ? loader() : totalorders}</p>
                    </div>
                </div>

                <div className="stat-card" style={{ borderLeft: "6px solid #ffb347" }}>
                    <div className="stat-icon">💰</div>
                    <div className="stat-info">
                        <h3>Revenue</h3>
                        <p>₹{totalrevenue === null ? loader() : totalrevenue }</p>
                    </div>
                </div>

                <div className="stat-card" style={{ borderLeft: "6px solid #6fcf97" }}>
                    <div className="stat-icon">👥</div>
                    <div className="stat-info">
                        <h3>Customers</h3>
                        <p>{totalcustomers === null ? loader() : totalcustomers }</p>
                    </div>
                </div>

                <div className="stat-card" style={{ borderLeft: "6px solid #56ccf2" }}>
                    <div className="stat-icon">🍔</div>
                    <div className="stat-info">
                        <h3>Menu Items</h3>
                        <p>{itemslength === null ? loader() : itemslength }</p>
                    </div>
                </div>
            </div>

            <div className="quick-actions">
                <button style={{ background: "#ff6f61" }} onClick={() => navigate('/additems')}>Add Menu Item</button>
                <button style={{ background: "#ffb347" }} onClick={() => navigate('/orders')}>View Orders</button>
                <button style={{ background: "#6fcf97" }} onClick={() => navigate('/showitems')}>View All Menu Items</button>
            </div>
        </div>
    );
};

