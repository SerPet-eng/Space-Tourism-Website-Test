import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.css';
import App from './App.jsx';
import PageContext from './utils/PageContext.jsx';
import { HashRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <PageContext>
        <App />
      </PageContext>
    </HashRouter>
  </StrictMode>,
);
