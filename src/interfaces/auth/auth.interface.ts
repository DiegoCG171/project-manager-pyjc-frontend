import type { User } from "../../store/auth/interfaces/auth.interface";

export interface LoginResponse extends User {
    __v:       number;
    createdAt: Date;
    updatedAt: Date;
    token:     string;
}


export interface LoginCredentials {
    email: string;
    password: string;
}

export interface ChangePasswordResponse {
  message: "La contraseña se cambió exitosamente";
}

export interface ChangePasswordPayload {
  newPassword: string;
  confirmPassword: string;
}
