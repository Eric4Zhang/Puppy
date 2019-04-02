import React from "react";
import Col from "react-bootstrap/Col";
import NavLink from "react-bootstrap/NavLink";

import { PhoneCall, Mail, Home, BookOpen } from "react-feather";

export default function MyFooter(props) {
  return (
    <footer
      className="App-header mt-2 fixed-bottom"
      style={{ fontSize: "80%" }}
      id={props.id}
    >
      <Col>
      <a className="mr-2" href="\">
          <Home />
        </a>

        <a href="\omac-app\bible">
          <BookOpen />
        </a>
        
        <h6 style={{fontFamily:"impact"}} className="text-muted"> {"\u00A9"}2019 Ottawa Mandarin Alliance Church</h6>
        <address className="address">
          <p>
            <PhoneCall color="gray"/><span style={{fontFamily:"impact"}} >: (613)236-7656</span> <br />
            <a href="mailto:#"><Mail color="gray"/><span style={{fontFamily:"impact"}} >: omac.secretary@gmail.com</span></a>
            <br />
            <a href="https://goo.gl/maps/tHUx29NyEy62" target="_blank"><Home color="gray"/><span style={{fontFamily:"impact"}} >: 550 Codd's Rd, Ottawa, ON K1K 2G8</span></a>
          </p>
        </address>
      </Col>
    </footer>
  );
}
