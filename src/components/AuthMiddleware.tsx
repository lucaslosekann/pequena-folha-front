import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export enum AuthType {
    PUBLIC,
    PRIVATE,
    ADMIN,
}

type AuthMiddlewareProps = {
    children: React.ReactNode;
    type: AuthType;
};

export default function AuthMiddleware({ children, type }: AuthMiddlewareProps) {
    const { user, isLoading } = useAuth();
    if (isLoading) return <></>;
    if (type === AuthType.PUBLIC) return <>{children}</>;
    if (type === AuthType.PRIVATE && !user) return <Navigate to="/entrar" />;
    if (type === AuthType.ADMIN && !user?.isAdmin) return <Navigate to="/" />;
    return <>{children}</>;
}
