import React from 'react';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        }
    ]
};

const option = {
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


export default function PieChart() {
  return (
    <Pie data={data} options={option}/>
  )
}
