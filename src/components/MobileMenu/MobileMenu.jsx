import { NavLink } from "react-router-dom";
import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { logOut } from 'redux/auth/operations';

import css from "./MobileMenu.module.css"

export const MobileMenu = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  return (
    <>

      <Transition in={isOpen} timeout={300} nodeRef={nodeRef}>
        {(state) => (
          <><div className={`${css.overlay} overlay-${state}`}>
           
        </div>
           <div ref={nodeRef} className={`${css.modal} modal-${state}`}>
          <button className={css.btn} type="button" onClick={onClose}>
            <AiOutlineCloseCircle size={20} color='var(--priority-text-color)'/>
          </button>
          <div className={css.content} >
            <nav className={css.nav}>
              <ul className={css.list}>
                <li className={css.item}>
                  <NavLink to="/contacts" className={css.link}>Contacts</NavLink>
                </li>
                <li className={css.item}>
                  <NavLink to="/favorites" className={css.link}>Favorites</NavLink>
                </li>
              </ul>
              </nav>
              <button className={css.btnLogout} type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
 
          </div>
        </div>
          </>

  
       
          )}
        </Transition>
    </>
    
    
  )
}