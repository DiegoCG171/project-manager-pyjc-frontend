import type { AuthInitialState } from "./interfaces/auth.interface";

export const authInitialState: AuthInitialState & {
  loading: boolean;
  error: string | null;
} = {
  user: {
    id: "",
    email: "",
    full_name: "",
    role: [],
    phone: "",
  }
};
