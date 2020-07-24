import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login'; 
import App from './App.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Login/>

    <App/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

