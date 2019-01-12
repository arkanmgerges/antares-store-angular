import { AuthAction, AuthActions, LoginCompletedAction } from './auth.action';
import { AuthState } from './auth.state';

const initialState: AuthState = {
    isAuthenticated: false,
}

export function authReducer(state = initialState, action: AuthAction) {
    switch (action.type) {
        case AuthActions.LOGIN_COMPLETED: {
            return {
                ...state,
                isAuthenticated: (<LoginCompletedAction>action).payload
            }
        }
        case AuthActions.LOGOUT: {
            return {
                ...state,
                isAuthenticated: false
            }
        }
        default:
            return state;
    }
}