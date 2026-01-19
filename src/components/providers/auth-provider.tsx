'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '@/lib/axios';

interface User {
    name: string;
    email: string;
    uni_id: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (token: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Initial load
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            fetchUser(storedToken);
        } else {
            setIsLoading(false);
        }
    }, []);

    const fetchUser = async (authToken: string) => {
        try {
            // Ensure header is set for this immediate call even if interceptor handles it
            const { data } = await api.get('/auth/me', {
                headers: { Authorization: `Bearer ${authToken}` }
            });
            setUser(data);
        } catch (error) {
            console.error('Failed to fetch user', error);
            logout();
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (newToken: string) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        await fetchUser(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
