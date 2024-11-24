import logo from "../assets/logo.webp";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        await login(data)
            .then(() => {
                toast.success("Login efetuado com sucesso");
                navigate("/");
            })
            .catch((e) => {
                console.error(e);
                const message = e.response?.data?.message || "Erro ao efetuar login";
                toast.error(message);
            });
    };

    return (
        <div className="h-screen w-full bg-own-brown">
            <div className="mx-auto flex h-full w-full max-w-[500px] flex-col items-center justify-center gap-24 px-5 sm:gap-32">
                <div className="w-full">
                    <img src={logo} alt="Logo" className="w-full" />
                </div>
                <form className="flex w-3/4 flex-col items-center gap-10" onSubmit={handleSubmit}>
                    <div className="flex w-full flex-col items-center gap-5">
                        <TextInput label="Email" placeholder="exemplo@email.com" type="text" name="email" containerClassName="w-full" />
                        <TextInput label="Senha" type="password" name="password" containerClassName="w-full" />
                    </div>
                    <div className="w-24">
                        <Button>Entrar</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
