import React from 'react';
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

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
        {
            label: 'Google',
            data: [1000, 800, 1200, 1000],
            backgroundColor: 'red',
            stack: 'stack1',
          },
          {
            label: 'Bing',
            data: [200, 300, 250, 300],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            stack: 'stack1',
          },
          {
            label: 'Yahoo',
            data: [150, 100, 200, 150],
            backgroundColor: 'orange',
            stack: 'stack2',
          },
          {
            label: 'Ask',
            data: [50, 100, 70, 90],
            backgroundColor: 'green',
            stack: 'stack2',
          },
    ]
};

const option = {
    plugins: {
        title: {
            display: true,
            text: 'Most Popular Search Engines',
        },
        legend: {
            position: 'top',
        },
    },
    
    responsive: true,

    scales: {
        x: {
            stacked: true,
            title: {
                display: true,
                text: 'Month',
            },
            barThickness: 15,
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: 'Number of visitors in Millions',
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

export default function StackedChart() {
  return (
    <Bar data={data} options={option}/>
  )
}
