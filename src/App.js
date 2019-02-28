import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";

import "./App.css";

import { useTranslation } from "react-i18next";
import LanguageChooser from "./components/LanguageChooser";
import AppMenu from "./components/AppMenu";
import Banner from "./components/Banner";
import VerseOfDay from "./components/VerseOfDay";
import MyCarousel from "./components/MyCarousel";
import MyFooter from "./components/MyFooter";
import VideoCollection from "./components/VideoCollection";

export function App() {
  const { t, i18n } = useTranslation("translations");
  const { isSideBarOpen, SetSideBarOpen } = useState(false);
  return (
    <div className="App">
      <LanguageChooser />
      <AppMenu />
      <Banner id="home"/>
      <VerseOfDay />
      <MyCarousel />
      <Jumbotron>
        <h1>欢迎</h1>
        <p>
          本教会于1995年9月成立于渥太华大学附近，为母堂（渥太华华人宣道会）针对国语及校园事工的植堂计划。
        </p>
      </Jumbotron>
      <VideoCollection id="video"/>

      <MyFooter id="contact"/>
    </div>
  );
}
