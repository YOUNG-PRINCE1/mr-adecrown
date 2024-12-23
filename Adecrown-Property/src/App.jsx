import React, {Suspense, useState} from "react";

import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Home from './Pages/Home/Home'
import Footer from './Components/Footer'
import Service from './Pages/Service/Service'
import About from './Pages/About/About'
import Footer2 from './Components/Footer2'
import Property from './Pages/Property/Property'
import Details from './Pages/Prop-Details/Details'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Contact from './Pages/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Suspense fallback={<div className="spinner-grow bg-danger text-light position-absolute top-50 start-50 translate-middle h-100">
      
      </div>}>
        <Router>

          <Header/>
          <Routes>
            <Route  path="/" element={<Home />} />

            <Route  path="/service" element={<Service />} />

            <Route  path="/about" element={<About />} />

            <Route  path="/Property" element={<Property />} />

            <Route  path="/details" element={<Details />} />

            <Route  path="/login" element={<Login />} />

            <Route  path="/signup" element={<Signup />} />

            <Route  path="/contact" element={<Contact />} />


          </Routes>
          <Footer2 />
          <Footer/>

        </Router>
      </Suspense>
    </>
  )
}

export default App
