import React from 'react';
import { ClassInfo } from '../types';

interface ClassTableProps {
  classes: ClassInfo[];
}

const ClassTable: React.FC<ClassTableProps> = ({ classes }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="hidden md:block">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-2">Class</th>
              <th className="w-1/4 py-2">Instructor</th>
              <th className="w-1/4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {classes.map((classInfo) => (
              <tr key={classInfo.id} className="bg-gray-100">
                <td className="py-2 px-4 border">{classInfo.className}</td>
                <td className="py-2 px-4 border">
                  <div className="flex items-center">
                    <img src={classInfo.instructor.image} alt="Instructor" className="w-10 h-10 rounded-full mr-4" />
                    <div>
                      <p className="font-semibold">{classInfo.instructor.name}</p>
                      <p className="text-sm">{classInfo.instructor.additionalDetails}</p>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border">
                  {classInfo.status === 'join' && <button className="bg-blue-500 text-white py-1 px-4 rounded">Join Now</button>}
                  {classInfo.status === 'book' && <button className="bg-green-500 text-white py-1 px-4 rounded">Book Now</button>}
                  {classInfo.status === 'booked' && <span>{classInfo.time}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden">
        {classes.map((classInfo) => (
          <div key={classInfo.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="font-bold text-lg mb-2">{classInfo.className}</h3>
            <div className="flex items-center mb-2">
              <img src={classInfo.instructor.image} alt="Instructor" className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{classInfo.instructor.name}</p>
                <p className="text-sm">{classInfo.instructor.additionalDetails}</p>
              </div>
            </div>
            <div>
              {classInfo.status === 'join' && <button className="bg-blue-500 text-white py-1 px-4 rounded">Join Now</button>}
              {classInfo.status === 'book' && <button className="bg-green-500 text-white py-1 px-4 rounded">Book Now</button>}
              {classInfo.status === 'booked' && <span>{classInfo.time}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassTable;
