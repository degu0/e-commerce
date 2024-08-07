
import { useState } from 'react';
import { useAuth } from '../../service/auth_context/AuthContext';

import { FiUser } from "react-icons/fi";
import { LuShoppingBag } from 'react-icons/lu';
import { TbLogout2 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export function Dropdown() {
    const { logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClick = () => {
        navigate('/myOrder');
    }

    return (
        <div className="relative inline-block text-left h-full w-full">
            <div className='h-full flex items-end' >
                <button
                    type="button"
                    className={`font-medium rounded-full  focus:outline-none w-full h-full flex items-center justify-center 
                        ${isOpen ? 
                            'bg-red-custom text-white' : 'bg-transparent'
                        }`}
                    onClick={toggleDropdown}
                >
                    <FiUser className="h-5 w-5" />
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute right-0 w-52 mt-2 origin-top-right bg-gradient-to-tl from-black-opacity 
                from-80% to-black-opacity divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <button
                            className="flex items-center gap-2 px-4 py-3 text-sm text-white w-full text-left"
                            onClick={handleClick}
                        >
                            <LuShoppingBag className='w-5' /> My Order
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-3 text-sm text-white w-full text-left"
                            onClick={logout}>
                            <TbLogout2 className='w-5' /> Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
