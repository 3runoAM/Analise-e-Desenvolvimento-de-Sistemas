import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FactorContextProvider from "./contexts/FactorContextProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <FactorContextProvider>
          <App />
      </FactorContextProvider>
  </React.StrictMode>
);