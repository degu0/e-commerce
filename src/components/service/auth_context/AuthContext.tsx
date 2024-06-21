import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
    user: string | null;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(() => {
        return localStorage.getItem('user');
    });

    const login = async (username: string, password: string): Promise<boolean> => {
        try {
            const response = await fetch('http://localhost:3000/users');
            const users = await response.json();
            const authenticatedUser = users.find(
                (u: any) => u.username === username && u.password === password
            );

            if (authenticatedUser) {
                setUser(username);
                localStorage.setItem('user', username);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Failed to fetch users', error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
