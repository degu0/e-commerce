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
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product with id ${id}`);
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <img src={product.image} alt={product.name} className="w-full" />
      <h2>{product.name}</h2>
      <p>ID do Produto: {product.id}</p>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
      <p>Descrição: {product.description}</p>
      <p>Em estoque: {product.stock ? "Sim" : "Não"}</p>
      <p>Favorito: {product.favorite ? "Sim" : "Não"}</p>
    </div>
  );
};

export default ProductDetail;


