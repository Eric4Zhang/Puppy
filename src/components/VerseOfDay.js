import React from "react";
import Card from "react-bootstrap/Card";

import { useTranslation } from "react-i18next";

export default function VerseOfDay() {
  const { t, i18n } = useTranslation("translations");
  return (
    <div className="d-flex justify-content-center bg-light shadow mb-4 mx-2">
      <Card bg="light">
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
