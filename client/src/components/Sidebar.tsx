import React from "react";
import logo from "/react1.jpeg";
import {
  FaTachometerAlt,
  FaChalkboardTeacher,
  FaChartLine,
  FaDollarSign,
  FaCog,
  FaSignOutAlt,
  FaClipboardList,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="h-full bg-white text-gray-800 flex flex-col lg:w-64 border-r border-r-1 border-gray-800">
      <div className="hidden lg:flex flex-col">
        <div className="p-4">
          <img src={logo} alt="Logo" className="w-16 mx-auto" />
        </div>
        <div className="text-left p-4 ml-2">
          <img src={logo} alt="User" className="w-12 h-12 rounded-full" />
          <div className="mt-2 text-black font-semibold">John Doe</div>
          <div className="text-sm text-gray-500">Intermediate</div>
          <hr className="my-4" />
        </div>
        <nav className="hidden lg:flex flex-col space-y-5 p-4 ml-2 flex-grow">
          <div>
            <a
              href="#dashboard"
              className="flex items-center space-x-2 text-blue-500 font-semibold"
            >
              <div className="rounded-full bg-white p-2">
                <FaTachometerAlt className="text-blue-500" />
              </div>
              <span>Dashboard</span>
            </a>
          </div>
          <div>
            <a
              href="#classes"
              className="flex items-center space-x-2 font-semibold"
            >
              <div className="rounded-full bg-white p-2">
                <FaChalkboardTeacher />
              </div>
              <span>All Classes</span>
            </a>
          </div>
          <div>
            <a
              href="#performance"
              className="flex items-center space-x-2 font-semibold"
            >
              <div className="rounded-full bg-white p-2">
                <FaChartLine />
              </div>
              <span>Performance</span>
            </a>
          </div>
          <div>
            <a
              href="#fee-details"
              className="flex items-center space-x-2 font-semibold"
            >
              <div className="rounded-full bg-white p-2">
                <FaDollarSign />
              </div>
              <span>Fee Details</span>
            </a>
          </div>
          <div>
            <a
              href="#assignments"
              className="flex items-center space-x-2 font-semibold"
            >
              <div className="rounded-full bg-white p-2">
                <FaClipboardList />
              </div>
              <span>Assignments</span>
            </a>
          </div>
          <div>
            <a
              href="#settings"
              className="flex items-center space-x-2 font-semibold"
            >
              <div className="rounded-full bg-white p-2">
                <FaCog />
              </div>
              <span>Settings</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Small screens (below lg) and above sm) */}
      <div className="lg:hidden flex justify-center items-center p-4 fixed bottom-0 w-full bg-white text-gray-800 border-t border-t-1 border-gray-800 overflow-x-auto">
        <nav className="flex space-x-4">
          <a href="#dashboard" className="flex flex-col items-center">
            <FaTachometerAlt />
            <span className="text-sm mt-4">Dashboard</span>
          </a>
          <a href="#performance" className="flex flex-col items-center">
            <FaChartLine />
            <span className="text-sm mt-4">Performance</span>
          </a>
          <a href="#assignments" className="flex flex-col items-center">
            <FaClipboardList />
            <span className="text-sm mt-4">Assignments</span>
          </a>
          <a href="#profile" className="flex flex-col items-center">
            <img src={logo} alt="User" className="w-8 h-8 rounded-full" />
            <span className="text-sm">Profile</span>
          </a>
        </nav>
      </div>

      {/* Logout section */}
      <div className="hidden lg:flex justify-start items-center mt-auto p-4 ml-2">
        <a
          href="#logout"
          className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </a>
      </div>
      <div className="hidden lg:flex justify-start items-center p-4 ml-2">
        <p className="text-sm text-gray-500">v.1.2</p>
      </div>
    </div>
  );
};

export default Sidebar;
