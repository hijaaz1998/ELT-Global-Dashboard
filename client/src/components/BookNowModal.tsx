import React from 'react';
import Modal from 'react-modal';
import { ClassInfo } from '../types';

Modal.setAppElement('#root');

interface BookNowModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
  selectedClass: ClassInfo | null;
}

const BookNowModal: React.FC<BookNowModalProps> = ({ isOpen, onRequestClose, onConfirm, selectedClass }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book Now"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg p-8 shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Book Now</h2>
        {selectedClass && (
          <>
            <p className="mb-6">{`Are you sure you want to book ${selectedClass.className}?`}</p>
            {selectedClass.time && (
              <p className="text-blue-500 font-semibold mb-4">{`Starts at ${selectedClass.time} `}</p>
            )}
          </>
        )}
        <div className="flex justify-end">
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Confirm
          </button>
          <button
            onClick={onRequestClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BookNowModal;
