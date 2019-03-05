import React from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useTranslation } from "react-i18next";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Banner(props) {
  const { t, i18n } = useTranslation("translations");
  return (
    <Jumbotron className="App-header shadow mb-4 mx-2" id={props.id}>
      {/* <Image src=".\pictures\omacbanner-b.png" rounded fluid/> */}
      <Row className="m-1">
        <Col>
          <Image src=".\assets\imgs\omacIcon.png" rounded fluid />
        </Col>
        <Col xs={8} className="p-2">
          <h1 className="my-title">{t("title")}</h1>
        </Col>
      </Row>
    </Jumbotron>
  );
}
