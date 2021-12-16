import React from "react";
import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Contacts from "./components/contacts/Contacts";
import { povider, Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContact  from "./components/contacts/EditContact";
//import contactDetails from "./components/contacts/contactDetails";
import ContactDetail from "./components/contacts/ContactDetail";
import Welcome from "./components/contacts/Welcome";

function App() {
  return (
    <div className="bgimg">
    <Provider store={store}>
    <Router>
        <div className="App">
          
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                 <Route exact path="/" component={Welcome} /> 
                 <Route exact path="/contacts/add" component={AddContact} /> 
                 <Route exact path="/contacts/list" component={Contacts} /> 
                 {/* <Route exact path="/contacts/detail" component={ContactDetail}/> */}

                {/* <div className="welcome">
          <h1> Hi Welcome !! 
                 This is your Contact Book</h1>
          </div> */}
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
                <Route
                  exact
                  path="/contacts/contactdetail/:id"
                  component={ContactDetail}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
