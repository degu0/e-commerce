import { FaInfo } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { FiPhone, FiUser } from "react-icons/fi";

import { useAuth } from '../../service/auth_context/AuthContext';
import DropUp from '../../forms/dropUp/DropUp';
import { useNavigate } from "react-router-dom";

const BottomMenu: React.FC = () => {

    const { user } = useAuth();
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');
    }
    const handleClickContect = () => {
        navigate('/contact');
    }
    const handleClickAbout = () => {
        navigate('/about');
    }
    const handleClickSignUp = () => {
        navigate('/signUp');
    }

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-gray-300 z-50 lg:hidden">
            <ul className="flex justify-around items-center py-4">
                <li>
                    <button className="flex flex-col items-center  transition-colors duration-300"
                        onClick={handleClickHome}>
                        <IoHomeOutline className="h-6 w-6 mb-1" />
                        <span className="text-sm">Home</span>
                    </button>
                </li>
                <li>
                    <button className="flex flex-col items-center transition-colors duration-300"
                        onClick={handleClickContect}>
                        <FiPhone className="h-6 w-6 mb-1" />
                        <span className="text-sm">Contact</span>
                    </button>
                </li>
                <li>
                    <button className="flex flex-col items-center transition-colors duration-300"
                        onClick={handleClickAbout}>
                        <FaInfo className="h-6 w-6 mb-1" />
                        <span className="text-sm">About</span>
                    </button>
                </li>
                {!user ? (
                    <li className="flex flex-col items-center justify-center">
                        <button className="flex flex-col items-center transition-colors duration-300"
                            onClick={handleClickSignUp}>
                            <FiUser className="h-6 w-6 mb-1" />
                            <span className="text-sm">SignUp</span>
                        </button>
                    </li>
                ) : ("")}
                {user ? (
                    <li className="flex flex-col h-full w-[28px] items-center">
                        <DropUp />
                        <span className='text-sm'>Me</span>
                    </li>
                ) : ("")}
            </ul>
        </div>
    );
};

export default BottomMenu;
