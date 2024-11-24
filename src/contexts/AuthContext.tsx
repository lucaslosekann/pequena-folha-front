import React, { createContext, useEffect, useState } from "react";
import { instance, login as loginRequest } from "../services/api";
import { toast } from "react-toastify";

type User = {
    email: string;
    id: number;
    isAdmin: boolean;
    name: string;
    phone: string;
    address: string;
    houseResidents: number;
    addressDetails: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
};
interface AuthContextType {
    isLoggedIn: boolean;
    login: (data: any) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
    user?: User;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type AuthContextProviderProps = {
    children: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const storagedUser = localStorage.getItem("@user");
        const storagedToken = localStorage.getItem("@token");
        if (storagedUser && storagedToken) {
            setUser(JSON.parse(storagedUser));
            instance.defaults.headers.common["Authorization"] = `Bearer ${storagedToken}`;
        }
        setIsLoading(false);
    }, []);

    const login = async (credentials: any) => {
        const data = await loginRequest(credentials);
        const { token, user } = data;
        setUser(user);
        instance.defaults.headers.Authorization = `Bearer ${token}`;
        localStorage.setItem("@token", token);
        localStorage.setItem("@user", JSON.stringify(user));
    };

    // const signup = async (credentials: any) => {
    // const { data } = await signupRequest(credentials);
    // const { token, ...user } = data;
    // setUser(user);
    // api.defaults.headers.Authorization = `Bearer ${token}`;
    // localStorage.setItem("@token", token);
    // localStorage.setItem("@user", JSON.stringify(user));
    // };

    const logout = () => {
        setUser(undefined);
        localStorage.clear();
        delete instance.defaults.headers.common["Authorization"];
    };

    useEffect(() => {
        const id = instance.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response.status === 401 && error.response.data.message === "Invalid token") {
                    logout();
                    toast.error("Sessão expirada, faça login novamente");
                }
                return Promise.reject(error);
            },
        );
        return () => {
            instance.interceptors.response.eject(id);
        };
    }, []);

    return <AuthContext.Provider value={{ isLoggedIn: !!user, login, logout, isLoading, user }}>{children}</AuthContext.Provider>;
};

const useAuth = () => React.useContext(AuthContext);

export default AuthContextProvider;
export { useAuth };
