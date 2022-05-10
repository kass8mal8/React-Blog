import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Footer=()=>{
  return(
    <div className="footerDiv">
     <div className="regardsDiv">
       <small>
           Regards to Net Ninja for his awesome tutorial from Youtube
       </small>
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