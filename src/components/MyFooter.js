import React from "react";
import Col from "react-bootstrap/Col";

import { PhoneCall, Mail, Home } from "react-feather";

export default function MyFooter(props) {
  return (
    <footer className="App-header mt-2" id={props.id}>
      <Col>
        <h4> {"\u00A9"} 2019 Ottawa Mandarin Alliance Church</h4>
        <address className="address">
          <p><PhoneCall />: (613)236-7656</p> 
          <p><Mail />: <a href="mailto:#">omac.secretary@gmail.com</a></p>
          <p><Home />: 550 Codd's Rd, Ottawa, ON K1K 2G8</p>
        </address>
      </Col>
    </footer>
  );
}
