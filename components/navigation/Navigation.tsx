"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  MenuItem,
  Avatar,
  Menu,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ContactIcons from "./ContactIcons";
import { useTranslation } from "react-i18next";
import { toggleDarkMode } from "@/slices/theme/ThemeSlice";
import { RootState } from "@/app/store";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const itemsAppBar = [
    {
      name: t("home"),
      url: "/",
    },
    {
      name: t("about"),
      url: "/about",
    },
    {
      name: t("projects"),
      url: "/projects",
    },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
  };

  const buttonText = i18n.language === "es" ? "EN" : "ES";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <ContactIcons />
    </Menu>
  );

  return (
    <div style={{ position: "sticky" }}>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            background: darkMode
              ? "linear-gradient(90deg, rgba(132,223,51,1) 0%, rgba(205,227,188,1) 99%, rgba(136,166,95,1) 100%)"
              : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,212,13,1) 100%, rgba(0,212,255,1) 100%)",
            color: darkMode ? "black" : "white",
            borderBottom: "4px solid #416F3C",
          }}
        >
          <Avatar
            alt=" Xapp"
            src="https://tse4.mm.bing.net/th?id=OIP.7ZSjltZggwTY81ERoVTEtgAAAA&pid=Api&P=0&h=180"
          />

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {itemsAppBar.map((item, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link href={item?.url}>{item.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {itemsAppBar.map((item, index) => (
              <MenuItem
                key={index}
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                <Link href={item?.url}>{item.name}</Link>
              </MenuItem>
            ))}
          </Box>

          <div style={{ display: "flex" }}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <ContactIcons />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
            <button
              style={{
                border: "none",
                background: "inherit",
                fontSize: "15px",
                fontWeight: "bold",
                color: darkMode ? "black" : "white",
                margin: "0px 10px",
              }}
              onClick={toggleLanguage}
            >
              {buttonText}
            </button>
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Navigation;
