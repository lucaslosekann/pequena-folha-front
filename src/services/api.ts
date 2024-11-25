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
