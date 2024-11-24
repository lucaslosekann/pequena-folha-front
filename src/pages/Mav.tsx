import Wrapper from "../components/Wrapper";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { createUser } from "../services/api";
import { toast } from "react-toastify";

export default function Mav() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        await createUser({
            ...data,
            houseResidents: Number(data.houseResidents),
        } as any)
            .then(() => {
                toast.success("Usuário criado com sucesso!");
            })
            .catch((error) => {
                toast.error(error.response.data.message || "Erro ao criar usuário");
            });
    };

    return (
        <Wrapper className="flex flex-col gap-8 px-3 sm:px-0">
            <div className="flex flex-col justify-between gap-3 text-lg sm:flex-row sm:gap-0 sm:text-2xl">
                <div className="flex flex-col gap-2 sm:gap-5">
                    <h2 className="text-left text-2xl font-semibold text-own-green sm:text-4xl">O QUE É O MAV?</h2>
                    <p>
                        É uma metodologia de coleta de dados sistemático e contínuo de parâmetros, indicadores e impactos ambientais, que
                        visa avaliar o comportamento dos ecossistemas e medidas de gestão ambiental, podendo ser adaptada para diversos
                        objetivos de pesquisa.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-lg sm:gap-5 sm:text-2xl">
                <h2 className="text-left text-2xl font-semibold text-own-green sm:text-4xl">COMO FUNCIONA?</h2>
                <p>
                    No Projeto Pequena Folha, o MAV é realizado por famílias ou pessoas voluntárias que atuam como pesquisadoras,
                    registrando em um diário (manuscrito ou virtual) dados de peso, volume e descrição dos resíduos gerados em suas
                    residencias.
                </p>
            </div>
            <div className="flex flex-col gap-2 text-lg sm:gap-5 sm:text-2xl">
                <h2 className="text-left text-2xl font-semibold text-own-green sm:text-4xl">PARTICIPE!</h2>
                <p>
                    Contribua com o projeto de pesquisa do Pequena Folha tornando-se um{" "}
                    <strong className="font-semibold">pesquisador voluntário</strong>!
                </p>
                <p>
                    Participando do projeto você ira coletar dados diários, ou conforme o uso da sua composteira sobre peso, volume e
                    composição dos resíduos sólidos gerados em sua casa. A coleta de dados é feita através de um formulário online, o qual
                    após preencher o formulário abaixo e assinar o termo de participação, você receberá por e-mail.
                </p>
            </div>
            <div className="flex justify-center">
                <hr className="mx-auto h-[5px] w-[90%] bg-own-green" />
            </div>
            <form className="flex flex-col gap-10 text-left" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
                    {/* flex-1 -> ocupa todo o espaço que consegue */}
                    <div className="flex flex-1 flex-col gap-4 sm:gap-0">
                        <TextInput
                            required
                            label="Nome Completo"
                            placeholder="João Silva"
                            type="text"
                            name="name"
                            containerClassName="w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />
                        <TextInput
                            required
                            label="Enderço"
                            placeholder="Seu endereço"
                            type="text"
                            name="address"
                            containerClassName="w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />
                        <TextInput
                            required
                            label="Bairro - CEP/Cidade(UF)"
                            placeholder="Fazenda - 88302-080/Itajaí SC"
                            type="text"
                            name="addressDetails"
                            containerClassName="w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 sm:gap-0">
                        <TextInput
                            required
                            label="Telefone com DDD"
                            placeholder="(47) 99999-9999"
                            type="text"
                            name="phone"
                            containerClassName="w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                            mask={(e) => {
                                e.currentTarget.maxLength = 15;
                                let val = e.currentTarget.value;

                                val = val.replace(/\D/g, "");

                                if (val.length > 10) {
                                    val = val.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
                                } else if (val.length > 7) {
                                    val = val.replace(/^(\d{2})(\d{4,5})/, "($1) $2-");
                                } else if (val.length > 2) {
                                    val = val.replace(/^(\d{2})(\d+)/, "($1) $2");
                                } else if (val.length > 0) {
                                    val = val.replace(/^(\d{1,2})/, "($1");
                                }

                                e.currentTarget.value = val;
                                return e;
                            }}
                        />
                        <TextInput
                            required
                            label="Email"
                            placeholder="seuemail@gmail.com"
                            type="text"
                            name="email"
                            containerClassName="w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />
                        {/* inputMode="numeric" = teclado numerico no celular
                            pattern="[0-9]* regex que so aceita numeros de 0 até 9"
                        */}
                        <TextInput
                            required
                            label="Número de residentes na casa"
                            placeholder="5"
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            name="houseResidents"
                            containerClassName="w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />
                    </div>
                </div>
                {/* poderia colocar uma div por fora com justifyp-center, mas da pra usar mx-auto também */}
                <div className="mx-auto w-32">
                    <Button>Enviar</Button>
                </div>
            </form>
        </Wrapper>
    );
}
