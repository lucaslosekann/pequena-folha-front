import Wrapper from "../components/Wrapper";
import Composteira from "../assets/Composteira.svg";
import Button from "../components/Button";
import { CarrosselProximosEventos } from "./Agenda";
import { useEffect } from "react";
import React from "react";
import { getPartnerImageUrl, getPartners, Partner } from "../services/api";

function multiplyArray<T>(arr: T[], times: number) {
    const res: T[] = [];
    for (let i = 0; i < times; i++) {
        res.push(...arr);
    }
    return res;
}

const PartnersImages = () => {
    const [partners, setPartners] = React.useState<Partner[]>([]);

    useEffect(() => {
        getPartners().then((response) => {
            setPartners(response);
        });
    }, []);

    return (
        <div className="grid grid-cols-8 gap-4">
            {multiplyArray(partners, 6).map((partner) => (
                <div key={partner.id} className="flex items-center justify-center">
                    <img src={getPartnerImageUrl(partner.id)} alt={partner.name} className="w-[65%]" />
                </div>
            ))}
        </div>
    );
};

export default function Index() {
    return (
        <Wrapper className="flex flex-col gap-8 px-3 sm:px-0">
            <div className="flex flex-col gap-16">
                <div className="flex">
                    <div className="flex flex-col gap-7">
                        <div className="text-7xl font-medium text-own-green">
                            <h1>
                                PROJETO <br></br> PEQUENA FOLHA
                            </h1>
                        </div>
                        <div className="text-xl">
                            <p>
                                Junte-se ao Projeto Pequena Folha de Compostagem Caseira, uma iniciativa do Laboratório de Educação
                                Ambiental (LEA) da Universidade do Vale do Itajaí (UNIVALI), que oferece a cada pessoa a oportunidade de
                                atuar no enfrentamento de problemas socioambientais através da compostagem doméstica.
                            </p>
                        </div>
                        <div className="text-4xl font-medium text-own-green">
                            <h2>Seja parte dessa ação!</h2>
                        </div>
                        <div className="w-[20%]">
                            <Button>Saiba mais</Button>
                        </div>
                    </div>
                    <img className="float-right" src={Composteira} alt="Imagem Ilustrativa Composteira" />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="text-5xl font-medium text-own-green">
                        <h1>PRÓXIMOS EVENTOS</h1>
                    </div>
                    <div>
                        <CarrosselProximosEventos />
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="text-5xl font-medium text-own-green">
                        <h1>NOSSOS PARCEIROS</h1>
                    </div>
                    <PartnersImages />
                    <div className="w-[20%]">
                        <Button>Conheça mais</Button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
