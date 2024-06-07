import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface CartProps {
    id: number;
    name: string;
    price: number;
    image: string;
}

const Cart: React.FC<CartProps> = ({ id, name, price, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div onClick={handleClick} className="flex flex-col cursor-pointer">
            <div className="bg-gray-line w-full h-1/2 rounded">
                <img src={image} alt={name} />
            </div>
            <div>
                <h4 className="text-lg font-medium">{name}</h4>
                <p className="text-red-custom ">${price.toFixed(2)}</p>
                <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <p className="text-gray-400">(65)</p>
                </div>
            </div>
        </div>
    );
}

export default Cart;