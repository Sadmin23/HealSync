import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ chartData, maxData }) {
  return (
      <Line
        width={350}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false
            }
          },
          elements: {
            point: {
              radius: 0
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              display: true,
              grid : {
                display: true
              },
              ticks: {
                padding: 10
              },
              min: 0,
              max: 200
            },
            x: {
              reverse: false,
              grid : {
                display: false
              },
              ticks: {
                padding: 10
              }           
            },
          }
        }}
      />
  );
}