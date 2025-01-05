import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './Navbar.css';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6">Ceosofts ERP & CRM</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;