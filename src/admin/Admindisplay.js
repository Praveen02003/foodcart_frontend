import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import '../App.css';
export const Admindisplay = () => {
  const{
    fooddata,
    setFooddata,
    editfoodname,
    setEditfoodname,
    editfoodprice,
    setEditfoodprice,
    editfoodid,
    setEditfoodid
    }=useContext(Mycontext)
  const navigate=useNavigate()
  const deletefood=async(foodid)=>{
    const userdata=
    {
      _id:foodid
    }
    try 
    {
      const response=await axios.post("http://localhost:5000/deletedata",userdata)
      alert(response.data.message)
    } 
    catch (error) 
    {
      alert(error.response.data.message)
    }
  }
  const editfood=(foodname,foodprice,id)=>{
    setEditfoodid(id)
    setEditfoodname(foodname)
    setEditfoodprice(foodprice)
    navigate('/edit')
  }
  const logout=()=>{
    localStorage.removeItem("username");
    localStorage.clear();
    navigate('/')
  }
  useEffect(()=>{
    const fetch=async()=>{
      try 
      {
      const response=await axios.get('http://localhost:5000/display')
      setFooddata(response.data.message)
      
      }
      catch (error) 
      {
        alert("Unable To Find Food")
      }
    
    }
    fetch()
  },[])
  return (
    <div>
      <Button variant="contained" onClick={()=>{logout()}}>Logout</Button>
      <h1 className='h1'>ADMIN DISPLAY</h1>
      <Button variant="contained" onClick={()=>{navigate('/add')}}>Add Food</Button>
      <table border="1" cellPadding="8" className='table'>
        <thead>
          <tr>
            <th><h3 className='h3'>Food Image</h3></th>
            <th><h3 className='h3'>Food Name</h3></th>
            <th><h3 className='h3'>Food Price</h3></th>
            <th><h3 className='h3'>Options</h3></th>
          </tr>
        </thead>
        <tbody>
          {fooddata.map((food,index) => {
            return(
              <tr key={index}>
                <td><img src={food.image} alt={food.foodname} style={{height:'250px',width:'250px',borderRadius:'10px'}}/></td>
                <td><h4 className='h4'>{food.foodname}</h4></td>
                <td><h4 className='h4'>{food.foodprice}rs</h4></td>
                <td><Button variant="contained" onClick={()=>{editfood(food.foodname,food.foodprice,food._id)}} className='button'>Edit Food</Button><Button variant="contained" onClick={()=>{deletefood(food._id)}} className='button'>Delete Food</Button></td>
              </tr>
            )
          
          })}
        </tbody>
      </table>
    </div>
  )
}
