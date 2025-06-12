export interface Recovery {
  step: RecoveryStep;
  loading: boolean;
  email: string;
  code: string;
}

export type RecoveryStep = null | 'pending' | 'forgotPassword' | 'codeSent' | 'changePassword';
