import axios from "axios";
export const instance = axios.create({
    baseURL: "http://localhost:8000",
});

export type Partner = {
    name: string;
    id: number;
    description: string;
};

export async function getPartners() {
    const response = await instance.get<Partner[]>("/partner");
    return response.data;
}

export function getPartnerImageUrl(id: number) {
    return `${instance.defaults.baseURL}/partner/image/${id}`;
}
