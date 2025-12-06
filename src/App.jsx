 import React from 'react'
 import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Componants/Home/Home'
import About from './Componants/About/About'
import Projects from './Componants/Projects/Projects'
import Navbar from './Componants/Navbar/Navbar'
import Contact from './Componants/Contact/Contact'
import Skills from './Componants/Skills/Skills'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
 const App = () => {
   return (
     <div>
       <Router>
<ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  pauseOnHover
  theme="dark"
  toastStyle={{
    background: "#0F172A", // same as your form bg
    border: "1px solid #FACC15",
    borderRadius: "16px",
    color: "#E5E7EB", // soft white
    fontSize: "14px",
    boxShadow: "0 0 15px rgba(250, 204, 21, 0.15)",
  }}
  progressStyle={{
    background: "#FACC15"
  }}
/>


        <Navbar/>
       <Routes>
  <Route path="/" element={<Home />} />   {/* default */}
  <Route path="/about" element={<About />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
       </Router>
     </div>
   )
 }
 
 export default App
 