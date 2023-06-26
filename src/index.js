import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import TimesProvider from "./components/Context/TimeContext";
import UserProvider from './components/Context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
      <TimesProvider>
        {/* <React.StrictMode> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </React.StrictMode> */}
      </TimesProvider>
    </UserProvider>
);
