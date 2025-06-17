import { ENDPOINTS } from "../../config/api/endpoints";
import type { LoginResponse } from "../../interfaces/auth/auth.interface";
import { handleAxiosError } from "../../shared/utils/axiosErrorHandler.util";
import api from "../api/api.service";


export const forgotPasswordService = async (email: string) => {
     try {
        const response = await api.post<LoginResponse>(ENDPOINTS.recoveryCode, {email});
        return response.data;
    } catch (error) {
        const errorMessage = handleAxiosError(error);
        throw errorMessage;
    }
}