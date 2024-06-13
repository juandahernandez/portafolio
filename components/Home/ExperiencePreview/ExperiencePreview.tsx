import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import DescriptionCard from "../../Utils/descriptionCard/DescriptionCard";
import "./experiencePreview.css";

interface ExperienceProps {
  darkMode: boolean;
}

const ExperiencePreview: FC<ExperienceProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const buttons = [
    {
      text: t("see-more-button"),
      href: "/experience",
    },
  ];
  return (
    <DescriptionCard
      darkMode={darkMode}
      title={t("experience-preview-title")}
      description={t("experience-preview-home")}
      imageSrc="/isandaSF.png"
      widthImage={180}
      heightImage={200}
      buttons={buttons}
    />
  );
};

export default ExperiencePreview;
