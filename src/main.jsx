import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';   
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <OrderProvider>  
          <App />
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
);
