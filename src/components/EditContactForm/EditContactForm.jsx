import { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import css from './EditContactForm.module.css'

export const EditContactForm = ({onStopChange, onSubmit, name, number}) => {
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setEditedNumber(e.target.value);
  };

  return (
    <form className={css.form} onSubmit={onSubmit} autoComplete="off">
      <label className={css.label}>
        <input className={`${css.input} ${css.inputName}`} type="text" name="name" value={editedName} onChange={handleNameChange}/>
      </label>
      <label className={css.label}>
        Tel.:
        <input className={css.input} type="tel" name="number" value={` ${editedNumber}`} onChange={handleNumberChange}/>
      </label>
      <button className={`${css.btn} ${css.checkBtn}`} type="submit"><AiOutlineCheckCircle size={20} color='#193300'/></button>
      <button className={`${css.btn} ${css.closeBtn}`} onClick={onStopChange} type="button"><AiOutlineCloseCircle size={20} color='#660000'/></button>
    </form>
  )
}
