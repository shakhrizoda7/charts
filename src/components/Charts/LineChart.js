import React from 'react';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May'],
    datasets: [
        {
            label: 'Sales',
            data: [20, 30, 78, 55, 40, 45],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.3,
            pointStyle: 'circle',
        },
        {
            label: 'Leads',
            data: [40, 80, 58, 30, 62, 70],
            borderColor: 'rgba(70, 186, 192, 0.5)',
            backgroundColor: 'blue',
            tension: 0.3,
            pointStyle: 'circle',
        }
    ]
};

const option = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
        }
    },
    onClick: (e, elements) => {
        if(elements.length > 0){
            const datasetIndex = elements[0].datasetIndex;
            const dataIndex = elements[0].index;

            const clickedData = data.datasets[datasetIndex].data[dataIndex];
            const label = data.labels[dataIndex];
            const datasetLabel = data.datasets[datasetIndex].label;

            console.log(`Clicked on ${datasetLabel} for ${label}: ${clickedData}`);
        }
    }
}

export default function LineChart() {
  return (
    <Line data={data} options={option}/>
  )
}
