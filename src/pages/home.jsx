import React, { useEffect, useState } from 'react'
import { Navbar } from '../component/navbar'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      <div className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-3xl font-bold underline">Hello world!</h1> 
        <p>Browse through our latest collection of products.</p>
        
        {(products.length === 0 || error) && (
          <button onClick={fetchProducts} disabled={loading}>
            {loading ? 'Reload' : 'Reload Products'}
          </button>
        )}
        
        {loading && <p>Loading products...</p>}
        {error && <p>Error: {error}</p>}
        
        {!loading && !error && (
          <div>
            {products.map(product => (
              <div key={product.id}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                />
                <h3>{product.title}</h3>
                <p>${product.price.toFixed(2)}</p>
                <p>
                  {product.category}
                </p>
                {/* <button onClick={() => navigate(`/product/${product.id}`)}>
                  View Details
                </button> */}
                <Button className="bg-green-500 text-white hover:bg-green-600" onClick={() => navigate(`/product/${product.id}`)}>
                  View Details
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
