import { AuthState } from '../module/core/auth/store/auth.state';
import { ProductState } from '../module/product/store/product.state';

export const AUTH_STATE_KEY = 'authState';
export const PRODUCT_STATE_KEY = 'productState';

export interface AppState {
    authState: AuthState,
    productState: ProductState
}

