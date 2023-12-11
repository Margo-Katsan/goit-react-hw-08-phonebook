import { useState } from "react";
import { useDispatch } from "react-redux"
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { AddToFavorBtn } from "components/AddToFavorBtn/AddToFavorBtn";
import { MdCake } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { deleteContact, editContact } from "redux/contacts/operations";
import { EditContactForm } from "components/EditContactForm/EditContactForm";
import { AvatarContact } from "components/AvatarContact/AvatarContact";
import css from "./ContactListItem.module.css"

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isContactUpdating, setIsContactUpdating] = useState(false);

  function handleStartChanging() {
    setIsContactUpdating(true);
  }
  function handleStopChanging() {
    setIsContactUpdating(false);
  }
  const handleGetUpdatedContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values = {
      _id: contact._id,
      name: form.elements.name.value,
      phone: form.elements.phone.value,
      avatar: e.target.elements.avatar.files[0],
    }
    const birthdayValue = form.elements.birthday.value;
    if (birthdayValue && birthdayValue.trim() !== '') {
      values.birthday = birthdayValue;
    }
    dispatch(
      editContact(values)
    );

    form.reset();
    setIsContactUpdating(false);
  };
  return (
    <li key={contact.id} className={css.contact}>

      {isContactUpdating ? (
        <div className={css.container}>
          <EditContactForm onStopChange={handleStopChanging} onSubmit={handleGetUpdatedContact} contact={contact}/>
        </div>
      ) : (
        <div className={css.container}>
          <AvatarContact avatarURL={contact.avatarURL} name={contact.name}/>
          <div className={css.userInfo}>
              <p className={css.name}>{contact.name}</p>
              <div className={css.number}>
                <BsTelephoneFill className={css.icon} color="var(--priority-text-color)"/>
                <p>{contact.phone}</p>
              </div>
              {contact.birthday && (
                <div className={css.birthday}>
                  <MdCake size={20} color="var(--accent-color)" className={css.icon}/>
                <p>{`${new Date(contact.birthday).getDate()}.${new Date(contact.birthday).getMonth()+1}.${new Date(contact.birthday).getFullYear()}`}</p>
              </div>
              )}
              
            
          </div>
            <button className={`${css.editBtn} ${css.btn}`} onClick={handleStartChanging}>
              <FaEdit size={20} color="var(--priority-text-color)" />
            </button>
            <AddToFavorBtn isFavorite={contact.favorite} contactId={contact._id}/>
        </div>
      )}
      
      <button className={`${css.delBtn} ${css.btn}`} onClick={() => { dispatch(deleteContact(contact._id)) }}><MdDelete size={20} color="var(--priority-text-color)" /></button>
    </li>
  )
} 