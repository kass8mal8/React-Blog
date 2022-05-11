 import React from 'react'
 import {Link} from 'react-router-dom'
 import "./style"

 const Header =()=>{
   return(
     <div className=" homePage">
       <header>
        React-Blog
         <Link to="/blogs">Blog</Link>
         
         <Link to="/">Home | </Link>
        </header>
  
     </div>
   )
 }
 export default Header