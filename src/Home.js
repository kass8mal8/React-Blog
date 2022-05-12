import React, {Link} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from "./Footer"
const Home=()=>{
  
  return(
    <div className="homeDiv">
       <p>
         Welcome to my React project.
       </p>
       <p>
         In this project, I've decided to go ahead and blog my Journey learning React up to writing this code.I've implemented at least some of the concepts I've learned in React so far.Feel free to contact me for any queries. 
       </p>
       <p>
         I previously made some projects but I'd not coded them in React.This is the first in React, hope it's awesome. 
       </p>
      <Footer /> 

    </div>
  )
}
export default Home