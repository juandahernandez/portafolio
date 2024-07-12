"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Container from "../Utils/container/Container";
import { experinceList } from "../Utils/data/ExperienceData";
import Text from "../Utils/text/Text";
import List from "../Utils/list/List";
import Button from "../Utils/button/Button";
import Paralax from "../Utils/Paralax/Paralax";
import RecomendationDialog from "../Utils/ImageDialog";
import "./experience.css";

const Experience = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttons = [
    {
      text: "button-see-letter-recommendation",
      onClick: handleClickOpen,
    },
    {
      text: "button-download-letter-recommendation",
      href: "/workingLetter.pdf",
      download: true,
    },
    {
      text: "button-visit-web",
      href: "https://www.isanda.co/",
      target: "_blank",
    },
  ];
  return (
    <Container>
      <div className="experience-container">
        <Text text={t("experience-description")} />
        <div className="list-container">
          <List options={experinceList} />
          <a href="https://www.isanda.co/" target="_blank">
            <Image
              src="/isanda.png"
              alt={"Image About"}
              width={200}
              height={250}
            />
          </a>
        </div>
        <Text text={t("experience-conclusion")} />
        <div style={{ margin: "20px 0px" }}>
          <Button buttons={buttons} />
        </div>
      </div>
      <Paralax message="experience-message" href="https://wa.me/3192028840" />
      <RecomendationDialog
        open={open}
        handleClose={handleClose}
        imageUrl="/workingLetter.jpeg"
      />
    </Container>
  );
};

export default Experience;
