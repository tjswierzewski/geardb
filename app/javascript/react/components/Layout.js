import React, { useState } from 'react';
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

const Layout = ({ user, setUser, removeUser, children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Typography variant="h4" noWrap>
            GearDB
          </Typography>
          <div>
            <img src={logo} alt="logo" style={{ padding: '.45rem' }} />
          </div>
          <div className={classes.userActions}>
            {user ? null : <UserSignIn setUser={setUser} />}
            {user ? null : <UserSignup />}
            {user ? <UserLogOut user={user} removeUser={removeUser} /> : null}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx({
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <Divider />
        <List>
          <ListItem button key="Tours">
            <ListItemIcon>
              <DirectionsBus />
            </ListItemIcon>
            <ListItemText primary="Tours" />
          </ListItem>

          <ListItem button key="Inventory">
            <ListItemIcon>
              <FilterNone />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
          </ListItem>

          <ListItem button key="Cases">
            <ListItemIcon>
              <Mic />
            </ListItemIcon>
            <ListItemText primary="Cases" />
          </ListItem>
        </List>

        <ListItem button key="Repair">
          <ListItemIcon>
            <Build />
          </ListItemIcon>
          <ListItemText primary="Repair" />
        </ListItem>

        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
