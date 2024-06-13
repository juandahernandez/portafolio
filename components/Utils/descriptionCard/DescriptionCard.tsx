import React, { FC } from "react";
import Image from "next/image";
import Text from "../../Utils/text/Text";
import Button, { ButtonContent } from "../button/Button";
import "./descriptionCard.css";

interface DescriptionCardProps {
  darkMode: boolean;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  widthImage?: number | `${number}` | undefined;
  heightImage?: number | `${number}` | undefined;
  buttons?: ButtonContent[];
  reverseOrder?: boolean;
}

const DescriptionCard: FC<DescriptionCardProps> = ({
  darkMode,
  title,
  description = "",
  imageSrc = "",
  imageAlt = "Image",
  widthImage = 250,
  heightImage = 250,
  buttons = [],
  reverseOrder = false,
}) => {
  return (
    <div
      className={`description-card-container ${
        darkMode ? "description-card-dark" : "description-card-light"
      }`}
    >
      <div
        className={`description-card-content ${
          reverseOrder && "card-content-reverse"
        }`}
      >
        <div className="text-card-content">
          <h3>{title}</h3>
          <Text text={description} style={{ margin: "50px 0px" }} />
          <Button buttons={buttons} />
        </div>
        <Image
          className="image-card-content"
          src={imageSrc}
          alt={imageAlt}
          width={widthImage}
          height={heightImage}
        />
      </div>
    </div>
  );
};

export default DescriptionCard;
