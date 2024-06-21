// src/components/Login.tsx
import React, { useState } from 'react';
import { useAuth } from '../../../components/service/auth_context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Image from '../../../image/Image_login.png';

export function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await login(username, password);
        console.log(login);
        if (success) {
            navigate('/');
        } else {
            setError('Invalid username or password');
        }
    };

    

    return (
        <div className="w-full h-screen flex font-custom">
            <div className="w-[60%] bg-blue-login flex justify-center items-end">
                <img src={Image} className="h-full" alt="Login" />
            </div>
            <div className="w-[40%]">
                <form onSubmit={handleLogin} className="h-full w-full flex flex-col items-center justify-center">
                    <div className="flex flex-col items-start mb-8">
                        <h1 className="text-black font-bold text-4xl mb-2">Log in to Ecommerce</h1>
                        <h3 className="text-black text-xl">Enter your details below</h3>
                    </div>
                    <div className="flex flex-col items-center w-full gap-6">
                        <input
                            type="text"
                            className="w-[60%] border-b-2 border-gray-200 p-2"
                            placeholder="Email or Phone Number"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-[60%] border-b-2 border-gray-200 p-2"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="text-red-500 mt-4">{error}</div>}
                    <div className="w-[60%] flex items-center justify-between mt-8">
                        <button type="submit" className="bg-red-custom w-36 h-14 border-none rounded text-white text-normal">Log in</button>
                        <a href="#" className="text-red-custom">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
