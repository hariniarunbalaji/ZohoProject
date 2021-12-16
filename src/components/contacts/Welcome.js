import React from 'react';
import "./welcome.scss"; 
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="bgimg">
        <div className="welcome">
       <h1>Welcome to your <span Style="color:red;">Contact Book !!</span>
       </h1>
       <div className="createcontact">
          <Link to="/contacts/add" className="btn btn-light ml-auto" >
            Create Contact
          </Link>
          </div>
       </div>
        </div>
    )
}

export default Welcome;
