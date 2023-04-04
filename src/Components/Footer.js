import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="row1">
        <p className="country">Ghana</p>
      </div>
      <div className="row2">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Advertising</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">How Search Works</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
