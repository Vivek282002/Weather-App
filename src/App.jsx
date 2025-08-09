{/*
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
*/}
import React from 'react';
import "./App.css";
import SearchBox from './components/SearchBox';
import InfoBox from './components/InfoBox';
import WeatherApp from './components/WeatherApp';

function App() {
  

  return (
    <div>
      {/* <Button variant="text">Click me!</Button>
      <Button variant="contained">Click me!</Button>
      <Button variant="outlined">Click me!</Button>
      <Button variant="contained" color='success' size='small'>Click me2!</Button> */} {/**green color button and small */}
      {/* <Button variant="contained" color='error' size='large'  startIcon={<DeleteIcon />}>Click me2!</Button> */} {/**red color button  and large and comes with a delete icon infront of text*/}
        {/* <Alert variant="outlined" severity="error">
        Delete Option is Given.
      </Alert>
      */}

          <WeatherApp />

    </div>
  )
}

export default App
