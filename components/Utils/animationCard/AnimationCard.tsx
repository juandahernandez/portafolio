import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { Card, CardContent, CardActions } from "@mui/material";
import Image from "next/image";
import AnimationCardDialog from "./AnimationCardDialog";
import Button from "../button/Button";
import "./AnimationCard.css";

export interface GeneralCardProps {
  firstImageUrl: string;
  secondImageUrl?: string;
  alt?: string;
  title: string;
  description?: string;
}

const AnimationCard: FC<GeneralCardProps> = ({
  firstImageUrl,
  secondImageUrl,
  alt = "Image",
  title,
  description,
}: GeneralCardProps) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const { t } = useTranslation();

  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttons = [
    {
      text: t("see-more-button"),
      onClick: handleClickOpen,
    },
  ];

  return (
    <div className="card-container">
      <Card
        className="card-content"
        sx={{ background: darkMode ? "#556752" : "#88BB7F" }}
      >
        <article className="article-container">
          <Image src={firstImageUrl} alt={alt} width={200} height={150} />
          {secondImageUrl && (
            <Image src={secondImageUrl} alt={alt} width={345} height={150} />
          )}
        </article>
        <CardContent>
          <h4>{title ? t(title) : "My hobbie"}</h4>
        </CardContent>
        <CardActions>
          <Button buttons={buttons} />
        </CardActions>
      </Card>
      <AnimationCardDialog
        open={open}
        handleClose={handleClose}
        imageUrl={firstImageUrl}
        title={title}
        descripction={description}
      />
    </div>
  );
};

export default AnimationCard;
