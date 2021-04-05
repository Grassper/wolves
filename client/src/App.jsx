import React from "react";
import "./App.css";

// importing components
import Homepage from "./pages/homepage/homepage.pages";
import PostPage from "./pages/postpage/postpage.pages";
import Header from "./components/header/header.component";

const App = () => {
  return (
    <div className="App">
      <div className="ApplicationContainer">
        <Header />
        <PostPage />
      </div>
    </div>
  );
};

export default App;
