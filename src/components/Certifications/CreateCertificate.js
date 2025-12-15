import React from "react";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import classes from "./createCertificate.module.css";
import ThemeData from "../../Data/ThemeData";

const CreateCertificate = ({ item }) => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);
  const activeMode = useSelector((state) => state.mode);

  
  const cardBg =
    activeMode === "light" ? ThemeData.certBgLight : ThemeData.certBgDark;

  return (
    <div
      className={classes.certificate}
      style={{ backgroundColor: cardBg, borderColor: uiColor }}
    >
      {/* Certificate Text */}
      <div className={classes.certText}>
        <h1 style={{ color: nonThemeColor }}>{item.title}</h1>
        <p style={{ color: uiColor }}>{item.instructor}</p>
      </div>

      {/* Button */}
      <div className={classes.certButton}>
        <a href={item.link} target="_blank" rel="noreferrer">
          <Button>View Certificate</Button>
        </a>
      </div>
    </div>
  );
};

export default CreateCertificate;
