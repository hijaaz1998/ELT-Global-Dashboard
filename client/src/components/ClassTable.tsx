import React, { useState, useEffect } from 'react';
import { ClassInfo } from '../types';
import BookNowModal from './BookNowModal';

interface ClassTableProps {
  classes: ClassInfo[];
}

const ClassTable: React.FC<ClassTableProps> = ({ classes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timers, setTimers] = useState<{ [key: string]: { hours: number, minutes: number, seconds: number } }>({});
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);

  const handleBookNowClick = (classInfo: ClassInfo) => {
    setSelectedClass(classInfo);
    setIsModalOpen(true);

    const scheduledTime = parseTime(classInfo.time);
    const currentTime = new Date();
    const differenceInSeconds = (scheduledTime.getTime() - currentTime.getTime()) / 1000;

    const hours = Math.floor(differenceInSeconds / 3600);
    const minutes = Math.floor((differenceInSeconds % 3600) / 60);
    const seconds = Math.floor(differenceInSeconds % 60);

    setTimers((prevTimers) => ({
      ...prevTimers,
      [classInfo.id]: { hours, minutes, seconds },
    }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClass(null);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const intervalIds: NodeJS.Timeout[] = [];

    // Update timers every second
    const updateTimers = () => {
      const updatedTimers: { [key: string]: { hours: number, minutes: number, seconds: number } } = {};
      Object.keys(timers).forEach((classId) => {
        const { hours, minutes, seconds } = timers[classId];
        let remainingSeconds = hours * 3600 + minutes * 60 + seconds - 1;
        if (remainingSeconds < 0) {
          remainingSeconds = 0;
        }
        const updatedHours = Math.floor(remainingSeconds / 3600);
        const updatedMinutes = Math.floor((remainingSeconds % 3600) / 60);
        const updatedSeconds = Math.floor(remainingSeconds % 60);
        updatedTimers[classId] = { hours: updatedHours, minutes: updatedMinutes, seconds: updatedSeconds };
      });
      setTimers(updatedTimers);
    };

    classes.forEach((classInfo) => {
      if (timers[classInfo.id]) {
        const intervalId = setInterval(updateTimers, 1000);
        intervalIds.push(intervalId);
      }
    });

    return () => {
      intervalIds.forEach(clearInterval);
    };
  }, [classes, timers]);

  const parseTime = (timeString: string): Date => {
    const [time, period] = timeString.split(' ');
    let [hours, minutes] = time.split(':').map((part) => parseInt(part, 10));
    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }
    const scheduledTime = new Date();
    scheduledTime.setHours(hours);
    scheduledTime.setMinutes(minutes);
    scheduledTime.setSeconds(0);
    return scheduledTime;
  };

  const formatTime = (hours: number, minutes: number, seconds: number): string => {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto px-4">
      {/* Render Table for Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white">
          {/* Table Headers */}
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="w-1/4 py-2 pl-2 font-normal text-left">Class</th>
              <th className="w-1/4 py-2 pl-2 font-normal text-left">Instructor</th>
              <th className="w-1/4 py-2 pl-2 font-normal text-left">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="text-black">
            {classes.map((classInfo) => (
              <tr key={classInfo.id} className="">
                <td className="py-1 px-2 font-semibold text-left whitespace-nowrap max-w-xs">
                  <span className="font-light pr-1">{classInfo.id}</span> {classInfo.className}
                </td>
                <td className="py-1 px-2 text-left whitespace-nowrap max-w-xs">
                  <div className="flex items-center">
                    <img src={classInfo.instructor.image} alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
                    <div>
                      <p className="font-semibold text-black text-sm">{classInfo.instructor.name}</p>
                      <p className="text-xs text-gray-700">{classInfo.instructor.additionalDetails}</p>
                    </div>
                  </div>
                </td>
                <td className="py-1 px-2 text-left whitespace-nowrap max-w-xs">
                  {classInfo.status === 'join' && (
                    <button
                      onClick={() => handleBookNowClick(classInfo)}
                      className="bg-blue-500 text-white font-semibold py-2 px-1 rounded-lg w-full"
                    >
                      Join
                    </button>
                  )}
                  {classInfo.status === 'book' && timers[classInfo.id] && (
                      <p className="bg-gray-100 text-blue-500 font-semibold py-2 px-1 text-center w-full rounded-lg">
                        {formatTime(timers[classInfo.id].hours, timers[classInfo.id].minutes, timers[classInfo.id].seconds)} remaining
                      </p>
                  )}
                  {classInfo.status === 'book' && !timers[classInfo.id] && (
                    <button
                      onClick={() => handleBookNowClick(classInfo)}
                      className="border border-gray-300 shadow-lg text-black font-semibold py-2 px-1 rounded-lg w-full"
                    >
                      Book
                    </button>
                  )}
                  {classInfo.status === 'booked' && (
                    <button className="bg-gray-100 text-blue-500 font-semibold py-2 px-1 rounded-lg w-full">
                      {classInfo.time}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Render Cards for Mobile */}
      <div className="md:hidden">
        {classes.map((classInfo) => (
          <div key={classInfo.id} className="bg-white shadow-md rounded-lg p-2 mb-2">
            <h3 className="font-bold text-base mb-3">{classInfo.className}</h3>
            <div className="flex items-center mb-3">
              <img src={classInfo.instructor.image} alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
              <div>
                <p className="font-semibold text-sm">{classInfo.instructor.name}</p>
              </div>
            </div>
            <div>
              {classInfo.status === 'join' && (
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-1 rounded-lg w-full"
                >
                  Join
                </button>
              )}
              {classInfo.status === 'book' && timers[classInfo.id] && (
                  <p className="bg-gray-100 text-blue-500 font-semibold py-2 px-1 text-center rounded-lg w-full">
                    {formatTime(timers[classInfo.id].hours, timers[classInfo.id].minutes, timers[classInfo.id].seconds)} remaining
                  </p>
              )}
              {classInfo.status === 'book' && !timers[classInfo.id] && (
                <button
                  className="border border-gray-300 shadow-lg text-black font-semibold py-2 px-1 rounded-lg w-full"
                >
                  Book
                </button>
              )}
              {classInfo.status === 'booked' && (
                <button className="bg-gray-100 text-blue-500 font-semibold py-2 px-1 rounded-lg w-full">
                  {classInfo.time}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Render BookNowModal */}
      <BookNowModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onConfirm={handleConfirm}
        selectedClass={selectedClass}
      />
    </div>
  );
};

export default ClassTable;
