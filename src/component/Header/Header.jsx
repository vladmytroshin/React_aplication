import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Navigations from '../Navigations/Navigations';
import { AuthContext } from '../../context/Context';

const styles = {
  Header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient( 135deg, #65FDF0 10%, #1D6FA3 100%)',
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '70px',
    overflow: 'hidden',
    zIndex: 100,
  },
  AuthorizedUser: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: '10px',
  },
};

const Header = () => {
  const [authorizedUser, setAuthorizedUser] = useState('');
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if(isAuth){
      setAuthorizedUser(JSON.parse(localStorage.getItem('user')))
    }else {
      setAuthorizedUser('')
    }
  }, [isAuth]);

  return (
    <>
      {isAuth
        ?
        <Box sx={styles.Header}>
          <Box sx={styles.AuthorizedUser}>
            <Typography>Authorized User</Typography>
            <Typography variant="body2">{`Name: ${authorizedUser.username}`}</Typography>
            <Typography variant="body2">{`Email: ${authorizedUser.email}`}</Typography>
          </Box>
          <Box>
            <Navigations/>
          </Box>
        </Box>
        :
        <Box sx={styles.Header}>
          <Box>
            <Navigations/>
          </Box>
        </Box>
      }
    </>

  );
};

export default Header;
