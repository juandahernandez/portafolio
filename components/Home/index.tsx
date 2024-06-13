"use client";
import React from "react";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import Cover from "./Cover/Cover";
import ExperiencePreview from "./ExperiencePreview/ExperiencePreview";
import Services from "./Services/Services";
import Paralax from "../Utils/Paralax/Paralax";
import Container from "../Utils/container/Container";
import "./home.css";

const Home = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <Container>
      <Cover darkMode={darkMode} />
      <ExperiencePreview darkMode={darkMode} />
      <Services />
      <Paralax message="contactme-message" href="https://wa.me/3183989073" />
    </Container>
  );
};

export default Home;
