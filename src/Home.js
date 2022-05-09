 import React from 'react'
 import {Link} from 'react-router-dom'
 import "./style"

 const Home =()=>{
   return(
     <div className=" homePage">
       <header>
         React Project
         <Link to="/blogs">Blog</Link>
         <Link to="/">Home |</Link>
        </header>
        <section>
          <p>Welcome to my first React project.</p>
          <p>In this project, I've decided to go ahead and blog my Journey learning React up to writing this code. Feel free to contact me for any queries. </p>
        </section>
     </div>
   )
 }
 export default Home