import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import "./list.css";

interface ListProps {
  options: string[];
}

const List: FC<ListProps> = ({ options }) => {
  const { t } = useTranslation();
  return (
    <ul className="list-content">
      {options.map((option, index) => (
        <li className="list-item" key={index}>
          {t(option)}
        </li>
      ))}
    </ul>
  );
};

export default List;
