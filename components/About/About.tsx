"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Box, Button, Typography } from "@mui/material";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import ParticlesLib from "../Particles/Particles";
import "./about.css";

const About = () => {
  const { t } = useTranslation();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div className="about-container">
      <ParticlesLib />
      <Box
        className="content-container"
        sx={{
          color: darkMode ? "black" : "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-around" },
            alignItems: "center",
            borderRadius: "5px",
            border: `2px solid ${darkMode ? "#1CDE08 " : "black"}`,
            background: darkMode
              ? "linear-gradient(90deg, rgba(132,223,51,1) 0%, rgba(205,227,188,1) 99%, rgba(136,166,95,1) 100%)"
              : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,212,13,1) 100%, rgba(0,212,255,1) 100%)",
            padding: "15px",
          }}
        >
          <Box style={{ margin: "20px 0px" }}>
            <Image
              className="image-content"
              src="/Image1.jpg"
              alt={"Image About"}
              width={320}
              height={200}
            />
          </Box>
          <Box
            className="text-container"
            sx={{ width: { xs: "85%", md: "40%" } }}
          >
            <Typography className="text-content">{t("description")}</Typography>
            <Button sx={{ color: darkMode ? "black" : "white" }}>
              {t("about-button")}
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default About;
