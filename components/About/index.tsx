"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import Container from "../Utils/container/Container";
import CvDialog from "../Utils/ImageDialog";
import AnimationCard from "../Utils/animationCard/AnimationCard";
import { hobbiesData } from "../Utils/data/aboutData";
import DescriptionCard from "../Utils/descriptionCard/DescriptionCard";
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

  const buttons = [
    {
      text: "see-cv",
      onClick: handleClickOpen,
    },
    {
      text: "download-cv",
      href: "/cv.pdf",
      download: true,
    },
  ];

  return (
    <Container>
      <div className="about-container">
        <div className="description-container">
          <DescriptionCard
            darkMode={darkMode}
            title={t("about")}
            description={t("about-description")}
            imageSrc="/aboutImage.png"
            imageAlt="Image About"
            widthImage={350}
            heightImage={300}
            buttons={buttons}
          />

          <DescriptionCard
            darkMode={darkMode}
            description={t("about-hobbies")}
            imageSrc="/aboutImage2.png"
            imageAlt="Image About"
            widthImage={300}
            heightImage={230}
            reverseOrder={true}
          />
        </div>
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {hobbiesData?.map((project, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <AnimationCard
                title={project?.title}
                description={project?.description}
                firstImageUrl={project?.firstImageUrl}
                secondImageUrl={project?.secondImageUrl}
                alt={project?.alt}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <CvDialog open={open} handleClose={handleClose} imageUrl="/cv.png" />
    </Container>
  );
};

export default About;
