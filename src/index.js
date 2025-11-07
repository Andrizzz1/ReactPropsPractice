import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";
import contacts from "./contacts";
ReactDOM.render(
  <div>
    <App
      Fname="Beyonce"
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      contact="+123 456 789"
      email="b@beyonce.com"
    />
    <App
      Fname={contacts[1].name}
      image={contacts[1].imgURL}
      contact={contacts[1].phone}
      email={contacts[1].email}
    />

    <App
      Fname={contacts[2].name}
      image={contacts[2].imgURL}
      contact={contacts[2].phone}
      email={contacts[2].email}
    />
  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
