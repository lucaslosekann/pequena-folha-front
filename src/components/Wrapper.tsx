import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { cn } from "../lib/utils";

type WrapperProps = {
    children?: React.ReactNode;
    className?: string;
};
export default function Wrapper({ children, className }: WrapperProps) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Header />
            <div className={cn("container mx-auto flex-1 py-6 text-justify", className)}>{children}</div>
            <Footer />
        </div>
    );
}
