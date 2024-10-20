import React from 'react';
import { useDashboardContext } from '../context/DashboardContext';
import { TrendingDown, TrendingUp } from 'lucide-react';

const KPICard: React.FC<{
  title: string;
  value: string;
  change: number;
  unit?: string;
}> = ({ title, value, change, unit }) => {
  const isPositive = change >= 0;
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-1">
        {value} {unit}
      </p>
      <div className={`flex items-center mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        <span className="ml-1 text-sm">
          {Math.abs(change).toFixed(2)}% {isPositive ? 'increase' : 'decrease'}
        </span>
      </div>
    </div>
  );
};

const KPISection: React.FC = () => {
  const { kpiData } = useDashboardContext();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <KPICard title="Sell Out Volume" value={kpiData.sellOutVolume.value} change={kpiData.sellOutVolume.change} unit="K" />
      <KPICard title="Sell Out Value" value={kpiData.sellOutValue.value} change={kpiData.sellOutValue.change} unit="K" />
      <KPICard title="Sell Out Units" value={kpiData.sellOutUnits.value} change={kpiData.sellOutUnits.change} unit="K" />
      <KPICard title="Avg Price Per Unit" value={kpiData.avgPricePerUnit.value} change={kpiData.avgPricePerUnit.change} unit="R$" />
    </section>
  );
};

export default KPISection;