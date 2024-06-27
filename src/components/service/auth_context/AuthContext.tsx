import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
    user: string | null;
    login: (usernameOrEmail: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(() => {
        return localStorage.getItem('user');
    });

    const login = async (usernameOrEmail: string, password: string): Promise<boolean> => {
        try {
            const response = await fetch('http://localhost:3000/users');
            const users = await response.json();
            const authenticatedUser = users.find(
                (u: any) => (u.username === usernameOrEmail || u.email === usernameOrEmail) && u.password === password
            );

            if (authenticatedUser) {
                setUser(usernameOrEmail);
                localStorage.setItem('user', usernameOrEmail);
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
