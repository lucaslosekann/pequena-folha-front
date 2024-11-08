import React from "react";
import Wrapper from "../components/Wrapper";

type Parner = {
    name: string;
    image: string;
    description: string;
};

export default function Partners() {
    const [partners, setPartners] = React.useState<Parner[]>([
        {
            name: "Partner 1",
            image: "https://static.wixstatic.com/media/cc450e_b63a70c0a22a4bcaa79f1e4a270c8dc7~mv2_d_2048_1365_s_2.jpg/v1/crop/x_0,y_115,w_2048,h_1134/fill/w_242,h_134,al_c,q_80,usm_4.00_1.00_0.00,enc_auto/41843197_10217313786901402_2304521602395.jpg",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi placeat est unde voluptatibus ex, aspernatur repellat tenetur autem fuga corporis non amet voluptatem laboriosam dignissimos vitae dolores esse. Odit.",
        },
        {
            name: "Partner 2",
            image: "https://static.wixstatic.com/media/cc450e_ae70b0d52da84b3c81e4a6fbd38f4d37~mv2.jpeg/v1/crop/x_0,y_101,w_1032,h_571/fill/w_242,h_134,al_c,q_80,usm_4.00_1.00_0.00,enc_auto/WhatsApp%20Image%202018-11-09%20at%2009_10_57_jp.jpeg",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi placeat est unde voluptatibus ex, aspernatur repellat tenetur autem fuga corporis non amet voluptatem laboriosam dignissimos vitae dolores esse. Odit.",
        },
        {
            name: "Partner 3",
            image: "https://static.wixstatic.com/media/cc450e_ba5a1231c03d4477be1a7fd485775b61~mv2.jpeg/v1/crop/x_0,y_125,w_1280,h_709/fill/w_242,h_134,al_c,q_80,usm_4.00_1.00_0.00,enc_auto/WhatsApp%20Image%202018-11-09%20at%2009_11_04_jp.jpeg",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi placeat est unde voluptatibus ex, aspernatur repellat tenetur autem fuga corporis non amet voluptatem laboriosam dignissimos vitae dolores esse. Odit.",
        },
        {
            name: "Partner 1",
            image: "https://static.wixstatic.com/media/cc450e_b63a70c0a22a4bcaa79f1e4a270c8dc7~mv2_d_2048_1365_s_2.jpg/v1/crop/x_0,y_115,w_2048,h_1134/fill/w_242,h_134,al_c,q_80,usm_4.00_1.00_0.00,enc_auto/41843197_10217313786901402_2304521602395.jpg",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi placeat est unde voluptatibus ex, aspernatur repellat tenetur autem fuga corporis non amet voluptatem laboriosam dignissimos vitae dolores esse. Odit.",
        },
        {
            name: "Partner 2",
            image: "https://static.wixstatic.com/media/cc450e_ae70b0d52da84b3c81e4a6fbd38f4d37~mv2.jpeg/v1/crop/x_0,y_101,w_1032,h_571/fill/w_242,h_134,al_c,q_80,usm_4.00_1.00_0.00,enc_auto/WhatsApp%20Image%202018-11-09%20at%2009_10_57_jp.jpeg",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi placeat est unde voluptatibus ex, aspernatur repellat tenetur autem fuga corporis non amet voluptatem laboriosam dignissimos vitae dolores esse. Odit.",
        },
        {
            name: "Partner 3",
            image: "https://static.wixstatic.com/media/cc450e_ba5a1231c03d4477be1a7fd485775b61~mv2.jpeg/v1/crop/x_0,y_125,w_1280,h_709/fill/w_242,h_134,al_c,q_80,usm_4.00_1.00_0.00,enc_auto/WhatsApp%20Image%202018-11-09%20at%2009_11_04_jp.jpeg",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi placeat est unde voluptatibus ex, aspernatur repellat tenetur autem fuga corporis non amet voluptatem laboriosam dignissimos vitae dolores esse. Odit.",
        },
        {
            name: "Partner 1",
            image: "https://static.wixstatic.com/media/cc450e_b63a70c0a22a4bcaa79f1e4a270c8dc7~mv2_d_2048_1365_s_2.jpg/v1/crop/x_0,y_115,w_2048,h_1134/fill/w_242,h_134,al_c,q_80,usm_4.00_1.00_0.00,enc_auto/41843197_10217313786901402_2304521602395.jpg",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi placeat est unde voluptatibus ex, aspernatur repellat tenetur autem fuga corporis non amet voluptatem laboriosam dignissimos vitae dolores esse. Odit.",
        },
        {
            name: "Partner 2",
            image: "https://static.wixstatic.com/media/cc450e_ae70b0d52da84b3c81e4a6fbd38f4d37~mv2.jpeg/v1/crop/x_0,y_101,w_1032,h_571/fill/w_242,h_134,al_c,q_80,usm_4.00_1.00_0.00,enc_auto/WhatsApp%20Image%202018-11-09%20at%2009_10_57_jp.jpeg",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi placeat est unde voluptatibus ex, aspernatur repellat tenetur autem fuga corporis non amet voluptatem laboriosam dignissimos vitae dolores esse. Odit.",
        },
        {
            name: "Partner 3",
            image: "https://static.wixstatic.com/media/cc450e_ba5a1231c03d4477be1a7fd485775b61~mv2.jpeg/v1/crop/x_0,y_125,w_1280,h_709/fill/w_242,h_134,al_c,q_80,usm_4.00_1.00_0.00,enc_auto/WhatsApp%20Image%202018-11-09%20at%2009_11_04_jp.jpeg",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi placeat est unde voluptatibus ex, aspernatur repellat tenetur autem fuga corporis non amet voluptatem laboriosam dignissimos vitae dolores esse. Odit.",
        },
    ]);
    return (
        <Wrapper className="px-6 sm:px-0">
            <h2 className="mb-3 text-left text-2xl font-semibold text-own-green sm:text-4xl">PARCEIROS</h2>
            <div className="flex flex-col gap-6">
                {partners.map((partner) => (
                    <div key={partner.name} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                        <img src={partner.image} alt={partner.name} className="aspect-video rounded-lg" />
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
