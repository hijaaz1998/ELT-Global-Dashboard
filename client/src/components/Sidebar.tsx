// src/components/Sidebar.tsx
import React from 'react';
import { FaTachometerAlt, FaChalkboardTeacher, FaTasks, FaChartLine, FaDollarSign, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white flex flex-col justify-between">
      <div>
        <div className="p-4">
          <img src="/logo.png" alt="Logo" className="w-16 mx-auto" />
        </div>
        <div className="text-center p-4">
          <img src="/user.jpg" alt="User" className="w-16 h-16 rounded-full mx-auto" />
          <h2 className="mt-2">John Doe</h2>
          <p className="text-sm text-gray-400">Intermediate</p>
          <hr className="my-4" />
        </div>
        <nav className="flex flex-col space-y-2 p-4">
          <a href="#dashboard" className="flex items-center space-x-2">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </a>
          <a href="#classes" className="flex items-center space-x-2">
            <FaChalkboardTeacher />
            <span>All Classes</span>
          </a>
          <a href="#assignments" className="flex items-center space-x-2">
            <FaTasks />
            <span>Assignments</span>
          </a>
          <a href="#performance" className="flex items-center space-x-2">
            <FaChartLine />
            <span>Performance</span>
          </a>
          <a href="#fee-details" className="flex items-center space-x-2">
            <FaDollarSign />
            <span>Fee Details</span>
          </a>
          <a href="#settings" className="flex items-center space-x-2">
            <FaCog />
            <span>Settings</span>
          </a>
        </nav>
      </div>
      <div className="p-4">
        <a href="#logout" className="flex items-center space-x-2">
          <FaSignOutAlt />
          <span>Logout</span>
        </a>
        <p className="text-sm text-gray-400 mt-4">v.1.2</p>
      </div>
    </div>
  );
};

export default Sidebar;
