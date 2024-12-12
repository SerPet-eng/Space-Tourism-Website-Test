import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.css';
import App from './App.jsx';
import PageContext from './utils/PageContext';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PageContext>
        <App />
      </PageContext>
    </BrowserRouter>
  </StrictMode>,
);
