import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = { username: string } | null;
interface AuthContextType {
    user: User;
    login: (username: string) => Promise<void>;
    logout: () => Promise<void>;
    isLoading: boolean; // Added isLoading property
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [user, setUser] = useState<User>(null);
    const [isLoading, setIsLoading] = useState(true); // State untuk loading
    // Menggunakan useEffect untuk memuat data pengguna dari AsyncStorage saat komponen dimuat

    useEffect(() => {
        const loadUser = async () => {
            const stored = await AsyncStorage.getItem('user');
            if (stored) setUser(JSON.parse(stored));
            setIsLoading(false); // Set loading to false after checking
        };
        loadUser();
    }, []);


    const login = async (username: string) => {
        const user = { username };
        await AsyncStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    };

    const logout = async () => {
        await AsyncStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth harus digunakan dalam <AuthProvider>');
 return ctx;
};  


