import logo from "../assets/logo.webp";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
export default function Login() {
    return (
        <div className="h-screen w-full bg-own-brown">
            <div className="mx-auto flex h-full w-full max-w-[500px] flex-col items-center justify-center gap-24 px-5 sm:gap-32">
                <div className="w-full">
                    <img src={logo} alt="Logo" className="w-full" />
                </div>
                <div className="flex w-3/4 flex-col items-center gap-10">
                    <div className="flex w-full flex-col items-center gap-5">
                        <TextInput label="Email" placeholder="exemplo@email.com" type="text" name="email" containerClassName="w-full" />
                        <TextInput label="Senha" type="password" name="password" containerClassName="w-full" />
                    </div>
                    <div className="w-24">
                        <Button>Entrar</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
