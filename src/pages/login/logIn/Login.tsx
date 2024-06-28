import React, { useState } from 'react';
import { useAuth } from '../../../components/service/auth_context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Image from '../../../image/Image_login.png';

export function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await login(usernameOrEmail, password);
        if (success) {
            navigate('/');
        } else {
            setError('Invalid username or password');
        }
    };



    return (
        <div className="w-full h-[110vh] sm:h-screen flex font-custom">
            <div className="w-[60%] bg-blue-login hidden sm:flex justify-center items-end">
                <img src={Image} className="h-full" alt="Login" />
            </div>
            <div className="sm:w-3/5 w-full flex flex-col justify-center items-center">
                <form onSubmit={handleLogin} className="h-full w-full flex flex-col items-center justify-center">
                    <div className="flex flex-col items-start mb-8">
                        <h1 className="text-black font-bold  lg:text-4xl text-2xl mb-2">Log in to Ecommerce</h1>
                        <h3 className="text-black md:text-lg text-xl">Enter your details below</h3>
                    </div>
                    <div className="flex flex-col items-center w-full gap-6">
                        <input
                            type="text"
                            className="w-4/5 lg:w-3/5 border-b-2 border-gray-200 p-2 focus:outline-none focus:ring-0"
                            placeholder="Email or Phone Number"
                            value={usernameOrEmail}
                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-4/5 lg:w-3/5 border-b-2 border-gray-200 p-2 focus:outline-none focus:ring-0"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="text-red-500 mt-4">{error}</div>}
                    <div className="w-4/5 flex items-center justify-around mt-8">
                        <button type="submit" className="bg-red-custom w-24 sm:w-40 h-14 border-none rounded text-white text-normal">Log in</button>
                        <a href="#" className="text-red-custom sm:text-sm">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
