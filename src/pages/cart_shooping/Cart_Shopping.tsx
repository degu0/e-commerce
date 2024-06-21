import { useEffect, useState } from "react";
import { GrCart } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

interface Product {
    id: string;
    productId: string;
    productName: string;
    productImage: string;
    price: number;
    quantity: number;
}

export function CartShopping() {
    const [products, setProducts] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
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

    const handleDeletePurchase = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:3000/purchases/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete purchase');
            }

            alert('Purchase deleted successfully');
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting purchase:', error);
            alert('Error deleting purchase');
        }
    };

    useEffect(() => {
        const total = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
        setTotalPrice(total);
    }, [products]);

    const handleClickHome = () => {
        navigate('/');
    }

    if (products.length === 0) {
        return (
            <div className="h-screen">
                <div className="h-full w-full flex flex-col justify-center items-center gap-10">
                    <GrCart className="h-16 w-16 text-red-custom" />
                    <h2 className="text-7xl">Your cart is empty</h2>
                    <button className="border-none rounded text-white bg-red-custom w-22 h-22 px-20 py-5" onClick={handleClickHome}>Return to Home</button>
                </div>
            </div>
        )
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
                        <ul key={product.id}>
                            <li
                                className="relative shadow flex justify-between items-center py-5"
                                onMouseEnter={() => setHoveredProductId(product.id)}
                                onMouseLeave={() => setHoveredProductId(null)}
                            >
                                {hoveredProductId === product.id && (
                                    <div
                                        className="absolute top-0 left-0 text-4xl text-red-custom cursor-pointer"
                                        onClick={() => handleDeletePurchase(product.id)}
                                        style={{ transform: 'translate(-50%, -50%)' }}
                                    >
                                        <TiDelete />
                                    </div>
                                )}
                                <div className="flex justify-center items-center ml-12 relative">
                                    <img src={product.productImage} alt={product.productName} className="w-12 h-10" title={product.productName} />
                                </div>
                                <p>${product.price}</p>
                                <div className="w-14 h-12 border-2 border-gray-300 rounded flex justify-center items-center">
                                    <p>{product.quantity}</p>
                                </div>
                                <p className="mr-14">${product.price * product.quantity}</p>
                            </li>
                        </ul>
                    ))}
                    <div className="flex items-center justify-between">
                        <button className="border-2 border-gray-400 rounded py-3 px-14 font-semibold">Return To Shop</button>
                        <button className="border-2 border-gray-400 rounded py-3 px-14 font-semibold">Update Cart</button>
                    </div>
                </div>
                <div className="flex items-start justify-between h-screen">
                    <div className="flex items-center gap-3 w-1/2">
                        <input type="text" placeholder="Coupon Code" className="border-black border-2 rounded p-3 w-6/12" />
                        <button className="border-none bg-red-custom text-white py-3 h-full rounded w-4/12">Apply Coupon</button>
                    </div>
                    <div className="w-2/5 border-2 border-black font-semibold">
                        <div className="flex flex-col gap-4 max-w-md m-auto my-8">
                            <p className="text-xl">Cart Total</p>
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
