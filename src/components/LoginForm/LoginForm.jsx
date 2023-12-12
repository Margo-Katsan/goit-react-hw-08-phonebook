import { useDispatch } from 'react-redux';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <section className={css.section}>
      <h1 className={css.mainTitle}>Log in</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          
          <span className={css.title}>Email&nbsp;<span className={css.star}>*</span></span>
          <div className={css.inputWrapper}>
            <input className={css.input} type="email" name="email" placeholder="Enter your email" />
            <MdEmail className={`${css.icon} icon`} size={18}/>
          </div>
        
      </label>
        <label className={css.label}>
          <span className={css.title}>Password&nbsp;<span className={css.star}>*</span></span>
          <div className={css.inputWrapper}>
            
            <input className={css.input} type="password" name="password" placeholder="Enter your password" />
            <RiLockPasswordFill className={`${css.icon} icon`} size={18}/>
          </div>
        
      </label>
      <button className={css.btn} type="submit">Log In</button>
    </form>
    </section>
    
  );
};
