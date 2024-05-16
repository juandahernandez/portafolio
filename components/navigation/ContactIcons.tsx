import React from "react";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { MenuItem, IconButton, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactIcons = () => {
  const theme = useTheme();

  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <Box
      sx={
        isScreenSmall
          ? {}
          : {
              display: "flex",
              background: darkMode ? "#416F3C" : "#D1F1CE",
              border: `2px solid ${darkMode ? "white" : "black"}`,
              color: "black",
              borderRadius: "15px",
              height: "35px",
              padding: "5px 0px",
            }
      }
    >
      <MenuItem>
        <IconButton color="inherit">
          <FacebookIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <TwitterIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <InstagramIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <GitHubIcon />
        </IconButton>
      </MenuItem>
    </Box>
  );
};

export default ContactIcons;
