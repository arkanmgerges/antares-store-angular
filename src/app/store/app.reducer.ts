import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import * as fromAuthReducer from '../module/core/auth/store/auth.reducer';
import * as fromProductReducer from '../module/product/store/product.reducer';

export const AUTH_STATE_KEY = 'authState';
export const PRODUCT_STATE_KEY = 'productState';

export const appReducerMap: ActionReducerMap<AppState> = {
    authState: fromAuthReducer.authReducer,
    productState: fromProductReducer.productReducer
};