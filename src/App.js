import "./App.css";

import AppMenu from "./components/AppMenu";
import MyCarousel from "./components/MyCarousel";
import MyFooter from "./components/MyFooter";

import React from "react";
import { Route} from "react-router-dom";
import Home from "./Home";
import Scripture from "./components/ReadScripture/Scripture";

export function App() {  
  return (
    <div className="App">
      {/* <LanguageChooser />
      <AppMenu /> */}
      {/* <Banner id="home" /> */}
      <MyCarousel
        jsonFileUrl="./assets/documents/events-images.json"
        id="home"
      />
      <div className="my-navbar w-100" id="myNavbar">
        <AppMenu />
      </div>

      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/omac-app/bible" component={Scripture}/>
      </div>

      <MyFooter id="contact" />
    </div>
  );
}
