export interface AuthInitialState {
    user: User,
    token: string;
}

interface User {
    id: string;
    email: string;
    full_name: string;
    role: string[];
    phone: string;
}