import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';

import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

