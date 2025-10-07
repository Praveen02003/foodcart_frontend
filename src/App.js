import './App.css';
import { Addfood } from './admin/Addfood';
import { Admindisplay } from './admin/Admindisplay';
import { Adminlogin } from './admin/Adminlogin';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Editfood } from './admin/Editfood';
import { Not } from './notfound/Not';
export const Mycontext = createContext()
function App() {
  const [adminemail, setAdminemail] = useState("")
  const [adminpassword, setAdminpassword] = useState("")
  const [email, setEmail] = useState("admin123@gmail.com")
  const [password, setPassword] = useState("123")
  const [fooddata, setFooddata] = useState([])
  const [foodname, setFoodname] = useState("")
  const [foodprice, setFoodprice] = useState("")
  const [editfoodname, setEditfoodname] = useState("")
  const [editfoodprice, setEditfoodprice] = useState("")
  const [editfoodid, setEditfoodid] = useState("")
  const [foodimage, setFoodimage] = useState("")
  const [editfoodimage, setEditfoodimage] = useState("")
  const [imagepreview, setImagepreview] = useState(null);
  const [addimagepreview, setAddimagepreview] = useState(null);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Mycontext.Provider value={{
        adminemail,
        setAdminemail,
        adminpassword,
        setAdminpassword,
        fooddata,
        setFooddata,
        foodname,
        setFoodname,
        foodprice,
        setFoodprice,
        editfoodname,
        setEditfoodname,
        editfoodprice,
        setEditfoodprice,
        editfoodid,
        setEditfoodid,
        foodimage,
        setFoodimage,
        editfoodimage,
        setEditfoodimage,
        imagepreview,
        setImagepreview,
        addimagepreview,
        setAddimagepreview,
        open,
        setOpen,
        severity,
        setSeverity,
        message,
        setMessage,
        email,
        setEmail,
        password,
        setPassword,
        count,
        setCount
      }}>

        <Routes>
          <Route path='/' element={<Adminlogin />} />
          <Route path='*' element={<Not />} />
          <Route path='/admindisplay' element={<Admindisplay />} />
          <Route path='/add' element={<Addfood />} />
          <Route path='/edit' element={<Editfood />} />
        </Routes>
      </Mycontext.Provider>
    </Router>
  );
}

export default App;
