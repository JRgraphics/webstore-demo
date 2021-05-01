import React from "react";

// Components
import Button from "./Button";

// Translation
import i18n from "../i18n";
import i18next from "i18next";

const LanguageSelection = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const LanguageButton = ({ language = "en" }) => {
    return (
      <Button
        buttonClassName={
          "button--transparent button__translation " +
          (i18next.language === language
            ? "button__translation--activated"
            : "")
        }
        buttonContent={language.toUpperCase()}
        onClick={() => changeLanguage(language)}
      />
    );
  };

  return (
    <div className="language-selection__container">
      <LanguageButton language={"en"} />
      <LanguageButton language={"fi"} />
    </div>
  );
};
export default LanguageSelection;
