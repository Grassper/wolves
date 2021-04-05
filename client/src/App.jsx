import React from "react";
import "./App.css";

// importing components
import Homepage from "./pages/homepage/homepage.pages";
import PostPage from "./pages/postpage/postpage.pages";
import Header from "./components/header/header.component";
import SignInAndSignUP from "./pages/Sign-inandSign-up/Sign-in-and-Sign-up.component";

// importing router
import { Route, Switch, Redirect } from "react-router-dom";

const App = ({ currentUser }) => {
  return (
    <div className="App">
      <div className="ApplicationContainer">
        <Header />
        <Switch>
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUP />
            }
          />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/:postId" component={PostPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
