import { useState } from "react";
import logo from "../assets/logo.webp";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={`w-full bg-own-brown`}>
            <div className="container relative mx-auto h-[70px] px-4 md:px-0">
                <div className="hidden h-full items-center justify-between text-white sm:flex">
                    <a href="/">
                        <img src={logo} alt="logo" className="h-[60px]" />
                    </a>
                    <nav className="flex gap-3 text-lg">
                        <Routes />
                    </nav>
                </div>

                {/* Hamburger Menu */}
                <div className="flex h-full items-center justify-between sm:hidden">
                    <a href="/">
                        <img src={logo} alt="logo" className="h-[60px]" />
                    </a>
                    <button
                        className="text-white"
                        onClick={() => {
                            setIsOpen((isOpen) => !isOpen);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute right-0 top-0 w-48 rounded-bl-md bg-own-brown p-5 text-white sm:hidden ${isOpen ? "block animate-open-menu" : "hidden animate-close-menu"}`}
                >
                    <button
                        className="absolute left-2 top-2 text-white"
                        onClick={() => {
                            setIsOpen((isOpen) => !isOpen);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <nav className="flex flex-col gap-3 text-right text-lg">
                        <Routes />
                    </nav>
                </div>
            </div>
        </header>
    );
}

const Routes = () => {
    const { isLoggedIn, user } = useAuth();
    return (
        <>
            {user?.isAdmin && <a href="/admin">Admin</a>}
            <a href="/">Início</a>
            <a href="/compostagem">Compostagem</a>
            <a href="/MAV">MAV</a>
            <a href="/parceiros">Parceiros</a>
            <a href="/agenda">Agenda</a>
            <a href="/sobre">Sobre</a>
            {isLoggedIn ? <a href="/formulario">Formulario</a> : <a href="/entrar">Entrar</a>}
        </>
    );
};
