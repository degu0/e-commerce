import { useEffect, useState } from 'react';
import { Cart } from '../cart/Cart';

interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice: number;
    percentage: number;
    review: number;
    image: string;
}


export function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<number>(4);

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

    const showMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 5);
    };

    const showLessProducts = () => {
        setVisibleProducts(prevCount => prevCount - 5);
    };

    return (
        <div className="p-4 flex flex-col items-center w-full">
            <div
                className="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
                {products.slice(0, visibleProducts).map((product: Product) => (
                    <div key={product.id} className="flex-shrink-0 w-full p-2">
                        <Cart
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            percentage={product.percentage}
                            review={product.review}
                            image={product.image}
                        />
                    </div>
                ))}
            </div>
            <div className='mt-10'>
                {visibleProducts < products.length && (
                    <button
                        onClick={showMoreProducts}
                        className="bg-red-custom w-40 h-12 border-none rounded text-white
                        text-sm hover:bg-opacity-90 hover:transition-colors hover:duration-500"
                    >
                        View All Products
                    </button>
                )}
                {visibleProducts > 4 && (
                    <button
                        onClick={showLessProducts}
                        className="bg-red-custom w-40 h-12 border-none rounded text-white
                        text-sm hover:bg-opacity-90 hover:transition-colors hover:duration-500"
                    >
                        Hide Products
                    </button>
                )}
            </div>
        </div>
    );
}
