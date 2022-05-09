 import React from 'react'
 import {Link} from 'react-router-dom'
 import "./style"

 const Home =()=>{
   return(
     <div className=" homePage">
       <header>
         React Project
         <Link to="/portfolio">Portfolio</Link>
         <Link to="/blogs">Blog |</Link>
         <Link to="/">Home |</Link>
        </header>
     </div>
   )
 }
 export default Home