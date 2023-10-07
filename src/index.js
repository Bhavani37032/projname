import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ResponsiveAppBar from './components/navbar';
import Signup from './components/SignUp';
import SignIn from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import { UserAuthContextProvider } from "./context/UserAuthContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthContextProvider> {/* Wrap your entire app with UserAuthContextProvider */}
        <App />
      </UserAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
