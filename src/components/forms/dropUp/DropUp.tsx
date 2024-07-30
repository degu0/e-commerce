
import React, { useState } from 'react';
import { useAuth } from '../../service/auth_context/AuthContext';

import { FiUser } from "react-icons/fi";
import { LuShoppingBag } from 'react-icons/lu';
import { TbLogout2 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import { FaRegHeart } from 'react-icons/fa';

const DropUp: React.FC = () => {
    const { logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClick = (link: string) => {
        navigate(`/${link}`)
    }

    return (
        <div className="relative inline-block text-left h-full w-full">
            <div className='h-full' >
                <button
                    type="button"
                    className={`font-medium rounded-full  focus:outline-none w-full h-full flex items-center justify-center 
                        ${isOpen ? 
                            'bg-red-custom text-white' : 'bg-transparent'
                        }`}
                    onClick={toggleDropdown}
                >
                    <FiUser className="h-6 w-6 mb-1" />
                </button>
            </div>

            {isOpen && (
                <div
                    className="focus:outline-none ring-opacity-5 ring-black ring-1 shadow-lg rounded-md divide-y to-black-opacity from-80% from-black-opacity bg-gradient-to-tl origin-bottom-right mt-2 w-52 bottom-16 right-0 absolute"

                >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <button
                            className="flex items-center gap-2 px-4 py-3 text-base text-white w-full text-left"
                            onClick={() => handleClick("myOrder")}
                        >
                            <LuShoppingBag className='w-5' /> My Order
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-3 text-base text-white w-full text-left"
                            onClick={() => handleClick("wishlist")}
                        >
                            <FaRegHeart className='w-5' /> Wishlist
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-3 text-base text-white w-full text-left"
                            onClick={() => handleClick("cart")}
                        >
                            <GrCart className='w-5' /> Cart
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-3 text-base text-white w-full text-left"
                            onClick={logout}>
                            <TbLogout2 className='w-5' /> Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropUp;
