// import React, { useState, useEffect } from 'react';
// import { ClassInfo } from '../types';
// import BookNowModal from './BookNowModal';

// interface ClassTableProps {
//   classes: ClassInfo[];
// }

// const ClassTable: React.FC<ClassTableProps> = ({ classes }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [timers, setTimers] = useState<{ [key: string]: number }>({}); // Object to store timers for each class
//   const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);

//   const handleBookNowClick = (classInfo: ClassInfo) => {
//     setSelectedClass(classInfo);
//     setIsModalOpen(true);

//     // Calculate timer based on classInfo.time
//     const scheduledTime = parseTime(classInfo.time);
//     const currentTime = new Date();
//     const differenceInSeconds = (scheduledTime.getTime() - currentTime.getTime()) / 1000;

//     // Update the timers state only for the selected class
//     setTimers((prevTimers) => ({
//       ...prevTimers,
//       [classInfo.id]: Math.max(0, Math.round(differenceInSeconds)),
//     }));
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleConfirm = () => {
//     setIsModalOpen(false);
//     // You can handle confirmation logic here if needed
//   };

//   useEffect(() => {
//     // Clear all intervals when component unmounts or when modal is closed
//     return () => {
//       Object.keys(timers).forEach((classId) => clearInterval(timers[classId]));
//     };
//   }, [timers]);

//   // Function to parse time string like '10:00 AM' to Date object
//   const parseTime = (timeString: string): Date => {
//     const [time, period] = timeString.split(' ');
//     let [hours, minutes] = time.split(':').map((part) => parseInt(part, 10));
//     if (period === 'PM' && hours !== 12) {
//       hours += 12;
//     } else if (period === 'AM' && hours === 12) {
//       hours = 0;
//     }
//     const scheduledTime = new Date();
//     scheduledTime.setHours(hours);
//     scheduledTime.setMinutes(minutes);
//     scheduledTime.setSeconds(0);
//     return scheduledTime;
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <div className="hidden md:block overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-100 text-gray-700">
//             <tr>
//               <th className="w-1/4 py-2 pl-2 font-normal text-left">Class</th>
//               <th className="w-1/4 py-2 pl-2 font-normal text-left">Instructor</th>
//               <th className="w-1/4 py-2 pl-2 font-normal text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="text-black">
//             {classes.map((classInfo) => (
//               <tr key={classInfo.id} className="">
//                 <td className="py-1 px-2 font-semibold text-left whitespace-nowrap max-w-xs">
//                   <span className="font-light pr-1">{classInfo.id}</span> {classInfo.className}
//                 </td>
//                 <td className="py-1 px-2 text-left whitespace-nowrap max-w-xs">
//                   <div className="flex items-center">
//                     <img src={classInfo.instructor.image} alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
//                     <div>
//                       <p className="font-semibold text-black text-sm">{classInfo.instructor.name}</p>
//                       <p className="text-xs text-gray-700">{classInfo.instructor.additionalDetails}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="py-1 px-2 text-left whitespace-nowrap max-w-xs">
//                   {classInfo.status === 'join' && (
//                     <button
//                       onClick={() => handleBookNowClick(classInfo)}
//                       className="bg-blue-500 text-white font-semibold py-2 px-1 rounded-lg w-full"
//                     >
//                       Join
//                     </button>
//                   )}
//                   {classInfo.status === 'book' && (
//                     <button
//                       onClick={() => handleBookNowClick(classInfo)}
//                       className="border border-gray-300 shadow-lg text-black font-semibold py-2 px-1 rounded-lg w-full"
//                     >
//                       Book
//                     </button>
//                   )}
//                   {classInfo.status === 'booked' && (
//                     <button className="bg-gray-100 text-blue-500 font-semibold py-2 px-1 rounded-lg w-full">
//                       {classInfo.time}
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="md:hidden">
//         {classes.map((classInfo) => (
//           <div key={classInfo.id} className="bg-white shadow-md rounded-lg p-2 mb-2">
//             <h3 className="font-bold text-base mb-3">{classInfo.className}</h3>
//             <div className="flex items-center mb-3">
//               <img src={classInfo.instructor.image} alt="Instructor" className="w-8 h-8 rounded-full mr-2" />
//               <div>
//                 <p className="font-semibold text-sm">{classInfo.instructor.name}</p>
//               </div>
//             </div>
//             <div>
//               {classInfo.status === 'join' && (
//                 <button
//                   className="bg-blue-500 text-white font-semibold py-2 px-1 rounded-lg w-full"
//                 >
//                   Join
//                 </button>
//               )}
//               {classInfo.status === 'book' && (
//                 <button
//                   onClick={() => handleBookNowClick(classInfo)}
//                   className="border border-gray-300 shadow-lg text-black font-semibold py-2 px-1 rounded-lg w-full"
//                 >
//                   Book
//                 </button>
//               )}
//               {classInfo.status === 'booked' && (
//                 <button className="bg-gray-100 text-blue-500 font-semibold py-2 px-1 rounded-lg w-full">
//                   {classInfo.time}
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <BookNowModal
//         isOpen={isModalOpen}
//         onRequestClose={handleCloseModal}
//         onConfirm={handleConfirm}
//         selectedClass={selectedClass}
//         timer={timers[selectedClass?.id || '']} // Pass the timer for the selected class to the modal
//       />
//     </div>
//   );
// };

// export default ClassTable;
