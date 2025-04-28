import { createContext, useState } from 'react';

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const addOrder = (orderItems) => {
    setOrders(prevOrders => [...prevOrders, orderItems]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
