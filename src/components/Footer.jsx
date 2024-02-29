import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFontAwesome, faFacebook,faInstagram,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p className="follow">Follow Us On</p>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <p> &copy; 2024 thecheesybreezy.com</p>
    </div>
  );
}

export default Footer;
