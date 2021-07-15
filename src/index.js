import React from 'react';
import { BrowserRouter  } from "react-router-dom";
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '@ant-design/icons';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Dashboard/> 
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


