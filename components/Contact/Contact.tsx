"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import ContactIcons from "./ContactIcons";
import Container from "../Utils/Container";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import "./contact.css";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "";

if (!serviceId || !templateId || !userId) {
  throw new Error("Environment variables for EmailJS are missing");
}

const Contact = () => {
  const { t } = useTranslation();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        form,
        templateId
      );

      console.log("SUCCESS!", response.status, response.text);
      setShowSuccessAlert(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("FAILED...", error);
      setShowErrorAlert(true);

      setTimeout(() => {
        setShowErrorAlert(false);
        setShowSuccessAlert(false);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="contac-container"
        sx={{
          background: darkMode
            ? "rgba(0, 0, 0, 0.2)"
            : "rgba(255, 255, 255, 0.5)",
        }}
      >
        {showSuccessAlert && (
          <Alert severity="success" sx={{ background: "#9FE692" }}>
            {t("succes-alert")}
          </Alert>
        )}
        {showErrorAlert && (
          <Alert severity="error" sx={{ background: "#EF5D66" }}>
            {t("error-alert")}
          </Alert>
        )}
        <Typography variant="h5" component="h1" gutterBottom>
          {t("form-title")}
        </Typography>
        <TextField
          label={t("name-label")}
          variant="outlined"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextField
          label={t("email-label")}
          variant="outlined"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          sx={{ margin: "10px 0px" }}
          required
        />
        <TextField
          label={t("message-label")}
          variant="outlined"
          name="message"
          value={form.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        <Button
          style={{
            width: "20%",
            margin: "auto",
            marginTop: 10,
            background: "rgba(38, 161, 43, 0.91)",
          }}
          type="submit"
          variant="contained"
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={20} /> : `${t("form-button")}`}
        </Button>
      </Box>
      <ContactIcons />
    </Container>
  );
};

export default Contact;
