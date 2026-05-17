import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
const barCharts = [
  {
    "subject": "Bangla",
    "marks": 85,
    "math":"75"
  },
  {
    "subject": "English",
    "marks": 78,
     "math":"55"
  },
  {
    "subject": "Math",
    "marks": 92,
     "math":"95"
  },
  {
    "subject": "Science",
    "marks": 88,
     "math":"85"
  },
  {
    "subject": "ICT",
    "marks": 81,
     "math":"65"
  }
]
const BarCharts = () => {
    return (
        <div>
            <BarChart width={500} height={300} data={barCharts}>
                <XAxis dataKey={'subject'}></XAxis>
                <YAxis></YAxis>
             <Bar dataKey={'marks'} fill='yellow'></Bar>
             <Bar dataKey={'math'} fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default BarCharts;