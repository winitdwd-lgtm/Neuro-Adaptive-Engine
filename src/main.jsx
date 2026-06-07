import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NeuroProvider } from './NeuroContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* We wrap the NeuroProvider completely around the App! */}
    {/* Now every single file inside your app gets the broadcast. */}
    <NeuroProvider>
      <App />
    </NeuroProvider>
  </React.StrictMode>,
)