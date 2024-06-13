"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import ServiceDialog from "./ServiceDialog";
import {
  modalsServiceData,
  servicesButtons,
} from "../../Utils/data/homeData/modalsServiceData";
import "./services.css";

const Services = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState<boolean>(false);
  const [currentModalIndex, setCurrentModalIndex] = useState<number | null>(
    null
  );

  const handleClickOpen = (index: number) => {
    setCurrentModalIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentModalIndex(null);
  };

  return (
    <div className="services-container">
      {servicesButtons.map((service, index: number) => {
        return (
          <div key={index}>
            <Button
              className="button-service"
              variant="contained"
              onClick={() => handleClickOpen(index)}
            >
              {t(service)}
            </Button>
          </div>
        );
      })}
      {currentModalIndex !== null && (
        <ServiceDialog
          open={open}
          handleClose={handleClose}
          title={modalsServiceData[currentModalIndex].title}
          description={modalsServiceData[currentModalIndex].description}
          options={modalsServiceData[currentModalIndex].options}
          conclusion={modalsServiceData[currentModalIndex].conclusion}
        />
      )}
    </div>
  );
};

export default Services;
