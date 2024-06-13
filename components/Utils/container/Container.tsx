"use client";
import React, { FC, ReactNode } from "react";
import ParticlesLib from "../../Particles/Particles";
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
        className={`content-container ${
          darkMode ? "content-container-dark" : "content-container-light"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
