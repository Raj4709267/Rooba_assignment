import React from "react";
import "./Traffic.css";
import DoughnutChart from "../DoughnutChart/DoughnutChart";

const Traffic = ({ data }) => {
  return (
    <div className="overview-source-item">
      <div className="overview-source-heading">{data.heading}</div>
      <div className="overview-source-content">
        <div>
          <div className="overview-source-sub-heading">
            <p>{data.subHeading[0]}</p>
            <p>{data.subHeading[1]}</p>
          </div>
          {data.data.map((item) => {
            return (
              <div className="overview-source-data">
                <div>
                  <div
                    style={{
                      backgroundColor:
                        item.name === "Drict"
                          ? "var(--gradient-color2)"
                          : "var(--gradient-color1)",
                    }}
                  ></div>
                  <p>{item.name}</p>
                </div>
                <p>{item.value}</p>
              </div>
            );
          })}
        </div>
        <div>
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default Traffic;
