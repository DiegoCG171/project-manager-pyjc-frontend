
import { getEndpoint } from "../../shared/utils/getEnpoint.util"
import { API_VERSION } from "./apiVersion"

export const ENDPOINTS = {
    login: getEndpoint('auth/login', API_VERSION.v1),
    recoveryCode: getEndpoint('auth/recovery-code', API_VERSION.v1),
    validateCode: getEndpoint('auth/validate-code', API_VERSION.v1),
    changePassword: getEndpoint('/auth/recovery-password', API_VERSION.v1)
}
