import "./App.css";

import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "./Home";
import Scripture from "./components/ReadScripture/Scripture";
import Contact from "./components/Contact";

export function App() {  
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/index.html" component={Home}/>
        <Route exact path="/bible" component={Scripture}/>   
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      
    </div>
  );
}
