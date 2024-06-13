import React, { FC } from "react";
import "./text.css";

interface TextProps {
  text: string;
  style?: React.CSSProperties;
}

const Text: FC<TextProps> = ({ text, style }) => {
  return (
    <p className="text-content" style={style}>
      {text}
    </p>
  );
};

export default Text;
