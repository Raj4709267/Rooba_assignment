import { Line } from "react-chartjs-2";
import "../../index.css";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import LightBackgroundDiv from "../CommonComponents/LightBackgroundDiv/LightBackgroundDiv";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "March", "April", "May"],
    datasets: [
      {
        label: "First Dataset",
        data: [20, 30, 20, 80, 20],
        backgroundColor: "transparent",
        borderColor: "#8E7CFD",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  };

  return (
    <LightBackgroundDiv styles={{ padding: "20px", borderRadius: "32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "35px",
        }}
      >
        <p style={{ fontSize: "20px", fontWeight: "400" }}>Total visits</p>
        <p
          style={{
            fontSize: "32px",
            color: "var(--primary-color)",
            fontWeight: "600",
          }}
        >
          42,43M
        </p>
      </div>
      <Line data={data}>Hello</Line>
    </LightBackgroundDiv>
  );
};

export default LineChart;
