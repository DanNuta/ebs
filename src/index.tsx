import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ProductsProvider } from './context/Products.context';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
