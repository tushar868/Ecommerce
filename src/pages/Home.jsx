import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productApi';
import { Link } from 'react-router-dom';



function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        const uniqueCategories = [...new Set(data.map(product => product.category.name))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error(error);
      }
    }
    loadProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category.name === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Products</h2>

     
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '200px' , objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{product.title.slice(0, 30)}...</h6>
                  <p className="card-text fw-bold">${product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn-custom mt-auto">
                    View Details
                  </Link>

                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h4>No products found.</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
