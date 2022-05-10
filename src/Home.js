import React, {Link} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const Home=()=>{
  
  return(
    <div className="homeDiv">
       <p>
         Welcome to my React project.
       </p>
       <p>
         In this project, I've decided to go ahead and blog my Journey learning React up to writing this code. Feel free to contact me for any queries. 
       </p>
       <p>
         I previously made some projects but I'd not coded them in React.This is the first in React, hope it's awesome. 
       </p>
      
       <FontAwesomeIcon icon={faYoutube} ></FontAwesomeIcon>
    </div>
  )
}
export default Home