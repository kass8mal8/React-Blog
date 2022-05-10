import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Footer=()=>{
  return(
    <div className="footerDiv">
     <div className="contactDiv" >
        <p>contact me</p>
        <small>
         <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
             LinkedIn </small>
        <small>
          <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>Facebook
        </small>
        <small>
          <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>whatsApp
        </small>
      </div> 

    </div>
  )
}
export default Footer;