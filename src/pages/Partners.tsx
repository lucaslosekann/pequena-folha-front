import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { getPartnerImageUrl, getPartners, Partner } from "../services/api";

export default function Partners() {
    const [partners, setPartners] = React.useState<Partner[]>([]);

    useEffect(() => {
        getPartners().then((response) => {
            setPartners(response);
        });
    }, [partners]);

    return (
        <Wrapper className="px-6 sm:px-0">
            <h2 className="mb-3 text-left text-2xl font-semibold text-own-green sm:text-4xl">PARCEIROS</h2>
            <div className="flex flex-col gap-6">
                {partners.map((partner) => (
                    <div key={partner.id} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                        <img src={getPartnerImageUrl(partner.id)} alt={partner.name} className="aspect-video w-full rounded-lg sm:w-80" />
                        <div>
                            <h2 className="mb-1 font-semibold">{partner.name}</h2>
                            <p>{partner.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
}
