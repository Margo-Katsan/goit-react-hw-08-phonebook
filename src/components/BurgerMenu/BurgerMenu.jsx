import { IoMenu } from "react-icons/io5";
import { MobileMenu } from "components/MobileMenu/MobileMenu";
import { useModal } from "hooks/useModal";
import css from "./BurgerMenu.module.css"

export const BurgerMenu = () => {
  
  const { showModal, openModal, closeModal } = useModal();

  return (
    <>
      <button className={css.burgerMenu} type="button" onClick={openModal}>
        <IoMenu size={24} color="var(--priority-text-color)"/>
      </button>
      <MobileMenu isOpen={showModal} onClose={closeModal} />
    </>
  );
};