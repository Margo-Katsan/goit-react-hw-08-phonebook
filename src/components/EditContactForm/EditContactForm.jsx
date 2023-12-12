import { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import { BsTelephoneFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { Avatar } from '@mui/material';
import { AvatarContact } from 'components/AvatarContact/AvatarContact';
import { AddToFavorBtn } from "components/AddToFavorBtn/AddToFavorBtn";
import { MdCake } from "react-icons/md";
import css from './EditContactForm.module.css'

export const EditContactForm = ({ onStopChange, onSubmit, contact }) => {
  const {name, phone, avatarURL, _id, favorite, birthday} = contact
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(phone);
  const [editedAvatar, setEditedAvatar] = useState(null);
  const initialStateBirthday = birthday ? new Date(birthday).toISOString().slice(0, 10) : "";

  const [editedBirthday, setEditedBirthday] = useState(initialStateBirthday);
  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setEditedNumber(e.target.value);
  };

  const handleBirthdayChange = (e) => {
    console.log(e.target.value)
    setEditedBirthday(e.target.value);
  }

  const handleAvatarChange = e => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function (e) {
        setEditedAvatar(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <form className={css.form} onSubmit={onSubmit} autoComplete="off">
      <input type="file" name="avatar" id="avatar" accept="image/*" className="visually-hidden" onChange={handleAvatarChange} />
      <div className={css.editPhoto}>
        {editedAvatar ? (
          <Avatar src={`${editedAvatar}`} alt="avatar" sx={{ width: 60, height: 60 }}/>
        ) : (
          <AvatarContact avatarURL={avatarURL} name={name}/>
        )}
        <label htmlFor="avatar" ><MdModeEdit size={20} className={css.editIcon} color='var(--priority-text-color)' /></label>
      </div>
      
      <div className={css.info}>
        <label className={css.label}>
          <input className={`${css.input} ${css.inputName}`} type="text" name="name" value={editedName} onChange={handleNameChange} autoFocus/>
        </label>
        <label className={css.label}>
          <div className={css.number}>
            <BsTelephoneFill className={css.icon} color="var(--priority-text-color)"/>
            <input className={`${css.input} ${css.inputPhone}`}
              type="tel"
              name="phone"
              pattern="[+]?[0-9]{10,15}"
              title="Phone number should consist of 10 to 15 digits and may include the symbol '+'. For example, +123456789012"
              value={editedNumber}
              onChange={handleNumberChange} />
          </div>
        </label>
        <label>
          <div className={css.birthday}>
            <MdCake className={`${css.icon} icon`} size={20} />
            <input
              name="birthday"
              min="1990-01-01"
              max="2023-01-01"
              pattern="\d{2}-\d{2}-\d{4}"
              className={`${css.input} ${css.inputBirthday}`}
              value={editedBirthday}
              type='date'
              onChange={handleBirthdayChange} />
          </div>
        </label>
      </div>
      
      <button className={`${css.btn} ${css.checkBtn}`} type="submit"><AiOutlineCheckCircle size={20} color='var(--green-color)' /></button>
      <button className={`${css.btn} ${css.closeBtn}`} onClick={onStopChange} type="button"><AiOutlineCloseCircle size={20} color='var(--accent-color)' /></button>
      <AddToFavorBtn isFavorite={favorite} contactId={_id}/>
    </form>
  )
}
