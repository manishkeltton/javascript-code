import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  const [chartData, setChartData] = useState("");

  useEffect(() => {
    getChartData();
  }, []);

  const getChartData = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=bangalore&cnt=7&appid=3b290be9028803139668a0e0e2877847"
    )
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setChartData(res);
      })
      .catch((err) => console.log("Error =>", err));
  };

  console.log("chartData =>", chartData);

  const data = {
    labels: [
      new Date().getDate() + " (Current day)",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7",
    ],
    datasets: [
      {
        label: "7 Day Forecast Low Temprature",
        data: [
          chartData == "" ? null : chartData.list[0].main.temp_min,
          chartData == "" ? null : chartData.list[1].main.temp_min,
          chartData == "" ? null : chartData.list[2].main.temp_min,
          chartData == "" ? null : chartData.list[3].main.temp_min,
          chartData == "" ? null : chartData.list[4].main.temp_min,
          chartData == "" ? null : chartData.list[5].main.temp_min,
          chartData == "" ? null : chartData.list[6].main.temp_min,
        ],
        fill: true,
        backgroundColor: ["rgb(25, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 0.8)"],
        pointBackgroundColor: "rgba(255, 99, 132, 0.2)",
        pointBorderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "7 Day Forecast High Temprature",
        data: [
          chartData == "" ? null : chartData.list[0].main.temp_max,
          chartData == "" ? null : chartData.list[1].main.temp_max,
          chartData == "" ? null : chartData.list[2].main.temp_max,
          chartData == "" ? null : chartData.list[3].main.temp_max,
          chartData == "" ? null : chartData.list[4].main.temp_max,
          chartData == "" ? null : chartData.list[5].main.temp_max,
          chartData == "" ? null : chartData.list[6].main.temp_max,
        ],
        fill: true,
        backgroundColor: ["rgb(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235)"],
        pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBorderColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
