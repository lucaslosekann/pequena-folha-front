import axios from "axios";
export const instance = axios.create({
    baseURL: "http://localhost:8000",
});

export type Partner = {
    name: string;
    id: number;
    description: string;
};

export type Agenda = {
    id: number;
    dateTime: string;
    place: string;
    type: string;
    description: string;
    additionalText: string;
    eventsImages: { id: number }[];
};

export async function getPartners() {
    const response = await instance.get<Partner[]>("/partner");
    return response.data;
}

export function getPartnerImageUrl(id: number) {
    return `${instance.defaults.baseURL}/partner/image/${id}`;
}

export async function getAgenda() {
    const response = await instance.get<Agenda[]>("/agenda");
    return response.data;
}

export function getAgendaImageUrl(id: number) {
    return `${instance.defaults.baseURL}/agenda/image/${id}`;
}
