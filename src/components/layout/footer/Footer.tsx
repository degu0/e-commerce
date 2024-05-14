const Footer: React.FC = () => {
    return (
        <div className="bg-black w-full h-full border-2 border-white  text-white">
            <div className="flex items-center justify-around p-10">
                <div>
                    <ul>
                        <li className="py-4">
                            <h3 className="text-2xl font-bold">Exclusive</h3>
                        </li>
                        <li className="pb-4">
                            <p>Subscribe</p>
                        </li>
                        <li className="pb-4">
                            <p>Get 10% off your fist order</p>
                        </li>
                        <li className="pb-4">
                            <input type="text" className="bg-transparent border-2 border-white rounded p-2" placeholder="Enter your email" />
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="pb-4">
                            <h3 className="text-2xl font-bold">Support</h3>
                        </li>
                        <li className="pb-4">
                            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
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
                        <li>
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
            <div className="border-2 border-slate-900 text-center p-2">
                <p className="text-slate-800">TASLJDFHASJDFSDJF</p>
            </div>
        </div>
    );
}

export default Footer;