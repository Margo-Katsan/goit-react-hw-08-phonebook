import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import { FaUserLarge } from "react-icons/fa6";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaCalendarDays } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdCake } from "react-icons/md";
import * as Yup from 'yup';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { MdModeEdit } from "react-icons/md";
import { Avatar } from '@mui/material';
import { MdAddAPhoto } from "react-icons/md";
import css from './ContactForm.module.css'
 
const schema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!'),
}) 

export const ContactForm = ({onClose}) => {
  const [editedAvatar, setEditedAvatar] = useState(null);
  const [fileAvatar, setFileAvatar] = useState(null);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [birthday, setBirthday] = useState("");

  const handleAvatarChange = e => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function (e) {
        setEditedAvatar(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
      setFileAvatar(e.target.files[0])
    }
  }

  const handleSubmitForm = values => {
    const isContactExist = contacts.filter(contact => contact.name === values.name).length !== 0;
    if (isContactExist) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    if (birthday !== "") {
      dispatch(addContact({ ...values, birthday, avatarURL: fileAvatar }))
    }
    else {
      dispatch(addContact({ ...values, avatarURL: fileAvatar }))
    }

    onClose()
  }
  
  return (
    
    <Formik
      initialValues={{
        avatarURL: '',
        name: '',
        phone: '',
        birthday: null,
      }}
      validationSchema={schema}
      onSubmit={handleSubmitForm}
    >
      <Form className={css.form}>
        <input type="file" name="avatarURL" id="avatar" accept="image/*" className="visually-hidden" onChange={handleAvatarChange} />
 
          {editedAvatar ? (
            <label for="avatar" className={css.photoLabel}>
              <Avatar src={editedAvatar} alt="avatar" sx={{ width: 80, height: 80 }} />
              <MdModeEdit size={24} className={css.editIcon} color='var(--priority-text-color)' />
            </label>
          ) : (
            <label htmlFor="avatar" className={css.photoLabel}>
              <Avatar sx={{ bgcolor: "#8C8375", width: 80, height:80 }}>
                <MdAddAPhoto size={40}/>
              </Avatar>
            </label>
          )}
        
        <label className={css.label}>
          <span className={css.title}>Name<span style={{color: "var(--accent-color)"}}> *</span></span>
          <div className={css.inputWrapper}>
            <Field
              type="text"
              name="name"
              className={css.input}
              required
            />
            <FaUserLarge className={`${css.icon} icon`}/>
          </div>
          <ErrorMessage className={css.error} name="name" component="p"/>
        </label>

        <label className={css.label}>
          <span className={css.title}>Phone number<span style={{ color: "var(--accent-color)" }}> *</span></span>
          <div className={css.inputWrapper}>
            <Field
              type="tel"
              name="phone"
              className={css.input}
              pattern="[+]?[0-9]{10,15}"
              title="Phone number should consist of 10 to 15 digits and may include the symbol '+'. For example, +123456789012"
              required
            />
            <BsTelephoneFill className={`${css.icon} icon`}/>
          </div>
          <ErrorMessage className={css.error} name="number" component="p"/>
        </label>

        <label className={css.label}>
          <span className={css.title}>Birthday</span>
          <div className={css.inputWrapper}>
            <DatePicker
              onChange={setBirthday}
              value={birthday}
              className={css.datePicker}
              calendarClassName={css.calendar}
              dayPlaceholder="dd"
              monthPlaceholder="mm"
              yearPlaceholder="yyyy"
              clearIcon={<AiOutlineCloseCircle size={20} color="var(--priority-text-color)" />}
              calendarIcon={<FaCalendarDays size={20} color="var(--priority-text-color)" />}
              format={"dd.MM.y"}
              openCalendarOnFocus={false}
            />
            <MdCake className={`${css.icon} icon`} size={20}/>
          </div>
        </label>

        <button className={css.submit} type="submit">Add new contact</button>
      </Form>
    </Formik>
    
    
  );
}