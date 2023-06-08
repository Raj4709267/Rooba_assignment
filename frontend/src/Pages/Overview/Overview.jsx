import React, { useState } from "react";
import "./Overview.css";
import { IoHelpCircle } from "react-icons/io5";
import LineChart from "../../Components/LineChart/LineChart";
import {
  IoBarChart,
  IoCalendar,
  IoPerson,
  IoHelpCircleSharp,
  IoCaretUpOutline,
  IoCaretDownOutline,
} from "react-icons/io5";
import { FaHourglass } from "react-icons/fa";

const Overview = () => {
  const [selectedFilter, setSelectedFilter] = useState("30 days");
  const dayFilterList = ["30 days", "60 days", "6 months", "12 months"];

  const reportData = [
    {
      icon: <IoBarChart />,
      name: "Bounce Rate",
      value: "42.34%",
      percentage: "12%",
      percentageIncrease: true,
    },
    {
      icon: <IoCalendar />,
      name: "Pages per visit",
      value: "42.34%",
      percentage: "13%",
      percentageIncrease: true,
    },
    {
      icon: <IoPerson />,
      name: "Total Monthly Visit",
      value: "326.60K",
      percentage: "21%",
      percentageIncrease: false,
    },
    {
      icon: <FaHourglass />,
      name: "Avg.Visit Duration",
      value: "00:03:27",
      percentage: "24%",
      percentageIncrease: false,
    },
  ];

  return (
    <div className="overview-main-container">
      <div className="overview-header-container">
        <div className="overview-header-text">
          <p>Poroject statistic</p>
          <IoHelpCircle
            style={{ fontSize: "1.5rem", color: "var(--primary-color)" }}
          />
        </div>
        <div className="overview-header-filter">
          {dayFilterList.map((item) => {
            return (
              <div
                style={{
                  borderRadius: "32px",
                  padding: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  backgroundColor: `${
                    selectedFilter !== item
                      ? "var(--primary-background)"
                      : "var(--primary-color)"
                  }`,
                  color: `${selectedFilter === item ? "white" : ""}`,
                }}
                onClick={() => {
                  setSelectedFilter(item);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="overview-content-container">
        <div>
          <LineChart />
        </div>
        <div className="overview-report-container">
          {reportData.map((item, index) => {
            return (
              <div key={index} className="overview-report-item">
                <div className="overview-report-top">
                  {item.icon}
                  <div className="overview-report-indicator">
                    {item.percentageIncrease ? (
                      <IoCaretUpOutline color="green" />
                    ) : (
                      <IoCaretDownOutline color="red" />
                    )}
                    <p>{item.percentage}</p>
                  </div>
                </div>
                <p className="overview-report-value">{item.value}</p>
                <div className="overview-report-name">
                  <p>{item.name}</p>
                  <IoHelpCircleSharp />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ height: "200px", background: "red", marginTop: "24px" }}>
        Footer
      </div>
    </div>
  );
};

export default Overview;
