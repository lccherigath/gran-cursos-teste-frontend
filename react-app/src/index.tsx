import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/_variables.scss';
import './styles/global.scss';
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
