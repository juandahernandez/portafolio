import React, { FC, useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "./GeneralCard.css";
import DescriptionCardDialog from "./DescriptionCard";

export interface GeneralCardProps {
  imageUrl?: string;
  alt?: string;
  title?: string;
}

const GeneralCard: FC<GeneralCardProps> = ({
  imageUrl,
  alt,
  title,
}: GeneralCardProps) => {
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
        sx={{
          maxWidth: 345,
          margin: "auto",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="140"
            image={
              imageUrl
                ? imageUrl
                : "https://tse3.mm.bing.net/th?id=OIP.D6v5iVtPVCStehgZ6WUAlAAAAA&pid=Api&P=0&h=180"
            }
            alt={alt ? alt : "Image"}
          /> */}
          <article style={{ margin: "auto" }}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.LtKouP52P1bw38d8yY2SbQHaFj&pid=Api&P=0&h=180"
              alt="mario"
            />
            <img
              src="https://pluspng.com/img-png/mario-hd-png-mario-png-1840.png"
              alt="mario"
            />
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
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            sx={{ margin: "auto" }}
            onClick={handleClickOpen}
          >
            See more
          </Button>
        </CardActions>
      </Card>
      <DescriptionCardDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default GeneralCard;
