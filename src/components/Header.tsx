import React from 'react';
import { User, Search, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Executive Summary</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-purple-700 rounded-full">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-purple-700 rounded-full">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-purple-700 rounded-full">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;