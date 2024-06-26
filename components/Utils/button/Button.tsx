import React, { FC } from "react";
import { Button as ButtonMui, ButtonProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./button.css";

export interface ButtonContent {
  text: string;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  target?: string;
}

interface CustomButtonProps extends ButtonProps {
  buttons: ButtonContent[];
}

const Button: FC<CustomButtonProps> = ({ buttons, ...props }) => {
  const { t } = useTranslation();
  return (
    <div className="button-style">
      {buttons.map((button, index) => (
        <ButtonMui
          key={index}
          variant="contained"
          onClick={button.onClick}
          {...props}
          style={{
            ...props.style,
            margin: index > 0 ? 15 : 0,
            background: "rgba(38, 161, 43, 0.91)",
          }}
        >
          {button.href ? (
            <a
              href={button.href}
              download={button.download}
              target={button.target}
              rel={
                button.target === "_blank" ? "noopener noreferrer" : undefined
              }
            >
              {t(button.text)}
            </a>
          ) : (
            t(button.text)
          )}
        </ButtonMui>
      ))}
    </div>
  );
};

export default Button;
