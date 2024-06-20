import { useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice: number;
    percentage: number;
    stock: boolean;
    description: string;
    image: string;
    favorite: boolean;
}

export function Wishlist() {
    const { favorite } = useParams<{ favorite: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data: Product[] = await response.json();
                const isFavorite = favorite !== "true";
                console.log(favorite);
                const filteredProducts = data.filter(product => product.favorite === isFavorite);

                setProducts(filteredProducts);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [favorite]);

    const toggleFavorite = async (productId: number) => {
        try {
            const updatedProducts = products.map(product =>
                product.id === productId ? { ...product, favorite: !product.favorite } : product
            );
            setProducts(updatedProducts);

            const product = updatedProducts.find(product => product.id === productId);
            if (product) {
                await fetch(`http://localhost:3000/products/${productId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ favorite: product.favorite }),
                });
            }
        } catch (error) {
            console.error('Error updating product favorite status:', error);
        }
    };

    const handleBuyNow = async (productId: number) => {
        try {
            const productToBuy = products.find(product => product.id === productId);
            if (!productToBuy) {
                throw new Error(`Product with ID ${productId} not found in wishlist.`);
            }

            const purchase = {
                productId: productToBuy.id,
                productName: productToBuy.name,
                productImage: productToBuy.image,
                quantity: 1,
                price: productToBuy.price,
                date: new Date().toISOString()
            };

            const response = await fetch(`http://localhost:3000/purchases`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(purchase)
            });

            if (!response.ok) {
                throw new Error("Failed to make purchase.");
            }

            alert("Purchase successful!");
            navigate('/cart');
        } catch (error) {
            console.error('Error making purchase:', error);
            alert('Error making purchase');
        }
    };

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (products.length === 0) {
        return <p>No products found</p>;
    }

    const handleClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    return (
        <div>
            <div className="max-w-7xl m-auto h-[120vh] mt-20">
                <div className="h-1/2 flex flex-col gap-y-16">
                    <div className="flex justify-between items-center font-semibold">
                        <p className="text-xl">Wishlist ({products.length})</p>
                        <button className="border-2 border-gray-500 rounded text-lg py-3 px-10">
                            Move All To Bag
                        </button>
                    </div>
                    <div className="w-full h-full grid grid-cols-4 gap-4">
                        {products.map(product => (
                            <div key={product.id} className="relative">
                                <div className="bg-gray-200 border-none rounded-t flex flex-col items-center w-full h-52 relative">
                                    <div className="flex justify-between items-center w-full absolute top-0">
                                        <div className="bg-red-custom rounded px-2 py-1 text-white m-3">
                                            -{product.percentage}%
                                        </div>
                                        <div
                                            onClick={() => toggleFavorite(product.id)}
                                            className="border-none rounded-full px-2 py-2 bg-white m-3 cursor-pointer"
                                        >
                                            <GoTrash />
                                        </div>
                                    </div>
                                    <img src={product.image} alt={product.name} className="w-1/2 mt-12" />
                                </div>
                                <div className="flex justify-center items-center gap-2 bg-black text-white p-3 rounded-b cursor-pointer">
                                    <GrCart className="h-5 w-5" />
                                    <button
                                        onClick={() => handleBuyNow(product.id)}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                                <div onClick={() => handleClick(product.id)} className="cursor-pointer mt-4">
                                    <h2 className="text-lg font-medium">{product.name}</h2>
                                    <div className="flex items-center justify-start gap-2 mt-1">
                                        <p className="text-red-custom">${product.price}</p>
                                        <p className="text-gray-300 line-through">${product.oldPrice}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
