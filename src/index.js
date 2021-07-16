import React from 'react';
import { BrowserRouter  } from "react-router-dom";
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './style.css'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '@ant-design/icons';

export const types = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
}
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter >
      <Dashboard/> 
    </BrowserRouter>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


