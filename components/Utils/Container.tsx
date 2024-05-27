"use client";
import React, { FC, ReactNode } from "react";
import ParticlesLib from "../Particles/Particles";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import "./container.css";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div className="container">
      <ParticlesLib />
      <div
        className="content-container"
        style={{
          color: darkMode ? "black" : "white",
          border: `2px solid ${darkMode ? "#1CDE08 " : "black"}`,
          background: darkMode
            ? "linear-gradient(90deg, rgba(132,223,51,1) 0%, rgba(205,227,188,1) 99%, rgba(136,166,95,1) 100%)"
            : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,212,13,1) 100%, rgba(0,212,255,1) 100%)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
