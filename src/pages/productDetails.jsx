import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function ProductDetails() {
    let params = useParams();
    let productId = params.id;
    
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                if (!res.ok) throw new Error("Product not found");
                return res.json();
            })
            .then(data => {
                if (!data) throw new Error("Product not found");
                setSelectedProduct(data);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
            });
    }, [productId]);

    if (loading) {
        return (
            <div>
                <div>
                    <div>
                        <div></div>
                        <h2>Loading product...</h2>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !selectedProduct) {
        return (
            <div>
                <div>
                    <div>
                        <h2>Product not found</h2>
                        <Link to="/">← Back to Products</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div>
                <Link to="/">← Back to Products</Link>
                <div>
                    <div>
                        <img src={selectedProduct.image} alt={selectedProduct.title} />
                    </div>
                    <div>
                        <span>{selectedProduct.category}</span>
                        <h1>{selectedProduct.title}</h1>
                        
                        <div>
                            <p>${selectedProduct.price.toLocaleString()}</p>
                            <div>
                                <span>⭐</span> {selectedProduct.rating?.rate} / 5 ({selectedProduct.rating?.count})
                            </div>
                        </div>
                        
                        <p>{selectedProduct.description}</p>
                        
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
