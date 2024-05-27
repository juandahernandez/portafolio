import React from "react";
import { MenuItem, IconButton, Box, Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { socialMediaLinks } from "../utils/socialMediaLinks";
import "./contactIcons.css";

const ContactIcons = () => {
  const iconData = [
    {
      icon: <FacebookIcon />,
      link: socialMediaLinks.Facebook,
      bgColor: "#3b5998",
    },
    {
      icon: <TwitterIcon />,
      link: socialMediaLinks.Twitter,
      bgColor: "#1da1f2",
    },
    {
      icon: <InstagramIcon />,
      link: socialMediaLinks.Instagram,
      bgColor: "#e4405f",
    },
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
    <Box className="contact-icons-container">
      {iconData.map((item, index) => (
        <MenuItem key={index} style={{ padding: 0 }}>
          <IconButton
            color="inherit"
            component="a"
            href={item.link}
            target="_blank"
          >
            <Avatar sx={{ backgroundColor: item.bgColor, color: "white" }}>
              {item.icon}
            </Avatar>
          </IconButton>
        </MenuItem>
      ))}
    </Box>
  );
};

export default ContactIcons;
