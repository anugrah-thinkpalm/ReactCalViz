import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const BarGraph = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const formattedData = data.map(item => {
    const key = Object.keys(item)[0];
    return { name: key, value: item[key] };
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
