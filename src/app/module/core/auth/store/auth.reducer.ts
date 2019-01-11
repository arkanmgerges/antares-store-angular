import { AuthAction, AuthActions } from './auth.action';
import { AuthState } from './auth.state';

const initialState: AuthState = {
    isAuthenticated: false,
}

export function authReducer(state = initialState, action: AuthAction) {
    switch(action.type) {
        case AuthActions.LOGIN: {
            console.log('login');
            return {
                ...state,
                isAuthenticated: true
            }
        }
        case AuthActions.LOGOUT: {
            console.log('logout');
            return {
                ...state,
                isAuthenticated: false
            }
        }
        default: 
        return state;
    }
}