import React from "react";
import Card from "react-bootstrap/Card";

import { useTranslation } from "react-i18next";

export default function VerseOfDay() {
  const { t, i18n } = useTranslation("translations");
  return (
    <div className="d-flex justify-content-center bg-light">
      <Card bg="light" style={{ width: "40rem" }}>
        <Card.Img src=".\assets\imgs\heaven.jpg" alt="background picture" />
        <Card.ImgOverlay>
          <Card.Body>
            <Card.Text className="blockquote">{t("verseOfDay")}</Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
