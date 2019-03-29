import "./App.css";

import MyFooter from "./components/MyFooter";

import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "./Home";
import Scripture from "./components/ReadScripture/Scripture";

export function App() {  
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route exact path="/omac-app" component={Home}/>        
        <Route path="/omac-app/bible" component={Scripture}/>      
      </Switch>
      <MyFooter id="contact" />
    </div>
  );
}
