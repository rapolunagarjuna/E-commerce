// src/components/PieChartCard.js
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Pie Chart',
    },
  },
};

export default function PieChartCard ({ title, data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-center">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="w-full h-64 ">
        <Pie data={data} options={options}/>
      </div>
    </div>
  );
};
