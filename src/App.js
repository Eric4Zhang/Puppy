import "./App.css";

import MyFooter from "./components/MyFooter";

import React from "react";
import { Route} from "react-router-dom";
import Home from "./Home";
import Scripture from "./components/ReadScripture/Scripture";

export function App() {  
  return (
    <div className="App">
        <Route exact path="/omac-app" component={Home}/>
        <Route path="/omac-app/bible" component={Scripture}/>

      <MyFooter id="contact" />
    </div>
  );
}
