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
import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import { BookOpen, Clock, Users, Globe } from "react-feather";


export function App() {
  const { t, i18n } = useTranslation("translations");
  return (
    <div className="App">
      <LanguageChooser />
      <AppMenu />
      <Banner id="home" />

      <Jumbotron className="shadow mb-5" id='about' bg='light'>
        <Figure>
          <Figure.Image src='./assets/imgs/cross-2598303_1920.jpg' fluid />
          <Figure.Caption>
          <h2 className="sidelines"><span>{t('about')}</span></h2>
          </Figure.Caption>
        </Figure>
        <CardDeck>
          <Card bg='light' border='primary'>
            <Card.Body>
              <BookOpen size={48}/>
              <Card.Title>{t('beliefs')}</Card.Title>
            </Card.Body>
          </Card>

          <Card bg='light' border='primary'>
            <Card.Body>
              <Clock size={48}/>
              <Card.Title>{t('history')}</Card.Title>
            </Card.Body>
          </Card>


          <Card bg='light' border='primary'>
            <Card.Body>
              <Users size={48}/>
              <br></br>
              <Card.Title>{t('staff')}</Card.Title>
            </Card.Body>
          </Card>

          <Card bg='light' border='primary'>
            <Card.Body>
              <Globe size={48}/>
              <br></br>
              <Card.Title>{t('community')}</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </Jumbotron>
      <VerseOfDay />
      <MyCarousel jsonFileUrl="./assets/documents/events-images.json" />
      <Jumbotron className="shadow mb-5" id='about'>
        <h1>欢迎</h1>
        <p>
          本教会于1995年9月成立于渥太华大学附近，为母堂（渥太华华人宣道会）针对国语及校园事工的植堂计划。
        </p>
      </Jumbotron>
      <VideoCollection id="resource" />

      <MyFooter id="contact" />
    </div>
  );
}
