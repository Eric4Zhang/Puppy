import React from "react";
import Col from "react-bootstrap/Col";

import { PhoneCall, Mail, Home } from "react-feather";

export default function MyFooter(props) {
  return (
    <footer className="App-header" id={props.id}>
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
  );
}
