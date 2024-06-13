import { FaRegHeart } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <header className="flex flex-wrap items-center justify-around w-full h-1/6 pt-8 pb-4 border-b-2 border-gray-line font-custom">
            <div>
                <a href="/" className="text-2xl font-bold">E-Commerce</a>
            </div>
            <div>
                <ul className="flex list-none flex-row items-center gap-8 font-normal text-xl">
                    <li>
                        <a href="/" className="relative inline-block text-lg group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="relative inline-block text-lg group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="relative inline-block text-lg group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/signUp" className="relative inline-block text-lg group">
                            SignUp
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex list-none flex-row items-center gap-4">
                    <li>
                        <input type="text" className="p-2 px-8 border-none rounded-md bg-gray-200" placeholder="What are you looking for?" />
                    </li>
                    <li>
                        <a href="/wishlist">
                            <FaRegHeart className="h-6 w-6" />
                        </a>
                    </li>
                    <li>
                        <a href="/cart">
                            <svg className="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 
                            2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;