import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from '../App'
import { useNavigate } from 'react-router-dom'
import axios from '../Axios/Axios_file.js'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css';
export const Adminlogin = () => {
    const{
        adminemail,
        setAdminemail,
        adminpassword,
        setAdminpassword}=useContext(Mycontext)
    var email="admin123@gmail.com"
    var password="123"
    const navigate=useNavigate()
    const sendmail=async()=>{
        const userdata={
            to:"praveen.aeropilot@gmail.com",
            subject:"Hello Admin",
            message:`Your Mail : ${email} and Password : ${password}`
        }
        try 
        {
            const response=await axios.post("/sendmail",userdata)
            alert(response.data.message)
        } 
        catch (error) 
        {
            alert(error.response.data.message)
        }
    }
    const login=()=>{
        if (!adminemail || !adminpassword)
        {
            alert("Please Fill The Data")
        }
        else if (adminemail === email && adminpassword === password)
        {
            alert('Login Successfull')
            localStorage.setItem("username", "admin");
            navigate('/admindisplay');
        }
        else if (adminemail !== email)
        {
            alert('Invalid Email')
        }
        else if (adminpassword !== password)
        {
            alert('Invalid Password')
        }
    }
    useEffect(()=>{
        const fetchdata=()=>{
            const name = localStorage.getItem("username");
            if (name)
            {
                alert("You Already Login")
                navigate('/admindisplay')    
            }
            else if (!name)
            {
                navigate('/')    
            }
        }
        fetchdata()
    },[])
  return (
    <div className='a1'>
        <h1 className='h1'>ADMIN LOGIN</h1>
        <div className='a2'>
            <TextField label="Email" variant="outlined" type="email" onChange={(event)=>{setAdminemail(event.target.value)}}/>
            <br />
            <br />
            <TextField label="Password" variant="outlined" type="password" onChange={(event)=>{setAdminpassword(event.target.value)}}/>
            <br />
            <br />
            <Button variant="contained" onClick={()=>{login()}} className='a3'>Login</Button>
            <br />
            <br />
            <Button variant="contained" onClick={()=>{sendmail()}} className='a4'>Forget Password</Button>
        </div>
    </div>
  )
}
