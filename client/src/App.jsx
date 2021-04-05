import React from "react";
import "./App.css";

// importing components
import Homepage from "./pages/homepage/homepage.pages";

const App = () => {
  return (
    <div className="App">
      <div className="ApplicationContainer">
        <Homepage />
      </div>
    </div>
  );
};

export default App;
