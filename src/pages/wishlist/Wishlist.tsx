import { useEffect, useState } from "react";
import { GoHeartFill, GoTrash } from "react-icons/go";
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
                const filteredProducts = data.filter(product => product.favorite === isFavorite);

                setProducts(filteredProducts);
            } catch (err) {
                console.error(err);
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

    const handleClickHome = () => {
        navigate('/');
    }

    if (products.length === 0) {
        return (
            <div className="h-screen">
                <div className="h-full w-full flex flex-col justify-center items-center gap-10">
                    <GoHeartFill className="h-16 w-16 text-red-custom" />
                    <h2 className="text-3xl md:text-6xl">Your wishlist is empty</h2>
                    <button className="border-none rounded text-white bg-red-custom px-10 xl:px-20 py-5" onClick={handleClickHome}>Return to Home</button>
                </div>
            </div>
        )
    }

    const handleClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    return (
        <div>
            <div className="max-w-6xl m-auto pb-28 mt-20">
                <div className="h-1/2 flex flex-col gap-y-16">
                    <div className="flex flex-col gap-10 sm:flex-row sm:justify-around sm:gap-0 xl:justify-between items-center font-semibold">
                        <p className="text-lg">Wishlist ({products.length})</p>
                        <button className="border-2 border-gray-500 rounded py-2 px-8">
                            Move All To Bag
                        </button>
                    </div>
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4">
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
