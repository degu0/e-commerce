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

export function CartShopping() {
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
            <div className="h-[15vh] flex items-center ml-44">
                <p className="text-gray-500 tracking-widest">
                    Home / <label className="text-black">Cart</label>
                </p>
            </div>
            <div className="max-w-7xl m-auto flex flex-col gap-y-24">
                <div className="flex flex-col gap-y-10">
                    <ul className="shadow py-5 px-3">
                        <li className="flex justify-between">
                            <p className="ml-10">Product</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p className="mr-10">Subtotal</p>
                        </li>
                    </ul>
                    {products.map(product => (
                        <ul >
                            <li key={product.id} className="shadow flex justify-between py-8">
                                <div className="flex justify-center items-center gap-3 ml-10">
                                    <img src={product.image} alt={product.name} className="w-12 h-10" />
                                    <h2>{product.name}</h2>
                                </div>
                                <p>${product.price}</p>
                                <input type="number" name="" id="" className="border-2 border-gray-300 rounded w-12" />
                                <p className="mr-10">${product.price}</p>
                            </li>
                        </ul>
                    ))}
                    <div className="flex items-center justify-between">
                        <button className="border-2 border-gray-400 rounded py-3 px-14">Return To Shop</button>
                        <button className="border-2 border-gray-400 rounded py-3 px-14">Update Cart</button>
                    </div>
                </div>
                <div className="flex items-start justify-between h-screen">
                    <div className="flex items-center gap-3 w-1/2">
                        <input type="text" placeholder="Coupon Code" className="border-black border-2 rounded p-3 w-6/12" />
                        <button className="border-none bg-red-custom text-white py-3 h-full rounded w-4/12">Apply Coupon</button>
                    </div>
                    <div className="w-2/5 border-2 border-black">
                        <div className="flex flex-col gap-4 max-w-md m-auto my-8">
                            <p className="text-xl font-semibold">Cart Total</p>
                            <div className="flex justify-between items-center">
                                <p>Subtotal: </p>
                                <p>R$ 1730</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <p>Shipping: </p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <p>Total: </p>
                                <p>R$ 1730</p>
                            </div>
                            <div className="">
                                <a href="/checkout" className="w-full flex justify-center items-center">
                                    <button className="border-none rounded bg-red-custom text-white w-1/2 p-3 ">Process to checkout</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



