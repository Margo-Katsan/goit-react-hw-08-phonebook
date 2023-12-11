import { FaUserPlus } from "react-icons/fa";
import { ContactForm } from "components/ContactForm/ContactForm"
import { Modal } from "components/Modal/Modal"
import { useModal } from "hooks/useModal"
import css from "./AddNewContactBtn.module.css"
export const AddNewContactBtn = () => {

  const {showModal, openModal, closeModal} = useModal()
  return (
    <>
      <button onClick={openModal} className={css.btn}>
        <FaUserPlus size={18} className={css.icon} />
          Add new
      </button>
      {showModal && (
        <Modal onClose={closeModal} modalClass = {css.orderNowModal}>
          <ContactForm onClose={closeModal} />
        </Modal>
      )}
    </>
    
  )
}