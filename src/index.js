import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/user.context';
import './index.scss';
import { ProductsProvider } from './contexts/products.context';

// BrowserRouter helps to keep track of the navigation history.
//meaning all other components are nested inside of the BrowserRouter.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
      <App />
      </ProductsProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

