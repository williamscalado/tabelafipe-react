import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routes from './Routers';
const Container =  document.getElementById('root')
const root = ReactDOMClient.createRoot(Container);

root.render( 
        <App /> 
);
reportWebVitals();
