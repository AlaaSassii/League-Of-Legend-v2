import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SignUp from './routes/SignUp';
import './App.css'
import SignIn from './routes/SignIn';
import Navbar from './components/Navbar';
import Landing from './routes/Landing';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

