import React, { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostDetail from "./components/PostDetails/PostDetail";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div
      // style={{ backgroundColor: nightMode ? "black" : "white" }}
      className="app"
    >
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/posts/:id">
            <PostDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// style={{ backgroundColor: "black" }}
