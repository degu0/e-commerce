import { useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <p>ID do Produto: {id}</p>
    </div>
  );
};

export default ProductDetail;
