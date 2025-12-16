import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import FAQ from './FAQ'
import About from './About'
import Navbar from './Navbar'
import Contact from './Contact'
import Login from './Login'
import Shop from './Shop'
import Cartpage from './Cartpage'
import Sliderbar from './Home/Sliderbar'
const Routing = () => {
  return (
    <div>
        <Navbar/> 
        <Routes>
          
<Route path='/' element={<Home/>}/>

<Route path='/shop' element={<Shop/>}/>
<Route path='/cart' element={<Cartpage/>}/>
<Route path='/about' element={<About/>}/> 
<Route path='/FAQ' element={<FAQ/>}/> 
<Route path='/Contact' element={<Contact/>}/>
<Route path='/login' element={<Login/>}/>  
        </Routes>
    </div>
  )
}

export default Routing