import { API_VERSION } from "../../config/api/apiVersion";


const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/";
const DEFAULT_API_VERSION = API_VERSION.v1;

export function getEndpoint(path: string, apiVersion?: string): string {
    if(apiVersion) {
        return `${BASE_URL}/${apiVersion}/${path}`
    } else return `${BASE_URL}/${DEFAULT_API_VERSION}/${path}`
}