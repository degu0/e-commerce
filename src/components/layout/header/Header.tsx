import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

import { useAuth } from '../../service/auth_context/AuthContext';

import Dropdown from "../../forms/dropdown/Dropdown";
import { CiSearch } from "react-icons/ci";


export function Header() {

    const { user } = useAuth();

    return (
        <header className="flex flex-wrap items-center justify-around w-full h-1/6 pt-8 pb-4 border-b-2 border-gray-line font-custom">
            <div>
                <a href="/" className="text-base md:text-xl lg:text-2xl font-bold">E-Commerce</a>
            </div>
            <div className="hidden lg:block">
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
                    {!user ? (
                        <li>
                            <a href="/signUp" className="relative inline-block text-lg group">
                                SignUp
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                    ) : ("")}

                </ul>
            </div>
            <div>
                <ul className="flex list-none flex-row items-center gap-8">
                    <li className="flex justify-center items-center">
                        <input
                            type="text"
                            className="flex-grow p-2 border-none focus:outline-none focus:ring-0 rounded-l-md bg-gray-200
                            xl:px-8"
                            placeholder="What are you looking for?"
                        />
                        <div className="bg-gray-200 p-2 rounded-r-md flex items-center justify-center">
                            <CiSearch className="w-6 h-6" />
                        </div>
                    </li>
                    {user ? (
                        <ul className="hidden lg:flex lg:flex-row gap-6">
                            <li className="w-8 h-8 flex justify-center items-center">
                                <a href="/wishlist">
                                    <FaRegHeart className="h-6 w-6" />
                                </a>
                            </li>
                            <li className="w-8 h-8 flex justify-center items-center">
                                <a href="/cart">
                                    <GrCart className="h-6 w-6" />
                                </a>
                            </li>
                            <li className="flex w-8 h-8">
                                <Dropdown />
                            </li>
                        </ul>
                    ) : ("")}
                </ul>
            </div>
        </header>
    );
}

