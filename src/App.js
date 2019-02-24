import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import Menu from "react-burger-menu/lib/menus/slide";

import "./App.css";
import sideBarMenuStyles from "./sideBarMenu.css";

import { useTranslation } from "react-i18next";

export function App() {
  const { t, i18n } = useTranslation("translations");
  const { isSideBarOpen, SetSideBarOpen } = useState(false);
  return (
    <div className="App">
      <div className="App-menu">
        <ButtonToolbar>
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
      </div>

      <Menu
        isOpen={isSideBarOpen}
        styles={sideBarMenuStyles}
        className={"my-sideBarMenu"}
        burgerButtonClassName={"my-burgerButton"}
      >
        <a id="home" className="menu-item" href="/">
          {t("home")}
        </a>
        <a id="about" className="menu-item" href="/about">
          {t("worship")}
        </a>
        <a id="contact" className="menu-item" href="/Contact">
          {t("events")}
        </a>
        <a id="contact" className="menu-item" href="/Contact">
          {t("contact")}
        </a>
        <a id="contact" className="menu-item" href="/Contact">
          {t("video")}
        </a>
      </Menu>

      <header className="App-header">
      <Navbar expand="lg" sticky="top" bg="dark" >
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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

        <br />
        <h1>{t("title")}</h1>
      </header>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=".\pictures\Eric.webp"
            alt="First slide alt"
          />
          <Carousel.Caption>
            <p>Welcome!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=".\pictures\Sarah.webp"
            alt="Second slide alt"
          />
          <Carousel.Caption>
            <p>Summer camp</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=".\pictures\Vincent.webp"
            alt="Second slide alt"
          />
          <Carousel.Caption>
            <p>Summer camp</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Jumbotron>
        <h1>欢迎</h1>
        <p>
          本教会于1995年9月成立于渥太华大学附近，为母堂（渥太华华人宣道会）针对国语及校园事工的植堂计划。
        </p>
      </Jumbotron>
    </div>
  );
}
