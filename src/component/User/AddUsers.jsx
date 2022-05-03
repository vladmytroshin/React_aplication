import React, { useState } from 'react';
import { Box, Button, Grid, Input, Paper, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/slices/userSlices';

const styles = {
  Paper: {
    position: 'relative',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    textDecoration: 'none',
    marginBottom: '20px',
  },
};

const AddNewUsers = () => {
  const [newUser, setNewUser] = useState({id:'', username: '', email: '' });
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.username === '' && newUser.email === '') {
      setIsError(true);
      return;
    }
    setNewUser({
      ...newUser,
      email: '',
      username: '',
    })
    setIsError(false);
  };
  const onChangeInput = (event) => {
    setNewUser({
      ...newUser,
      id:Date.now(),
      [event.target.name]: event.target.value,
    });
  };
  const addNewUser = () => {
    dispatch(addTodo(newUser));
  };

  return (
    <Grid
      xs={12}
      item
    >
      <Paper
        elevation={2}
        sx={styles.Paper}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
        >
          <Box>
            <Input
              placeholder="Name"
              name="username"
              inputProps={{
                'aria-label': 'Description',
              }}
              onChange={onChangeInput}
              value={newUser.username}
              sx={{ width: '100%' }}
            />
            <Input
              placeholder="Email"
              name="email"
              inputProps={{
                'aria-label': 'Description',
              }}
              onChange={onChangeInput}
              value={newUser.email}
              sx={{ width: '100%' }}
            />
            <Button
              sx={{ marginTop: '10px' }}
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              onClick={addNewUser}
            >
              Add New User
            </Button>
            {isError && (
              <Typography sx={{paddingLeft:'10px'}} variant="caption" color="error">
                Error, must enter a value!
              </Typography>
            )}
          </Box>
          <Box/>
        </Box>
      </Paper>
    </Grid>
  );
};

export default AddNewUsers;
