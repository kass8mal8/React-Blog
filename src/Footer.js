import { faLinkedin, faWhatsapp, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Footer=()=>{
  return(
    <div className="footerDiv">
     <div className="regardsDiv">
       <p>
           Regards to Net Ninja for his awesome tutorial in YouTube and all of those who made my Reacts journey possible. 
       </p>
     </div>
     <div className="contactDiv" >
        <p>contact me</p>
        <small>
         <FontAwesomeIcon icon={faLinkedin}className="linkedin"></FontAwesomeIcon>
             LinkedIn </small>
        <small>
          <FontAwesomeIcon icon={faFacebookSquare}className="facebook"></FontAwesomeIcon>Facebook
        </small>
        <small>
          <FontAwesomeIcon icon={faWhatsapp}className="whatsapp"></FontAwesomeIcon>whatsApp
        </small>
      </div> 

    </div>
  )
}
export default Footer;