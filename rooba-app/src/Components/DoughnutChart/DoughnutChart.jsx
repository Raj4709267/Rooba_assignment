import React, { useEffect, useRef } from "react";
import ChartJS from "chart.js/auto";

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new ChartJS(ctx, {
      type: "doughnut",
      data: {
        labels: ["#4CD7F6", " #E17CFD"],
        datasets: [
          {
            data: [50, 50],
            backgroundColor: ["#4CD7F6", "#E17CFD"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;
