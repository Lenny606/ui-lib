import React from 'react';

function Modal(props) {
  const { isOpen, onClose, children } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
