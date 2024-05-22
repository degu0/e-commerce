import { useEffect, useState } from "react";
import Cart from "../cart/Cart";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const Carrosel: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 2; // Número de itens a serem exibidos por vez

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data: Product[] = await response.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextSlide = () => {
        if (currentIndex < Math.ceil(products.length / itemsPerPage) - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="relative w-full h-full overflow-hidden flex items-center">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{

                    transform: `translateX(-${currentIndex * (100 / Math.ceil(products.length / itemsPerPage))}%)`
                }}
            >
                {products.length > 0 &&
                    products.map((product: Product) => (
                        <div key={product.id} className="w-1/4 flex-shrink-0 p-2">
                            <Cart
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        </div>
                    ))}
            </div>
            <button
                onClick={prevSlide}
                className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-lg focus:outline-none hover:bg-gray-200 focus:bg-gray-300 transition-all duration-300 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentIndex === 0}
            >
                <IoIosArrowBack />
            </button>
            <button
                onClick={nextSlide}
                className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-lg focus:outline-none hover:bg-gray-200 focus:bg-gray-300 transition-all duration-300 ${currentIndex >= Math.ceil(products.length / itemsPerPage) - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentIndex >= Math.ceil(products.length / itemsPerPage) - 1}
            >
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default Carrosel;
