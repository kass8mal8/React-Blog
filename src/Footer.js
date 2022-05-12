import { faLinkedin, faWhatsapp, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Footer=()=>{
  return(
    <div className="footerDiv">

     <div className="contactDiv" >
        <small>
         <FontAwesomeIcon icon={faLinkedin}className="linkedin"></FontAwesomeIcon><a href="https://www.linkedin.com/in/kassim-ali-770116230 ">
             LinkedIn</a> </small>
        <small>
          <FontAwesomeIcon icon={faFacebookSquare}className="facebook"></FontAwesomeIcon>Facebook
        </small>
        <small>
          <FontAwesomeIcon icon={faWhatsapp}className="whatsapp"></FontAwesomeIcon>+254 111 555 294
        </small>
        <small>copyright | Frontend Dev Kassim</small>
      </div> 

    </div>
  )
}
export default Footer;