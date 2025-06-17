export interface AuthInitialState {
    user: User,
    token: string;
}

export interface User {
    _id:       string;
    email:     string;
    full_name: string;
    rol:       string[];
    phone:     string;
}