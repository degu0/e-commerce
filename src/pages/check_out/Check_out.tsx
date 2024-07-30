import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Visa_Icon from "../../../public/image/Icons/Visa.svg";
import MasterCard_Icon from "../../../public/image/Icons/Mastercard.svg";

interface Product {
    id: string;
    productId: string;
    productName: string;
    productImage: string;
    price: number;
    quantity: number;
}

export function CheckOut() {
    const { cart } = useParams<{ cart: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();


    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/purchases");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data: Product[] = await response.json();
            setProducts(data);
        } catch (err) {
            setError((err as Error).message);
        }
    };

    useEffect(() => {
        const total = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
        setTotalPrice(total);
    }, [products]);

    useEffect(() => {
        fetchData();
    }, [cart]);


    if (error) {
        return <p>Error: {error}</p>;
    }


    if (products.length === 0) {
        return <p>No products found</p>;
    }

    const handleClick = () => {
        alert("Congratulations! You've purchased our products. Please come back again. 🎉  🎉");
        navigate('/');
    }

    return (
        <div>
            <div className="h-[15vh] flex items-center ml-24">
                <p className="text-gray-500 tracking-widest">
                    Product / View Cart  / <label className="text-black">CheckOut</label>
                </p>
            </div>
            <div className="max-w-sm lg:max-w-4xl xl:max-w-6xl m-auto flex flex-col lg:flex-row justify-between items-center gap-10 mb-24">
                <div className="h-full md:w-10/12">
                    <h2 className="font-semibold text-3xl">Billing Details</h2>
                    <div className="flex flex-col gap-8 mt-10">
                        <div>
                            <label htmlFor="Name" className="text-gray-400">First Name: <label className="text-red-400">*</label></label>
                            <input type="text" id="Name" className="bg-gray-200 rounded border-none text-sm w-full p-3 focus:outline-none focus:ring-0" />
                        </div>
                        <div>
                            <label htmlFor="Street" className="text-gray-400">Street Address: <label className="text-red-400">*</label></label>
                            <input type="text" id="Street" className="bg-gray-200 rounded border-none text-sm w-full p-3 focus:outline-none focus:ring-0" />
                        </div>
                        <div>
                            <label htmlFor="Floor" className="text-gray-400">Apartment, Floor, etc. (optional)</label>
                            <input type="text" id="Floor" className="bg-gray-200 rounded border-none text-sm w-full p-3 focus:outline-none focus:ring-0" />
                        </div>
                        <div>
                            <label htmlFor="Town" className="text-gray-400">Town/City: <label className="text-red-400">*</label></label>
                            <input type="text" id="Town" className="bg-gray-200 rounded border-none text-sm w-full p-3 focus:outline-none focus:ring-0" />
                        </div>
                        <div>
                            <label htmlFor="Phone" className="text-gray-400">Phone Number: <label className="text-red-400">*</label></label>
                            <input type="text" id="Phone" className="bg-gray-200 rounded border-none text-sm w-full p-3 focus:outline-none focus:ring-0" />
                        </div>
                        <div>
                            <label htmlFor="Email" className="text-gray-400">Email Address: <label className="text-red-400">*</label></label>
                            <input type="email" id="Email" className="bg-gray-200 rounded border-none text-sm w-full p-3 focus:outline-none focus:ring-0" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-10/12 lg:w-8/12">
                    <div className="flex flex-col">
                        <div className="w-full">
                            {products.map(product => (
                                <div key={product.id} className="flex justify-between items-center w-full my-5 font-semibold">
                                    <div className="flex items-center gap-2">
                                        <img src={product.productImage} alt={product.productName} className="h-12" />
                                        <p className="text-sm">{product.productName}</p>
                                    </div>
                                    <p className="text-sm">${product.price * product.quantity}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 font-semibold text-sm">
                            <div className="flex justify-between items-center">
                                <p>Subtotal: </p>
                                <p>${totalPrice}</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <p>Shipping: </p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <p>Total: </p>
                                <p>${totalPrice}</p>
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
                                        <label htmlFor="bank" className="text-sm">Bank</label>
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
                                    <label htmlFor="cash" className="text-sm">Cash on delivery</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3">
                        <input type="text" className="border-2 border-black rounded text-gray-400 w-3/5 p-2" placeholder="Coupon Code" />
                        <button className="bg-red-custom text-white rounded border-none w-3/5 p-2">Apply Coupon</button>
                    </div>
                    <div className="my-10">
                        <button className="bg-red-custom text-white rounded border-none w-2/5 p-2" onClick={handleClick}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


