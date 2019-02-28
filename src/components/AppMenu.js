import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
          <Nav.Link href="#contact">{t("about")}</Nav.Link>
          <Nav.Link href="#events">{t("worship")}</Nav.Link>
          <Nav.Link href="#About">{t("events")}</Nav.Link>
          <Nav.Link href="#contact">{t("contact")}</Nav.Link>
          <Nav.Link href="#video">{t("video")}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
