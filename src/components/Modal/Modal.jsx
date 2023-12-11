import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import css from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ onClose, children }) => {

  useEffect(() => {

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
  }, [onClose]);
  
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
   
 }
  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.close} type="button" onClick={onClose}>
          <AiOutlineCloseCircle size={20} color='var(--priority-text-color)'/>
        </button>
        {children}
      </div>
    </div>, modalRoot)
}