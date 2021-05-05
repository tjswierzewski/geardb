import React, { useState } from 'react';
import clsx from 'clsx';
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { ThemeProvider } from '@material-ui/core/styles';
import useStyles from '../styles/useStyles';
import theme from '../themes/theme';
import { Build, DirectionsBus, FilterNone, Mic } from '@material-ui/icons';
import GearIndex from './GearIndex';
import { Grid } from '@material-ui/core';
import CaseIndex from './CaseIndex';

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
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
          <Grid container>
            <Grid item xs={6}>
              <CaseIndex />
            </Grid>
            <Grid item xs={6}>
              <GearIndex />
            </Grid>
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
