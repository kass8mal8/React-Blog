 import React from 'react'
 import {Link} from 'react-router-dom'

 const Home =()=>{
   return(
     <div className=" homePage">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <p>Hello world</p>
     </div>
   )
 }
 export default Home