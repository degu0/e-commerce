import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    price: number;
    stock: boolean;
    description: string;
    image: string;
    favorite: boolean;
    cart: boolean;
}

const CheckOut: React.FC = () => {
    const { cart } = useParams<{ cart: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    

    const fetchData = async () => {
        setLoading(true);
        try {
            
            const response = await fetch("http://localhost:3000/products");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            
            const data: Product[] = await response.json();
            
            const isFavorite = cart === "false";
            const filteredProducts = data.filter(product => product.cart !== isFavorite);
            
            setProducts(filteredProducts);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [cart]);

    if (loading) {
        return <p>Loading...</p>;
    }

    
    if (error) {
        return <p>Error: {error}</p>;
    }

    
    if (products.length === 0) {
        return <p>No products found</p>;
    }

    return (
        <div>
            <h1>Detalhes do Produto</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                        <p>Stock: {product.stock ? "Avalible" : "Out on Stock"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CheckOut;


