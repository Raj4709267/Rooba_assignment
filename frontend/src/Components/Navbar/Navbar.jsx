import React from "react";
import "./Navbar.css";
import { IoAddCircleSharp, IoCaretDownOutline } from "react-icons/io5";
import GirlIcon from "../../Assets/Vector.svg";
import DP from "../../Assets/display_picture.svg";
import LightBackgroundDiv from "../CommonComponents/LightBackgroundDiv/LightBackgroundDiv";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <LightBackgroundDiv styles={{ padding: "14px", borderRadius: "12px" }}>
          <img src={GirlIcon} alt="girl-icon" />
        </LightBackgroundDiv>
        <p style={{ fontSize: "20px", fontWeight: "600" }}>Boro Team</p>
        <LightBackgroundDiv styles={{ padding: "4px", borderRadius: "4px" }}>
          <IoCaretDownOutline />
        </LightBackgroundDiv>
        <IoAddCircleSharp size={"1.5rem"} color="var(--primary-color)" />
      </div>
      <div className="navbar-content">
        <img src={DP} alt="Display icon" />
        <p style={{ fontSize: "20px", fontWeight: "600" }}>Zahra hasht..</p>
        <LightBackgroundDiv styles={{ padding: "4px", borderRadius: "4px" }}>
          <IoCaretDownOutline />
        </LightBackgroundDiv>
      </div>
    </div>
  );
};

export default Navbar;
