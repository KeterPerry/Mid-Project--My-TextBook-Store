import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbarC">
      <ul className="navbarL">
        <li style={{ listItem: "none" }}>
          {" "}
          <NavLink className="link" exact to="/">
            Home Page
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/About" className="link">
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/products" className="link">
            My TextBooks
          </NavLink>
        </li>
      </ul>
      <br></br>

      <ul className="navbarR">
        <li>
          {" "}
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/shop" className="link">
            Shop
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/products" className="link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="15%"
              height="15%"
              viewBox="0 0 197.7 166"
              preserveAspectRatio="xMinYMax meet"
              data-hook="svg-icon-2"
            >
              <path d="M197.9 55.9L169.9 127.4 64.5 127.4 27.6 29.8 0 29.8 0.2 16.7 36.5 16.7 73.4 114.3 160.9 114.3 183 55.9"></path>
              <circle cx="143.8" cy="153" r="13"></circle>
              <circle cx="90.8" cy="153" r="13"></circle>
              <text
                // fontSize="100"
                data-hook="items-count"
                className="LCo0H QVqyb"
                textAnchor="middle"
                x="116"
                y="35"
                dy=".48em"
              >
                0
              </text>
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" exact to="/login">
            Admin
          </NavLink>
        </li>
        <li>
          {" "}
          <a
            rel="noreferrer"
            href="https://www.facebook.com/home.php"
            target="_blank"
          >
            {" "}
            <img width="10rem" alt="#" src="./assets/facebook.png"></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
