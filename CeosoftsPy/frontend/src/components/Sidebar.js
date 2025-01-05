import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import './Sidebar.css';

function Sidebar() {
  return (
    <Box width={250} bgcolor="#2c3e50" color="white" p={2}>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;