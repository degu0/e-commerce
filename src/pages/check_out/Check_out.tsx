import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Visa_Icon from "../../image/Icons/Visa.svg";
import MasterCard_Icon from "../../image/Icons/Mastercard.svg";

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

export function CheckOut() {
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
                    Product / View Cart  / <label className="text-black">CheckOut</label>
                </p>
            </div>
            <div className="h-[120vh] max-w-7xl m-auto flex justify-between items-center">
                <div className="h-full">
                    <h2 className="font-semibold text-3xl">Billing Details</h2>
                    <div className="flex flex-col gap-8 mt-10">
                        <div>
                            <label htmlFor="Name" className="text-gray-400">First Name<label className="text-red-400">*</label></label>
                            <input type="text" id="Name" className="bg-gray-200 rounded border-none w-full p-3" />
                        </div>
                        <div>
                            <label htmlFor="Street" className="text-gray-400">Street Address<label className="text-red-400">*</label></label>
                            <input type="text" id="Street" className="bg-gray-200 rounded border-none w-full p-3" />
                        </div>
                        <div>
                            <label htmlFor="Floor" className="text-gray-400">Apartment, Floor, etc. (optional)</label>
                            <input type="text" id="Floor" className="bg-gray-200 rounded border-none w-full p-3" />
                        </div>
                        <div>
                            <label htmlFor="Town" className="text-gray-400">Town/City<label className="text-red-400">*</label></label>
                            <input type="text" id="Town" className="bg-gray-200 rounded border-none w-full p-3" />
                        </div>
                        <div>
                            <label htmlFor="Phone" className="text-gray-400">Phone Number<label className="text-red-400">*</label></label>
                            <input type="text" id="Phone" className="bg-gray-200 rounded border-none w-full p-3" />
                        </div>
                        <div>
                            <label htmlFor="Email" className="text-gray-400">Email Address<label className="text-red-400">*</label></label>
                            <input type="email" id="Email" className="bg-gray-200 rounded border-none w-full p-3" />
                        </div>
                    </div>
                </div>
                <div className="w-2/5">
                    <div className="flex flex-col w-5/6">
                        <div className="w-full">
                            {products.map(product => (
                                <div key={product.id} className="flex justify-between items-center w-full my-5 font-semibold">
                                    <div className="flex items-center gap-2">
                                        <img src={product.image} alt={product.name} className="h-12" />
                                        <p>{product.name}</p>
                                    </div>
                                    <p>${product.price}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 font-semibold">
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
                        </div>
                        <div>
                            <div className="space-y-2 my-8 font-semibold">
                                <div className="flex items-center justify-between gap-2 my-4">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="bank"
                                            className="checked:bg-red-900 h-5 w-5"
                                        />
                                        <label htmlFor="bank">Bank</label>
                                    </div>
                                    <div className="flex items-center">
                                        <img src={Visa_Icon} alt="Visa Logo" />
                                        <img src={MasterCard_Icon} alt="MasterCard Logo" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 my-4" >
                                    <input
                                        type="radio"
                                        name="payment"
                                        id="cash"
                                        className="checked:border-black h-5 w-5"
                                    />
                                    <label htmlFor="cash">Cash on delivery</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3">
                        <input type="text" className="border-2 border-black rounded text-gray-400 w-3/5 p-3" placeholder="Coupon Code" />
                        <button className="bg-red-custom text-white rounded border-none w-2/5 p-3">Apply Coupon</button>
                    </div>
                    <div className="my-10">
                        <button className="bg-red-custom text-white rounded border-none w-2/5 p-3">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


