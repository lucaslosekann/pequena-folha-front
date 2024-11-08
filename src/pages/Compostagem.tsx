import Wrapper from "../components/Wrapper";

export default function Compostagem() {
    return (
        <Wrapper className="flex flex-col gap-8 sm:px-0 px-3">
            <div className="flex flex-col sm:flex-row justify-between sm:text-2xl text-lg sm:gap-0 gap-3">
                <div className="flex flex-col sm:gap-5 gap-2">
                    <h2 className="text-own-green text-left font-semibold sm:text-4xl text-2xl">O QUE É COMPOSTAGEM?</h2>
                    <p>
                        A compostagem caseira é a <strong className="font-semibold">reciclagem de resíduos orgânicos</strong> e pode ser feita na sua casa 
                        transformando-o <strong className="font-semibold">parte do seu lixo da cozinha em adubo natural</strong>.
                    </p>
                    <p>
                        Nesse processo ocorre a <strong className="font-semibold">decomposição de restos de alimentos</strong>, pela ação de micro-organismos que trabalham num 
                        <strong className="font-semibold">processo de fermentação</strong>, não gerando mal cheiro, quando estão em equilíbrio, 
                        e dessa forma gerando um <strong className="font-semibold">composto riquíssimo em nutrientes para enriquecer o solo</strong>.
                    </p>
                    <p>
                        O projeto trata apenas da compostagem de resíduos orgânicos, ou seja, restos de alimentos. 
                        Podendo ser realizada de diversas maneiras, e com diversos materiais, como por exemplo: no próprio solo, 
                        em baldes ou bombonas plásticas, vasos de cerâmica, contentores apropriados (de madeira ou plastico) 
                        ou até mesmo através de máquinas de processadora de resíduos orgânicos. 
                    </p>
                </div>
            </div>
            <div className="sm:text-2xl text-lg flex flex-col sm:gap-5 gap-2">
                <h2 className="text-own-green text-left font-semibold sm:text-4xl text-2xl">COMO FAZER A COMPOSTEIRA CASEIRA</h2>
                <p>
                    A proposta do projeto é utilizar o modelo de baldes para produzir composto. 
                    Os baldes plásticos (gordura vegetal, açaí, azeitona...) são materiais descartados em grandes volume, 
                    e no projeto são reciclados tornando-se composteiras caseiras. É um material de fácil obtenção, 
                    podendo ser encontrados em padarias e restaurantes por um baixo custo ou até mesmo de forma gratuita. 
                </p>
                <p>
                    Praticando a compostagem em sua casa, além de estar reduzindo o montante de lixo enviado aos aterros sanitários, 
                    você também pode estar fazendo uma relação com a alimentação e a saúde de sua família. Pois todo resíduo que é 
                    gerado é um resultado do que você consome, levando a uma reflexão quanto aos hábitos alimentares e a origem de 
                    de seus alimentos.
                </p>
                <p>
                    <strong className="font-semibold text-2xl">
                        Aprenda a construir sua própria composteira caseira assistindo ao nosso vídeo-tutorial abaixo:
                    </strong>
                </p>
            </div>
            <div className="flex justify-center">
                <iframe width="800" className="aspect-video" src="https://www.youtube.com/embed/8xjViuCM1Ds?si=2f6yFO9qdldWMVA8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </Wrapper>
    )
}
