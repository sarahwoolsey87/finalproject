import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li>
          <Link className="route-li" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="route-li" to="/about">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
