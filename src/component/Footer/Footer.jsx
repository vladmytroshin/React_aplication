import React from 'react';
import { Box } from '@mui/material';
import Moment from 'react-moment';

const styles = {
  Footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient( 135deg, #65FDF0 10%, #1D6FA3 100%)',
    position: 'fixed',
    bottom: '0px',
    left: '0px',
    width: '100%',
    height: '70px',
    overflow: 'hidden',
    zIndex: 1,
    fontSize: '20px',
  },
};

const Footer = () => {
  return (
    <Box sx={styles.Footer}>
      <Box />
      <Moment format='HH:mm' interval={1000} />
    </Box>
  );
};

export default Footer;
