import React, { createContext, useContext, useState, useEffect } from 'react';

interface KPIData {
  value: string;
  change: number;
}

interface Filters {
  year: string;
  quarter: string;
  month: string;
  region: string;
  channel: string;
  manufacturer: string;
  category: string;
  brand: string;
  ppg: string;
}

interface DashboardContextType {
  kpiData: {
    sellOutVolume: KPIData;
    sellOutValue: KPIData;
    sellOutUnits: KPIData;
    avgPricePerUnit: KPIData;
  };
  volumeMarketShareData: any[];
  valueSalesData: any[];
  regionWiseData: any[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  resetFilters: () => void;
  loading: boolean;
  error: string | null;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

const initialFilters: Filters = {
  year: '',
  quarter: '',
  month: '',
  region: '',
  channel: '',
  manufacturer: '',
  category: '',
  brand: '',
  ppg: '',
};

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [kpiData, setKpiData] = useState({
    sellOutVolume: { value: '348,940', change: -12.85 },
    sellOutValue: { value: '302,631', change: -7.70 },
    sellOutUnits: { value: '297,284', change: -12.34 },
    avgPricePerUnit: { value: '1.02', change: 5.30 },
  });

  const [volumeMarketShareData, setVolumeMarketShareData] = useState([]);
  const [valueSalesData, setValueSalesData] = useState([]);
  const [regionWiseData, setRegionWiseData] = useState([]);
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  useEffect(() => {
    // Simulating data fetching
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch data based on filters
        // For now, we'll use mock data
        setVolumeMarketShareData([
          { name: 'Jan', 'MONDELEZ INTL': 40, '3 CORACOES': 24 },
          { name: 'Feb', 'MONDELEZ INTL': 39, '3 CORACOES': 25 },
          { name: 'Mar', 'MONDELEZ INTL': 38, '3 CORACOES': 26 },
          { name: 'Apr', 'MONDELEZ INTL': 37, '3 CORACOES': 27 },
          { name: 'May', 'MONDELEZ INTL': 36, '3 CORACOES': 28 },
        ]);

        setValueSalesData([
          { quarter: 'Q1', Q1: 80000, Q2: 0, Q3: 0, Q4: 0 },
          { quarter: 'Q2', Q1: 0, Q2: 65000, Q3: 0, Q4: 0 },
          { quarter: 'Q3', Q1: 0, Q2: 0, Q3: 55000, Q4: 0 },
          { quarter: 'Q4', Q1: 0, Q2: 0, Q3: 0, Q4: 70000 },
        ]);

        setRegionWiseData([
          { name: 'AREA I', value: 20 },
          { name: 'AREA II', value: 30 },
          { name: 'AREA III', value: 25 },
          { name: 'AREA IV', value: 15 },
          { name: 'AREA V', value: 10 },
        ]);

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return (
    <DashboardContext.Provider value={{
      kpiData,
      volumeMarketShareData,
      valueSalesData,
      regionWiseData,
      filters,
      setFilters,
      resetFilters,
      loading,
      error,
    }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboardContext must be used within a DashboardProvider');
  }
  return context;
};