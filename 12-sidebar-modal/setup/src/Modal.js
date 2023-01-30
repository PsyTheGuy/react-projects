import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "./context";
const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);

  return (
    <div className={`modal-overlay ${isModalOpen && "show-modal"}`}>
      <div className="modal-container">
        <button
          className="close-modal-btn"
          onClick={() => setIsModalOpen(false)}
        >
          <FaTimes />
        </button>
        Modal Content
      </div>
    </div>
  );
};

export default Modal;
