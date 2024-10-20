import React, { useState } from 'react';
import { BarChart, PieChart, TrendingUp, ChevronRight } from 'lucide-react';

const navItems = [
  {
    icon: BarChart,
    title: 'Descriptive',
    subsections: [
      'Executive Summary',
      'Category Summary',
      'Regional Summary',
      'Price Market Landscape',
      'Price & Distribution',
      'Price Evaluation',
      'P&L'
    ]
  },
  {
    icon: PieChart,
    title: 'Diagnostic',
    subsections: [
      'Model Evaluation (1/2)',
      'Model Evaluation (2/2)',
      'Model Results - Price Elasticity',
      'Model Results - Average Price Responsiveness',
      'Model Results - Cannibalization'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Predictive & Prescriptive',
    subsections: [
      'Optimization Guide',
      'Task Summary',
      'Simulation/Optimization',
      'Scenario Summary',
      'Scenario Review'
    ]
  }
];

const Sidebar: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <nav className="bg-purple-800 text-white h-screen w-16 fixed left-0 top-0 flex flex-col transition-all duration-300 ease-in-out hover:w-64 group">
      {navItems.map((item) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => setExpandedItem(item.title)}
          onMouseLeave={() => setExpandedItem(null)}
        >
          <button className="w-full p-4 flex items-center text-turquoise-500 hover:bg-purple-700">
            <item.icon size={24} />
            <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.title}
            </span>
            <ChevronRight
              size={16}
              className={`ml-auto transition-transform duration-300 ${
                expandedItem === item.title ? 'rotate-90' : ''
              }`}
            />
          </button>
          {expandedItem === item.title && (
            <div className="absolute left-full top-0 bg-purple-700 w-48 py-2 rounded-r-lg shadow-lg">
              {item.subsections.map((subsection) => (
                <button
                  key={subsection}
                  className="w-full text-left px-4 py-2 hover:bg-purple-600 text-sm"
                >
                  {subsection}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;