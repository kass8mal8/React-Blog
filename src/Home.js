 import React from 'react'
 import {Link} from 'react-router-dom'
 import "./style"

 const Home =()=>{
   return(
     <div className=" homePage">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs |</Link>
     </div>
   )
 }
 export default Home