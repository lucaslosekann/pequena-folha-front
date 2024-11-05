
import { useState } from 'react'
import logo from '../assets/logo.webp'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={`w-full bg-own-brown`}>
            <div className='container mx-auto h-[70px] relative px-4 md:px-0'>
                <div className='text-white justify-between items-center h-full sm:flex hidden'>
                    <a href='/'>
                        <img src={logo} alt='logo' className='h-[60px]' />
                    </a>
                    <nav className='flex gap-3 text-lg'>
                        <a href='/'>Início</a>
                        <a href='/compostagem'>Compostagem</a>
                        <a href='/MAV'>MAV</a>
                        <a href='/parceiros'>Parceiros</a>
                        <a href='/agenda'>Agenda</a>
                        <a href='/sobre'>Sobre</a>
                        <a href='/entrar'>Entrar</a>
                    </nav>
                </div>

                {/* Hamburger Menu */}
                <div className='sm:hidden flex justify-between items-center h-full'>
                    <a href='/'>
                        <img src={logo} alt='logo' className='h-[60px]' />
                    </a>
                    <button className='text-white' onClick={() => {
                        setIsOpen(isOpen => !isOpen)
                    }}>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`sm:hidden absolute top-0 right-0  bg-own-brown p-5 w-48 text-white rounded-bl-md ${isOpen ? "block animate-open-menu" : "hidden animate-close-menu"}`}>
                    <button className='text-white absolute top-2 left-2' onClick={() => {
                        setIsOpen(isOpen => !isOpen)
                    }}>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </button>
                    <nav className='flex flex-col gap-3 text-lg text-right'>
                        <a href='/'>Início</a>
                        <a href='/compostagem'>Compostagem</a>
                        <a href='/MAV'>MAV</a>
                        <a href='/parceiros'>Parceiros</a>
                        <a href='/agenda'>Agenda</a>
                        <a href='/sobre'>Sobre</a>
                        <a href='/entrar'>Entrar</a>
                    </nav>

                </div>

            </div>
        </header>
    )
}
