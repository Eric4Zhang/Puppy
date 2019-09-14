import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useTranslation } from "react-i18next";

export default function AppMenu() {
  const { t, i18n } = useTranslation("translations");
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="shadow">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="#" className="d-none">
      <Image src="/assets/imgs/omacicon.png" width="30" />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">{t("home")}</Nav.Link>
          <Nav.Link href="#about">{t("about")}</Nav.Link>
          <Nav.Link href="#participate">{t("participate")}</Nav.Link>
          <Nav.Link href="#mission">{t("mission")}</Nav.Link>
          <Nav.Link href="#resources">{t("resource")}</Nav.Link>
          <Nav.Link href="contact">{t("connect")}</Nav.Link>
          <Nav.Link href="bible">读经</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Form inline className="float-md-right d-none">
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
