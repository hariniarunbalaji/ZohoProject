import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./welcome.scss"; 

const ContactDetail = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fathername, setFatherName] = useState("");
  

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
      setFatherName(contact.fathername)
      

    }
    dispatch(getContact(id));
  }, [contact]);

  // const onUpdateContact = (e) => {
  //   e.preventDefault();

  //   const update_contact = Object.assign(contact, {
  //     name: name,
  //     phone: phone,
  //     email: email,
  //     address: address
  //   });

  //   dispatch(updateContact(update_contact));
  //   history.push("/")
  // };
  return (
    <div className="card border-0 shadow">
      <div className="card-header" Style="color:white;" >Details</div>
      <div className="card-body">
        {/* <form onSubmit={(e) => onUpdateContact(e)}> */}
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              Style="color:orange;"
              readonly
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              value={phone}
              Style="color:orange;"
              readonly
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              value={email}
              Style="color:orange;"
              readonly
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              value={fathername}
              Style="color:orange;"
              readonly
            />
          </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default ContactDetail;
