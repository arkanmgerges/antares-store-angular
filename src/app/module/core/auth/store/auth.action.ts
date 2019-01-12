import { Action } from '@ngrx/store';

export const AuthActions = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    LOGOUT_COMPLETED: 'LOGOUT_COMPLETED',
    LOGIN_COMPLETED: 'LOGIN_COMPLETED',
}

export class LoginCompletedAction implements Action {
    readonly type: string = AuthActions.LOGIN_COMPLETED;

    constructor(public payload: boolean) { }
}

export class LogoutCompletedAction implements Action {
    readonly type: string = AuthActions.LOGOUT_COMPLETED;
}

export class LoginAction implements Action {
    readonly type: string = AuthActions.LOGIN;
}



export class LogoutAction implements Action {
    readonly type: string = AuthActions.LOGOUT;
}

export type AuthAction = LoginCompletedAction | LogoutCompletedAction | LoginAction | LogoutAction;