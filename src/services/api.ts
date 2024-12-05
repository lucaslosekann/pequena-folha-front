import axios from "axios";
export const instance = axios.create({
    baseURL: "http://localhost:8000",
});

export type Partner = {
    name: string;
    id: number;
    description: string;
};

export type Registration = {
    id: number;
    isAdmin: boolean;
    email: string;
    name: string;
    phone: string;
    address: string;
    houseResidents: number;
    addressDetails: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    hasPassword: boolean;
};

export type Agenda = {
    id: number;
    dateTime: string;
    place: string;
    type: string;
    description: string;
    additionalText?: string;
    eventsImages: { id: number }[];
};

export type SubmitedForm = {
    id: number;
    userId: number;
    date: string;
    inorganicVolume: string;
    inorganicWeight: number;
    inorganicDescriptionOther: any;
    organicVolume: string;
    organicWeight: number;
    organicDescriptionOther: any;
    wastes: string;
    wastesVolume: string;
    createdAt: string;
    updatedAt: string;
    inorganicDescription: {
        id: number;
        text: string;
        formId: number;
    }[];
    organicDescription: {
        id: number;
        text: string;
        formId: number;
    }[];
    residueComposition: {
        id: number;
        type: string;
    }[];
    User: {
        name: string;
    };
};

export async function getPartners() {
    const response = await instance.get<Partner[]>("/partner");
    return response.data;
}

export async function deletePartner(id: number) {
    const response = await instance.delete("/partner/" + id);
    return response.data;
}

export async function createPartner(data: FormData) {
    const response = await instance.post("/partner/", data);
    return response.data;
}

export async function updatePartner(data: FormData, id: number) {
    const response = await instance.put(`/partner/${id}`, data);
    return response.data;
}

export async function getUsers() {
    const response = await instance.get<Registration[]>("/user");
    return response.data;
}

export async function createUser(data: { email: string; phone: string; address: string; houseResidents: number; addressDetails: string }) {
    const response = await instance.post("/user", data);
    return response.data;
}

export async function changePassword(
    data: {
        password: string;
    },
    id: number,
) {
    const response = await instance.put(`/user/password/${id}`, data);
    return response.data;
}
export async function activateUser(id: number) {
    const response = await instance.put(`/user/activate/${id}`);
    return response.data;
}
export async function deactivateUser(id: number) {
    const response = await instance.put(`/user/deactivate/${id}`);
    return response.data;
}

export function getPartnerImageUrl(id: number) {
    return `${instance.defaults.baseURL}/partner/image/${id}`;
}

export async function submitForm(data: FormData) {
    await instance.post("/form", data);
}

export async function login(data: { email: string; password: string }) {
    const response = await instance.post("/login", data);
    return response.data;
}

export async function getAgenda() {
    const response = await instance.get<Agenda[]>("/agenda");
    return response.data;
}

export async function createAgenda(data: { dateTime: string; place: string; type: string; description: string }) {
    const response = await instance.post("/agenda", data);
    return response.data;
}

export async function updatePreviousEvent(data: FormData, id: number) {
    const response = await instance.put("/agenda/previous/" + id, data);
    return response.data;
}

export async function deleteAgenda(id: number) {
    const response = await instance.delete(`/agenda/${id}`);
    return response.data;
}
export function getAgendaImageUrl(id: number) {
    return `${instance.defaults.baseURL}/agenda/image/${id}`;
}

export async function getForms() {
    const response = await instance.get<SubmitedForm[]>("/form");
    return response.data;
}

export function getFormImageUrl(id: number) {
    return `${instance.defaults.baseURL}/form/image/${id}`;
}
