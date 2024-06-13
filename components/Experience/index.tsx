import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Container from "../Utils/container/Container";
import { experinceList } from "../Utils/data/ExperienceData";
import Text from "../Utils/text/Text";
import List from "../Utils/list/List";
import Button from "../Utils/button/Button";
import Paralax from "../Utils/Paralax/Paralax";
import "./experience.css";

const Experience = () => {
  const { t } = useTranslation();

  const buttons = [
    {
      text: "Ver carta de recomendacion",
    },
    {
      text: "descargar carta de recomendacion",
    },
    {
      text: "Visita la web de Isanda",
      href: "https://example.com",
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
              className="image-content"
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
    </Container>
  );
};

export default Experience;
