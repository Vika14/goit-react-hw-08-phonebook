import { NavLink } from 'react-router-dom';
import css from './authNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.authNavContainer}>
      <NavLink className={css.link} to="register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
}