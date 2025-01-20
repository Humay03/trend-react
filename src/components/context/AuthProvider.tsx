import { createContext, PropsWithChildren, useContext, useState } from "react";
import { randomString } from "./utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//@ts-ignore
import bcrypt from 'bcryptjs';


export type GenderType = "male" | "female" | null;

type AuthState = {
    user: User;
    token?: string | null;
    login: (email: string, password: string) => void;
    register: (email: string, password: string, gender: GenderType) => void;
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
        const { data: users, status } = await axios.get(`${import.meta.env.VITE_API_URL}/users`);


        if (status === 200) {
            const existUser = users.find((u: any) => u.email === email);

            if (existUser) {
                const verifyPassword = bcrypt.compareSync(password, existUser.password);

                if (verifyPassword) {
                    setUser(existUser);
                    const newToken = randomString(64);
                    setToken(newToken);
                    localStorage.setItem("trendyol_user_token", JSON.stringify(newToken));
                    navigate("/");
                };

            };
        };



    };
    const register = async (email: string, password: string, gender: GenderType) => {
        const { data: users, status } = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
        if (status === 200) {
            const exisUser = users.some((u: User) => u?.email === email);
            if (exisUser) return "User already exists."


            const hashedPassword = bcrypt.hashSync(password, 10);

            const newId = Math.max(0, ...users.map((u: User) => u?.id)) + 1;

            const result = await axios.post(`${import.meta.env.VITE_API_URL}/users`, {
                id: newId,
                email,
                password: hashedPassword,
                gender,
            });

            if (result.status === 201) {
                navigate("/login");
            }

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
            register,
        }}>
            {children}
        </AuthContext.Provider>
    )

}