import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import i18n from "../src/utils/i18n"
import { I18nextProvider } from 'react-i18next'; // Correct import from react-i18next

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped with I18nextProvider
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
