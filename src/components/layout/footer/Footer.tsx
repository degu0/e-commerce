export function Footer() {
    return (
        <footer className="bg-black text-white w-full border-t-2 border-white font-custom">
            <div className="container mx-auto flex flex-wrap justify-around items-center py-10">
                <div>
                    <ul>
                        <li className="py-4">
                            <h3 className="text-2xl font-bold">Exclusive</h3>
                        </li>
                        <li className="pb-4">
                            <p>Subscribe</p>
                        </li>
                        <li className="pb-4">
                            <p>Get 10% off your first order</p>
                        </li>
                        <li className="pb-4">
                            <input
                                type="text"
                                className="bg-transparent border-2 border-white rounded p-2"
                                placeholder="Enter your email"
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="pb-4">
                            <h3 className="text-2xl font-bold">Support</h3>
                        </li>
                        <li className="pb-4">
                            <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
                        </li>
                        <li className="pb-4">
                            <p>exclusive@gmail.com</p>
                        </li>
                        <li className="pb-4">
                            <p>+88015-88888-9999</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="pb-4">
                            <h3 className="text-2xl font-bold">Account</h3>
                        </li>
                        <li className="pb-4">
                            <p>My Account</p>
                        </li>
                        <li className="pb-4">
                            <p>Login/ Register</p>
                        </li>
                        <li className="pb-4">
                            <p>Cart</p>
                        </li>
                        <li className="pb-4">
                            <p>Wishlist</p>
                        </li>
                        <li className="pb-4">
                            <p>Shop</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="pb-4">
                            <h3 className="text-2xl font-bold">Quick Link</h3>
                        </li>
                        <li className="pb-4">
                            <p>Privacy Policy</p>
                        </li>
                        <li className="pb-4">
                            <p>Terms Of Use</p>
                        </li>
                        <li className="pb-4">
                            <p>FAQ</p>
                        </li>
                        <li className="pb-4">
                            <p>Contact</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-800 text-center p-2">
                <p className="text-slate-700">© Ecommerce - 2024</p>
            </div>
        </footer>
    );
}
