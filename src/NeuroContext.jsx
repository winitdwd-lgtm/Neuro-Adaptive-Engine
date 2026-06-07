import React, { createContext, useContext } from 'react';
import { useNeuroTracker } from './useNeuroTracker';

// 1. Create the "Radio Frequency"
const NeuroContext = createContext();

// 2. Create the "Radio Tower" that wraps around your app
export function NeuroProvider({ children }) {
    // The tower runs the brain...
    const struggleScore = useNeuroTracker();

    // ...and broadcasts the score to anyone listening
    return (
        <NeuroContext.Provider value={struggleScore}>
            {children}
        </NeuroContext.Provider>
    );
}

// 3. Create a custom hook so components can easily "tune in" to the radio
export function useNeuroState() {
    return useContext(NeuroContext);
}