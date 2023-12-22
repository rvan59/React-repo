import React from 'react'
import "./index.css"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="top">
            <div className="icon"><FaMapMarkerAlt /> sdupawefuhp </div>
            <div className="icon"><FaPhoneAlt />FEFs</div>
            <div className="icon"><BiMessageAltDetail />agargae</div>
          </div>
          <div className="left">
<div className="inport"><div className="input"><input type="text" placeholder='Enter your Email'/><button>SUBSCRIBE</button></div></div>
<div className="ikon">
<div className="img"><FaFacebookF /></div>
<div className="img"><FaTwitter /></div>
<div className="img"><AiFillLinkedin /></div>
<div className="img"><FaInstagram /></div>
</div>
          </div>
        </div>
        <div className="foot">
          <h4>dfghjkl</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer