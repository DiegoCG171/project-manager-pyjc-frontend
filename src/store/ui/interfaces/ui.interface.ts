export interface UIInitialState {
    authUI: AuthUI;
}

export interface AuthUI {
    status: AuthStatus;
    recovery: AuthRecovery
}

export interface AuthStatus {
    loading: boolean;
    isChecking: boolean;
    isValidUser: boolean;
}

export interface AuthRecovery {
    step: RecoveryStep;
    loading: boolean;
    email: string;
    code: string;
}

export type RecoveryStep = null | 'pending' | 'forgotPassword' | 'codeSend' | 'changePassword';