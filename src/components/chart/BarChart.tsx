import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js/auto";
import { SaleData } from "../Api";
import FilterMenu from "./FilterMenu";

ChartJS.register(CategoryScale, LinearScale);

interface BarChartProps {
  data: SaleData[];
  startColor: string;
  endColor: string;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const createGradient = (startColor: string, endColor: string) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, startColor);
    gradient.addColorStop(1, endColor);
    return gradient;
  };
  const [startYear, setStartYear] = useState<number>(2014);
  const [endYear, setEndYear] = useState<number>(2022);
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: "Sales",
        data: [] as number[],
        backgroundColor: createGradient("#f8c2cc", "#d97789"),
        hoverBackgroundColor: "rgba(75, 192, 192, 1)",

        /* backgroundColor: data.map((value, index) =>
          index % 2 === 0 ? "#ffc3c3" : "#c7eae4"
        ), 
        hoverBackgroundColor: data.map((value, index) =>
          index % 2 === 0 ? "#202020" : "#202020"
        ),*/
        borderRadius: 4,
        //barThickness: "flex",
        //barPercentage: 0.8,
        MaxBarThickness: 80,
      },
    ],
  });

  useEffect(() => {
    const reversData: any[] = data.reverse();
    console.log(reversData);

    const filteredData = data.filter(
      (item) => item.period >= startYear && item.period <= endYear
    );

    setChartData({
      labels: filteredData.map((item) => item.period.toString()),
      datasets: [
        {
          ...chartData.datasets[0],
          data: filteredData.map((item) => item.sales),
        },
      ],
    });
  }, [data, startYear, endYear]);

  const handleYearsChange = (startYear: number, endYear: number) => {
    setStartYear(startYear);
    setEndYear(endYear);
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: "#999",
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#999",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#bbb",
          borderRadius: 4,
        },
      },
    },
  };

  return (
    <>
      <FilterMenu
        startYear={startYear}
        endYear={endYear}
        onYearsChange={handleYearsChange}
      />
      <Bar data={chartData} options={options} />
    </>
  );
};

export default BarChart;
