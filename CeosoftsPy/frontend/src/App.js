import React from 'react';
import HomePage from './pages/HomePage';
import { CssBaseline, Container } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <HomePage />
      </Container>
    </div>
  );
}

export default App;