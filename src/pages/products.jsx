import { Link } from "react-router-dom";
import { products } from "../data/products";

export function Products() {
    return (
        <div>
            <h1>Our Products</h1>
            <div>
                {products.map(function(product) {
                    return (
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                            <Link to={`/product/${product.id}`}>
                                <button>View Details</button>
                            </Link>
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
