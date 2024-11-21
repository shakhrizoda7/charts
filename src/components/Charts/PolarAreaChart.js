import React from 'react';
import { PolarArea } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
  
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red', 'Green', 'Yellow', 'Gray', 'Blue'],
    datasets: [
        {
            label: 'Values',
            data: [10, 12, 6, 3, 14],
            backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', 'lightgray', '#36A2EB'],
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

export default function PolarAreaChart() {
  return (
    <PolarArea data={data} options={option}/>
  )
}
