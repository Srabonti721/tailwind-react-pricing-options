import React from 'react';
import { Pie, PieChart } from 'recharts';
const data= [
    {
        "math": 95,
        "biology": 82,
        "chemistry": 88,
        "physics": 91
    },
    {
        "math": 88,
        "biology": 79,
        "chemistry": 84,
        "physics": 86
    },
    {
        "math": 76,
        "biology": 90,
        "chemistry": 81,
        "physics": 78
    },
    {
        "math": 92,
        "biology": 85,
        "chemistry": 89,
        "physics": 94
    },
    {
        "math": 67,
        "biology": 74,
        "chemistry": 70,
        "physics": 72
    }
]
const PieCharts = () => {
    return (
        <div>
            <PieChart width={600} height={400} >
                <Pie data={data}
                    dataKey="biology"
                    outerRadius="50%"
                      fill="orange"></Pie>
            </PieChart>
        </div>
    );
};

export default PieCharts;