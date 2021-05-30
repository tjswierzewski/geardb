import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    margin: '2rem auto',
    maxWidth: '1400px'
  },
  usage: {
    marginTop: '1.5rem'
  },
  description: {
    maxWidth: '800px',
    margin: '1.5rem auto'
  },
  tagline: {
    margin: '.2rem'
  }
});
const LandingPage = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h1" align="center">
        Welcome to Geardb
      </Typography>
      <Typography variant="subtitle1" align="center">
        An inventory managment app for rental companies in the concert industry
      </Typography>
      <Typography className={classes.usage} variant="h3" align="center">
        Usage
      </Typography>
      <Typography className={classes.description} align="center">
        Log in to view your inventory. Once logged in items can be added to three categories:
        Inventory, Cases and Tours. Iventory items can be placed into cases and cases can be placed
        into tours with the drag and drop feature. Tours and cases can be selected to see what other
        items have been assigned to them.
      </Typography>

      <Typography className={classes.tagline} variant="subtitle2" align="center">
        This app was created by{' '}
        <a href="https://www.linkedin.com/in/timothy-swierzewski/">Tim Swierzewski</a> and the source
        code is hosted on <a href="https://github.com/tjswierzewski/geardb">GitHub</a>
      </Typography>
    </Paper>
  );
};

export default LandingPage;
