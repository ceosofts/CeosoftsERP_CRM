import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Box, Typography } from '@mui/material';
import './Dashboard.css';

function Dashboard() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1} display="flex" flexDirection="column">
        <Navbar />
        <Box p={2}>
          <Typography variant="h4">Dashboard</Typography>
          <Typography>Welcome to the Ceosofts ERP & CRM Dashboard</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;