import { Button, Dialog, DialogContentText, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react';
import UserForm from './UserForm';
const UserSignup = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContentText>Please sign up to use these services</DialogContentText>
        <UserForm handleClose={handleClose} />
      </Dialog>
    </div>
  );
};

export default UserSignup;
