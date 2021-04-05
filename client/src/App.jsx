import React from "react";
import "./App.css";

// importing components
import Homepage from "./pages/homepage/homepage.pages";
import PostPage from "./pages/postpage/postpage.pages";
import Header from "./components/header/header.component";

// importing router
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="ApplicationContainer">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/:postId" component={PostPage}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;
