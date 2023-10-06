import React from "react";
import "./footer.css";
function Footer() {
  return (
  <> 
    <div className="footer">
      <a href="https://www.facebook.com">
      Join us with <i class="fab fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com">
        Follow us on <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.twitter.com">
       Hear us from <i class="fab fa-twitter"></i>
      </a>
      <a href="https://youtube.com">
        Watch us on  <i class="fab fa-youtube"></i>
      </a>
      <a href="https://linkedin.com">
        Meet us on <i class="fab fa-linkedin"></i>
      </a>
    </div>
    <p id="copywrites">&copy; 2049 Indigo Coffee</p>
  </>
  );
}

export default Footer;
