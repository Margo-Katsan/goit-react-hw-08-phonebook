import { NavLink } from 'react-router-dom';
import css from "./WelcomeLinks.module.css"

export const WelcomeLinks = () => {
  return (
    <div className={css.wrapper}>
      <p>Get started:</p>
      <NavLink className={`${css.link} ${css.register}`} to="/register">Sign up</NavLink>
      
      <p>Already have an account?</p>
      <NavLink className={css.link} to="/login">Log in</NavLink>
    </div>
  )
}