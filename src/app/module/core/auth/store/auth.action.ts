import { Action } from '@ngrx/store';

export const AuthActions = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    LOGOUT_COMPLETED: 'LOGOUT_COMPLETED',
    LOGIN_COMPLETED: 'LOGIN_COMPLETED',
}

export class Login implements Action {
    readonly type: string = AuthActions.LOGIN;
}

export class LoginCompleted implements Action {
    readonly type: string = AuthActions.LOGIN_COMPLETED;
}

export class Logout implements Action {
    readonly type: string = AuthActions.LOGOUT;
}

export class LogoutCompleted implements Action {
    readonly type: string = AuthActions.LOGOUT_COMPLETED;
}

export type AuthAction = Login | LoginCompleted | Logout | LogoutCompleted;