import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
//  dev-0hlvoz5en5l1meut.us.auth0.com
//  hsUauvEa50lPSwTkS8VRYtuYqoMSphGK
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-0hlvoz5en5l1meut.us.auth0.com"
      clientId="hsUauvEa50lPSwTkS8VRYtuYqoMSphGK"
      redirectUri={window.location.origin}
      cacheLocation="localstorage">
    
    <GithubProvider>
     <App /> 
    </GithubProvider>
    {/* <App /> */}
    </Auth0Provider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
