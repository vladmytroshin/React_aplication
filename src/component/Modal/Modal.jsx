import React, from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeUser } from '../../store/slices/userSlices';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalInput = ({ open, setOpen, id, setUserDetails, userDetails }) => {
  const dispatch = useDispatch();

  const handleClose = () => setOpen(false);
  const handleChangeUserDetails = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };
  const changesInput = () => {
    setOpen(false);
    dispatch(changeUser({ ...userDetails, id }));

  };
  const blurInput = (e) => {
    if (e.key === 'Escape') {
      e.target.blur();
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={styles}
          onKeyDown={blurInput}
        >
          <TextField
            sx={{ padding: '7px' }}
            id="outlined-name"
            label="Name"
            name="username"
            value={userDetails.username}
            onChange={handleChangeUserDetails}
          />
          <TextField
            sx={{ padding: '7px' }}
            id="outlined-email"
            label="Email"
            name="email"
            value={userDetails.email}
            onChange={handleChangeUserDetails}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            onClick={changesInput}
          >Save</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalInput;
