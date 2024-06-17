import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

export function Header() {
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
                            <GrCart  className="h-6 w-6"/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}