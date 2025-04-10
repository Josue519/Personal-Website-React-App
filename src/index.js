import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

document.addEventListener('touchmove', function (e) {
  if (e.scale !== 1) {
    e.preventDefault();
  }
}, { passive: false }); 