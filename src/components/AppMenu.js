import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

export default function AppMenu() {
  const { t, i18n } = useTranslation("translations");
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="shadow">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">{t("home")}</Nav.Link>
          <Nav.Link href="#about">{t("about")}</Nav.Link>
          <Nav.Link href="#participate">{t("participate")}</Nav.Link>
          <Nav.Link href="#mission">{t("mission")}</Nav.Link>
          <Nav.Link href="#resources">{t("resource")}</Nav.Link>
          <Nav.Link href="#connect">{t("connect")}</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
      <Form inline className="float-md-right">
          <Button
            variant="outline-success"
            onClick={() => i18n.changeLanguage("cn")}
            className="mx-1"
          >
            中文
          </Button>
        
          <Button
        variant="outline-success"
        onClick={() => i18n.changeLanguage("en")}
      >
        English
      </Button>
          
        </Form>
    </Navbar>
  );
}
