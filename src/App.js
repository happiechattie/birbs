import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import New from "./New";
import Random from "./Random";

function App() {

  const [birbs, setBirbs] = useState([]);

  useEffect(() => {
      fetch('http://localhost:4000/birbs')
      .then(r => r.json())
      .then(data => {
        const birbsCopy = [...data];
        setBirbs(birbsCopy.reverse())})
  }, [])

  function handleNew(birb){
    setBirbs([birb, ...birbs]);
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home birbs={birbs} />
        </Route>
        <Route exact path="/new">
          <New handleNew={handleNew}/>
        </Route>
        <Route exact path="/birb">
          <Random birbs={birbs} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
