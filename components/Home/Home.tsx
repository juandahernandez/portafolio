"use client";
import React from "react";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Container from "../Utils/Container";
import { subtitleData } from "../Utils/subtitleData";
import "./home.css";

const Home = () => {
  const { t } = useTranslation();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <Container>
      <div className="cover-container">
        <video className="video" src="/coverHome.mp4" autoPlay loop muted />
        <div
          className="content-name"
          style={{
            boxShadow: `inset 0 0 0 1000px ${
              darkMode ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.6)"
            }`,
          }}
        >
          <h2
            className="title"
            style={{ textShadow: `-4px -4px ${darkMode ? "white" : "black"}` }}
          >
            {t("name")}
          </h2>
          <h4
            className="list-container"
            style={{ textShadow: `-2px -2px ${darkMode ? "white" : "black"}` }}
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
    </Container>
  );
};

export default Home;
