import React, { useContext } from 'react'
import { Mycontext } from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export const Addfood = () => {
    const{
        foodname,
        setFoodname,
        foodprice,
        setFoodprice,
        foodimage,
        setFoodimage,
        addimagepreview,
        setAddimagepreview
    }=useContext(Mycontext)
    const navigate=useNavigate()
    const handleFile = (e) => {
        const file = e.target.files[0];
        if (!file) return; 
        setAddimagepreview(URL.createObjectURL(file));
        const reader = new FileReader();
        reader.onloadend = () => {
        setFoodimage(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const add=async()=>{
        
        const userdata=
        {
            foodname:foodname,
            foodprice:foodprice,
            image:foodimage
        }
        if (!foodname || !foodprice)
        {
            alert("Please Fill The Data!!!!!!!!")
        }
        else
        {
            try 
            {
                const response=await axios.post("http://localhost:5000/addfood",userdata)
                alert(response.data.message)
            } 
            catch (error) 
            {
                alert(error.response.data.message)
            }
        }
        
    }
  return (
    <div className='add'>
        <Button variant="contained" onClick={()=>{navigate('/admindisplay')}}>Go To Display</Button>
        <h1 className='h1'>ADD FOOD</h1>
        <div>
            <TextField id="outlined-basic" label="Food Name" variant="outlined" type="text" onChange={(event)=>{setFoodname(event.target.value)}}/>
            <br />
            <br />
            <TextField id="outlined-basic" label="Food Price" variant="outlined" type="text" onChange={(event)=>{setFoodprice(event.target.value)}}/>
            <br />
            <br />
            <input type="file" onChange={handleFile}/>
            <br />
            <br />
            <img src={addimagepreview} alt="" style={{width:'200px',marginBottom:'20px'}}/>
        </div> 
        <Button variant="contained" onClick={()=>{add()}}>Add</Button>
    </div>
  )
}
