import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Components/About';
import Home from './Components/Home';
import Prime from './Components/Prime';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <About/>
    <Home/>
    <Prime/>
  </React.StrictMode>
);
