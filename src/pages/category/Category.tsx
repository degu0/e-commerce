import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Cart } from "../../components/service/cart/Cart";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    oldPrice: number;
    percentage: number;
    review: number;
    image: string;
}
export function Category() {
    const { category } = useParams<{ category: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [visibleProducts, setVisibleProducts] = useState<number>(4);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch product with id ${category}`);
                }
                const data: Product[] = await response.json();
                const isCategory = category;
                const filteredProducts = data.filter(product => product.category === isCategory);

                setProducts(filteredProducts);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, [category]);

    const showMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 5);
    };

    const showLessProducts = () => {
        setVisibleProducts(prevCount => prevCount - 5);
    };

    return (
        <div className="">
            <div className="h-[15vh] flex items-center ml-24">
                <p className="text-gray-500 tracking-widest">
                    Home / <label className="text-black">{category}</label>
                </p>
            </div>
            <div className="max-w-7xl m-auto">
                <div className="p-4 flex flex-col items-center w-full">
                    <div
                        className="w-4/5 md:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {products.slice(0, visibleProducts).map((product: Product) => (
                            <div key={product.id} className="flex-shrink-0 p-2">
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
                                className="bg-red-custom w-48 h-14 border-none rounded text-white
                        text-normal hover:bg-opacity-90 hover:transition-colors hover:duration-500"
                            >
                                View All Products
                            </button>
                        )}
                        {visibleProducts > 4 && (
                            <button
                                onClick={showLessProducts}
                                className="bg-red-custom w-48 h-14 border-none rounded text-white
                        text-normal hover:bg-opacity-90 hover:transition-colors hover:duration-500"
                            >
                                Hide Products
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}