import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Fragment>
    <App />
  </Fragment>
  // </React.StrictMode>
);