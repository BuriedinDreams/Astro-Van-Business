import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import { Icon, Grid } from '@material-ui/core';
// import {  } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/coreListItemIcon';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';

function Navbar() {
  const history = useHistory();

  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const list = () => (
    <List>
      <ListItem> Rent-A-Van</ListItem>
      <ListItem>About Us</ListItem>
      <ListItem>How It Works</ListItem>
      <ListItem>Contact Us</ListItem>
    </List>
  );

  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <AppBar style={{ color: 'white' }}>
            <Toolbar variant="dense">
              <Grid
                container
                xs={12}
                direction="row"
                justify="space-between"
                // alignItems="center"
              >
                <Grid
                  container
                  xs={1}
                  direction="row"
                  justify="space-between"
                  // alignItems="center"
                >
                  <Link to="/">
                    <Typography className="h6" style={{ flexGrow: 1 }}>
                      Astro Vanz
                    </Typography>
                  </Link>
                  <AirportShuttleIcon
                    className="van-Logo"
                    style={{ color: 'green' }}
                    fontSize="large"
                  ></AirportShuttleIcon>
                </Grid>
                <Grid>
                  <IconButton
                    color="inherit"
                    aria-label="menu"
                    onClick={() => toggleDrawer(true)}
                  >
                    <Drawer
                      anchor={'right'}
                      open={drawer}
                      onClose={toggleDrawer}
                    >
                      {list()}
                    </Drawer>
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
