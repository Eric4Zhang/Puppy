import "./App.css";

import MyFooter from "./components/MyFooter";

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
      <Route exact path="/omac-app/index.html" component={Home}/>
        <Route exact path="/omac-app" component={Home}/>        
        <Route path="/omac-app/bible" component={Scripture}/>   
        <Route path="/omac-app/contact" component={Contact}/>
      </Switch>
      <MyFooter id="contact" />
    </div>
  );
}
