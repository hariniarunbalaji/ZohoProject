import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { Link, useHistory } from "react-router-dom";
import "./welcome.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const AddContact = (contact) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fathername, setFatherName] = useState("");
  const { id } = contact;

  const craeteContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email,
      fathername:fathername,
    };
    dispatch(addContact(new_contact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header" Style="color:white;">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)}>
          <div className="form-group" >
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Father Name"
              value={fathername}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </div>
          {/* <div className="createcontact">
          <Link to="/contacts/list" className="btn btn-light ml-auto" Style="color:orange;">

          <button className="btn btn-primary" type="submit">
            Create Contact
          
          </button>
          </Link>
          </div> */}
           <button className="btn btn-primary" type="submit">
            Create Contact
            </button>
          
          
        </form>
      </div>
    </div>
  );
};

export default AddContact;
