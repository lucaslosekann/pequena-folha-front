
import logo from '../assets/logo.webp'

export default function Header() {
    return (
        <header className='w-full bg-[#3A2C1F]'>
            <div className='container mx-auto h-[70px] text-white flex justify-between items-center'>
                <div>
                    <img src={logo} alt='logo' className='h-[60px]' />
                </div>
                <div className='flex gap-3'>
                    <a href='/' className='text-lg'>Início</a>
                    <a href='/compostagem' className='text-lg'>Compostagem</a>
                    <a href='/MAV' className='text-lg'>MAV</a>
                    <a href='/parceiros' className='text-lg'>Parceiros</a>
                    <a href='/agenda' className='text-lg'>Agenda</a>
                    <a href='/sobre' className='text-lg'>Sobre</a>
                    <a href='/entrar' className='text-lg'>Entrar</a>
                </div>
            </div>
        </header>
    )
}
