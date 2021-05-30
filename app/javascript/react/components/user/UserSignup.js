import { Button, Dialog, DialogContentText, DialogTitle, makeStyles } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import UserForm from './UserForm';

const useStyles = makeStyles({
  error: {
    color: 'red'
  }
});

const UserSignup = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setErrors([]);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContentText>Please sign up to use these services</DialogContentText>
        <DialogContentText className={classes.error}>
          {_.isEmpty(errors) ? null : errors[0]}
        </DialogContentText>
        <UserForm handleClose={handleClose} setErrors={setErrors} />
      </Dialog>
    </div>
  );
};

export default UserSignup;
