import React from 'react';
import NeuroButton from './NeuroButton';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f4f4f9'
    }}>
      <h1 style={{ color: '#333' }}>Neuro-Adaptive UI Engine</h1>
      <p style={{ color: '#555' }}>Shake your mouse wildly to simulate motor-impairment telemetry.</p>

      {/* Drop in our smart component */}
      <NeuroButton />

    </div>
  );
}

export default App;