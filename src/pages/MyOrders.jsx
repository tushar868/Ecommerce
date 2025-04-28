import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

function MyOrders() {
  const { orders } = useContext(OrderContext);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center">
          <p>No orders found. Place an order first!</p>
        </div>
      ) : (
        orders.map((orderItems, index) => (
          <div className="card mb-4 shadow-sm" key={index}>
            <div className="card-body">
              <h5>Order #{index + 1}</h5>
              <ul className="list-group list-group-flush">
                {orderItems.map(item => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.title}
                    <span>${item.price} × {item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;
