import React from "react";
import Form from "./Form";

var userIsRegistered = false;

//Angela said that the userIsRegistered variable cannot be moved into Form.jsx
//so to get this into our Form component, we have to pass it over as a prop, so
//to do this, we add a new prop below and then access it in Form.jsx

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
