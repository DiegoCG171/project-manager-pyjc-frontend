import { ENDPOINTS } from "../../config/api/endpoints";
import type { LoginCredentials, LoginResponse } from "../../interfaces/auth/auth.interface";
import { handleAxiosError } from "../../shared/utils/axiosErrorHandler.util";
import api from "../api/api.service";


export const loginService = async (loginCredentials: LoginCredentials) => {
     try {
        const response = await api.post<LoginResponse>(ENDPOINTS.login, loginCredentials);
        return response.data;
    } catch (error) {
        const errorMessage = handleAxiosError(error);
        throw errorMessage;
    }
}