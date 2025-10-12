// import './App.css';

import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from './Login/Login';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Notfound } from './Notfound/Notfound';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Additems } from './Additems/Additems';
import { Showitems } from './Showitems/Showitems';
import { Orders } from './Orders/Orders';
import { Updateitem } from './Updateitem/Updateitem';
import { Help } from './Help/Help';
import { Policies } from './Policies/Policies';

export const Mycontext = createContext()
function App() {
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const [foodname, setFoodname] = useState("")
  const [foodprice, setFoodprice] = useState(0)
  const [fooddefaultprice, setFooddefaultprice] = useState(0)
  const [foodoffer, setFoodoffer] = useState(0)
  const [fooddiscription, setFooddiscription] = useState("")
  const [foodtype, setFoodtype] = useState("")
  const [foodimage, setFoodimage] = useState("")
  const [category, setCategory] = useState("")

  const [showitems, setShowitems] = useState([])

  const [count, setCount] = useState(0)

  const [id, setId] = useState("")

  const [showorders, setShoworders] = useState([])

  const [itemslength, setItemslength] = useState(0)
  const [totalorders, setTotalorders] = useState(0)
  const [totalcustomers, setTotalcustomers] = useState(0)
  const [totalrevenue, setTotalrevenue] = useState(0)

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Router>
      <Mycontext.Provider value={{
        mail,
        setMail,
        password,
        setPassword,
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
        showitems,
        setShowitems,
        count,
        setCount,
        id,
        setId,
        showorders,
        setShoworders,
        itemslength,
        setItemslength,
        totalorders,
        setTotalorders,
        totalcustomers,
        setTotalcustomers,
        totalrevenue,
        setTotalrevenue,
        open,
        setOpen,
        severity,
        setSeverity,
        message,
        setMessage


      }}>
        <Header />

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/additems' element={<Additems />} />
          <Route path='/showitems' element={<Showitems />} />
          <Route path='/updateitems' element={<Updateitem />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/help' element={<Help />} />
          <Route path='/policies' element={<Policies />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </Mycontext.Provider>
    </Router>
  );
}

export default App;
