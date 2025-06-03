import type { AuthInitialState } from "./interfaces/auth.interface";


export const authInitialState: AuthInitialState = {
    user: {
        id: "",
        email: "",
        full_name: "",
        role: [],
        phone: "",
    },
    token: ""
}