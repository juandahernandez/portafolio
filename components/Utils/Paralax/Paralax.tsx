import React, { FC } from "react";
import { Avatar, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import "./paralax.css";

interface ParalaxProps {
  message: string;
  href: string;
}

const Paralax: FC<ParalaxProps> = ({ message, href }) => {
  const { t } = useTranslation();

  return (
    <div className="paralax-content">
      <section className="background-img">
        <div className="container-contact-paralax">
          <div className="contac-paralax-content">
            <h2>{t(message)} !!!</h2>
            <IconButton
              color="inherit"
              component="a"
              href={href}
              target="_blank"
            >
              <Avatar sx={{ backgroundColor: "#25d366", color: "white" }}>
                <WhatsAppIcon />
              </Avatar>
            </IconButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paralax;
