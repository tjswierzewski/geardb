import { Button, Dialog, DialogContentText, DialogTitle, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import UserSignInForm from './UserSignInForm';
import _ from 'lodash';

const useStyles = makeStyles({
  error: {
    color: 'red'
  }
});

const UserSignIn = ({ setUser }) => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setErrors({});
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign In
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
        <DialogContentText>Please sign in to use these services</DialogContentText>
        <DialogContentText className={classes.error}>
          {_.isEmpty(errors) ? null : errors.errors[0]}
        </DialogContentText>
        <UserSignInForm handleClose={handleClose} setUser={setUser} setErrors={setErrors} />
      </Dialog>
    </div>
  );
};

export default UserSignIn;
