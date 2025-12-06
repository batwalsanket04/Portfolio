 import React from 'react'
 import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Componants/Home/Home'
import About from './Componants/About/About'
import Projects from './Componants/Projects/Projects'
import Navbar from './Componants/Navbar/Navbar'
import Contact from './Componants/Contact/Contact'
import Skills from './Componants/Skills/Skills'
 
 const App = () => {
   return (
     <div>
       <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/project' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>



        </Routes>
       </Router>
     </div>
   )
 }
 
 export default App
 