"use client";
import React, { useState, useEffect } from "react";
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
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTranslation } from "react-i18next";
import { toggleDarkMode } from "@/slices/theme/ThemeSlice";
import { RootState } from "@/app/store";
import "./navigation.css";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const itemsAppBar = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "about",
      url: "/about",
    },
    {
      name: "experience",
      url: "/experience",
    },
    {
      name: "contact",
      url: "/contact",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && anchorElNav !== null) {
        handleCloseNavMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [anchorElNav]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    console.log(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const buttonText = i18n.language === "es" ? "EN" : "ES";

  return (
    <div style={{ position: "sticky" }}>
      <AppBar position="sticky">
        <Toolbar
          className={`toolbar ${darkMode ? "toolbar-dark" : "toolbar-light"}`}
        >
          <IconButton component="a" href="/">
            <Avatar alt=" Image" src="/logo.png" />
          </IconButton>

          <Box className="items-navigation-mobile">
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {itemsAppBar.map((item, index) => (
                <MenuItem
                  id="menuItem"
                  key={index}
                  onClick={handleCloseNavMenu}
                  className="menu-item-mobile"
                >
                  <Link className="link-menu-mobile" href={item?.url}>
                    {t(item.name)}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="items-navigation">
            {itemsAppBar.map((item, index) => (
              <MenuItem
                key={index}
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                <Link href={item?.url}>{t(item.name)}</Link>
              </MenuItem>
            ))}
          </Box>

          <div style={{ display: "flex" }}>
            <button
              style={{ color: darkMode ? "black" : "white" }}
              className="button-change-language"
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
    </div>
  );
};

export default Navigation;
