import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import User from './Components/User';
import { Button } from '@material-ui/core';


function App() {
  const [familiar, setFimiliar] = useState(false);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fluid component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', textAlign:'center', fontSize:'20px' }} >
        <h1>React Conditional Rendering.</h1>
        <h4>Is Familiar: {familiar.toString()}</h4> <br/>
        <Button variant="contained" color="primary" onClick={() => setFimiliar(!familiar)}> Toggle Button</Button>
        <User familiar={familiar}></User>
      </Container>
    </React.Fragment>
  );
}

export default App;
