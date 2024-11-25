import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getFirstErrorMessage(error: any, defaultS: string): string {
    return error?.response?.data?.errors?.[0]?.message || error?.response?.data?.message || error?.response?.data?.error || defaultS;
}
