import React from "react";
import { IconButton, Avatar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { socialMediaLinks } from "../Utils/data/Contact";
import "./contactIcons.css";

const ContactIcons = () => {
  const iconData = [
    { icon: <GitHubIcon />, link: socialMediaLinks.GitHub, bgColor: "#333" },
    {
      icon: <WhatsAppIcon />,
      link: socialMediaLinks.WhatsApp,
      bgColor: "#25d366",
    },
    {
      icon: <LinkedInIcon />,
      link: socialMediaLinks.LinkedIn,
      bgColor: "#0077b5",
    },
  ];

  return (
    <div className="contact-icons-container">
      {iconData.map((item, index) => (
        <IconButton
          key={index}
          color="inherit"
          component="a"
          href={item.link}
          target="_blank"
        >
          <Avatar sx={{ backgroundColor: item.bgColor, color: "white" }}>
            {item.icon}
          </Avatar>
        </IconButton>
      ))}
    </div>
  );
};

export default ContactIcons;
