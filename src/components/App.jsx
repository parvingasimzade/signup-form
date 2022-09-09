import React from "react";
import Form from "./Form";

var userIsRegistered = false; //to see login set "true"

function App() {
    return (
        <div className="container">
            <Form isRegistered = {userIsRegistered} />
        </div>
    );
}

export default App;