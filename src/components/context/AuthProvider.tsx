import { createContext, PropsWithChildren, useContext, useState } from "react";
import { randomString } from "./utils";
import { useNavigate } from "react-router-dom";

type AuthState = {
    user: User;
    token?: string | null;
    login: (email: string, password: string) => void;
    register?: (email: string, password: string, username: string) => void;
    logout?: () => void;
};

type User = {
    id: number;
    email: string;
    password: string;
    username: string;

} | null;


const AuthContext = createContext<AuthState>({
    user: null,
    token: null,
    login: () => { },
    register: () => { },
    logout: () => { },
});

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider.');
    }
    return context;
}

const IsToken = localStorage.getItem("trendyol_user_token");

export default function AuthProvider({ children }: PropsWithChildren) {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>(null);
    const [token, setToken] = useState<string | null>(
        IsToken ? JSON.parse(IsToken) : null
    );
    

    const login = async (email: string, password: string) => {
        const users = await fetch(`${import.meta.env.VITE_API_URL}/users`).then(res => res.json());
        const exitUsers = users.find((u: any) => u.email === email && u.password === password);

        if (exitUsers) {
            setUser(exitUsers);
            const newToken = randomString(64)
            setToken(newToken);
            localStorage.setItem("trendyol_user_token", JSON.stringify(newToken));
            navigate("/");
        }

    };
    const logout = () => {
        localStorage.removeItem('trendyol_user_token');
        setUser(null);
        setToken(null);
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{
            user,
            token,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )

}