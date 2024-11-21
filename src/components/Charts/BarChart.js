import React from 'react';
import { faker } from '@faker-js/faker';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
  
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Sales',
            backgroundColor: 'rgba(99, 200, 10, 1)',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        },
        {
            label: 'Leads',
            backgroundColor: 'rgba(99, 40, 200, 1)',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        }
    ]
};

const option = {
    onClick: (e, elements) => {
        if(elements.length > 0){
            const datasetsIndex = elements[0].datasetIndex;
            const dataIndex = elements[0].index;

            const clickedData = data.datasets[datasetsIndex].data[dataIndex];
            const label = data.labels[dataIndex];
            const datasetLabel = data.datasets[datasetsIndex].label;

            console.log(`Clicked on ${datasetLabel} for ${label}: ${clickedData}`);
        }
    }
}

export default function BarChart() {
  return (
    <Bar data={data} options={option}/>
  )
}
