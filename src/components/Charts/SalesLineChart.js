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
    labels: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",],
    datasets: [
        {
            label: "Sales",
            data: [3800, 3000, 2800, 4005, 3600, 2900, 3200, 3400, 4100, 3800, 3500, 4200],
            fill: true,
            backgroundColor: "rgba(142, 156, 253, 0.2)",
            borderColor: "#8E9CFD",
            pointBackgroundColor: "#8E9CFD",
            tension: 0.5,
            pointStyle: 'circle',
        },
    ]
};

const option = {
    responsive: true,
    scales: {
        y: {
            ticks: {
                stepSize: 200,
            }
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

export default function SalesLineChart() {
  return (
    <Line data={data} options={option}/>
  )
}
