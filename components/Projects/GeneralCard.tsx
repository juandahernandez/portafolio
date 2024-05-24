import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Image from "next/image";
import DescriptionCardDialog from "./DescriptionCard";
import "./GeneralCard.css";

export interface GeneralCardProps {
  firstImageUrl: string;
  secondImageUrl?: string;
  alt?: string;
  title: string;
  description?: string;
}

const GeneralCard: FC<GeneralCardProps> = ({
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
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {title ? title : "Title Project"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            sx={{
              margin: "auto",
              background: "rgba(38, 161, 43, 0.91)",
            }}
            onClick={handleClickOpen}
          >
            {t("projects-button")}
          </Button>
        </CardActions>
      </Card>
      <DescriptionCardDialog
        open={open}
        handleClose={handleClose}
        imageUrl={firstImageUrl}
        title={title}
        descripction={description}
      />
    </div>
  );
};

export default GeneralCard;
