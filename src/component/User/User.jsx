import React, { useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import ModalInput from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../store/slices/userSlices';

const styles = {
  Paper: {
    position: 'relative',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    textDecoration: 'none',
    marginTop: '10px',
  },
  ControlButtons: {
    width: '50px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Users: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
};

const Users = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userDetails, setUserDetails] = useState({ username: '', email: '' });
  const usersArray = useSelector((state) => state.user.users || []);
  const dispatch = useDispatch();

  const handleOpenModal = (id) => {
    usersArray.map((user) => {
      if (user.id === id) {
        setUserDetails({
          username: user.username,
          email: user.email
        });
      }
      return user
    });
    setOpenModal(true);
  };
  const removeUsers = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <Grid
      xs={12}
      item
    >
      {usersArray.map((user) => (
        <Paper
          key={user.id}
          elevation={2}
          sx={styles.Paper}
        >
          <Box sx={styles.Users}>
            <PersonIcon
              sx={{ width: '50px', height: '50px' }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
              <Typography variant="body2">{`Name: ${user.username}`}</Typography>
              <Typography variant="body2">{`Email: ${user.email}`}</Typography>
            </Box>
          </Box>
          <Box
            sx={styles.ControlButtons}
            className="icon_change_todo"
            aria-hidden="true"
          >
            <EditIcon
              role="button"
              color="primary"
              aria-label="Edit"
              onClick={() => handleOpenModal(user.id)}
            />
            <DeleteIcon
              color="secondary"
              aria-label="Delete"
              onClick={() => removeUsers(user.id)}
            />
          </Box>
          <ModalInput userDetails={userDetails} setUserDetails={setUserDetails} id={user.id} open={openModal} setOpen={setOpenModal}/>
        </Paper>
      ))}

    </Grid>
  );
};

export default Users;
