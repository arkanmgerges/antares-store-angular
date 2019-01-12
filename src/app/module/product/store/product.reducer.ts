import { ProductState } from './product.state';
import { ProductAction, ProductActions, ListCompletedAction } from './product.action';
import { Product } from '../model/product.model';

const initialState: ProductState = {
    products: [
        new Product(1234, 'Black floral leopard stripe slim fit T-shirt', 18, 'm', ['details'], ['washable'], ['/assets/img/sample.jpg'])
    ]
}

export function productReducer(state = initialState, action: ProductAction) {
    switch (action.type) {
        case ProductActions.LIST_COMPLETED: {
            return {
                ...state,
                products: (<ListCompletedAction>action).payload
            }
        }
        default:
            return state;
    }
}