import React, { useState } from 'react';
import ClassTable from './ClassTable';
import { HiOutlineBell } from 'react-icons/hi';

const MainContent: React.FC = () => {
  const classes = [
    {
      id: 1,
      className: 'UI/UX Design',
      instructor: {
        name: 'John Doe',
        image: 'https://via.placeholder.com/40/FF5733/FFFFFF?text=JD',
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
        image: 'https://via.placeholder.com/40/3498DB/FFFFFF?text=JS',
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
        image: 'https://via.placeholder.com/40/27AE60/FFFFFF?text=AJ',
        additionalDetails: 'JavaScript Expert',
      },
      status: 'book',
      time: '2:00 PM',
    },
    {
      id: 4,
      className: 'Node.js Fundamentals',
      instructor: {
        name: 'Mark Lee',
        image: 'https://via.placeholder.com/40/E74C3C/FFFFFF?text=ML',
        additionalDetails: 'Backend Developer',
      },
      status: 'join',
      time: '4:00 PM',
    },
    {
      id: 5,
      className: 'CSS for Beginners',
      instructor: {
        name: 'Emily Davis',
        image: 'https://via.placeholder.com/40/9B59B6/FFFFFF?text=ED',
        additionalDetails: 'Frontend Developer',
      },
      status: 'booked',
      time: '6:00 PM',
    },
    {
      id: 6,
      className: 'Python Programming',
      instructor: {
        name: 'Michael Brown',
        image: 'https://via.placeholder.com/40/F39C12/FFFFFF?text=MB',
        additionalDetails: 'Python Developer',
      },
      status: 'book',
      time: '8:00 PM',
    },
    {
      id: 7,
      className: 'Machine Learning',
      instructor: {
        name: 'Sarah Wilson',
        image: 'https://via.placeholder.com/40/1ABC9C/FFFFFF?text=SW',
        additionalDetails: 'Data Scientist',
      },
      status: 'join',
      time: '9:00 AM',
    },
    {
      id: 8,
      className: 'Data Structures',
      instructor: {
        name: 'David Martinez',
        image: 'https://via.placeholder.com/40/ECF0F1/000000?text=DM',
        additionalDetails: 'Computer Scientist',
      },
      status: 'booked',
      time: '11:00 AM',
    },
    {
      id: 9,
      className: 'Digital Marketing',
      instructor: {
        name: 'Anna Kim',
        image: 'https://via.placeholder.com/40/95A5A6/FFFFFF?text=AK',
        additionalDetails: 'Marketing Specialist',
      },
      status: 'book',
      time: '1:00 PM',
    },
    {
      id: 10,
      className: 'Cloud Computing',
      instructor: {
        name: 'James White',
        image: 'https://via.placeholder.com/40/34495E/FFFFFF?text=JW',
        additionalDetails: 'Cloud Engineer',
      },
      status: 'join',
      time: '3:00 PM',
    },
    {
      id: 6,
      className: 'Python Programming',
      instructor: {
        name: 'Michael Brown',
        image: 'https://via.placeholder.com/40/F39C12/FFFFFF?text=MB',
        additionalDetails: 'Python Developer',
      },
      status: 'book',
      time: '8:00 PM',
    },
    {
      id: 7,
      className: 'Machine Learning',
      instructor: {
        name: 'Sarah Wilson',
        image: 'https://via.placeholder.com/40/1ABC9C/FFFFFF?text=SW',
        additionalDetails: 'Data Scientist',
      },
      status: 'join',
      time: '9:00 AM',
    },
    {
      id: 8,
      className: 'Data Structures',
      instructor: {
        name: 'David Martinez',
        image: 'https://via.placeholder.com/40/ECF0F1/000000?text=DM',
        additionalDetails: 'Computer Scientist',
      },
      status: 'booked',
      time: '11:00 AM',
    },
    {
      id: 9,
      className: 'Digital Marketing',
      instructor: {
        name: 'Anna Kim',
        image: 'https://via.placeholder.com/40/95A5A6/FFFFFF?text=AK',
        additionalDetails: 'Marketing Specialist',
      },
      status: 'book',
      time: '1:00 PM',
    },
    {
      id: 10,
      className: 'Cloud Computing',
      instructor: {
        name: 'James White',
        image: 'https://via.placeholder.com/40/34495E/FFFFFF?text=JW',
        additionalDetails: 'Cloud Engineer',
      },
      status: 'join',
      time: '3:00 PM',
    },
    // Add more classes as needed
  ];

  const [showBookedOnly, setShowBookedOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter classes based on checkbox state
  const filteredClasses = showBookedOnly
    ? classes.filter((cls) => cls.status === 'booked')
    : classes;

  // Pagination logic
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentClasses = filteredClasses.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredClasses.length / itemsPerPage);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowBookedOnly(event.target.checked);
    setCurrentPage(1); // Reset to first page when filtering changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col space-y-4 w-full bg-gray-100">
      {/* First Section */}
      <div className="hidden lg:flex flex-col space-y-2 bg-white pt-2 pl-4 pb-2">
        <div className="space-y-2 lg:flex lg:space-x-4 lg:space-y-0">
          <a href="#blogs" className="text-xs">
            Blogs
          </a>
          <a href="#news" className="text-xs">
            News
          </a>
          <a href="#help-center" className="text-xs">
            Help Center
          </a>
          <a href="#customer-care" className="text-xs">
            Customer Care
          </a>
        </div>
        <div className="mt-3 lg:mt-0 pt-1">
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
      </div>

      <div className="lg:hidden mt-3 lg:mt-0 pt-1 flex items-center justify-between px-5">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <div className="flex items-center">
            {/* Notification Icon */}
            <HiOutlineBell className="text-gray-600 cursor-pointer size-7" />
          </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col xl:flex-row bg-gray-100">
        {/* Upcoming Classes Section */}
        <div className="flex-1 space-y-2 overflow-auto bg-white m-2 rounded-lg">
          <div className="flex justify-between items-center mb-2 px-3">
            <div>
              <h2 className="text-lg font-semibold">Upcoming Classes</h2>
              <p className="text-gray-500 text-xs">For next 7 days</p>
            </div>
            <label className="flex items-center justify-center">
              <span className="mr-1 text-xs">Booked Only</span>
              <input
                type="checkbox"
                checked={showBookedOnly}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
          <ClassTable classes={currentClasses} />

          {/* Pagination Section (Small Screens) */}

          <div className="lg:hidden flex justify-center mt-2">
            <nav className="flex space-x-1">
              {currentPage > 1 && (
                <a
                  href="#prev"
                  className="bg-gray-300 p-1 rounded text-xxs"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Prev
                </a>
              )}
              {Array.from({ length: totalPages }, (_, index) => (
                <a
                  key={index}
                  href={`#${index + 1}`}
                  className={`bg-gray-300 p-1 rounded text-xxs ${
                    currentPage === index + 1 ? 'bg-gray-600 text-white' : ''
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </a>
              ))}
              {currentPage < totalPages && (
                <a
                  href="#next"
                  className="bg-gray-300 p-1 rounded text-xxs"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </a>
              )}
            </nav>
          </div>
        </div>

        {/* Assignments Section */}

        <div className="flex-1 hidden xl:block space-y-2 bg-white m-2 p-2 rounded-lg px-3">
          <h2 className="text-lg font-semibold mb-2">Assignments</h2>
          <div className="space-y-2">
            <div className="bg-white shadow-md rounded-lg p-2">
              <h3 className="font-bold">Logo Designing</h3>
              <p className="text-xs text-gray-500">Deadline: 12/12/2024</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-2">
              <h3 className="font-bold">Wireframing</h3>
              <p className="text-xs text-gray-500">Deadline: 15/12/2024</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-2">
              <h3 className="font-bold">Prototype Testing</h3>
              <p className="text-xs text-gray-500">Deadline: 20/12/2024</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-2">
              <h3 className="font-bold">Usability Study</h3>
              <p className="text-xs text-gray-500">Deadline: 25/12/2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Section (Large Screens) */}

      <div className="hidden lg:flex justify-center items bg-center">
        <nav className="flex space-x-1">
          {currentPage > 1 && (
            <a
              href="#prev"
              className="bg-gray-300 p-1 rounded text-xxs"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </a>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <a
              key={index}
              href={`#${index + 1}`}
              className={`bg-gray-300 p-1 rounded text-xxs ${
                currentPage === index + 1 ? 'bg-gray-600 text-white' : ''
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </a>
          ))}
          {currentPage < totalPages && (
            <a
              href="#next"
              className="bg-gray-300 p-1 rounded text-xxs"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </a>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MainContent;
