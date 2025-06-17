import type { AuthInitialState } from "./interfaces/auth.interface";

export const authInitialState: AuthInitialState = {
  user: {
    _id: "",
    email: "",
    full_name: "",
    rol: [],
    phone: "",
  },
  token: ""
};
