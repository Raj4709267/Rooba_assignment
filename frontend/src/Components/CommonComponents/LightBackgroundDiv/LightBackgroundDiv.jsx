import React from "react";
import "../../../index.css";

const LightBackgroundDiv = ({ children, styles }) => {
  return (
    <div style={{ backgroundColor: "var(--primary-background)", ...styles }}>
      {children}
    </div>
  );
};

export default LightBackgroundDiv;
