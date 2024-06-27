import { useEffect, useState } from "react";
import { RiInboxArchiveLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface Product {
    id: string;
    productId: string;
    productName: string;
    productImage: string;
    price: number;
    quantity: number;
    date: string;
}


export function Order() {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/purchases', {
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

    const daysUntilDate = (dateString: string) => {
        const currentDate = new Date(dateString);  
        const targetDate = new Date('2024-12-31T18:17:15.405Z');  

        const difference = targetDate.getTime() - currentDate.getTime();

        const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));

        return daysDifference;
    };



    const handleClickHome = () => {
        navigate('/');
    }

    if (products.length === 0) {
        return (
            <div className="h-screen">
                <div className="h-full w-full flex flex-col justify-center items-center gap-10">
                    <RiInboxArchiveLine className="h-16 w-16 text-red-custom" />
                    <h2 className="text-7xl">Your cart is empty</h2>
                    <button className="border-none rounded text-white bg-red-custom w-22 h-22 px-20 py-5" onClick={handleClickHome}>Return to Home</button>
                </div>
            </div>
        )
    }

    return (
        <div className="h-screen">
            <div className="h-[15vh] flex items-center ml-24">
                <p className="text-gray-500 tracking-widest">
                    Home / <label className="text-black">My Order</label>
                </p>
            </div>
            <div className="max-w-7xl m-auto flex items-center justify-between">
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="text-lg font-bold">My Orders</h2>
                        <p className="text-red-custom cursor-pointer ml-10">My Orders</p>
                    </div>
                </div>
                <div className="w-4/5">
                    <ul className="shadow py-5 px-3">
                        <li className="flex justify-between">
                            <p className="ml-10">Product</p>
                            <p>Value</p>
                            <p>Quantity</p>
                            <p className="mr-10">Estimated Delivery Date</p>
                        </li>
                    </ul>
                    {products.map(product => (
                        <ul key={product.id}>
                            <li
                                className="relative shadow flex justify-between items-center py-5"
                            >
                                <div className="flex justify-center items-center ml-12 relative">
                                    <img src={product.productImage} alt={product.productName} className="w-12 h-10" title={product.productName} />
                                </div>
                                <p>${product.price * product.quantity}</p>
                                <div className="w-14 h-12 border-2 border-gray-300 rounded flex justify-center items-center">
                                    <p>{product.quantity}</p>
                                </div>
                                <p className="mr-12">There are {daysUntilDate(product.date)} days left.</p>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}