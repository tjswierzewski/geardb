import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import useStyles from '../styles/useStyles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Build, DirectionsBus, FilterNone, Mic, PinDropSharp } from '@material-ui/icons';
import UserSignIn from './user/UserSignIn';
import UserSignup from './user/UserSignup';
import UserLogOut from './user/UserLogOut';
import logo from '../../../assets/images/logo_size_invert';
import { UserContext } from './UserContext';

const Layout = ({ children }) => {
  const { user } = useContext(UserContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" noWrap>
            GearDB
          </Typography>
          <div>
            <img src={logo} alt="logo" style={{ padding: '.45rem' }} />
          </div>
          <div className={classes.userActions}>
            {user ? null : <UserSignIn />}
            {user ? null : <UserSignup />}
            {user ? <UserLogOut /> : null}
          </div>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
