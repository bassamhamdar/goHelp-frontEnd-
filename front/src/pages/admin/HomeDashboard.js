import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { TtilePage } from "../../style/app";
export const HomeDashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  let data = {
    labels,
    datasets: [
      {
        label: "Donations ",
        data: [100, 200, 300, 400, 350, 600, 750, 200, 50, 300, 400, 350],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Requests ",
        data: [50, 300, 400, 350, 100, 200, 300, 400, 350, 600, 750, 200],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="Admin-Charts" style={{ width: "80%", margin: "auto" }}>
      <TtilePage>Welcome Admin</TtilePage>
      <Bar options={options} data={data} />
    </div>
  );
};
