export interface UIInitialState {
    authUI: AuthUI;
}

export interface AuthUI {
    status: AuthStatus;
}

export interface AuthStatus {
    loading: boolean;
    isChecking: boolean;
    isValidUser: boolean;
}


export type RecoveryStep = null | 'pending' | 'forgotPassword' | 'codeSend' | 'changePassword';