import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../App'
import axios from '../Axios/Axios_file.js'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export const Editfood = () => {
    const{
        editfoodname,
        setEditfoodname,
        editfoodprice,
        setEditfoodprice,
        editfoodid,
        setEditfoodid,
        editfoodimage,
        setEditfoodimage,
        imagepreview,
        setImagepreview
    }=useContext(Mycontext)
    const handleFile = (e) => {
        const file = e.target.files[0];
        if (!file) return; 
        setImagepreview(URL.createObjectURL(file));
        const reader = new FileReader();
        reader.onloadend = () => {
        setEditfoodimage(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const updatedata=async()=>{
        const userdata={
            _id:editfoodid,
            foodname:editfoodname,
            foodprice:editfoodprice,
            image:editfoodimage
        }
        if (!editfoodname || !editfoodprice) 
        {
            alert("Please Fill The Data!!!!!!!")    
        }
        else
        {
            try 
            {
                const response=await axios.post("/update",userdata)
                alert(response.data.message)
            } 
            catch (error)
            {
                alert(error.response.data.message)
            }
        }
        
    }
    const navigate=useNavigate()
  return (
    <div className='edit'>
        <Button variant="contained" onClick={()=>{navigate('/admindisplay')}}>Go To Display</Button>
        <h1 className='h1'>EDIT FOOD</h1>
        <TextField id="outlined-basic" label="Food Name" variant="outlined" type="text" value={editfoodname} onChange={(event)=>{setEditfoodname(event.target.value)}}/>
        <br />
        <br />
        <TextField id="outlined-basic" label="Food Price" variant="outlined" type="text" value={editfoodprice} onChange={(event)=>{setEditfoodprice(event.target.value)}}/>
        <br />
        <br />
        <input type="file" onChange={handleFile}/> 
        <br />
        <br />
        <img src={imagepreview} alt="" style={{width:'200px',marginBottom:'20px'}} />
        <div>
            <Button variant="contained" onClick={()=>{updatedata()}}>Update</Button>
        </div>
    </div>
  )
}
