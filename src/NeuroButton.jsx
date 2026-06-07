import React from 'react';
// Notice we changed the import! We are tuning into the Radio Tower now.
import { useNeuroState } from './NeuroContext';

export default function NeuroButton() {
    // We just ask the tower for the score. No math happens in this file anymore!
    const struggleScore = useNeuroState();

    const dynamicStyle = {
        padding: `${10 + (struggleScore * 0.3)}px ${20 + (struggleScore * 0.5)}px`,
        fontSize: `${16 + (struggleScore * 0.15)}px`,
        backgroundColor: struggleScore > 40 ? '#28a745' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-out',
        transform: `scale(${1 + (struggleScore * 0.002)})`,
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p style={{ color: '#666', marginBottom: '20px' }}>
                Live System Telemetry: {struggleScore}
            </p>
            <button style={dynamicStyle}>
                Complete Action
            </button>
        </div>
    );
}