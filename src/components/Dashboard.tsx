import React from 'react';
import KPISection from './KPISection';
import ChartSection from './ChartSection';
import FilterSection from './FilterSection';
import { useDashboardContext } from '../context/DashboardContext';

const Dashboard: React.FC = () => {
  const { loading, error } = useDashboardContext();

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">Error: {error}</div>;
  }

  return (
    <main className="container mx-auto p-4 flex flex-col lg:flex-row">
      <div className="lg:w-3/4 lg:pr-4">
        <KPISection />
        <ChartSection />
      </div>
      <div className="lg:w-1/4 mt-6 lg:mt-0">
        <FilterSection />
      </div>
    </main>
  );
};

export default Dashboard;