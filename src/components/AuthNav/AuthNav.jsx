import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <>
      <NavLink className={css.nav_link} to="register">
        Register
      </NavLink>
      <NavLink className={css.nav_link} to="login">
        Log in
      </NavLink>
    </>
  );
};