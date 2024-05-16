"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import "./home.css";
import ParticlesLib from "../Particles/Particles";

const Home = () => {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState<number>(0);

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSize = windowWidth > 768 ? 200 : 100;

  const items = ["JavaScript", "TypeScript", "ReactJS", "NodeJS"];

  return (
    <div className="home-container">
      <ParticlesLib />
      <div className="content-container">
        <div
          className="content"
          style={{
            border: `2px solid ${darkMode ? "#1CDE08 " : "black"}`,
            background: darkMode
              ? "linear-gradient(90deg, rgba(132,223,51,1) 0%, rgba(205,227,188,1) 99%, rgba(136,166,95,1) 100%)"
              : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,212,13,1) 100%, rgba(0,212,255,1) 100%)",
          }}
        >
          <div
            className="content-name"
            style={{ color: darkMode ? "black" : "white" }}
          >
            <h2>{t("name")}</h2>
            <h5 className="list-container">
              {t("profesion")}
              <div className="list">
                {items.map((item, index) => (
                  <div className="item" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </h5>
          </div>
          <div className="content-image">
            <Image
              style={{ borderRadius: "5px", marginBottom: "15px" }}
              src="/Image1.jpg"
              alt={"Image Home"}
              width={imageSize}
              height={imageSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
