import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import "@fontsource/mate-sc";

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
