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
      backgroundColor: '#f4f4f9',
      position: 'relative'
    }}>
      <h1 style={{ color: '#333', marginBottom: '10px' }}>Neuro-Adaptive UI Engine</h1>
      <p style={{ color: '#555', margin: '0 0 20px 0' }}>Shake your mouse wildly to simulate motor-impairment telemetry.</p>

      {/* Drop in our smart component */}
      <NeuroButton />

      {/* Creator Attribution / Trademark */}
      <footer style={{
        position: 'absolute',
        bottom: '20px',
        color: '#888',
        fontSize: '12px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontWeight: '600'
      }}>
        Created by Vineet M Dharwad &trade;
      </footer>
    </div>
  );
}

export default App;