import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import 'bootstrap/dist/css/bootstrap.min.css';

const config = {
  apiKey: "AIzaSyBn2ioPuCoNQZ4BHHG82RRF8cry-_7RH8w",
  authDomain: "react-project-1110f.firebaseapp.com",
  projectId: "react-project-1110f",
  storageBucket: "react-project-1110f.appspot.com",
  messagingSenderId: "816446804346",
  appId: "1:816446804346:web:305347cd2f3096d4f846c3",
  measurementId: "G-TN15RCYXYF"
};
firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
