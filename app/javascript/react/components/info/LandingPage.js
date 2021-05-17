import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({});
const LandingPage = () => {
  const classes = useStyles();
  return (
    <Paper elevation="3">
      <Typography variant="h1" align="center">
        Welcome to Geardb
      </Typography>
      <Typography variant="subtitle1" align="center">
        An inventory managment app for rental companies in the concert industry
      </Typography>
      <Typography variant="h3" align="center">
        Usage
      </Typography>
      <Typography align="center">
        Log in to view your inventory. Once logged in items can be added to three categories:
        Inventory, Cases and Tours. Iventory items can be placed into cases and cases can be placed
        into tours with the drag and drop feature. Tours and cases can be selected to see what other
        items have been assigned to them.
      </Typography>

      <Typography variant="subtitle2">
        This app was created by{' '}
        <a href="https://www.linkedin.com/in/timothy-swierzewski/">Tim Swierzewski</a> and the source
        code is hosted on <a href="https://github.com/tjswierzewski/geardb">GitHub</a>
      </Typography>
    </Paper>
  );
};

export default LandingPage;
