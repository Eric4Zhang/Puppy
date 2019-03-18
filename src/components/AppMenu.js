import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useTranslation } from "react-i18next";

export default function AppMenu() {
  const { t, i18n } = useTranslation("translations");
  return (
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
          <Nav.Link href="#about">{t("about")}</Nav.Link>
          <Nav.Link href="#participate">{t("participate")}</Nav.Link>
          <Nav.Link href="#mission">{t("mission")}</Nav.Link>
          <Nav.Link href="#resources">{t("resource")}</Nav.Link>
          <Nav.Link href="#connect">{t("connect")}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
