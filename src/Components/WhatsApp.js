import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./../css/WhatsApp.css";
function WhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=573134533478"
      target="_BLANK"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon className="whatsapp-icon" icon={faWhatsapp} />
    </a>
  );
}

export default WhatsApp;
