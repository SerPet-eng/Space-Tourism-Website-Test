import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.css';
import App from './App.jsx';
import PageContext from './utils/PageContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageContext>
      <App />
    </PageContext>
  </StrictMode>,
);
