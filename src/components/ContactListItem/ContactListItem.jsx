import { useState } from "react";
import { useDispatch } from "react-redux"
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { deleteContact, editContact } from "redux/contacts/operations";
import { EditContactForm } from "components/EditContactForm/EditContactForm";
import css from "./ContactListItem.module.css"






export const ContactListItem = ({ contact }) => {
  const [isContactUpdating, setIsContactUpdating] = useState(false);

function handleStartChanging() {
  setIsContactUpdating(true);
  console.log('proizoshlo')

  }
  function handleStopChanging() {
    setIsContactUpdating(false);
  }
  const handleGetUpdatedContact = e => {
    e.preventDefault(); const form = e.currentTarget; 
    const values = {
      id: contact.id,
      name: form.elements.name.value,
      number: form.elements.number.value
          }
            dispatch(
              editContact(values)
            );
            
    form.reset();
    setIsContactUpdating(false);
  };
  

  const dispatch = useDispatch();
  
  return (
    <li key={contact.id} className={css.contact}>
      
      {isContactUpdating ? (
        <div className={css.container}>
          <EditContactForm onStopChange={handleStopChanging} onSubmit={handleGetUpdatedContact} name={contact.name} number={contact.number} />
        </div>
        ) : (
            <div className={css.container}>
              <div className={css.userInfo}>
                <p className={css.name}>{contact.name}</p>
                <p className={css.number}>Tel.: {contact.number}</p>
              </div>
          
              <button className={`${css.editBtn} ${css.btn}`} onClick={handleStartChanging}><FaEdit size={20} color="#3a2302" /></button>
              
          
            </div>
            
            
        )}
        <button className={`${css.delBtn} ${css.btn}`} onClick={() => { dispatch(deleteContact(contact.id)) }}><MdDelete size={20} color="#3a2302" /></button>
    </li>
  )
} 