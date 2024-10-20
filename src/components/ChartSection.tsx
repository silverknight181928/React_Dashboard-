import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDashboardContext } from '../context/DashboardContext';

const ChartSection: React.FC = () => {
  const { volumeMarketShareData, valueSalesData, regionWiseData } = useDashboardContext();

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Volume Market Share</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={volumeMarketShareData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="MONDELEZ INTL" stroke="#8884d8" />
            <Line type="monotone" dataKey="3 CORACOES" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Value Sales - Quarter Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={valueSalesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Q1" fill="#8884d8" />
            <Bar dataKey="Q2" fill="#82ca9d" />
            <Bar dataKey="Q3" fill="#ffc658" />
            <Bar dataKey="Q4" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Value Sales - Region Wise</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={regionWiseData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ChartSection;