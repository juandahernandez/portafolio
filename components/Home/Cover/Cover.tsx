import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { subtitleData } from "../../Utils/data/homeData/subtitleData";
import "./cover.css";

interface CoverProps {
  darkMode: boolean;
}

const Cover: FC<CoverProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div className="cover-container">
      <video className="video" src="/coverHome.mp4" autoPlay loop muted />
      <div
        className={`content-name ${
          darkMode ? "content-name-dark" : "content-name-light"
        }`}
      >
        <h1
          className="title"
          style={{
            textShadow: `-4px -4px ${darkMode ? "white" : "black"}`,
          }}
        >
          {t("name")}
        </h1>
        <h4
          className="list-container"
          style={{
            textShadow: `-2px -2px ${darkMode ? "white" : "black"}`,
          }}
        >
          {t("profesion")}
          <div className="list">
            {subtitleData.map((item: string, index: number) => (
              <div className="item" key={index}>
                {item}
              </div>
            ))}
          </div>
        </h4>
      </div>
    </div>
  );
};

export default Cover;
