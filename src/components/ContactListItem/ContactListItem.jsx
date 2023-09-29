import { useDispatch } from "react-redux"
import { MdDelete } from 'react-icons/md'
import css from "./ContactListItem.module.css"
import { deleteContact } from "redux/contacts/operations";

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  
  return (
    <li key={contact.id} className={css.contact}>
      <div className={css.container}>
        <div className={css.userInfo}>
<p className={css.name}>{contact.name}</p>
      <p className={css.number}>Tel.: {contact.number}</p>
      </div>
      
      <div className={css.userActions}>
        <button className={css.editBtn}></button>
        <button className={css.delBtn} onClick={() => { dispatch(deleteContact(contact.id)) }}><MdDelete /></button>
      </div>
      </div>
      
      
    </li>
  )
} 