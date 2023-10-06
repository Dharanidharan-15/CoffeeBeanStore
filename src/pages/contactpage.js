import React from "react";
import "./contactpage.css";
import contactUs from "../assests/contact.jpg";

function ContactUs() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="contactback"
      style={{
        background: `url(${contactUs})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor:"pointer"
      }}
      onClick={scrollToBottom}
    ></div>
  );
}

export default ContactUs;
