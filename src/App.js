import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import New from "./New";
import Search from "./Search";
import Random from "./Random";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new">
          <New />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/birb">
          <Random />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
