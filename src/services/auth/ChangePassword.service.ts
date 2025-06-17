import { ENDPOINTS } from "../../config/api/endpoints";
import type { ChangePasswordPayload, ChangePasswordResponse } from "../../interfaces/auth/auth.interface";
import { handleAxiosError } from "../../shared/utils/axiosErrorHandler.util";
import api from "../api/api.service";

export const changePasswordService = async (payload: ChangePasswordPayload) => {
  try {
    const response = await api.post<ChangePasswordResponse>(ENDPOINTS.changePassword, payload);
    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    throw errorMessage;
  }
};
