import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import ROUTE_LINKS from '../Routes/routeLink';
import { AuthContext } from '../../context/Context';

const styles = {
  nav: {
    position: 'absolute',
    paddingLeft: '5px',
    right: '20px',
    top: '20px',
    zIndex: '99',
  },
};

const Navigations = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const isActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });
  const onClickSignOut = () => {
    setIsAuth(false);
    localStorage.removeItem('isAuth');
    localStorage.removeItem('user');
    navigate(ROUTE_LINKS.login);
  };

  return (
    isAuth
      ? (
        <Typography sx={styles.nav}>
          <NavLink to='/home' style={isActiveStyle}>Home </NavLink>
          <Link to='/login' onClick={onClickSignOut}> SignOut </Link>
        </Typography>
      )
      : (
        <Typography sx={styles.nav}>
          <NavLink to='/login' >LogIn </NavLink>
        </Typography>
      ))
};

export default Navigations;
