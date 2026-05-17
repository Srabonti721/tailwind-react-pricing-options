import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const AxiosData = ({ markPromise }) => {
    const markDataRes = use(markPromise)
    const markData = markDataRes.data
    console.log(markDataRes);
    const markChartData = markData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            bangla: studentData.marks.bangla,
            math: studentData.marks.math,
            english: studentData.marks.english,
            science: studentData.marks.science,
        }
        return student
    })
    console.log(markChartData);

    return (
        <div>
<BarChart width={800} height={500} data={markChartData}>
    <XAxis dataKey={"name"}></XAxis>
    <YAxis></YAxis>
    <Bar dataKey={"math"} fill='yellowGreen'></Bar>
    <Bar dataKey={"bangla"} fill='lightpink'></Bar>
    <Tooltip></Tooltip>
</BarChart>
        </div>
    );
};

export default AxiosData;