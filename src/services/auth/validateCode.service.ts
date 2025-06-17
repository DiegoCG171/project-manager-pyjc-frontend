import { ENDPOINTS } from "../../config/api/endpoints";
import { handleAxiosError } from "../../shared/utils/axiosErrorHandler.util";
import api from "../api/api.service";

interface VerifyCodeData {
    code: string;
}

export const validateCodeService = async (varifyCodeData: VerifyCodeData) => {
     try {
        const response = await api.post(ENDPOINTS.validateCode, varifyCodeData);
        return response.data;
    } catch (error) {
        const errorMessage = handleAxiosError(error);
        throw errorMessage;
    }
}