import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error loading product:", error);
      }
    }
    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setMessage('Item added to cart successfully!');
    setTimeout(() => {
      setMessage('');
    }, 3000); 
  };

  if (!product) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div className="container mt-5">
      {message && (
        <div className="alert alert-success text-center" role="alert">
          {message}
        </div>
      )}
      <div className="row">
        <div className="col-md-6">
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="img-fluid rounded" 
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h4 className="text-success">${product.price}</h4>
          <p>{product.description}</p>
          <button className="btn-custom mt-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
