import logo from '../assets/logo.webp'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
export default function Login() {
    return (
        <div className='bg-own-brown h-screen w-full'>
            <div className="mx-auto flex justify-center items-center h-full w-full max-w-[500px] flex-col px-5 sm:gap-32 gap-24">
                <div className='w-full'>
                    <img src={logo} alt="Logo" className='w-full' />
                </div>
                <div className='flex flex-col w-3/4 gap-10 items-center'>
                    <div className="flex flex-col gap-5 w-full items-center">
                        <TextInput label='Email' placeholder='exemplo@email.com' type="text" name="email" containerClassName='w-full' />
                        <TextInput label='Senha' type="password" name="password" containerClassName='w-full' />
                    </div>
                    <div className='w-24'>
                        <Button>
                            Entrar
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
