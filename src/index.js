import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import StudentCreate from './components/StudentCreate';
import StudentGet from './components/StudentGet';
import StudentDelete from './components/StudentDelete';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Dashboard />
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();