import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const resultData = [
  {
    "id": 1,
    "name": "Ariana Rahman",
    "roll": 101,
    "class": "10",
    "bangla": 85,
    "english": 78,
    "math": 92,
    "science": 88,
    "total": 343,
    "grade": "A+"
  },
  {
    "id": 2,
    "name": "Nusrat Jahan",
    "roll": 102,
    "class": "10",
    "bangla": 74,
    "english": 80,
    "math": 69,
    "science": 72,
    "total": 295,
    "grade": "A"
  },
  {
    "id": 3,
    "name": "Tamim Hasan",
    "roll": 103,
    "class": "10",
    "bangla": 90,
    "english": 87,
    "math": 95,
    "science": 91,
    "total": 363,
    "grade": "A+"
  },
  {
    "id": 4,
    "name": "Sadia Akter",
    "roll": 104,
    "class": "10",
    "bangla": 65,
    "english": 70,
    "math": 58,
    "science": 62,
    "total": 255,
    "grade": "B"
  }
]
const ResultCharts = () => {
    return (
        <div>
            <LineChart width={800} height={400} data={resultData}>
                   <Line dataKey={'bangla'} stroke='purple'></Line>
                   <Line dataKey="math" stroke="orange" ></Line>
                   <Line dataKey="english" stroke="red"  name='my recharts'></Line>
                   <XAxis dataKey={'name'}></XAxis>
                   <YAxis></YAxis>
                   <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default ResultCharts;