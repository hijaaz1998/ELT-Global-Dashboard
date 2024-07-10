// src/components/MainContent.tsx
import React from 'react';
import ClassTable from './ClassTable';

const MainContent: React.FC = () => {
   const classes = [
      {
        id: 1,
        className: 'UI/UX Design',
        instructor: {
          name: 'John Doe',
          image: 'https://via.placeholder.com/40',
          additionalDetails: 'Senior Designer',
        },
        status: 'join',
        time: '10:00 AM',
      },
      {
        id: 2,
        className: 'React Basics',
        instructor: {
          name: 'Jane Smith',
          image: 'https://via.placeholder.com/40',
          additionalDetails: 'React Developer',
        },
        status: 'booked',
        time: '12:00 PM',
      },
      {
        id: 3,
        className: 'Advanced JavaScript',
        instructor: {
          name: 'Alice Johnson',
          image: 'https://via.placeholder.com/40',
          additionalDetails: 'JavaScript Expert',
        },
        status: 'book',
        time: '2:00 PM',
      },
   ];
    

  return (
    <div className="flex flex-col space-y-8 p-4 w-full">
      <div className="flex justify-between">
        <div className="space-y-4">
          <a href="#blogs">Blogs</a>
          <a href="#news">News</a>
          <a href="#help-center">Help Center</a>
          <a href="#customer-care">Customer Care</a>
        </div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Upcoming Classes</h2>
            <label>
              <input type="checkbox" />
              <span className="ml-2">Booked Only</span>
            </label>
          </div>
          <ClassTable classes={classes} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Assignments</h2>
          <div className="space-y-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-bold">Logo Designing</h3>
              <p className="text-sm text-gray-500">Deadline: 12/12/2024</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-bold">Wireframing</h3>
              <p className="text-sm text-gray-500">Deadline: 15/12/2024</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-bold">Prototype Testing</h3>
              <p className="text-sm text-gray-500">Deadline: 20/12/2024</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-bold">Usability Study</h3>
              <p className="text-sm text-gray-500">Deadline: 25/12/2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <nav className="flex space-x-2">
          <a href="#prev" className="bg-gray-300 p-2 rounded">Previous</a>
          <a href="#1" className="bg-gray-300 p-2 rounded">1</a>
          <a href="#2" className="bg-gray-300 p-2 rounded">2</a>
          <a href="#3" className="bg-gray-300 p-2 rounded">3</a>
          <a href="#next" className="bg-gray-300 p-2 rounded">Next</a>
        </nav>
      </div>
    </div>
  );
};

export default MainContent;
