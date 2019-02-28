import React from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { useTranslation } from "react-i18next";

export default function LanguageChooser() {
  const { t, i18n } = useTranslation("translations");
  return (
    <ButtonToolbar className="mt-2 bg-light my-toolbar">
      <Button
        variant="outline-success"
        onClick={() => i18n.changeLanguage("en")}
      >
        English
      </Button>
      <Button
        variant="outline-success"
        onClick={() => i18n.changeLanguage("cn")}
      >
        中文
      </Button>
    </ButtonToolbar>
  );
}
