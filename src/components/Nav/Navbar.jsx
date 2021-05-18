import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import { Icon } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  const history = useHistory();

  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <AppBar style={{ color: 'black' }}>
            <Toolbar variant="dense">
              <Grid container xs={12} direction="row" justify="center"></Grid>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Link to="/">
            <h2 className="heading-Title">Astro Vanz</h2>
            <AirportShuttleIcon
              style={{ color: 'green' }}
              fontSize="large"
            ></AirportShuttleIcon>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
