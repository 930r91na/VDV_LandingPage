import React from "react";
import ReactDOM from "react-dom";

// Assuming CloseIcon is either imported or defined in the same file
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="relative w-1/2 h-1/2 bg-white p-4 rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-white" // Adjusted for top right, added margin for spacing
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
};

export default Modal;
