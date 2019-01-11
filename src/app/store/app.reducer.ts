import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import * as fromAuthReducer from '../module/core/auth/store/auth.reducer';


export const appReducerMap: ActionReducerMap<AppState> = {
    auth: fromAuthReducer.authReducer
}