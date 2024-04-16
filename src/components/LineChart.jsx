import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ chartData, maxData }) {
  return (
      <Line
        width={320}
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
              max: maxData ? maxData : 5000
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