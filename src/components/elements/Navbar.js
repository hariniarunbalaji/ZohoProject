import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="btn btn-dark" >
          Home
        </Link>
        {/* <div className="createcontact">
          <Link to="/contacts/add" smooth={true} duration={500} Style="color:blue;">
            Create Contact
          </Link>
          </div> */}
          <div className="contactlist">
          <Link to="/contacts/list" className="btn btn-dark" >
            Contact List
          </Link>

          </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
