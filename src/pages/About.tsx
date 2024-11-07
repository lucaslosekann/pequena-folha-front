import Wrapper from "../components/Wrapper";

export default function About() {
    return (
        <Wrapper className="flex flex-col gap-8 sm:px-0 px-3">
            <div className="flex flex-col sm:flex-row justify-between sm:text-2xl text-lg sm:gap-0 gap-3">
                <div className="sm:w-[59%] flex flex-col sm:gap-5 gap-2">
                    <h2 className="text-own-green text-left font-semibold sm:text-4xl text-2xl">PROJETO PEQUENA FOLHA</h2>
                    <p>
                        O “Pequena Folha de Compostagem Caseira” é um projeto interdisciplinar que envolve pesquisa, ensino, extensão e gestão, desenvolvido pelo <strong className="font-semibold">Laboratório de Educação Ambiental (LEA) da Escola do Mar, Ciência e Tecnológica (EMCT) da Universidade do Vale do Itajaí (UNIVALI).</strong>
                    </p>
                </div>
                <iframe className="sm:w-[40%] w-full aspect-video" src="https://www.youtube.com/embed/HkdOvsDse3o?si=J9fkPhgursk5loq9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="sm:text-2xl text-lg flex flex-col sm:gap-5 gap-2">
                <h2 className="text-own-green text-left font-semibold sm:text-4xl text-2xl">O QUE É O PEQUENA FOLHA</h2>
                <p>
                    É um convite para que toda cidadã e cidadão possa <strong className="font-semibold">atuar em ações concretas de enfrentamento de problemas socioambientais, como saneamento básico e saúde,
                        através da compostagem caseira.</strong>
                </p>
                <p>
                    O Projeto parte do princípio de que todos somos responsáveis pelo lixo que geramos. Ao separarmos e darmos um destino adequado aos nossos resíduos, estamos refletindo e agindo de encontro à nossa responsabilidade socioambiental.
                </p>
                <p>
                    Cada um pode se tornar um pesquisador-voluntário, coletando dados sobre o uso da sua composteira e sobre os resíduos gerados dentro de suas casas, auxiliando assim em pesquisas acadêmico-científicas e na criação de subsídios para políticas públicas locais em Educação Ambiental, Resíduos Sólidos Urbanos e Saúde da família.
                </p>
            </div>
            <div className="sm:text-2xl text-lg flex flex-col sm:gap-5 gap-2">
                <h2 className="text-own-green text-left font-semibold sm:text-4xl text-2xl">HISTÓRICO DO PROJETO</h2>
                <p>
                    Surgiu em 2014 a partir de um desafio pedagógico aos acadêmicos das disciplinas de “Ética e Educação Ambiental ”do curso de Engenharia Ambiental e Sanitária; de “Educação Ambiental” dos cursos de Oceanografia, Ciências Biológicas e de “Sociedade, Ética e Meio Ambiente” do curso de Engenharia de Produção da UNIVALI para <strong className="font-semibold">realizarem ações concretas de impacto ambiental e social relacionados à problemática de  resíduos sólidos domiciliares.</strong>
                </p>
                <p>
                    A partir de 2015, esta provocação acadêmica uniu-se com outros cursos e grupos sociais tornando-se um subprojeto de extensão, vinculado ao "Projeto Sala Verde", envolvendo 57 famílias de 13 municípios  do litoral norte-catarinense, contemplando diretamente cerca de 300 pessoas.
                </p>
                <p>
                    Em 2018, o projeto articulou de forma interdisciplinar a formação acadêmica e humana de alunos de diferentes cursos atuando com a comunidade do Bairro Jardim Praia Mar em Itapema (SC). O foco também destinou-se a Escolas e a Educação Ambiental Difusa (EAD e Internet). </p>
            </div>
        </Wrapper>
    )
}
