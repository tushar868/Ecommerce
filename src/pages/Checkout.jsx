import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { currentUser } = useContext(AuthContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    const currentCartItems = [...cartItems];  

    addOrder(currentCartItems);   
    setCartItems([]);             
    setOrderPlaced(true);         

    setTimeout(() => {
      navigate('/myorders');
    }, 2000); 
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Checkout</h2>

      {orderPlaced ? (
        <div className="alert alert-success text-center" role="alert">
          🎉 Your order has been placed successfully! Redirecting to My Orders...
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handlePlaceOrder} className="row g-3 shadow p-4 rounded bg-white">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={currentUser ? currentUser.email : ''}
                  disabled
                />
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" required />
              </div>
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <input type="text" className="form-control" id="state" required />
              </div>
              <div className="col-md-2">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" required />
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn-custom w-50">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
