import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider
  //   domain="dev-uzfwis76thkfo5nj.us.auth0.com"
  //   clientId="8txFbDJCMFoIoI8chXncuvIux0PcYXr0"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  //   >
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
  // </Auth0Provider>
  // aa
);

