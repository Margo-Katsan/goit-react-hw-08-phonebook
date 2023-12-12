import { useDispatch } from 'react-redux';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <section className={css.section}>
      <h1 className={css.mainTitle}>Registration</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <span className={css.title}>Username <span className={css.star}>*</span></span>
          <div className={css.inputWrapper}>
            <input className={css.input} type="text" name="name" placeholder="Enter your name" />
            <FaUserLarge className={`${css.icon} icon`} size={18}/>
          </div>
        </label>

        <label className={css.label}>
          <span className={css.title}>Email <span className={css.star}>*</span></span>
          <div className={css.inputWrapper}>
            <input className={css.input} type="email" name="email" placeholder="example@gmail.com" />
            <MdEmail className={`${css.icon} icon`} size={18}/>
          </div>
        </label>

        <label className={css.label}>
          <span className={css.title}>Password <span className={css.star}>*</span></span>
          <div className={css.inputWrapper}>
            <input className={`${css.input} ${css.inputPassword}`} type="password" name="password" placeholder="Enter password min 8 symbol" />
            <RiLockPasswordFill className={`${css.icon} icon`} size={18}/>
          </div>  
        </label>

        <button className={css.btn} type="submit">Sign up</button>
      </form>
      
    </section>
  );
};
