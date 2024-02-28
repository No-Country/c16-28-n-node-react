import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <App />
          <Toaster
      position="top-center"
      toastOptions={{
        duration: 2000,
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '4px 10px',
          color: 'inherit',
          flex: '1 1 auto',
          whiteSpace: 'pre-line',
          padding: '0.5em',
          width: 'max-content',
          fontSize: 'medium',
          fontWeight: 'bold',
        },
      }}
    />
  </React.StrictMode>,
)
