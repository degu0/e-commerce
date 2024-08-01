import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';

import { useAuth } from '../../service/auth_context/AuthContext';


import { CiSearch } from "react-icons/ci";
import { Dropdown } from "../../forms/dropdown/Dropdown";


export function Header() {

    const { user } = useAuth();


    return (
        <header className="flex flex-wrap items-center justify-around w-full h-1/6 pt-8 pb-4 border-b-2 border-gray-line font-custom">
            <div>
                <Link to="/" className="text-base md:text-xl font-bold">E-Commerce</Link>
            </div>
            <div className="hidden lg:block">
                <ul className="flex list-none flex-row items-center gap-10 font-normal">
                    <li>
                        <Link to="/" className="relative inline-block group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="relative inline-block group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="relative inline-block group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                        </Link>
                    </li>
                    {!user ? (
                        <li>
                            <Link to="/signUp" className="relative inline-block group">
                                SignUp
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </Link>
                        </li>
                    ) : ("")}

                </ul>
            </div>
            <div>
                <ul className="flex list-none flex-row items-center gap-8">
                    <li className="flex justify-center items-center">
                        <input
                            type="text"
                            className="flex-grow p-1 border-none focus:outline-none focus:ring-0 rounded-l-md bg-gray-200
                            xl:px-8"
                            placeholder="What are you looking for?"
                        />
                        <div className="bg-gray-200 p-2 rounded-r-md flex items-center justify-center cursor-pointer">
                            <CiSearch className="w-4 h-4" />
                        </div>
                    </li>
                    {user ? (
                        <ul className="hidden lg:flex lg:flex-row gap-6">
                            <li className="w-8 h-8 flex justify-center items-center">
                                <Link to="/wishlist">
                                    <FaRegHeart className="h-5 w-5" />
                                </Link>
                            </li>
                            <li className="w-8 h-8 flex justify-center items-center">
                                <Link to="/cart" >
                                    <GrCart className="h-5 w-5" />
                                </Link>
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

