import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// material UI IMPORTS
import { Icon, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// material UI ICONS
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';

// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';

function Navbar() {
  const history = useHistory();

  const [drawer, setDrawer] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth >= 500);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    // setIsMobile(window.innerWidth >= 500);
    // console.log('is mobile');
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth >= 500);
    });
  }, []);

  // This is what is inside the hamburger menu
  const list = () => (
    <div>
      <List>
        <ListItem button onClick={() => history.push('/rent')}>
          Rent-A-Van
        </ListItem>
        <ListItem button onClick={() => history.push('/about')}>
          About Us
        </ListItem>
        <ListItem button onClick={() => history.push('/howItWorks')}>
          How It Works
        </ListItem>
        <ListItem button onClick={() => history.push('/contact')}>
          Contact Us
        </ListItem>
      </List>
    </div>
  ); // end of list

  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <AppBar style={{ color: 'white' }}>
            <Toolbar variant="dense" style={{ backgroundColor: 'black' }}>
              {isMobile ? (
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  spacing={4}
                  alignItems="center"
                >
                  <Grid
                    container
                    xs={2}
                    direction="row"

                    // alignItems="center"
                  >
                    <Link to="/">
                      <Typography variant="h5">Astro Vanz</Typography>
                    </Link>
                    <AirportShuttleIcon
                      className="van-Logo"
                      style={{ color: 'green' }}
                      fontSize="large"
                    ></AirportShuttleIcon>
                  </Grid>

                  <Grid xs={2}>
                    <Link onClick={() => history.push('/about')}>
                      <Typography variant="h6">
                        Rent a van
                        <InfoIcon
                          className="contact-Logo"
                          style={{ color: 'grey' }}
                          fontSize="large"
                        ></InfoIcon>
                      </Typography>
                    </Link>
                  </Grid>

                  <Grid xs={2}>
                    <Link onClick={() => history.push('/about')}>
                      <Typography variant="h6">
                        About us
                        <InfoIcon
                          className="contact-Logo"
                          style={{ color: 'grey' }}
                          fontSize="large"
                        ></InfoIcon>
                      </Typography>
                    </Link>
                  </Grid>

                  <Grid xs={2}>
                    <Link onClick={() => history.push('/about')}>
                      <Typography variant="h6">
                        How it works
                        <InfoIcon
                          className="contact-Logo"
                          style={{ color: 'grey' }}
                          fontSize="large"
                        ></InfoIcon>
                      </Typography>
                    </Link>
                  </Grid>

                  <Grid xs={2}>
                    <Link onClick={() => history.push('/contact')}>
                      <Typography variant="h6">
                        Contact Us
                        <ContactSupportIcon
                          className="contact-Logo"
                          style={{ color: 'blue' }}
                          fontSize="large"
                        ></ContactSupportIcon>
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              ) : (
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
              )}
            </Toolbar>
          </AppBar>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
