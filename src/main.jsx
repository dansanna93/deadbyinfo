import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// Inject global font style
const fontStyle = document.createElement('style');
fontStyle.innerHTML = `
  body {
    font-family: 'Roboto', Arial, sans-serif;
    background-color: #212529;
    color: #fff;
  }
`;
document.head.appendChild(fontStyle);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
