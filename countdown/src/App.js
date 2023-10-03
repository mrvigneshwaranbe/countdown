import React from 'react';
import CountdownTimer from './Countdown';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <div className="background-image" />
      <div className="content">
        <div className="countdown-text">
         <span style={{fontSize:'60%'}}>Countdown</span> <br></br>
         <span style={{fontSize:'60%'}}>To</span><br></br>
         <b>New Year</b>
        </div>
        <CountdownTimer />
      </div>
    </div>
  );
};

export default App;