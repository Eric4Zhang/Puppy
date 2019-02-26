import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import { PhoneCall, Mail, Home } from "react-feather";

import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

import Menu from "react-burger-menu/lib/menus/slide";

import "./App.css";
import sideBarMenuStyles from "./sideBarMenu.css";

import { useTranslation } from "react-i18next";

export function App() {
  const { t, i18n } = useTranslation("translations");
  const { isSideBarOpen, SetSideBarOpen } = useState(false);
  return (
    <div className="App">
      <ButtonToolbar className="mt-2 bg-light my-toolbar">
        <Button
          variant="outline-success"
          onClick={() => i18n.changeLanguage("en")}
        >
          English
        </Button>
        <Button
          variant="outline-success"
          onClick={() => i18n.changeLanguage("cn")}
        >
          中文
        </Button>
      </ButtonToolbar>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="light"
        variant="light"  
        className="my-navbar"      
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">{t("home")}</Nav.Link>
            <Nav.Link href="#contact">{t("about")}</Nav.Link>
            <Nav.Link href="#events">{t("worship")}</Nav.Link>
            <Nav.Link href="#About">{t("events")}</Nav.Link>
            <Nav.Link href="#Resources">{t("contact")}</Nav.Link>
            <Nav.Link href="#newbie">{t("video")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="" />
      <header className="App-header">
        <br />

        {/* <Image src=".\pictures\omacbanner-b.png" rounded fluid/> */}
        <Row>
          <Col>
            <Image src=".\pictures\omacIcon.png" rounded fluid />
          </Col>
          <Col>
            <h1 style={{ fontsize: "20vw" }}>{t("title")}</h1>
          </Col>
          <Col />
        </Row>
        <br />
        <Card className="text-center" bg="light" style={{ width: "flex" }}>
          <Card.Img src=".\pictures\heaven.jpg" alt="background picture" />
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Text className="blockquote">{t("verseOfDay")}</Card.Text>
            </Card.Body>
          </Card.ImgOverlay>
        </Card>
        <br />
      </header>

      <Carousel indicators={false} controls={false} className="p-2">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=".\pictures\Eric.webp"
            alt="First slide alt"
          />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src=".\pictures\Sarah.webp"
            alt="Second slide alt"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=".\pictures\Vincent.jpg"
            alt="Second slide alt"
          />
        </Carousel.Item>
      </Carousel>

      <Jumbotron>
        <h1>欢迎</h1>
        <p>
          本教会于1995年9月成立于渥太华大学附近，为母堂（渥太华华人宣道会）针对国语及校园事工的植堂计划。
        </p>
      </Jumbotron>

      <ResponsiveEmbed aspectRatio="16by9">
        <iframe
          src="https://www.youtube.com/embed/J7rlk2RLMQc"
          frameBorder="0"
          allowFullScreen="allowFullScreen"
        />
      </ResponsiveEmbed>
      <br />
      <footer className="App-header">
        <Col>
          <h4> {"\u00A9"} 2019 Ottawa Mandarin Alliance Church</h4>
          <address className="address">
            <PhoneCall />: (613)236-7656 <br />
            <Mail />: <a href="mailto:#">omac.secretary@gmail.com</a>
            <br />
            <Home />: 550 Codd's Rd, Ottawa, ON K1K 2G8
          </address>
        </Col>
      </footer>
    </div>
  );
}
