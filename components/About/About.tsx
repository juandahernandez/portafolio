"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Box, Button, Typography } from "@mui/material";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import Container from "../Utils/Container";
import CvDialog from "./CvDialog";
import "./about.css";

const About = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Box className="about-container">
        <h2 style={{ textShadow: `-2px -2px ${darkMode ? "white" : "black"}` }}>
          {t("about")}
        </h2>
        <Box className="about-description-container">
          <Box style={{ margin: "20px 0px" }}>
            <Image
              className="image-content"
              src="/ImageAbout.jpg"
              alt={"Image About"}
              width={300}
              height={230}
            />
          </Box>
          <Box
            className="text-container"
            sx={{ width: { xs: "85%", md: "40%" } }}
          >
            <Typography className="text-content">{t("description")}</Typography>
          </Box>
        </Box>
        <Box>
          <Button
            variant="contained"
            style={{
              background: "rgba(38, 161, 43, 0.91)",
            }}
            onClick={handleClickOpen}
          >
            {t("see-cv")}
          </Button>
          <Button
            variant="contained"
            style={{
              background: "rgba(38, 161, 43, 0.91)",
              marginLeft: 15,
            }}
          >
            <a href="/cv.pdf" download>
              {" "}
              {t("download-cv")}{" "}
            </a>
          </Button>
        </Box>
      </Box>
      <CvDialog open={open} handleClose={handleClose} />
    </Container>
  );
};

export default About;
