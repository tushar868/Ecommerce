import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>Your Cart is Empty</h2>
        <Link to="/" className="btn-custom mt-3 ">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.map(item => (
        <div className="card mb-3" key={item.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.images[0]} alt={item.title} className="img-fluid rounded-start" style={{ height: '200px', objectFit: 'cover' }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  Price: ${item.price} <br />
                  Quantity: {item.quantity} <br />
                  <strong>Total: ${item.price * item.quantity}</strong>
                </p>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="text-end mt-4">
        <h4>Total Price: ${getTotalPrice().toFixed(2)}</h4>
        <Link to="/checkout" className="btn-custom mt-2">Proceed to Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
