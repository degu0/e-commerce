import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface CartProps {
    id: number;
    name: string;
    price: number;
    oldPrice: number;
    percentage: number;
    review: number;
    image: string;
}

const Cart: React.FC<CartProps> = ({ id, name, price, oldPrice, percentage, review, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div onClick={handleClick} className="flex flex-col cursor-pointer">
            <div className="bg-gray-line w-full h-56 rounded">
                <div className="bg-red-custom w-1/6 rounded px-2 py-1 text-white m-3">
                    {percentage}%
                </div>
                <div className="flex justify-center items-center">
                    <img src={image} alt={name} className="w-3/4" />
                </div>
            </div>
            <div>
                <h4 className="text-lg font-medium">{name}</h4>
                <div className="flex items-center gap-3 my-2">
                    <p className="text-red-custom ">${price.toFixed(2)}</p>
                    <p className="text-gray-300 line-through">${oldPrice.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <p className="text-gray-400">({review})</p>
                </div>
            </div>
        </div>
    );
}

export default Cart;