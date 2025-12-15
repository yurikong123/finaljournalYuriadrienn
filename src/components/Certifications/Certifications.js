import React from "react";

import classes from "./certifications.module.css";
import CreateCertificate from "./CreateCertificate";
import CertificatesData from "../../Data/CertificatesData";
import { useSelector } from "react-redux";

const Certifications = (props) => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  let certificationsList = CertificatesData.certificationsList;

  return (
    <section 
      id="certificate" 
      style={{ "--header-color": nonThemeColor }} // <-- CSS variable for header color
    >
      <h1 className={classes.header}>Certificates</h1> {/* <-- remove inline style */}
      <div className={classes.certificateCard}>
        {certificationsList.map((item, index) => (
          <CreateCertificate key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
