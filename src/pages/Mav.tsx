import Wrapper from "../components/Wrapper";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function Mav() {
    return (
        <Wrapper className="flex flex-col gap-8 sm:px-0 px-3">
            <div className="flex flex-col sm:flex-row justify-between sm:text-2xl text-lg sm:gap-0 gap-3">
                <div className="flex flex-col sm:gap-5 gap-2">
                    <h2 className="text-own-green text-left font-semibold sm:text-4xl text-2xl">O QUE É O MAV?</h2>
                    <p>
                        É uma metodologia de coleta de dados sistemático e contínuo de parâmetros, indicadores e impactos ambientais, 
                        que visa avaliar o comportamento dos ecossistemas e medidas de gestão ambiental, podendo ser adaptada para 
                        diversos objetivos de pesquisa.
                    </p>
                </div>
            </div>
            <div className="sm:text-2xl text-lg flex flex-col sm:gap-5 gap-2">
                <h2 className="text-own-green text-left font-semibold sm:text-4xl text-2xl">COMO FUNCIONA?</h2>
                <p>
                    No Projeto Pequena Folha, o MAV é realizado por famílias ou pessoas voluntárias que atuam como pesquisadoras, 
                    registrando em um diário (manuscrito ou virtual) dados de peso, volume e descrição dos resíduos gerados em suas 
                    residencias. 
                </p>
            </div>
            <div className="sm:text-2xl text-lg flex flex-col sm:gap-5 gap-2">
                <h2 className="text-own-green text-left font-semibold sm:text-4xl text-2xl">PARTICIPE!</h2>
                <p>
                    Contribua com o projeto de pesquisa do Pequena Folha tornando-se um <strong className="font-semibold">pesquisador voluntário</strong>!
                </p>
                <p>
                    Participando do projeto você ira coletar dados diários, ou conforme o uso da sua composteira sobre peso, 
                    volume e composição dos resíduos sólidos gerados em sua casa. 
                    A coleta de dados é feita através de um formulário online, o qual após preencher o formulário abaixo 
                    e assinar o termo de participação, você receberá por e-mail. 
                </p>
            </div>
            <div className="flex justify-center">
                <hr className="h-[5px] bg-own-green w-[90%] mx-auto"/>
            </div>
            <form className="text-left flex flex-col gap-10">
                <div className="flex flex-row gap-12">
                    {/* flex-1 -> ocupa todo o espaço que consegue */}  
                    <div className="flex-1">
                        <TextInput required label='Nome Completo' placeholder='João Silva' type="text" 
                        name="nome" containerClassName='w-full' labelClassName="text-black" inputClassName="border-black text-black" />
                        <TextInput required label='Enderço' placeholder='seu endereço' type="text" 
                        name="endereco" containerClassName='w-full' labelClassName="text-black" inputClassName="border-black text-black" />
                        <TextInput required label='Bairro - CEP/Cidade(UF)' placeholder='Fazenda - 88302-080/Itajaí SC' type="text" 
                        name="complementoendereco" containerClassName='w-full' labelClassName="text-black" inputClassName="border-black text-black" />
                    </div>
                    <div className="flex-1">
                        <TextInput required label='Telefone com DDD' placeholder='47 999999999' type="text" 
                        name="telefoneddd" containerClassName='w-full' labelClassName="text-black" inputClassName="border-black text-black" />
                        <TextInput required label='Email' placeholder='seuemail@gmail.com' type="text" 
                        name="email" containerClassName='w-full' labelClassName="text-black" inputClassName="border-black text-black" />
                        {/* inputMode="numeric" = teclado numerico no celular
                            pattern="[0-9]* regex que so aceita numeros de 0 até 9"
                        */}
                        <TextInput required label='Número de residentes na casa' placeholder='5' type="text" inputMode="numeric" pattern="[0-9]*"
                        name="nresidentes" containerClassName='w-full' labelClassName="text-black" inputClassName="border-black text-black" />
                    </div>
                </div>
                {/* poderia colocar uma div por fora com justifyp-center, mas da pra usar mx-auto também */}
                <div className="w-32 mx-auto">
                    <Button>Enviar</Button>
                </div>
            </form>
        </Wrapper>
    )
}
