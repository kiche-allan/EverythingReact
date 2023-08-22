import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ImageChageOnMouseOver from './ImageChangeOnMoseOver';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ImageChageOnMouseOver />
    <ImageChageOnMouseOver />
  </React.StrictMode>
);

